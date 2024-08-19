import React, { useState, useEffect } from 'react';
import axios from 'axios';
const CatData = () => {
  const [cats, setCats] = useState([]);
  useEffect(() => {
    // Ganti dengan URL API yang sesuai
    const fetchData = async () => {
      const result = await axios.get('/api/cats');
      setCats(result.data);
    };
    fetchData();
  }, []);
  return (
    <div className="cat-data">
      <h2>Data Kucing</h2>
      <table>
        <thead>
          <tr>
            <th>Nama</th>
            <th>Ras</th>
            <th>Umur</th>
            {/* Tambahkan kolom lain sesuai kebutuhan */}
          </tr>
        </thead>
        <tbody>
          {cats.map((cat) => (
            <tr key={cat.id}>
              <td>{cat.name}</td>
              <td>{cat.breed}</td>
              <td>{cat.age}</td>
              {/* Tampilkan data lainnya */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default CatData;