import React, { useState, useEffect } from "react";
import HeaderLanding from "../Component/HeaderLanding";
import Footer from "../Component/Footer";

const Landing = () => {
  return (
    <div className="bg-white min-h-screen flex flex-col">
      <HeaderLanding />

      <div className="flex-grow pt-32 md:pt-52">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-center px-5">
          <div className="md:w-1/2 flex justify-center items-center mb-10 md:mb-0">
            <div className="text-center md:text-left px-4 md:px-0">
              <h1 className="text-3xl md:text-4xl font-bold mb-5">OCEAN GUARDIAN</h1>
              <p className="text-gray-600 text-lg md:text-2xl leading-relaxed">
                Ocean Guardian adalah sebuah sistem
                <br />
                pelaporan yang dirancang untuk memantau
                <br />
                dan melaporkan aktivitas pembuangan
                <br />
                sampah laut serta penangkapan ikan illegal
                <br />
                di perairan. Sistem ini membantu menjaga
                <br />
                ekosistem laut tetap sehat dan lestari.
              </p>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center items-center">
            <img
              src="src/assets/terumbu.png"
              alt="Coral Illustration"
              className="w-full max-w-xs md:max-w-lg"
            />
          </div>
        </div>

        <div className="bg-white mt-5 md:mt-50 py-20 md:py-36">
          <h2 className="text-black text-2xl md:text-3xl font-bold text-center mb-16 md:mb-28">FITUR-FITUR</h2>
          <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 px-4">
            {[
              { src: "src/assets/laporan.png", title: "Laporan Real-Time", description: "Fitur ini menyediakan informasi dari laporan pengguna lain secara real-time." },
              { src: "src/assets/ikan.png", title: "Pelaporan Penangkapan Ikan Ilegal", description: "Fitur ini memungkinkan pengguna untuk melaporkan adanya penangkapan ikan ilegal yang mereka temukan." },
              { src: "src/assets/sampah.png", title: "Pelaporan Sampah Laut", description: "Fitur ini memungkinkan pengguna untuk melaporkan adanya sampah laut yang mereka temukan." },
              { src: "src/assets/statistik.png", title: "Statistik Pelaporan", description: "Fitur ini memungkinkan pengguna melihat statistik pelaporan per tahun maupun per bulan." },
            ].map((feature, index) => (
              <div key={index} className="bg-blue-500 text-white rounded-lg shadow-md p-6 text-center flex flex-col">
                <img src={feature.src} alt={feature.title} className="mx-auto mb-4 w-full max-w-xs h-auto object-cover rounded-lg" />
                <h3 className="text-lg md:text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-sm md:text-base">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Landing;
