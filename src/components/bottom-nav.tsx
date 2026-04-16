"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/", icon: "🏠", label: "Home" },
  { href: "/memories", icon: "📸", label: "Ảnh" },
  { href: "/mood", icon: "💭", label: "Tâm sự" },
  { href: "/music", icon: "🎧", label: "Nhạc" },
  { href: "/more", icon: "🐰", label: "Thêm" },
];

export function BottomNav() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white/90 backdrop-blur-md border-t border-bunny-pink-light z-50">
      <div className="max-w-md mx-auto flex justify-around items-center py-2">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex flex-col items-center gap-0.5 px-3 py-1.5 rounded-xl transition-all",
                isActive
                  ? "bg-bunny-pink-light scale-105"
                  : "hover:bg-bunny-pink-light/50"
              )}
            >
              <span className="text-xl">{item.icon}</span>
              <span className={cn("text-[10px] font-semibold", isActive ? "text-bunny-pink-dark" : "text-gray-400")}>
                {item.label}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
