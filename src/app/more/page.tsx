"use client";

import Link from "next/link";

const moreItems = [
  { href: "/stress", emoji: "🌸", label: "Thư giãn", desc: "Bài tập thở & vuốt ve thỏ", color: "bg-pink-50" },
  { href: "/tokyo", emoji: "🗼", label: "Tokyo Guide", desc: "Ăn gì, đi đâu ở Tokyo", color: "bg-purple-50" },
  { href: "/tips", emoji: "💡", label: "Tips hữu ích", desc: "Sống ở Nhật an toàn & vui", color: "bg-yellow-50" },
  { href: "/messages", emoji: "💕", label: "Lời yêu thương", desc: "Tin nhắn từ người yêu em", color: "bg-red-50" },
];

export default function MorePage() {
  return (
    <div className="space-y-6">
      <div className="text-center">
        <div className="text-5xl mb-2">🐰</div>
        <h1 className="text-2xl font-bold text-bunny-pink-dark">Thêm Cho Em</h1>
        <p className="text-sm text-gray-400">Tất cả những gì em cần ở đây</p>
      </div>

      <div className="space-y-3">
        {moreItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`card-cute flex items-center gap-4 ${item.color}`}
          >
            <span className="text-3xl">{item.emoji}</span>
            <div>
              <h3 className="font-bold text-gray-700">{item.label}</h3>
              <p className="text-xs text-gray-400">{item.desc}</p>
            </div>
          </Link>
        ))}
      </div>

      <div className="card-cute text-center bg-gradient-to-r from-bunny-pink-light to-bunny-cream">
        <p className="text-sm text-gray-500">Made with 💕 by your boyfriend</p>
        <p className="text-xs text-bunny-pink mt-1">Bunny Care v1.0 🐰</p>
      </div>
    </div>
  );
}
