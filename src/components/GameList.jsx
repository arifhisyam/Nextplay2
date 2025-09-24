import React from "react";

const games = [
  {
    name: "Mobile Legends",
    publisher: "Moonton",
    image:
      "https://c4.wallpaperflare.com/wallpaper/579/1/177/mobile-legends-chou-iori-yagami-hd-wallpaper-preview.jpg",
  },
  {
    name: "Free Fire",
    publisher: "Garena",
    image: "/images/ff.png",
  },
  {
    name: "PUBG Mobile",
    publisher: "Tencent Games",
    image: "/images/pubg-mobile.png",
  },
  {
    name: "Genshin Impact",
    publisher: "miHoYo",
    image: "/images/genshin-impact.png",
  },
  {
    name: "Honor Of Kings",
    publisher: "Tencent Games",
    image: "/images/honor.png",
  },
  {
    name: "Roblox - Voucher",
    publisher: "Roblox Corporation",
    image: "/images/roblox.png",
  },
  {
    name: "Joki Rank Mobile Legends",
    publisher: "Takapedia",
    image: "/images/joki-ml.png",
  },
  {
    name: "Jasa Mabar Casual",
    publisher: "Takapedia",
    image: "/logo.png",
  },
  {
    name: "Mobile Legends",
    publisher: "Moonton",
    image:
      "https://c4.wallpaperflare.com/wallpaper/579/1/177/mobile-legends-chou-iori-yagami-hd-wallpaper-preview.jpg",
  },
  {
    name: "Mobile Legends",
    publisher: "Moonton",
    image:
      "https://c4.wallpaperflare.com/wallpaper/579/1/177/mobile-legends-chou-iori-yagami-hd-wallpaper-preview.jpg",
  },
  {
    name: "Mobile Legends",
    publisher: "Moonton",
    image:
      "https://c4.wallpaperflare.com/wallpaper/579/1/177/mobile-legends-chou-iori-yagami-hd-wallpaper-preview.jpg",
  },
  {
    name: "Mobile Legends",
    publisher: "Moonton",
    image:
      "https://c4.wallpaperflare.com/wallpaper/579/1/177/mobile-legends-chou-iori-yagami-hd-wallpaper-preview.jpg",
  },
  
];

const GameCard = ({ game }) => {
  return (
    <div className="relative group rounded-lg overflow-hidden shadow-md transition-transform duration-300 hover:scale-105 outline-4 outline-transparent hover:outline-blue-500">

      {/* Background Image */}
      <img
        src={game.image}
        alt={game.name}
        className="w-full h-40 object-cover"
      />

      {/* Overlay muncul saat hover */}
      <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-3">
        <h3 className="text-white font-semibold text-sm">{game.name}</h3>
        <p className="text-gray-200 text-xs">{game.publisher}</p>
      </div>
    </div>
  );
};

const GamesList = () => {
  return (
    <section id="games" className="py-20 bg-gradient-to-b from-blue-500 to-blue-300">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-white mb-10 text-center">
          Game Populer
        </h2>

        {/* Grid Card */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {games.map((game, index) => (
            <GameCard key={index} game={game} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default GamesList;
