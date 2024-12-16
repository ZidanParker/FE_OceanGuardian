import React, { useEffect, useState } from 'react';
import axios from 'axios';
import API_KEY from '../config';

const ProvinsiList = ({ onProvinsiSelect }) => {
  const [provinsiList, setProvinsiList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProvinsi = async () => {
      try {
        const response = await axios.get('https://api.binderbyte.com/wilayah/provinsi', {
          params: { api_key: API_KEY },
        });
        setProvinsiList(response.data.value);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };
    fetchProvinsi();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <select
        onChange={(e) => onProvinsiSelect(e.target.value)}
        style={{
          border: '1px solid gray', // Warna dan ketebalan garis tepi
          borderRadius: '4px', // Sudut melengkung
          padding: '8px', // Jarak dalam untuk tampilan yang lebih baik
        }}
      >
        <option value="">Pilih Provinsi</option>
        {provinsiList.map((provinsi) => (
          <option key={provinsi.id} value={provinsi.id}>
            {provinsi.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ProvinsiList;
