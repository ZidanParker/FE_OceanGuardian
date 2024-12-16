import React, { useState, useEffect } from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import HeaderDashboard from "../Component/HeaderDashboard";
import Footer from "../Component/Footer";

const images = [
  "src/assets/image1.jpg",
  "src/assets/image2.jpg",
  "src/assets/image3.jpg",
  "src/assets/image4.webp",
];

const Dashboard = () => {
  const [sampahTimeFrame, setSampahTimeFrame] = useState("monthly");
  const [ikanTimeFrame, setIkanTimeFrame] = useState("monthly");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [realTimeReports, setRealTimeReports] = useState([]);
  const [statistikPelaporan, setStatistikPelaporan] = useState([]);
  const [ikanStatistik, setIkanStatistik] = useState([]);
  const [sampahStatistik, setSampahStatistik] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Fetch real-time reports data
    fetch('http://127.0.0.1:8000/api/pelaporan')
      .then((response) => response.json())
      .then((data) => {
        setRealTimeReports(data);
      })
      .catch((error) => console.error('Error fetching pelaporan data:', error));

    // Fetch statistik pelaporan data
    fetch('http://127.0.0.1:8000/api/statistik-pelaporan')
      .then((response) => response.json())
      .then((data) => {
        setStatistikPelaporan(data);

        const ikan = data.filter((item) => item.jenis_laporan === 'Penangkapan Ikan Illegal');
        const sampah = data.filter((item) => item.jenis_laporan === 'Pembuangan Sampah Laut');

        setIkanStatistik(ikan);
        setSampahStatistik(sampah);
      })
      .catch((error) => console.error('Error fetching statistik pelaporan data:', error));
  }, []);

  const handleStatusChange = (id, newStatus) => {
    setRealTimeReports((prevReports) =>
      prevReports.map((report) =>
        report.id_pelaporan === id
          ? { ...report, status: newStatus }
          : report
      )
    );
  };

  const getStatusClass = (status) => {
    switch (status) {
      case "Belum Diproses":
        return "bg-red-500";
      case "Sedang Diproses":
        return "bg-yellow-500";
      case "Selesai Diproses":
        return "bg-green-500";
      default:
        return "bg-gray-500";
    }
  };

  return (
    <div className="bg-white min-h-screen flex flex-col">
      <HeaderDashboard />

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
        <div className="bg-blue-500 mt-16 md:mt-32 py-20 md:py-36">
          <h2 className="text-white text-2xl md:text-3xl font-bold text-center mb-16 md:mb-28">FITUR-FITUR</h2>
          <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 px-4">
            {[ 
              { src: "src/assets/laporan.png", title: "Laporan Real-Time", description: "Fitur ini menyediakan informasi dari laporan pengguna lain secara real-time." },
              { src: "src/assets/ikan.png", title: "Pelaporan Penangkapan Ikan Ilegal", description: "Fitur ini memungkinkan pengguna untuk melaporkan adanya penangkapan ikan ilegal yang mereka temukan." },
              { src: "src/assets/sampah.png", title: "Pelaporan Sampah Laut", description: "Fitur ini memungkinkan pengguna untuk melaporkan adanya sampah laut yang mereka temukan." },
              { src: "src/assets/statistik.png", title: "Statistik Pelaporan", description: "Fitur ini memungkinkan pengguna melihat statistik pelaporan per tahun maupun per bulan." },
            ].map((feature, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 text-center flex flex-col">
                <img src={feature.src} alt={feature.title} className="mx-auto mb-4 w-full max-w-xs h-auto object-cover" />
                <h3 className="text-lg md:text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm md:text-base">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white py-20 md:py-36">
          <h2 className="text-black text-2xl md:text-3xl font-semibold text-center mb-16 md:mb-28">
            STATISTIK PELAPORAN
          </h2>

          {/* Penangkapan Ikan Illegal Chart */}
          <div className="container mx-auto mb-16">
            <h3 className="text-xl text-center mb-4">Statistik Penangkapan Ikan Illegal</h3>
            <div className="bg-blue-500 p-6 rounded-lg px-4"> {/* Added padding left and right */}
              <ResponsiveContainer width="100%" height={350}>
                <LineChart data={ikanStatistik}>
                  <XAxis dataKey="date" stroke="#4B5563" />
                  <YAxis
                    stroke="#4B5563"
                    tickFormatter={(value) => Math.floor(value)}  // Round to whole number
                    tickCount={5}  // Optional: controls the number of ticks
                    domain={['auto', 'auto']}  // Adjust domain to fit whole numbers
                  />
                  <Tooltip contentStyle={{ backgroundColor: "#1f2937", borderRadius: "8px", color: "#fff" }} />
                  <Line type="monotone" dataKey="count" stroke="#2563EB" strokeWidth={3} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Pembuangan Sampah Laut Chart */}
          <div className="container mx-auto mb-16">
            <h3 className="text-xl text-center mb-4">Statistik Pembuangan Sampah Laut</h3>
            <div className="bg-blue-500 p-6 rounded-lg px-4"> {/* Added padding left and right */}
              <ResponsiveContainer width="100%" height={350}>
                <LineChart data={sampahStatistik}>
                  <XAxis dataKey="date" stroke="#4B5563" />
                  <YAxis
                    stroke="#4B5563"
                    tickFormatter={(value) => Math.floor(value)}  // Round to whole number
                    tickCount={5}  // Optional: controls the number of ticks
                    domain={['auto', 'auto']}  // Adjust domain to fit whole numbers
                  />
                  <Tooltip contentStyle={{ backgroundColor: "#1f2937", borderRadius: "8px", color: "#fff" }} />
                  <Line type="monotone" dataKey="count" stroke="#FF5733" strokeWidth={3} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        <main className="flex-1 p-6 pt-20">
          <h2 className="text-3xl font-bold text-black bold text-center mb-16">LAPORAN REAL-TIME</h2>
          <div className="relative h-60 mx-5 lg:mx-24 mb-10 overflow-hidden rounded-3xl">
            <img
              src={images[currentImageIndex]}
              alt="Carousel"
              className="absolute w-full h-full object-cover transition-opacity duration-500 ease-in-out"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
            {realTimeReports.map((pelaporan) => (
              <div
                key={pelaporan.id_pelaporan}
                className="bg-blue-200 mb-20 rounded-lg shadow-md p-4 max-w-xs mx-auto flex flex-col items-center justify-center"
              >
                {pelaporan.gambar_url && (
                  <img
                    src={pelaporan.gambar_url}
                    alt={`Image for ${pelaporan.nama}`}
                    className="w-60 h-40 mb-4 rounded-md object-cover"
                  />
                )}
                <p className="text-center font-medium text-lg">{pelaporan.nama}</p>
                <p className="text-center text-sm text-gray-700">Provinsi: {pelaporan.provinsi}</p>
                <p className="text-center text-sm text-gray-700">Lokasi: {pelaporan.lokasi}</p>
                <p className="text-center text-sm text-gray-700">Jenis Laporan: {pelaporan.jenis_laporan}</p>

                <p className="text-center text-sm mt-2">
                  <span className={`px-3 py-1 rounded-full ${getStatusClass(pelaporan.status)}`}>
                    {pelaporan.status}
                  </span>
                </p>
              </div>
            ))}
          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
};

export default Dashboard;
