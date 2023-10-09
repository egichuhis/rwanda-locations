import React from 'react';
import { useSelector } from 'react-redux';
import ProvinceCard from './ProvinceCard';

const Provinces = () => {
  const { locations, loading, error } = useSelector((state) => state.location);

  console.log('aaaa', locations);

  if (loading) {
    return <div className="loader-container">Loading...</div>;
  }

  if (error) {
    return (
      <div>
        Error:
        {error}
      </div>
    );
  }

  return (
    <div>
      <h1
        style={{
          fontSize: 15,
          background: '#34548b',
          color: 'var(--bs-body-bg)',
          paddingLeft: 5,
          paddingBottom: 5,
          paddingTop: 5,
          marginBottom: 0,
        }}
      >
        STATS BY PROVINCE
      </h1>
      <div className="row g-0 row-cols-2">
        {locations.map((location) => (
          Object.entries(location).map(([region, districts]) => (
            <ProvinceCard key={region} region={region} numOfDistricts={districts.length} />
          ))
        ))}
      </div>

    </div>
  );
};

export default Provinces;
