"use client";

import { useState } from "react";
import { musicPlaylists } from "@/lib/data";

export default function MusicPage() {
  const [activePlaylist, setActivePlaylist] = useState<string | null>(null);

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h1 className="text-2xl font-bold text-bunny-pink-dark">🎧 Nhạc Cho Em</h1>
        <p className="text-sm text-gray-400">Nghe nhạc để thư giãn nhé baby 🐰</p>
      </div>

      <div className="space-y-4">
        {musicPlaylists.map((playlist) => (
          <div key={playlist.id} className="card-cute overflow-hidden">
            <button
              onClick={() =>
                setActivePlaylist(activePlaylist === playlist.id ? null : playlist.id)
              }
              className={`w-full text-left p-4 rounded-cute bg-gradient-to-r ${playlist.color} transition-all`}
            >
              <h3 className="text-lg font-bold text-gray-700">{playlist.title}</h3>
              <p className="text-sm text-gray-500">{playlist.description}</p>
            </button>

            {activePlaylist === playlist.id && (
              <div className="p-3">
                <div className="aspect-video rounded-cute overflow-hidden bg-gray-100">
                  <iframe
                    width="100%"
                    height="100%"
                    src={`https://www.youtube.com/embed/${playlist.videoId}?list=PLxxx`}
                    title={playlist.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="rounded-cute"
                  />
                </div>
                <p className="text-xs text-center text-gray-400 mt-2">
                  💡 Thay videoId bằng playlist thật của bạn
                </p>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Suggestion */}
      <div className="card-cute text-center bg-bunny-yellow/50">
        <div className="text-3xl mb-2">🎵</div>
        <p className="text-sm text-gray-600">
          Em muốn nghe bài gì? Nhắn cho anh, anh thêm vào nhé! 💕
        </p>
      </div>
    </div>
  );
}
