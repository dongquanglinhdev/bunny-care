"use client";

import { useState } from "react";
import { tokyoPlaces } from "@/lib/data";

type Category = "food" | "cafe" | "chill";

const tabs: { key: Category; label: string; emoji: string }[] = [
  { key: "food", label: "Ăn ngon", emoji: "🍜" },
  { key: "cafe", label: "Cafe", emoji: "☕" },
  { key: "chill", label: "Đi chơi", emoji: "🎡" },
];

export default function TokyoPage() {
  const [activeTab, setActiveTab] = useState<Category>("food");

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h1 className="text-2xl font-bold text-bunny-pink-dark">🗼 Tokyo Guide</h1>
        <p className="text-sm text-gray-400">Những nơi hay ho cho em khám phá cuối tuần</p>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 justify-center">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
              activeTab === tab.key
                ? "bg-bunny-pink text-white shadow-cute"
                : "bg-bunny-pink-light/50 text-gray-500 hover:bg-bunny-pink-light"
            }`}
          >
            {tab.emoji} {tab.label}
          </button>
        ))}
      </div>

      {/* Places */}
      <div className="space-y-3">
        {tokyoPlaces[activeTab].map((place, i) => (
          <div key={i} className="card-cute">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-bold text-gray-700">{place.name}</h3>
                <p className="text-xs text-bunny-pink font-semibold">📍 {place.area}</p>
              </div>
              <span className="text-xs">{place.rating}</span>
            </div>
            <p className="text-sm text-gray-500 mt-2">{place.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
