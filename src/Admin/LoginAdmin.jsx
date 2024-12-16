import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { AiOutlineCheckCircle } from 'react-icons/ai';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [notifMessage, setNotifMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://127.0.0.1:8000/api/login', {
        username,
        password,
      });

      if (response.data.access_token) {
        const { access_token, role } = response.data;

        if (role === 'admin') {
          localStorage.setItem('token', access_token);
          setIsLoggedIn(true);
          setNotifMessage('Berhasil login sebagai admin');
          setTimeout(() => {
            navigate('/dashboardadmin');
          }, 2000);
        } else {
          setError('Akses ditolak: Anda bukan admin');
        }
      }
    } catch (error) {
      if (error.response) {
        setError(error.response.data.error);
      } else {
        setError('Terjadi kesalahan saat login');
      }
    }
  };

  return (
    <div className="flex flex-col min-h-screen items-center bg-white">
      {isLoggedIn && (
        <div className="fixed top-5 left-1/2 transform -translate-x-1/2 bg-green-500 text-white p-4 rounded shadow-md flex items-center justify-center">
          <AiOutlineCheckCircle className="text-white h-8 w-8 animate-checkmark" />
          <span className="ml-2">{notifMessage}</span>
        </div>
      )}

      {error && (
        <div className="fixed top-5 left-1/2 transform -translate-x-1/2 bg-red-500 text-white p-4 rounded shadow-md">
          <span>{error}</span>
        </div>
      )}

      <div className="w-full flex flex-1 flex-col md:flex-row">
        <div className="bg-blue-500 flex flex-col items-center py-4 w-full md:w-1/4">
          <img
            src="src/assets/Logo.png"
            alt="Ocean Guardian Logo"
            className="h-16"
          />
        </div>

        <div className="flex items-center justify-center bg-white w-full md:w-3/4 pt-8 md:pt-0">
          <div className="flex max-w-3xl w-full bg-white shadow-2xl rounded-lg overflow-hidden">
            <div className="hidden md:block w-1/2">
              <img
                src="src/assets/algae.png"
                alt="Coral Reef"
                className="h-full w-full object-cover rounded-l-lg"
              />
            </div>

            <div className="w-full md:w-1/2 p-12 md:p-16">
              <h2 className="text-3xl font-bold text-gray-900 text-center">LOGIN</h2>
              <form className="mt-8 space-y-8" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
                    Username
                  </label>
                  <div className="mt-2">
                    <input
                      id="username"
                      name="username"
                      type="text"
                      required
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      className="block w-full rounded-md border-0 py-2 pl-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-base"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                    Password
                  </label>
                  <div className="mt-2">
                    <input
                      id="password"
                      name="password"
                      type="password"
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="block w-full rounded-md border-0 py-2 pl-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-base"
                    />
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    className="flex w-full justify-center rounded-md bg-blue-600 px-4 py-2 text-base font-semibold leading-6 text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                  >
                    LOGIN
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
