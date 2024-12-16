import React from 'react';
import { FaEnvelope, FaPhone, FaBuilding } from 'react-icons/fa';
import Footer from "../Component/Footer";
import HeaderKontak from "../Component/HeaderKontak";

const ContactPage = () => {
  return (
    <div className="bg-white min-h-screen flex flex-col">
        <HeaderKontak/>

        {/* Contact Content */}
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center text-gray-700">Hubungi Kami</h2>

        <div className="space-y-4 text-gray-600">
          <div className="flex items-center space-x-3">
            <FaEnvelope className="text-blue-500" />
            <div>
              <p className="font-semibold">Email</p>
              <p>oceanguardian@gmail.com</p>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <FaBuilding className="text-blue-500" />
            <div>
              <p className="font-semibold">Nomor Perusahaan</p>
              <p>123 4567 890</p>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <FaPhone className="text-blue-500" />
            <div>
              <p className="font-semibold">Nomor HP</p>
              <p>+62 812 3456 7890</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Footer */}
    <Footer/>
    </div>
  );
};

export default ContactPage;
