"use client";

import { livingTips } from "@/lib/data";

export default function TipsPage() {
  return (
    <div className="space-y-6">
      <div className="text-center">
        <h1 className="text-2xl font-bold text-bunny-pink-dark">💡 Tips Hữu Ích</h1>
        <p className="text-sm text-gray-400">Những điều cần biết khi sống ở Nhật một mình</p>
      </div>

      <div className="space-y-4">
        {livingTips.map((section, i) => (
          <div key={i} className="card-cute">
            <h3 className="text-lg font-bold text-gray-700 mb-3">{section.category}</h3>
            <ul className="space-y-2">
              {section.tips.map((tip, j) => (
                <li key={j} className="flex items-start gap-2 text-sm text-gray-600">
                  <span className="text-bunny-pink mt-0.5">•</span>
                  <span>{tip}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="card-cute text-center bg-bunny-yellow/50">
        <div className="text-3xl mb-2">🐰</div>
        <p className="text-sm text-gray-600 font-semibold">
          Em luôn có thể hỏi anh bất cứ điều gì nhé! Anh luôn ở đây 💕
        </p>
      </div>
    </div>
  );
}
