import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import ProvinceCard from './ProvinceCard';
import Header from './Layout/Header';
import { fetchDistricts } from '../redux/features/location/locationSlice';

const Provinces = () => {
  const { locations, loading, error } = useSelector((state) => state.location);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleCardClick = async (region) => {
    dispatch(fetchDistricts(region));
    navigate('/districts');
  };

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
      <Header numOfLocations={locations.length} typeOfLocation="Provinces" />
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
            <ProvinceCard
              key={region}
              region={region}
              numOfDistricts={districts.length}
              onClick={() => handleCardClick(region)}
            />
          ))
        ))}
      </div>

    </div>
  );
};

export default Provinces;
