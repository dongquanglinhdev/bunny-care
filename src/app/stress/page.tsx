"use client";

import { useState, useEffect } from "react";

const bunnyImages = [
  "🐰", "🐇", "🐰", "🐇", "🐰",
];

const affirmations = [
  "Hít vào... Thở ra... Em giỏi lắm rồi 💕",
  "Mọi chuyện rồi sẽ ổn thôi, em tin anh đi 🌸",
  "Em xứng đáng được nghỉ ngơi 🐰",
  "Anh luôn ở đây, em không cô đơn đâu ✨",
  "Từ từ thôi, không cần phải vội 💗",
];

export default function StressPage() {
  const [isBreathing, setIsBreathing] = useState(false);
  const [breathPhase, setBreathPhase] = useState<"inhale" | "hold" | "exhale">("inhale");
  const [seconds, setSeconds] = useState(60);
  const [affirmation, setAffirmation] = useState(affirmations[0]);
  const [tapCount, setTapCount] = useState(0);

  useEffect(() => {
    if (!isBreathing || seconds <= 0) {
      if (seconds <= 0) setIsBreathing(false);
      return;
    }

    const timer = setInterval(() => {
      setSeconds((s) => s - 1);
    }, 1000);

    const breathCycle = setInterval(() => {
      setBreathPhase((p) => {
        if (p === "inhale") return "hold";
        if (p === "hold") return "exhale";
        return "inhale";
      });
    }, 4000);

    return () => {
      clearInterval(timer);
      clearInterval(breathCycle);
    };
  }, [isBreathing, seconds]);

  const startBreathing = () => {
    setIsBreathing(true);
    setSeconds(60);
    setBreathPhase("inhale");
  };

  const handleBunnyTap = () => {
    setTapCount((c) => c + 1);
    setAffirmation(affirmations[Math.floor(Math.random() * affirmations.length)]);
  };

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h1 className="text-2xl font-bold text-bunny-pink-dark">🌸 Thư Giãn Nào</h1>
        <p className="text-sm text-gray-400">Hãy dành chút thời gian cho bản thân em nhé</p>
      </div>

      {/* Breathing exercise */}
      <div className="card-cute text-center">
        <h3 className="text-lg font-bold text-gray-600 mb-4">🫁 Bài tập thở (1 phút)</h3>

        <div className="flex justify-center mb-4">
          <div
            className={`w-32 h-32 rounded-full flex items-center justify-center text-white font-bold transition-all duration-[4000ms] ease-in-out ${
              isBreathing
                ? breathPhase === "inhale"
                  ? "scale-125 bg-bunny-pink"
                  : breathPhase === "hold"
                  ? "scale-125 bg-bunny-pink-dark"
                  : "scale-100 bg-bunny-pink-light text-gray-600"
                : "bg-bunny-pink-light text-gray-500"
            }`}
          >
            {isBreathing ? (
              <div>
                <div className="text-sm">
                  {breathPhase === "inhale" ? "Hít vào..." : breathPhase === "hold" ? "Giữ..." : "Thở ra..."}
                </div>
                <div className="text-2xl mt-1">{seconds}s</div>
              </div>
            ) : (
              <span className="text-3xl">🫁</span>
            )}
          </div>
        </div>

        <button
          onClick={isBreathing ? () => setIsBreathing(false) : startBreathing}
          className="px-6 py-3 bg-bunny-pink text-white rounded-full font-semibold hover:bg-bunny-pink-dark transition-colors"
        >
          {isBreathing ? "Dừng lại" : "Bắt đầu thở 🌿"}
        </button>
      </div>

      {/* Tap the bunny */}
      <div className="card-cute text-center">
        <h3 className="text-lg font-bold text-gray-600 mb-3">🐰 Vuốt ve thỏ bông</h3>
        <p className="text-sm text-gray-400 mb-4">Chạm vào thỏ để nhận lời động viên nhé!</p>

        <button
          onClick={handleBunnyTap}
          className="text-7xl transition-transform active:scale-125 hover:scale-110"
        >
          {bunnyImages[tapCount % bunnyImages.length]}
        </button>

        <p className="mt-4 text-sm font-semibold text-bunny-pink-dark animate-pulse-slow">
          {affirmation}
        </p>

        <p className="text-xs text-gray-300 mt-2">Đã vuốt {tapCount} lần 💕</p>
      </div>

      {/* Cute images */}
      <div className="card-cute text-center bg-bunny-cream">
        <h3 className="text-lg font-bold text-gray-600 mb-3">🐰 Thỏ dễ thương cho em</h3>
        <div className="grid grid-cols-3 gap-3">
          {["🐰✨", "🐇💕", "🐰🌸", "🐇💗", "🐰🎀", "🐇💖"].map((bunny, i) => (
            <div
              key={i}
              className="bg-white rounded-cute p-4 text-3xl shadow-sm hover:shadow-cute transition-shadow cursor-pointer animate-float"
              style={{ animationDelay: `${i * 0.5}s` }}
            >
              {bunny}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
