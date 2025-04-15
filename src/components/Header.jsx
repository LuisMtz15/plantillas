import React from "react";

const Header = () => {
  return (
    <header className="w-full bg-[#111A40] px-6 py-4 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <img
          src="https://i.imgur.com/TsQMfnh.png"
          alt="Logo TrendScope"
          className="w-8 h-8 object-contain"
        />
        <span className="text-2xl font-bold text-white">TrendScope</span>
      </div>

      <nav className="hidden md:flex gap-6 text-gray-300 text-base">
        <a href="#inicio" className="hover:text-white transition">Inicio</a>
        <a href="#planes" className="hover:text-white transition">Planes</a>
        <a href="#que-es" className="hover:text-white transition">¿Qué es TrendScope?</a>
      </nav>

      <button className="bg-white text-[#111A40] px-4 py-2 rounded-xl hover:bg-gray-200 transition text-sm font-medium">
        Iniciar sesión
      </button>
    </header>
  );
};

export default Header;
