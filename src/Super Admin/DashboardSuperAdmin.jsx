import React, { useState, useEffect } from 'react';
import axios from 'axios';  // Import axios untuk mengambil data dari API
import SidebarAdmin from '../Component/SideBarSuperAdmin';

const SuperAdminDashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [users, setUsers] = useState([]);  // Menyimpan data pengguna
  const [loading, setLoading] = useState(true);  // Status loading
  const [error, setError] = useState(null);  // Status error jika ada masalah
  const [logoutMessage, setLogoutMessage] = useState('');  // State untuk notifikasi logout

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  useEffect(() => {
    // Mengambil data pengguna dari API
    axios.get('http://127.0.0.1:8000/api/user')  // URL API yang sesuai
      .then(response => {
        setUsers(response.data);  // Simpan data ke state users
        setLoading(false);  // Mengubah status loading
      })
      .catch(error => {
        setError('Error fetching users');
        setLoading(false);
      });
  }, []);  // Hanya dijalankan sekali saat komponen pertama kali dimuat

  const handleLogoutNotification = (message) => {
    setLogoutMessage(message);
    setTimeout(() => setLogoutMessage(''), 3000);  // Notifikasi hilang setelah 3 detik
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Toggle Button for Sidebar */}
      <button
        onClick={toggleSidebar}
        className="md:hidden p-4 bg-blue-500 text-white rounded fixed top-4 left-4 z-40"
      >
        {isSidebarOpen ? '✕' : '☰'}
      </button>

      <div className="flex min-h-screen">  
        <SidebarAdmin isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} onLogoutNotification={handleLogoutNotification} />
        <main className="flex-1 p-6 pt-20">
          {logoutMessage && (
            <div className="fixed top-5 left-1/2 transform -translate-x-1/2 bg-red-600 text-white p-4 rounded shadow-md">
              {logoutMessage}
            </div>
          )}
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">Dashboard Super Admin</h2>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <h3 className="text-xl font-semibold text-gray-800 px-4 py-2">List User</h3>
            
            {loading ? (
              <div className="text-center py-4">Loading...</div>
            ) : error ? (
              <div className="text-center py-4 text-red-500">{error}</div>
            ) : (
              <table className="min-w-full">
                <thead>
                  <tr className="bg-blue-500 text-white">
                    <th className="py-3 px-4 text-left font-semibold">Nama</th>
                    <th className="py-3 px-4 text-left font-semibold">Role</th>
                    <th className="py-3 px-4 text-left font-semibold">Tanggal Pembuatan</th>
                  </tr>
                </thead>
                <tbody>
                  {users.length === 0 ? (
                    <tr>
                      <td colSpan="4" className="py-4 px-4 text-center text-gray-500">
                        No users available
                      </td>
                    </tr>
                  ) : (
                    users.map((user, index) => (
                      <tr key={index} className="border-b">
                        <td className="py-4 px-4 text-left">
                          <p className="font-medium">{user.username}</p>
                          <p className="text-gray-500">{user.email}</p>
                        </td>
                        <td className="py-4 px-4 text-left">
                          <span className="bg-blue-200 text-blue-600 px-3 py-1 rounded-full text-sm font-semibold">
                            {user.role}
                          </span>
                        </td>
                        <td className="py-4 px-4 text-left">
                          {/* Format tanggal menggunakan toLocaleDateString */}
                          {new Date(user.created_at).toLocaleDateString('id-ID')} {/* Menampilkan format tanggal Indonesia */}
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

export default SuperAdminDashboard;
