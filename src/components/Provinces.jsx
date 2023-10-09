import React from 'react';
import ProvinceCard from './ProvinceCard';

const Provinces = () => (
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
      <ProvinceCard />
    </div>

  </div>
);

export default Provinces;
