import React, { useState } from "react";
import { Menu, X } from "lucide-react"; // Requiere `lucide-react`

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full bg-[#111A40] px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
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

        <div className="hidden md:block">
          <button className="bg-white text-[#111A40] px-4 py-2 rounded-xl hover:bg-gray-200 transition text-sm font-medium">
            Iniciar sesión
          </button>
        </div>

        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden mt-4 space-y-4 text-gray-200 text-base">
          <a href="#inicio" className="block hover:text-white">Inicio</a>
          <a href="#planes" className="block hover:text-white">Planes</a>
          <a href="#que-es" className="block hover:text-white">¿Qué es TrendScope?</a>
          <button className="w-full bg-white text-[#111A40] px-4 py-2 rounded-xl hover:bg-gray-200 transition text-sm font-medium">
            Iniciar sesión
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
