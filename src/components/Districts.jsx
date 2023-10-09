import React from 'react';
import DistrictCard from './DistrictCard';

const Districts = () => (
  <div>
    <h1 style={{
      fontSize: 15,
      background: '#34548b',
      color: 'var(--bs-body-bg)',
      paddingLeft: 5,
      paddingBottom: 5,
      paddingTop: 5,
      marginBottom: 0,
    }}
    >
      STATS BY DISTRICTS
    </h1>
    <div className="row g-0" style={{ background: '#3f62a3' }}>
      <DistrictCard />
    </div>
  </div>
);

export default Districts;
