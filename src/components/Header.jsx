import React from 'react';
import { Link } from '@tanstack/react-router';

const Header = () => {
  return (
    <header className="bg-blue-500/50 backdrop-blur-md text-white sticky top-0 z-50 shadow-lg">
      <nav className="flex items-center gap-6 px-4 py-2 bg-blue">
        <img src="./logo.png" width="4%" height="4%" />
        <div className="flex-1">
          <input
            className="w-full rounded-md bg-[#A9D1FF] text-black placeholder-[#004080] py-2 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
            placeholder="Cari Game atau Voucher"
            type="search"
          />
        </div>
        <div className="flex gap-6 border-b-0 shadow-none">
          <Link to="/L" className="ml-auto hover:text-[#0059b3] transition-colors">
            Masuk
          </Link>
          <a className="flex items-center gap-1 hover:text-[#0059b3] transition-colors" href="#">
            Daftar
          </a>
        </div>
      </nav>
      <nav className="flex items-center gap-6 px-4 py-2 bg-blue border-b border-[#7FBFFF] text-sm font-semibold text-[#004080]">
        <Link to="/" className="flex items-center gap-1 hover:text-[#0059b3] transition-colors">
          <i className="fas fa-house"></i> Beranda
        </Link>
        <Link to="/list" className="flex items-center gap-1 hover:text-[#0059b3] transition-colors">
          <i className="fas fa-gamepad"></i> Game
        </Link>
        <a className="flex items-center gap-1 hover:text-[#0059b3] transition-colors" href="#topup">
          <i className="fas fa-wallet"></i>
        </a>
        <a className="flex items-center gap-1 hover:text-[#0059b3] transition-colors" href="#joki">
          <i className="fas fa-trophy"></i> Joki
        </a>
        <a className="flex items-center gap-1 hover:text-[#0059b3] transition-colors" href="#about">
          <i className="fas fa-user-circle"></i> Tentang
        </a>
      </nav>
    </header>
  );
};

export default Header;
