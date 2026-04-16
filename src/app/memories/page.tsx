"use client";

import { useState, useRef, useEffect } from "react";
import { supabase } from "@/lib/supabase";

interface Photo {
  id: string;
  url: string;
  caption: string;
  created_at: string;
}

export default function MemoriesPage() {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);
  const [uploading, setUploading] = useState(false);
  const [caption, setCaption] = useState("");
  const [editingPhoto, setEditingPhoto] = useState<Photo | null>(null);
  const [editCaption, setEditCaption] = useState("");
  const [deleting, setDeleting] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading(true);
    try {
      const fileName = `${Date.now()}-${file.name}`;
      const { error } = await supabase.storage
        .from("photos")
        .upload(fileName, file);

      if (error) throw error;

      const { data: urlData } = supabase.storage
        .from("photos")
        .getPublicUrl(fileName);

      const newPhoto: Photo = {
        id: fileName,
        url: urlData.publicUrl,
        caption: caption || "Kỷ niệm đẹp 💕",
        created_at: new Date().toISOString(),
      };

      // Save to database
      await supabase.from("photos").insert(newPhoto);
      setPhotos((prev) => [newPhoto, ...prev]);
      setCaption("");
    } catch (err) {
      console.error("Upload failed:", err);
    } finally {
      setUploading(false);
    }
  };

  // Load photos on mount
  useEffect(() => {
    supabase
      .from("photos")
      .select("*")
      .order("created_at", { ascending: false })
      .then(({ data }) => {
        if (data) setPhotos(data as Photo[]);
      });
  }, []);

  const handleDelete = async (photo: Photo) => {
    if (!confirm("Xóa ảnh này không em? 🐰")) return;
    setDeleting(photo.id);
    try {
      await supabase.storage.from("photos").remove([photo.id]);
      await supabase.from("photos").delete().eq("id", photo.id);
      setPhotos((prev) => prev.filter((p) => p.id !== photo.id));
      if (selectedPhoto?.id === photo.id) setSelectedPhoto(null);
    } catch (err) {
      console.error("Delete failed:", err);
    } finally {
      setDeleting(null);
    }
  };

  const handleEditCaption = async () => {
    if (!editingPhoto) return;
    await supabase
      .from("photos")
      .update({ caption: editCaption })
      .eq("id", editingPhoto.id);
    setPhotos((prev) =>
      prev.map((p) => (p.id === editingPhoto.id ? { ...p, caption: editCaption } : p))
    );
    if (selectedPhoto?.id === editingPhoto.id) {
      setSelectedPhoto({ ...selectedPhoto, caption: editCaption });
    }
    setEditingPhoto(null);
    setEditCaption("");
  };

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h1 className="text-2xl font-bold text-bunny-pink-dark">📸 Kỷ Niệm Của Chúng Mình</h1>
        <p className="text-sm text-gray-400">Mỗi bức ảnh là một câu chuyện</p>
      </div>

      {/* Upload section */}
      <div className="card-cute text-center">
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          onChange={handleUpload}
          className="hidden"
        />
        <input
          type="text"
          value={caption}
          onChange={(e) => setCaption(e.target.value)}
          placeholder="Ghi chú cho ảnh... 💕"
          className="w-full mb-3 px-4 py-2 rounded-full bg-bunny-pink-light/50 border border-bunny-pink-light text-sm focus:outline-none focus:ring-2 focus:ring-bunny-pink"
        />
        <button
          onClick={() => fileInputRef.current?.click()}
          disabled={uploading}
          className="px-6 py-3 bg-bunny-pink text-white rounded-full font-semibold hover:bg-bunny-pink-dark transition-colors disabled:opacity-50"
        >
          {uploading ? "Đang tải lên... 🐰" : "📷 Tải ảnh lên"}
        </button>
      </div>

      {/* Photo grid */}
      {photos.length > 0 ? (
        <div className="grid grid-cols-2 gap-3">
          {photos.map((photo) => (
            <div
              key={photo.id}
              className="relative rounded-cute overflow-hidden shadow-cute cursor-pointer group aspect-square"
              onClick={() => setSelectedPhoto(photo)}
            >
              <img
                src={photo.url}
                alt={photo.caption}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent p-2">
                <p className="text-white text-xs truncate">{photo.caption}</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="card-cute text-center py-10">
          <div className="text-5xl mb-3">📷</div>
          <p className="text-gray-400">Chưa có ảnh nào</p>
          <p className="text-sm text-bunny-pink">Hãy tải lên kỷ niệm đầu tiên nhé! 🐰</p>
        </div>
      )}

      {/* Lightbox */}
      {selectedPhoto && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedPhoto(null)}
        >
          <div className="max-w-lg w-full" onClick={(e) => e.stopPropagation()}>
            <img
              src={selectedPhoto.url}
              alt={selectedPhoto.caption}
              className="w-full rounded-cute"
            />
            <p className="text-white text-center mt-3 font-semibold">{selectedPhoto.caption}</p>
            <div className="flex gap-2 justify-center mt-3">
              <button
                onClick={() => {
                  setEditingPhoto(selectedPhoto);
                  setEditCaption(selectedPhoto.caption);
                }}
                className="px-5 py-2 bg-bunny-yellow text-yellow-700 rounded-full text-sm font-semibold"
              >
                ✏️ Sửa
              </button>
              <button
                onClick={() => handleDelete(selectedPhoto)}
                disabled={deleting === selectedPhoto.id}
                className="px-5 py-2 bg-red-100 text-red-600 rounded-full text-sm font-semibold disabled:opacity-50"
              >
                {deleting === selectedPhoto.id ? "Đang xóa..." : "🗑️ Xóa"}
              </button>
              <button
                onClick={() => setSelectedPhoto(null)}
                className="px-5 py-2 bg-bunny-pink text-white rounded-full text-sm font-semibold"
              >
                Đóng ✕
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Edit caption modal */}
      {editingPhoto && (
        <div
          className="fixed inset-0 bg-black/60 z-[60] flex items-center justify-center p-4"
          onClick={() => setEditingPhoto(null)}
        >
          <div
            className="card-cute max-w-sm w-full bg-white"
            onClick={(e) => e.stopPropagation()}
          >
            <p className="text-sm font-semibold text-gray-500 mb-3">✏️ Sửa ghi chú ảnh</p>
            <input
              type="text"
              value={editCaption}
              onChange={(e) => setEditCaption(e.target.value)}
              className="w-full px-4 py-2 rounded-full bg-bunny-pink-light/50 border border-bunny-pink-light text-sm focus:outline-none focus:ring-2 focus:ring-bunny-pink"
              autoFocus
            />
            <div className="flex gap-2 mt-3">
              <button
                onClick={handleEditCaption}
                className="flex-1 py-2 bg-bunny-pink text-white rounded-full font-semibold text-sm"
              >
                Lưu 💕
              </button>
              <button
                onClick={() => setEditingPhoto(null)}
                className="flex-1 py-2 bg-gray-100 text-gray-500 rounded-full font-semibold text-sm"
              >
                Hủy
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
