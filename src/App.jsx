import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ReportProvider } from './Component/ReportContext';

import Register from './Page/Register';
import Login from './Page/Login';
import Dashboard from './Page/Dashboard';
import Landing from './Page/Landing';
import Pelaporan from './Page/Pelaporan';
import Dokumentasi from './Page/Dokumentasi';
import Kontak from './Page/Kontak';
import About from './Page/About';

import LoginAdmin from './Admin/LoginAdmin';
import DashboardAdmin from './Admin/DashboardAdmin';
import HelpAdmin from './Admin/HelpAdmin';
import DokumentasiAdmin from './Admin/DokumentasiAdmin';
import SettingAdmin from './Admin/SettingAdmin';

import LoginSuperAdmin from './Super Admin/LoginSuperAdmin';
import RegisterSuperAdmin from './Super Admin/RegisterSuperAdmin';
import DashboardSuperAdmin from './Super Admin/DashboardSuperAdmin';
import HelpSuperAdmin from './Super Admin/HelpSuperAdmin';
import DokumentasiSuperAdmin from './Super Admin/DokumentasiSuperAdmin';
import SettingSuperAdmin from './Super Admin/SettingSuperAdmin';

export default function App() {
  return (
    <ReportProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/register" element={<Register />} />
          <Route path="/pelaporan" element={<Pelaporan />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dokumentasi" element={<Dokumentasi />} />
          <Route path="/kontak" element={<Kontak />} />
          <Route path="/about" element={<About />} />

          <Route path="/loginadmin" element={<LoginAdmin />} />
          <Route path="/dashboardadmin" element={<DashboardAdmin />} />
          <Route path="/helpadmin" element={<HelpAdmin />} />
          <Route path="/dokumentasiadmin" element={<DokumentasiAdmin />} />
          <Route path="/settingadmin" element={<SettingAdmin />} />

          <Route path="/loginsuperadmin" element={<LoginSuperAdmin />} />
          <Route path="/registersuperadmin" element={<RegisterSuperAdmin />} />
          <Route path="/dashboardsuperadmin" element={<DashboardSuperAdmin />} />
          <Route path="/helpsuperadmin" element={<HelpSuperAdmin />} />
          <Route path="/dokumentasisuperadmin" element={<DokumentasiSuperAdmin />} />
          <Route path="/settingsuperadmin" element={<SettingSuperAdmin />} />
        </Routes>
      </Router>
    </ReportProvider>
  );
}
