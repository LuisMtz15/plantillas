import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-[#111A40] text-gray-300 px-6 py-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">

        <div>
          <div className="flex items-center gap-2 mb-2">
            <img
              src="https://i.imgur.com/TsQMfnh.png"
              alt="Logo TrendScope"
              className="w-7 h-7 object-contain"
            />
            <span className="text-xl font-bold text-white">TrendScope</span>
          </div>
          <p className="text-sm text-gray-400">
            Detecta tendencias, analiza oportunidades y crea tu plan de negocio ideal con ayuda de la IA.
          </p>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-3">Enlaces</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#inicio" className="hover:text-white">Inicio</a></li>
            <li><a href="#planes" className="hover:text-white">Planes</a></li>
            <li><a href="#que-es" className="hover:text-white">¿Qué es TrendScope?</a></li>
            <li><a href="#contacto" className="hover:text-white">Contacto</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-3">Conéctate</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="mailto:contacto@trendscope.ai" className="hover:text-white">contacto@trendscope.ai</a></li>
            <li><a href="#" className="hover:text-white">LinkedIn</a></li>
            <li><a href="#" className="hover:text-white">Twitter</a></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-600 mt-8 pt-4 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} TrendScope. Todos los derechos reservados.
      </div>
    </footer>
  );
};

export default Footer;
