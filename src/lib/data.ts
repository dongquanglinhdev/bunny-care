export const loveMessages = [
  "Em là điều tuyệt vời nhất trong cuộc đời anh 🐰💕",
  "Dù xa nhau nhưng trái tim anh luôn ở bên em",
  "Em làm việc vất vả rồi, hãy nghỉ ngơi nhé! Anh yêu em ❤️",
  "Mỗi ngày không có em là một ngày anh nhớ em nhiều hơn",
  "Em là ngôi sao sáng nhất trên bầu trời Tokyo của anh ✨",
  "Cố lên em nhé! Anh luôn tự hào về em 💪🐰",
  "Hôm nay em có mệt không? Anh ước được ôm em thật chặt",
  "Em ơi, ăn uống đầy đủ nhé, đừng bỏ bữa nha 🍙",
  "Anh đếm từng ngày để được gặp lại em 💕",
  "Em là lý do anh mỉm cười mỗi ngày 😊",
  "Tokyo có lạnh không em? Anh gửi hơi ấm qua đây nè 🫂",
  "Giấc mơ đẹp nhất của anh là tương lai bên em",
  "Em mạnh mẽ lắm, anh biết em làm được! 🌸",
  "Anh nhớ nụ cười của em, cười nhiều lên nhé baby 🐰",
  "Sau mỗi ngày mệt mỏi, hãy nhớ rằng có anh luôn chờ em",
  "Em là cô gái dũng cảm nhất mà anh biết 💖",
  "Mỗi khi em buồn, hãy mở app này - anh ở đây nè!",
  "Yêu em hơn cả hôm qua, nhưng ít hơn ngày mai 💕",
  "Em là thiên thần nhỏ của anh, mãi mãi yêu em 🐰✨",
  "Chúc em một ngày thật tươi đẹp như chính em vậy 🌷",
];

export const getTimeGreeting = (): { greeting: string; emoji: string } => {
  const hour = new Date().getHours();
  if (hour >= 5 && hour < 12) return { greeting: "Chào buổi sáng, baby", emoji: "🌅" };
  if (hour >= 12 && hour < 17) return { greeting: "Buổi chiều vui vẻ nha em", emoji: "☀️" };
  if (hour >= 17 && hour < 21) return { greeting: "Buổi tối an lành, em yêu", emoji: "🌆" };
  return { greeting: "Khuya rồi, nghỉ ngơi đi em nhé", emoji: "🌙" };
};

export const getRandomMessage = () => {
  return loveMessages[Math.floor(Math.random() * loveMessages.length)];
};

export const moods = [
  { emoji: "😊", label: "Vui vẻ", color: "bg-yellow-200" },
  { emoji: "😢", label: "Buồn", color: "bg-blue-200" },
  { emoji: "😴", label: "Mệt mỏi", color: "bg-purple-200" },
  { emoji: "😡", label: "Bực bội", color: "bg-red-200" },
  { emoji: "🥰", label: "Hạnh phúc", color: "bg-pink-200" },
  { emoji: "😰", label: "Lo lắng", color: "bg-gray-200" },
  { emoji: "🤗", label: "Ấm áp", color: "bg-orange-200" },
  { emoji: "😌", label: "Bình yên", color: "bg-green-200" },
];

export const musicPlaylists = [
  {
    id: "chinese-love",
    title: "Nhạc Trung Tình Ca 💕",
    description: "Những bài tình ca Trung Quốc lãng mạn",
    videoId: "dQw4w9WgXcQ",
    color: "from-red-200 to-pink-200",
  },
  {
    id: "hieuthuhai",
    title: "HIEUTHUHAI 🎤",
    description: "Playlist Hiếu Thứ Hai",
    videoId: "dQw4w9WgXcQ",
    color: "from-blue-200 to-purple-200",
  },
  {
    id: "rhyder",
    title: "Rhyder 🎵",
    description: "Những bài hay nhất của Rhyder",
    videoId: "dQw4w9WgXcQ",
    color: "from-green-200 to-teal-200",
  },
  {
    id: "dangrangto",
    title: "DangRangTo 🎶",
    description: "Playlist DangRangTo",
    videoId: "dQw4w9WgXcQ",
    color: "from-orange-200 to-yellow-200",
  },
];

export const tokyoPlaces = {
  food: [
    { name: "Ichiran Ramen", area: "Shibuya", desc: "Mì ramen tonkotsu nổi tiếng, ăn một mình cũng thoải mái", rating: "⭐⭐⭐⭐⭐" },
    { name: "Genki Sushi", area: "Nhiều chi nhánh", desc: "Sushi băng chuyền giá rẻ, ngon miệng", rating: "⭐⭐⭐⭐" },
    { name: "CoCo Ichibanya", area: "Nhiều chi nhánh", desc: "Cà ri Nhật cực ngon, nhiều topping", rating: "⭐⭐⭐⭐" },
    { name: "Sukiya", area: "Nhiều chi nhánh", desc: "Gyudon (cơm thịt bò) giá rẻ, mở 24h", rating: "⭐⭐⭐⭐" },
    { name: "Conveyor Belt Sushi", area: "Akihabara", desc: "Sushi tươi, giá phải chăng", rating: "⭐⭐⭐⭐" },
    { name: "Afuri Ramen", area: "Ebisu", desc: "Ramen yuzu nhẹ nhàng, thơm ngon", rating: "⭐⭐⭐⭐⭐" },
  ],
  cafe: [
    { name: "Starbucks Reserve Roastery", area: "Nakameguro", desc: "Starbucks lớn nhất, view hoa anh đào", rating: "⭐⭐⭐⭐⭐" },
    { name: "Shimokitazawa Cafes", area: "Shimokitazawa", desc: "Khu phố vintage, nhiều quán cafe xinh", rating: "⭐⭐⭐⭐" },
    { name: "Bunny Cafe", area: "Harajuku", desc: "Cafe thỏ siêu dễ thương 🐰", rating: "⭐⭐⭐⭐⭐" },
    { name: "Reissue", area: "Harajuku", desc: "Latte art siêu đẹp", rating: "⭐⭐⭐⭐" },
    { name: "Kitsune Tea", area: "Aoyama", desc: "Trà Nhật truyền thống, không gian zen", rating: "⭐⭐⭐⭐" },
  ],
  chill: [
    { name: "Odaiba", area: "Tokyo Bay", desc: "View biển, shopping, teamLab, ăn uống", rating: "⭐⭐⭐⭐⭐" },
    { name: "Inokashira Park", area: "Kichijoji", desc: "Công viên xanh mát, đạp vịt trên hồ", rating: "⭐⭐⭐⭐" },
    { name: "Kamakura", area: "Gần Tokyo (1h)", desc: "Biển + đền chùa, ngày cuối tuần hoàn hảo", rating: "⭐⭐⭐⭐⭐" },
    { name: "Yokohama Chinatown", area: "Yokohama (30m)", desc: "Ẩm thực Trung Hoa, phố đi bộ", rating: "⭐⭐⭐⭐" },
    { name: "Enoshima", area: "Kanagawa (1h)", desc: "Đảo nhỏ xinh, hải sản tươi, view Fuji", rating: "⭐⭐⭐⭐⭐" },
    { name: "Ghibli Museum", area: "Mitaka", desc: "Bảo tàng Ghibli, cần đặt vé trước", rating: "⭐⭐⭐⭐⭐" },
  ],
};

export const livingTips = [
  {
    category: "🏥 Sức khỏe",
    tips: [
      "Luôn mang theo thẻ bảo hiểm sức khỏe",
      "Uống đủ 2L nước mỗi ngày, đặc biệt khi OT",
      "Ngủ đủ 7 tiếng, dù bận đến mấy",
      "Ăn rau xanh và trái cây mỗi ngày",
      "Đi khám sức khỏe định kỳ ở phòng khám gần nhà",
    ],
  },
  {
    category: "🛡️ An toàn",
    tips: [
      "Lưu số 110 (cảnh sát) và 119 (cứu thương)",
      "Cài app Safety Tips (NHK) để nhận cảnh báo động đất",
      "Luôn khóa cửa, kể cả khi ở nhà",
      "Đi đường khuya nên đi đường lớn, có đèn",
      "Cho người thân biết lịch trình khi đi chơi xa",
    ],
  },
  {
    category: "🚃 Di chuyển",
    tips: [
      "Mua thẻ Suica/Pasmo để đi tàu tiện lợi",
      "Tránh giờ cao điểm 7:30-9:00 sáng nếu được",
      "Cài app Google Maps hoặc Navitime tiếng Nhật",
      "Ghế ưu tiên (priority seat) dành cho người cần",
      "Cuối tuần mua vé 1 ngày để tiết kiệm",
    ],
  },
  {
    category: "💰 Tiết kiệm",
    tips: [
      "Nấu ăn ở nhà tiết kiệm hơn nhiều",
      "Mua đồ ở Gyomu Super, Don Quijote giá rẻ",
      "Đồ ăn giảm giá sau 8PM ở siêu thị",
      "Dùng app coupon: Hot Pepper, Tabelog",
      "Quần áo mua ở Uniqlo khi sale, GU, Shimamura",
    ],
  },
  {
    category: "😌 Tinh thần",
    tips: [
      "Gọi video cho người thân ít nhất 2 lần/tuần",
      "Tìm cộng đồng người Việt ở Tokyo",
      "Dành cuối tuần làm điều mình thích",
      "Viết nhật ký khi buồn, nó giúp nhẹ lòng lắm",
      "Đừng ngại nhờ giúp đỡ khi cần",
    ],
  },
];
