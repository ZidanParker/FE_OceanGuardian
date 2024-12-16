import React from "react";

const Footer = () => {
    return (
        <footer className="bg-blue-500 text-white py-10 shadow-lg">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 px-6">
                
                {/* Logo and description */}
                <div className="flex flex-col items-center lg:items-center text-center lg:text-center mb-4">
                    <img src="src/assets/Logo.png" alt="Ocean Guardian Logo" className="h-auto w-auto mb-4" />
                    <p className="max-w-xs">
                        Ocean Guardian - Sistem Pelaporan Sampah Laut dan Penangkapan Ikan Secara Illegal
                    </p>
                </div>

                {/* Company links */}
                <div className="text-center lg:text-left mb-4 px-40">
                    <h3 className="font-semibold mb-2">Company</h3>
                    <ul className="space-y-3">
                        <li><a href="/about" className="hover:underline">Tentang Kami</a></li>
                        <li><a href="kontak" className="hover:underline">Kontak</a></li>
                    </ul>
                </div>

                {/* Region info */}
                <div className="text-center lg:text-left mb-4 px-28">
                    <h3 className="font-semibold mb-2">Region</h3>
                    <p>Indonesia</p>
                </div>

                {/* Alamat info */}
                <div className="text-center lg:text-left mb-4 px-2">
                    <h3 className="font-semibold">Alamat</h3>
                    <p>Jalan Yang Terbaik No.2</p>
                </div>

                {/* Social media links */}
                <div className="text-center lg:text-left mb-4">
                    <h3 className="font-semibold mb-2">Sosial Media Kami :</h3>
                    <div className="flex justify-center lg:justify-start space-x-2 mt-2">
                        <a href="#" className="bg-blue-600 px-10 py-2 rounded-2xl">
                            <i className="fab fa-facebook-f text-white"></i>
                        </a>
                        <a href="#" className="bg-red-500 px-10 py-2 rounded-2xl">
                            <i className="fab fa-instagram text-white"></i>
                        </a>
                        <a href="#" className="bg-black px-10 py-2 rounded-2xl">
                            <i className="fab fa-twitter text-white"></i>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
