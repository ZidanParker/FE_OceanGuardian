import React from 'react';
import SidebarSuperAdmin from '../Component/SideBarSuperAdmin';

const HelpSuperAdmin = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <SidebarSuperAdmin />

      {/* Main Content */}
      <main className="flex-1 p-6 pt-20">
        <h2 className="text-2xl font-semibold text-blue-600 mb-4">Bantuan & Dukungan</h2>
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Selamat datang di Pusat Bantuan</h3>
          <p className="mb-4">
            Bagian ini dirancang untuk membantu Anda dengan tugas administrasi. Berikut adalah beberapa panduan dan pertanyaan umum:
          </p>
          
          <h4 className="font-semibold mt-4">1. Tinjauan Dasbor</h4>
          <p>
            Dasbor memberikan gambaran cepat tentang aktivitas pengguna dan statistik sistem. Anda dapat menavigasi melalui berbagai bagian menggunakan sidebar.
          </p>
          
          <h4 className="font-semibold mt-4">2. Mengelola Pengguna</h4>
          <p>
            Untuk mengelola pengguna, navigasikan ke bagian "Daftar Pengguna". Di sini, Anda dapat melihat semua pengguna terdaftar, mengedit informasi mereka, atau menghapus mereka dari sistem.
          </p>
          
          <h4 className="font-semibold mt-4">3. Melaporkan Masalah</h4>
          <p>
            Jika Anda mengalami masalah, silakan hubungi tim dukungan melalui halaman "Hubungi Kami" atau langsung melalui email di support@example.com.
          </p>

          <h4 className="font-semibold mt-4">4. Pertanyaan yang Sering Diajukan (FAQ)</h4>
          <ul className="list-disc list-inside">
            <li>Bagaimana cara mereset kata sandi saya?</li>
            <li>Apa yang harus saya lakukan jika tidak bisa mengakses sistem?</li>
            <li>Bagaimana cara memperbarui peran pengguna?</li>
          </ul>
        </div>
      </main>
    </div>
  );
};

export default HelpSuperAdmin;
