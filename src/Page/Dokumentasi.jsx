import React, { useContext } from 'react';
import HeaderDokumentasi from '../Component/HeaderDokumentasi';
import { ReportContext } from '../Component/ReportContext';

const DocumentationPage = () => {
  const { reports } = useContext(ReportContext);
  return (
    <div className="bg-white min-h-screen flex flex-col">
      <HeaderDokumentasi />
      <div className="min-h-screen bg-gray-100 p-8 py-24">
        <h2 className="text-2xl font-bold text-center mb-6">Dokumentasi Laporan</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {reports.length === 0 ? (
            <p className="col-span-full text-center text-gray-600">Belum ada laporan yang diunggah.</p>
          ) : (
            reports.map((report, index) => (
              <div key={index} className="relative bg-white shadow-lg rounded-lg overflow-hidden">
                <img src={report.image} alt={`Laporan ${index + 1}`} className="w-full h-64 object-cover" />
                <div className="p-5">
                  <p><strong>Nama:</strong> {report.name}</p>
                  <p><strong>Lokasi:</strong> {report.location}</p>
                  <p><strong>Jenis Laporan:</strong> {report.reportType}</p>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default DocumentationPage;
