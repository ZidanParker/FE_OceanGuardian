import React, { useEffect, useState } from 'react';
import SidebarAdmin from '../Component/SideBarAdmin';

const DokumentasiAdmin = () => {
  const [pelaporans, setPelaporans] = useState([]);

  // Memanggil API untuk mendapatkan data pelaporan
  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/pelaporan')
      .then((response) => response.json())
      .then((data) => setPelaporans(data))
      .catch((error) => console.error('Error fetching pelaporan data:', error));
  }, []);

  // Fungsi untuk menangani perubahan status
  const handleStatusChange = (id, newStatus) => {
    fetch(`http://127.0.0.1:8000/api/pelaporan/${id}`, {
      method: 'PUT', // Metode PUT untuk pembaruan
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ status: newStatus }), // Mengirim status baru
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.message === 'Laporan berhasil diupdate') {
          // Update status di state setelah berhasil diupdate
          setPelaporans((prevPelaporans) =>
            prevPelaporans.map((pelaporan) =>
              pelaporan.id_pelaporan === id
                ? { ...pelaporan, status: newStatus } // Update status di state
                : pelaporan
            )
          );
        }
      })
      .catch((error) => console.error('Error updating status:', error));
  };

  // Fungsi untuk menghapus laporan
  const handleDelete = (id) => {
    fetch(`http://127.0.0.1:8000/api/pelaporan/${id}`, {
      method: 'DELETE',
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.message === 'Laporan berhasil dihapus') {
          // Hapus laporan dari state setelah berhasil dihapus
          setPelaporans((prevPelaporans) =>
            prevPelaporans.filter((pelaporan) => pelaporan.id_pelaporan !== id)
          );
        }
      })
      .catch((error) => console.error('Error deleting laporan:', error));
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <SidebarAdmin />

      {/* Main Content */}
      <main className="flex-1 p-6 pt-20">
        <h2 className="text-2xl font-semibold text-blue-600 mb-4">Dokumentasi Laporan</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-20">
          {pelaporans.map((pelaporan) => (
            <div
              key={pelaporan.id_pelaporan}
              className="bg-gray-200 rounded-lg shadow-md p-4 flex flex-col items-center justify-center"
            >
              {/* Menampilkan gambar jika ada */}
              {pelaporan.gambar_url && (
                <img
                  src={pelaporan.gambar_url} // Gambar yang diambil dari URL yang telah dikirim
                  alt={`Image for ${pelaporan.nama}`}
                  className="w-40 h-40 mb-4 rounded-md object-cover"
                />
              )}

              {/* Menampilkan Nama, Provinsi, Lokasi, dan Jenis Laporan */}
              <p className="text-center font-medium text-lg">{pelaporan.nama}</p>
              <p className="text-center text-sm text-gray-600">Provinsi: {pelaporan.provinsi}</p>
              <p className="text-center text-sm text-gray-600">Lokasi: {pelaporan.lokasi}</p>
              <p className="text-center text-sm text-gray-600">Jenis Laporan: {pelaporan.jenis_laporan}</p>

              {/* Dropdown untuk memilih status laporan */}
              <div className="text-center mt-4">
                <select
                  value={pelaporan.status}
                  onChange={(e) => handleStatusChange(pelaporan.id_pelaporan, e.target.value)}
                  className="px-4 py-2 border rounded-md"
                >
                  <option value="Belum Diproses">Belum Diproses</option>
                  <option value="Sedang Diproses">Sedang Diproses</option>
                  <option value="Selesai Diproses">Selesai Diproses</option>
                </select>
              </div>

              {/* Menampilkan Status Laporan */}
              <p className="text-center text-sm mt-2">
                <span className={`px-3 py-1 rounded-full ${getStatusClass(pelaporan.status)}`}>
                  {pelaporan.status}
                </span>
              </p>

              {/* Tombol Delete */}
              <button
                onClick={() => handleDelete(pelaporan.id_pelaporan)}
                className="mt-4 text-red-500 hover:text-red-700"
              >
                Hapus Laporan
              </button>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

// Fungsi untuk memberikan kelas berdasarkan status laporan
const getStatusClass = (status) => {
  switch (status) {
    case 'Belum Diproses':
      return 'bg-red-500 text-white'; // Status 'Belum Diproses' dengan warna merah
    case 'Sedang Diproses':
      return 'bg-yellow-500 text-white'; // Status 'Sedang Diproses' dengan warna kuning
    case 'Selesai Diproses':
      return 'bg-green-500 text-white'; // Status 'Selesai Diproses' dengan warna hijau
    default:
      return 'bg-gray-500 text-white'; // Default jika status tidak dikenal
  }
};

export default DokumentasiAdmin;
