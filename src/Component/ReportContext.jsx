import React, { createContext, useState } from 'react';
import SampahImage from '../assets/sampah.png';
import IkanImage from '../assets/ikan.png';

export const ReportContext = createContext();

export const ReportProvider = ({ children }) => {
  const initialDummyReports = [
    {
      name: "Zakaria Zidan",
      location: "Pacitan",
      reportType: "Pembuangan sampah Laut",
      image: SampahImage
    },
    {
      name: "Rafli Ramadhan",
      location: "Jogja",
      reportType: "Penangkapan Ikan Ilegal",
      image: IkanImage
    },
    {
      name: "Muhammad Iqbal",
      location: "Bandung",
      reportType: "Pembuangan sampah Laut",
      image: SampahImage
    }
  ];

  const [reports, setReports] = useState(initialDummyReports);

  const addReport = (report) => {
    console.log("Adding report:", report);
    setReports((prevReports) => [...prevReports, report]);
    console.log("Updated reports list:", [...reports, report]);
  };

  return (
    <ReportContext.Provider value={{ reports, addReport }}>
      {children}
    </ReportContext.Provider>
  );
};