"use client";

import { useState, useEffect } from "react";
import { moods } from "@/lib/data";
import { supabase } from "@/lib/supabase";

interface JournalEntry {
  id: string;
  mood: string;
  note: string;
  created_at: string;
}

export default function MoodPage() {
  const [selectedMood, setSelectedMood] = useState<string | null>(null);
  const [journal, setJournal] = useState("");
  const [saved, setSaved] = useState(false);
  const [entries, setEntries] = useState<JournalEntry[]>([]);
  const [editingEntry, setEditingEntry] = useState<JournalEntry | null>(null);
  const [editNote, setEditNote] = useState("");
  const [editMood, setEditMood] = useState("");

  // Load entries from DB
  useEffect(() => {
    supabase
      .from("journals")
      .select("*")
      .order("created_at", { ascending: false })
      .then(({ data }) => {
        if (data) setEntries(data as JournalEntry[]);
      });
  }, []);

  const handleSave = async () => {
    if (!selectedMood) return;

    const entry = {
      mood: selectedMood,
      note: journal,
      created_at: new Date().toISOString(),
    };

    const { data } = await supabase.from("journals").insert(entry).select().single();

    if (data) {
      setEntries((prev) => [data as JournalEntry, ...prev]);
    }

    setSaved(true);
    setTimeout(() => {
      setSaved(false);
      setSelectedMood(null);
      setJournal("");
    }, 2000);
  };

  const handleDelete = async (entry: JournalEntry) => {
    if (!confirm("Xóa ghi chú này không em? 🐰")) return;
    await supabase.from("journals").delete().eq("id", entry.id);
    setEntries((prev) => prev.filter((e) => e.id !== entry.id));
  };

  const handleEdit = async () => {
    if (!editingEntry) return;
    await supabase
      .from("journals")
      .update({ mood: editMood, note: editNote })
      .eq("id", editingEntry.id);
    setEntries((prev) =>
      prev.map((e) =>
        e.id === editingEntry.id ? { ...e, mood: editMood, note: editNote } : e
      )
    );
    setEditingEntry(null);
  };

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h1 className="text-2xl font-bold text-bunny-pink-dark">💭 Hôm Nay Em Thế Nào?</h1>
        <p className="text-sm text-gray-400">Kể cho anh nghe nhé</p>
      </div>

      {/* Mood selector */}
      <div className="card-cute">
        <p className="text-sm font-semibold text-gray-500 mb-3">Chọn cảm xúc của em:</p>
        <div className="grid grid-cols-4 gap-3">
          {moods.map((mood) => (
            <button
              key={mood.label}
              onClick={() => setSelectedMood(mood.emoji)}
              className={`${mood.color} rounded-cute p-3 text-center transition-all ${
                selectedMood === mood.emoji ? "ring-2 ring-bunny-pink scale-110" : ""
              }`}
            >
              <div className="text-2xl">{mood.emoji}</div>
              <div className="text-[10px] font-semibold text-gray-500 mt-1">{mood.label}</div>
            </button>
          ))}
        </div>
      </div>

      {/* Journal input */}
      <div className="card-cute">
        <p className="text-sm font-semibold text-gray-500 mb-3">✍️ Em muốn kể gì không?</p>
        <textarea
          value={journal}
          onChange={(e) => setJournal(e.target.value)}
          placeholder="Hôm nay em..."
          rows={4}
          className="w-full px-4 py-3 rounded-cute bg-bunny-pink-light/30 border border-bunny-pink-light text-sm focus:outline-none focus:ring-2 focus:ring-bunny-pink resize-none"
        />
        <button
          onClick={handleSave}
          disabled={!selectedMood}
          className="mt-3 w-full py-3 bg-bunny-pink text-white rounded-full font-semibold hover:bg-bunny-pink-dark transition-colors disabled:opacity-50"
        >
          {saved ? "Đã lưu rồi nhé! 💕🐰" : "Lưu lại 💾"}
        </button>
      </div>

      {/* Recent entries */}
      {entries.length > 0 && (
        <div className="space-y-3">
          <p className="text-sm font-semibold text-gray-500">📖 Nhật ký gần đây:</p>
          {entries.map((entry) => (
            <div key={entry.id} className="card-cute">
              <div className="flex items-start gap-3">
                <span className="text-2xl">{entry.mood}</span>
                <div className="flex-1 min-w-0">
                  <p className="text-xs text-gray-400">
                    {new Date(entry.created_at).toLocaleDateString("vi-VN")}
                  </p>
                  <p className="text-sm text-gray-600">{entry.note || "Không ghi chú"}</p>
                </div>
              </div>
              <div className="flex gap-2 mt-2 justify-end">
                <button
                  onClick={() => {
                    setEditingEntry(entry);
                    setEditNote(entry.note);
                    setEditMood(entry.mood);
                  }}
                  className="px-3 py-1 bg-bunny-yellow text-yellow-700 rounded-full text-xs font-semibold"
                >
                  ✏️ Sửa
                </button>
                <button
                  onClick={() => handleDelete(entry)}
                  className="px-3 py-1 bg-red-50 text-red-500 rounded-full text-xs font-semibold"
                >
                  🗑️ Xóa
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Edit modal */}
      {editingEntry && (
        <div
          className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4"
          onClick={() => setEditingEntry(null)}
        >
          <div className="card-cute max-w-sm w-full bg-white" onClick={(e) => e.stopPropagation()}>
            <p className="text-sm font-semibold text-gray-500 mb-3">✏️ Sửa nhật ký</p>

            {/* Mood selector */}
            <div className="grid grid-cols-4 gap-2 mb-3">
              {moods.map((mood) => (
                <button
                  key={mood.label}
                  onClick={() => setEditMood(mood.emoji)}
                  className={`${mood.color} rounded-cute p-2 text-center transition-all ${
                    editMood === mood.emoji ? "ring-2 ring-bunny-pink scale-110" : ""
                  }`}
                >
                  <div className="text-lg">{mood.emoji}</div>
                </button>
              ))}
            </div>

            <textarea
              value={editNote}
              onChange={(e) => setEditNote(e.target.value)}
              rows={3}
              className="w-full px-4 py-2 rounded-cute bg-bunny-pink-light/30 border border-bunny-pink-light text-sm focus:outline-none focus:ring-2 focus:ring-bunny-pink resize-none"
              autoFocus
            />
            <div className="flex gap-2 mt-3">
              <button
                onClick={handleEdit}
                className="flex-1 py-2 bg-bunny-pink text-white rounded-full font-semibold text-sm"
              >
                Lưu 💕
              </button>
              <button
                onClick={() => setEditingEntry(null)}
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
