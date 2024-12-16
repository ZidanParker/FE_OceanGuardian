import React, { useState } from 'react';
import logo from '../assets/logo.png';
import dashboardIcon from '../assets/dashboard.png';
import dokumentasiIcon from '../assets/dokumentasi.png';
import helpIcon from '../assets/help.png';
import { FaSignOutAlt } from 'react-icons/fa'; // Mengimpor ikon logout
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const SidebarSuperAdmin = ({ isOpen, toggleSidebar, onLogoutNotification }) => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await axios.post('http://127.0.0.1:8000/api/logout', {}, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });

      localStorage.removeItem('token');

      // Panggil fungsi dari props untuk menampilkan notifikasi logout
      if (onLogoutNotification) {
        onLogoutNotification('Logout berhasil!');
      }

      setTimeout(() => {
        navigate('/loginsuperadmin');
      }, 2000);
    } catch (error) {
      console.error('Logout failed', error);
    }
  };

  return (
    <aside className={`fixed inset-y-0 left-0 md:static md:w-64 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 bg-blue-500 text-white p-6 flex flex-col transition-transform duration-200 ease-in-out z-50`}>
      <button
        className="md:hidden text-white absolute top-4 right-4"
        onClick={toggleSidebar}
      >
        ✕
      </button>
      <div className="flex justify-center mb-6">
        <img src={logo} alt="Logo" className="h-16" />
      </div>
      <nav className="flex flex-col space-y-4 flex-grow">
        <a href="/dashboardsuperadmin" className="flex items-center space-x-2 px-4 py-2 hover:bg-blue-600 rounded-md">
          <img src={dashboardIcon} alt="Dashboard Icon" className="w-6 h-6" />
          <span>Dashboard</span>
        </a>
        <a href="/dokumentasisuperadmin" className="flex items-center space-x-2 px-4 py-2 hover:bg-blue-600 rounded-md">
          <img src={dokumentasiIcon} alt="Dokumentasi Laporan Icon" className="w-6 h-6" />
          <span>Dokumentasi</span>
        </a>
        <a href="/helpsuperadmin" className="flex items-center space-x-2 px-4 py-2 hover:bg-blue-600 rounded-md">
          <img src={helpIcon} alt="Help Icon" className="w-6 h-6" />
          <span>Help</span>
        </a>
        <button
          onClick={handleLogout}
          className="flex items-center space-x-2 px-4 py-2 mt-6 hover:bg-blue-600 rounded-md"
        >
          <FaSignOutAlt className="w-6 h-6" />
          <span>Logout</span>
        </button>
      </nav>
    </aside>
  );
};

export default SidebarSuperAdmin;
