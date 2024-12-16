import React, { useState } from 'react';
import SidebarAdmin from '../Component/SideBarAdmin';

const SettingAdmin = () => {
  const [profile, setProfile] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile((prevProfile) => ({
      ...prevProfile,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logika untuk menyimpan pengaturan bisa ditambahkan di sini
    alert('Pengaturan telah disimpan!');
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <SidebarAdmin />

      {/* Main Content */}
      <main className="flex-1 p-6 pt-20">
        <h2 className="text-2xl font-semibold text-blue-600 mb-4">Pengaturan Admin</h2>
        <div className="bg-white rounded-lg shadow-lg p-4">
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="name">
                Nama
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={profile.name}
                onChange={handleChange}
                className="border rounded w-full py-2 px-3 text-gray-700"
                placeholder="Masukkan nama Anda"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={profile.email}
                onChange={handleChange}
                className="border rounded w-full py-2 px-3 text-gray-700"
                placeholder="Masukkan email Anda"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="password">
                Kata Sandi
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={profile.password}
                onChange={handleChange}
                className="border rounded w-full py-2 px-3 text-gray-700"
                placeholder="Masukkan kata sandi baru"
                required
              />
            </div>

            <button
              type="submit"
              className="bg-blue-500 text-white font-semibold py-2 px-4 rounded"
            >
              Simpan Pengaturan
            </button>
          </form>
        </div>
      </main>
    </div>
  );
};

export default SettingAdmin;
