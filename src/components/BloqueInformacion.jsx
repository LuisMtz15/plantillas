import React from 'react';

const BloqueInformacion = () => {
  return (
    <section className="w-full bg-[#e0e7ff] py-10 px-6 flex flex-col items-center">
      <h1 className="text-4xl md:text-5xl font-bold text-[#111A40] text-center mb-6">
        ¡Descubre hoy lo que será tendencia mañana!
      </h1>

      <button className="bg-gray-300 text-[#111A40] px-6 py-3 rounded-xl hover:bg-gray-400 transition text-base font-medium mb-8">
        Comenzar
      </button>

      <h2 className="text-2xl md:text-3xl text-[#111A40] text-center mb-10">
        Tendencias al alcance de tus manos
      </h2>

      <div className="flex flex-col md:flex-row gap-6 justify-center">
        <div className="w-64 h-32 bg-gray-200 rounded-lg"></div>
        <div className="w-64 h-32 bg-gray-200 rounded-lg"></div>
      </div>
    </section>
  );
};

export default BloqueInformacion;