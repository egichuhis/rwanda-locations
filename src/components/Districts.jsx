import React from 'react';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import DistrictCard from './DistrictCard';
import Header from './Layout/Header';

const Districts = () => {
  const { districts, loading, error } = useSelector((state) => state.location);
  const location = useLocation();

  const isDistrictsPage = location.pathname === '/districts';

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
      {isDistrictsPage && (
        <>
          <Header numOfLocations={districts.length} typeOfLocation="Districts" />
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
            {districts.map((district) => (<DistrictCard key={district} district={district} />))}
          </div>
        </>
      )}
    </div>
  );
};

export default Districts;
