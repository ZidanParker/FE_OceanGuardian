import React, { useState, useContext } from "react";
import axios from "axios";
import HeaderPelaporan from "../Component/HeaderPelaporan";
import { ReportContext } from "../Component/ReportContext";
import ProvinsiList from "../API/ProvinsiList";

function Pelaporan() {
  const { addReport } = useContext(ReportContext);
  const [name, setName] = useState("");
  const [province, setProvince] = useState("");
  const [locationDetail, setLocationDetail] = useState("");
  const [reportType, setReportType] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);

  // Fungsi untuk menangani perubahan pilihan provinsi dari ProvinsiList
  const handleProvinsiSelect = (selectedProvinsi) => {
    setProvince(selectedProvinsi); // Set nama provinsi
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedImage(file);
    }
  };

  const handleSubmit = async () => {
    if (name && province && locationDetail && reportType && selectedImage) {
      const formData = new FormData();
      formData.append("nama", name);
      formData.append("provinsi", province); // Kirim nama provinsi, bukan ID
      formData.append("lokasi", locationDetail);
      formData.append("jenis_laporan", reportType);
      formData.append("gambar", selectedImage);

      try {
        const response = await axios.post("http://127.0.0.1:8000/api/pelaporan", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });

        if (response.data.message === "Laporan berhasil disimpan") {
          const newReport = {
            type: reportType === "Pembuangan Sampah Laut" ? "sampah" : "ikan",
            description: `${name} melaporkan di ${province}, ${locationDetail}`,
            time: "Baru saja", 
            image: URL.createObjectURL(selectedImage),
          };

          addReport(newReport);

          alert("Laporan berhasil dikirim!");

          setName("");
          setProvince("");
          setLocationDetail("");
          setReportType("");
          setSelectedImage(null);
        }
      } catch (error) {
        console.error("Error submitting report:", error);
        alert("Terjadi kesalahan saat mengirim laporan.");
      }
    } else {
      alert("Lengkapi semua data sebelum mengirim.");
    }
  };

  return (
    <div className="bg-white min-h-screen flex flex-col items-center">
      <div className="fixed top-0 left-0 right-0 z-10">
        <HeaderPelaporan />
      </div>

      <div className="mt-28 mb-20">
        <div className="bg-white rounded-lg shadow-lg p-10 mt-6 w-full max-w-5xl flex flex-col items-center">
          <h2 className="text-2xl font-bold text-center mb-4">PELAPORAN</h2>

          <div className="w-full flex flex-col md:flex-row md:justify-between gap-4">
            <div className="bg-white w-full md:w-1/2 p-6 rounded-lg shadow-md">
              <label className="block font-medium mb-2">Nama</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="border border-gray-300 rounded w-full py-2 px-3 mb-4"
              />

              <label className="block font-medium mb-2">Provinsi</label>
              <ProvinsiList onProvinsiSelect={handleProvinsiSelect} /> {/* Kirim nama provinsi */}

              <label className="block font-medium mb-2">Lokasi Detail</label>
              <input
                type="text"
                value={locationDetail}
                onChange={(e) => setLocationDetail(e.target.value)}
                className="border border-gray-300 rounded w-full py-2 px-3 mb-4"
              />

              <label className="block font-medium mb-2">Jenis Laporan</label>
              <select
                value={reportType}
                onChange={(e) => setReportType(e.target.value)}
                className="border border-gray-300 rounded w-full py-2 px-3 mb-4"
              >
                <option value="">Pilih Jenis Laporan</option>
                <option>Pembuangan Sampah Laut</option>
                <option>Penangkapan Ikan Illegal</option>
              </select>
            </div>

            <div className="w-full md:w-1/2 flex flex-col items-center">
              <div className="bg-gray-300 w-full h-64 flex items-center justify-center rounded-lg mb-2">
                {selectedImage ? (
                  <img
                    src={URL.createObjectURL(selectedImage)}
                    alt="Preview"
                    className="h-full object-cover rounded-lg"
                  />
                ) : (
                  <span className="text-gray-700">Gambar belum dipilih</span>
                )}
              </div>
              <div className="w-full text-center">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="border border-gray-300 rounded w-full px-3 py-2"
                />
              </div>
            </div>
          </div>

          <div className="w-full flex justify-end mt-6">
            <button
              className="bg-red-500 text-white px-6 py-2 rounded-md mr-2"
              onClick={() => setSelectedImage(null)}
            >
              HAPUS
            </button>
            <button
              className="bg-yellow-300 text-black px-6 py-2 rounded-md"
              onClick={handleSubmit}
            >
              KIRIM
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pelaporan;
