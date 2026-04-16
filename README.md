# 🐰 Bunny Care – Your Safe Place in Tokyo

A cute, comforting web app built with love for someone special living in Tokyo.

![Next.js](https://img.shields.io/badge/Next.js-14-black) ![TypeScript](https://img.shields.io/badge/TypeScript-5-blue) ![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3-38bdf8)

## ✨ Features

| Feature | Description |
|---------|-------------|
| 🏠 Home Dashboard | Time-based greeting, random love messages, quick actions |
| 💕 Love Messages | Pre-loaded messages from boyfriend, tap to shuffle |
| 📸 Shared Memories | Upload & view photos in a cute grid gallery with lightbox |
| 💭 Mood & Journal | Select mood emoji, write notes, save diary entries |
| 🎧 Music | Embedded YouTube playlists (Chinese love songs, HIEUTHUHAI, Rhyder, DangRangTo) |
| 🌸 Stress Relief | 1-minute breathing exercise, tap-the-bunny interaction |
| 🗼 Tokyo Guide | Restaurants, cafes, weekend spots in/near Tokyo |
| 💡 Useful Tips | Living alone in Japan: health, safety, commuting, savings |

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) 18+ 
- [Supabase](https://supabase.com/) account (free tier works)

### Setup

```bash
# 1. Install dependencies
npm install

# 2. Create .env.local from example
cp .env.local.example .env.local

# 3. Fill in your Supabase credentials in .env.local
# NEXT_PUBLIC_SUPABASE_URL=https://xxx.supabase.co
# NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJxxx...

# 4. Run the SQL schema in Supabase Dashboard > SQL Editor
# (see supabase-schema.sql)

# 5. Create a "photos" storage bucket in Supabase (public)

# 6. Start dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) 🐰

### Deploy to Vercel

```bash
npm run build
# Push to GitHub, then import in vercel.com
# Add env variables in Vercel project settings
```

## 🎨 Customization

- **Love messages**: Edit `src/lib/data.ts` → `loveMessages` array
- **Music playlists**: Replace `videoId` in `musicPlaylists` with real YouTube IDs
- **Tokyo places**: Add/edit places in `tokyoPlaces`
- **Tips**: Modify `livingTips`

## 📱 Design

- Pastel pink/white/yellow theme
- Mobile-first, max 1-2 clicks
- Soft shadows, rounded corners
- Cute bunny 🐰 everywhere

---

Made with 💕 for my bunny in Tokyo
