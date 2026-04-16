"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { getTimeGreeting, getRandomMessage } from "@/lib/data";

const quickActions = [
  { emoji: "🏠", label: "Em về rồi!", color: "bg-green-100 hover:bg-green-200", href: "#home" },
  { emoji: "😞", label: "Em mệt quá...", color: "bg-blue-100 hover:bg-blue-200", href: "/stress" },
  { emoji: "🎧", label: "Nghe nhạc", color: "bg-purple-100 hover:bg-purple-200", href: "/music" },
  { emoji: "📸", label: "Xem ảnh", color: "bg-yellow-100 hover:bg-yellow-200", href: "/memories" },
];

export default function HomePage() {
  const [greeting, setGreeting] = useState({ greeting: "", emoji: "" });
  const [message, setMessage] = useState("");
  const [showHomeToast, setShowHomeToast] = useState(false);
  const [floatingEmojis, setFloatingEmojis] = useState<string[]>([]);

  useEffect(() => {
    setGreeting(getTimeGreeting());
    setMessage(getRandomMessage());
  }, []);

  const handleImHome = () => {
    setShowHomeToast(true);
    setTimeout(() => setShowHomeToast(false), 3000);
  };

  const addFloatingEmoji = () => {
    const emojis = ["💕", "🐰", "✨", "💖", "🌸", "💗"];
    const emoji = emojis[Math.floor(Math.random() * emojis.length)];
    setFloatingEmojis((prev) => [...prev, emoji]);
    setTimeout(() => setFloatingEmojis((prev) => prev.slice(1)), 2000);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center pt-4">
        <div className="text-5xl mb-3 animate-bounce-slow">🐰</div>
        <h1 className="text-2xl font-bold text-bunny-pink-dark">
          {greeting.emoji} {greeting.greeting}
        </h1>
        <p className="text-sm text-gray-400 mt-1">Bunny Care – Nơi an toàn của em</p>
      </div>

      {/* Love Message Card */}
      <div
        className="card-cute text-center relative overflow-hidden cursor-pointer"
        onClick={() => {
          setMessage(getRandomMessage());
          addFloatingEmoji();
        }}
      >
        <div className="text-3xl mb-3">💌</div>
        <p className="text-lg font-semibold text-gray-700 leading-relaxed">{message}</p>
        <p className="text-xs text-bunny-pink mt-3">Chạm để đọc tin nhắn khác 💕</p>

        {/* Floating emojis */}
        {floatingEmojis.map((emoji, i) => (
          <span
            key={i}
            className="absolute float-emoji text-2xl"
            style={{ left: `${20 + Math.random() * 60}%`, bottom: "20%" }}
          >
            {emoji}
          </span>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-2 gap-3">
        {quickActions.map((action) => {
          if (action.href === "#home") {
            return (
              <button
                key={action.label}
                onClick={handleImHome}
                className={`${action.color} rounded-cute p-4 text-center transition-all active:scale-95 border border-transparent hover:border-bunny-pink-light`}
              >
                <div className="text-3xl mb-1">{action.emoji}</div>
                <div className="text-sm font-semibold text-gray-600">{action.label}</div>
              </button>
            );
          }
          return (
            <Link
              key={action.label}
              href={action.href}
              className={`${action.color} rounded-cute p-4 text-center transition-all active:scale-95 border border-transparent hover:border-bunny-pink-light`}
            >
              <div className="text-3xl mb-1">{action.emoji}</div>
              <div className="text-sm font-semibold text-gray-600">{action.label}</div>
            </Link>
          );
        })}
      </div>

      {/* Quick links */}
      <div className="flex gap-2 flex-wrap justify-center">
        <Link href="/messages" className="px-4 py-2 bg-bunny-pink-light rounded-full text-sm font-semibold text-bunny-pink-dark hover:bg-bunny-pink transition-colors">
          💕 Lời yêu thương
        </Link>
        <Link href="/tips" className="px-4 py-2 bg-bunny-yellow rounded-full text-sm font-semibold text-yellow-700 hover:bg-bunny-yellow-dark/30 transition-colors">
          💡 Tips hữu ích
        </Link>
        <Link href="/tokyo" className="px-4 py-2 bg-purple-100 rounded-full text-sm font-semibold text-purple-700 hover:bg-purple-200 transition-colors">
          🗼 Tokyo Guide
        </Link>
      </div>

      {/* "I'm home" toast */}
      {showHomeToast && (
        <div className="fixed top-6 left-1/2 -translate-x-1/2 bg-green-100 border border-green-300 text-green-700 px-6 py-3 rounded-cute shadow-cute z-50 animate-bounce text-center">
          <div className="text-2xl mb-1">🏠💕</div>
          <p className="font-semibold">Về rồi hả baby! Anh mừng quá! 🐰</p>
        </div>
      )}
    </div>
  );
}
