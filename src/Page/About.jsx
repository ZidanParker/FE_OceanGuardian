import React from "react";
import HeaderAbout from "../Component/HeaderAbout";
import Footer from "../Component/Footer";

const About = () => {
  return (
    <div className="bg-gradient-to-b from-blue-100 to-white min-h-screen flex flex-col">
      {/* Header Component */}
      <HeaderAbout />

      {/* Main Content */}
      <div className="flex-grow pt-40 pb-10">
        <div className="container mx-auto flex flex-col items-center px-5">
          <div className="text-center max-w-3xl bg-white rounded-lg shadow-lg p-10 md:p-16 transform -translate-y-10 md:-translate-y-16">
            {/* Title Section */}
            <h1 className="text-4xl md:text-5xl font-extrabold text-blue-600 mb-5 tracking-tight">Tentang Ocean Guardian</h1>
            <p className="text-gray-600 text-lg md:text-2xl leading-relaxed mb-8">
              Ocean Guardian adalah platform pelaporan yang memberdayakan masyarakat untuk menjaga ekosistem laut. Melalui pelaporan aktivitas pencemaran dan penangkapan ikan ilegal, kita bersama-sama menjaga kesehatan laut yang berkelanjutan.
            </p>

            {/* Visi & Misi Section */}
            <div className="bg-gradient-to-r from-blue-500 to-blue-400 text-white rounded-lg p-6 md:p-10 my-10">
              <h2 className="text-3xl md:text-4xl font-semibold mb-4">Visi dan Misi</h2>
              <p className="text-lg md:text-xl leading-relaxed">
                <strong>Visi:</strong> Lautan yang sehat dan berkelanjutan untuk generasi mendatang.
                <br />
                <strong>Misi:</strong> Melibatkan masyarakat dalam melestarikan ekosistem laut melalui pelaporan aktif terkait sampah laut dan penangkapan ikan ilegal.
              </p>
            </div>

            {/* Feature Section */}
            <h2 className="text-3xl md:text-4xl font-semibold text-blue-600 mb-8">Fitur Utama</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
              {/* Feature 1 */}
              <div className="bg-white shadow-md rounded-lg p-6 text-center">
                <img
                  src="src/assets/laporan.png"
                  alt="Laporan Real-Time"
                  className="mx-auto mb-4 w-auto h-auto object-cover"
                />
                <h3 className="text-xl font-bold text-blue-600 mb-2">Laporan Real-Time</h3>
                <p className="text-gray-600 text-sm md:text-base">
                  Menyediakan informasi laporan pengguna secara real-time, memungkinkan tindakan segera.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="bg-white shadow-md rounded-lg p-6 text-center">
                <img
                  src="src/assets/ikan.png"
                  alt="Pelaporan Penangkapan Ikan Ilegal"
                  className="mx-auto mb-4 w-auto h-auto object-cover"
                />
                <h3 className="text-xl font-bold text-blue-600 mb-2">Pelaporan Penangkapan Ikan Ilegal</h3>
                <p className="text-gray-600 text-sm md:text-base">
                  Memungkinkan pengguna melaporkan aktivitas penangkapan ikan ilegal yang disaksikan.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="bg-white shadow-md rounded-lg p-6 text-center">
                <img
                  src="src/assets/sampah.png"
                  alt="Pelaporan Sampah Laut"
                  className="mx-auto mb-4 w-auto h-auto object-cover"
                />
                <h3 className="text-xl font-bold text-blue-600 mb-2">Pelaporan Sampah Laut</h3>
                <p className="text-gray-600 text-sm md:text-base">
                  Memudahkan pengguna untuk melaporkan sampah laut yang ditemukan.
                </p>
              </div>

              {/* Feature 4 */}
              <div className="bg-white shadow-md rounded-lg p-6 text-center">
                <img
                  src="src/assets/statistik.png"
                  alt="Statistik Pelaporan"
                  className="mx-auto mb-4 w-auto h-auto object-cover"
                />
                <h3 className="text-xl font-bold text-blue-600 mb-2">Statistik Pelaporan</h3>
                <p className="text-gray-600 text-sm md:text-base">
                  Menampilkan statistik pelaporan pengguna per bulan dan per tahun.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Component */}
      <Footer />
    </div>
  );
};

export default About;
