"use client";

import { useState } from "react";
import { loveMessages, getRandomMessage } from "@/lib/data";

export default function MessagesPage() {
  const [featured, setFeatured] = useState(getRandomMessage());

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h1 className="text-2xl font-bold text-bunny-pink-dark">💕 Lời Yêu Thương</h1>
        <p className="text-sm text-gray-400">Từ người luôn yêu em</p>
      </div>

      {/* Featured message */}
      <div
        className="card-cute text-center cursor-pointer bg-gradient-to-br from-bunny-pink-light to-bunny-cream"
        onClick={() => setFeatured(getRandomMessage())}
      >
        <div className="text-4xl mb-3">💌</div>
        <p className="text-lg font-bold text-gray-700">{featured}</p>
        <p className="text-xs text-bunny-pink mt-3">Chạm để đọc tin nhắn mới 🐰</p>
      </div>

      {/* All messages */}
      <div className="space-y-3">
        {loveMessages.map((msg, i) => (
          <div key={i} className="card-cute flex items-start gap-3">
            <span className="text-2xl">
              {["💕", "🐰", "💖", "✨", "🌸"][i % 5]}
            </span>
            <p className="text-sm text-gray-600 leading-relaxed">{msg}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
