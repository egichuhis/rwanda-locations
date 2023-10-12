import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import ProvinceCard from './ProvinceCard';
import Header from '../Layout/Header';
import { fetchDistricts } from '../../redux/features/location/locationSlice';

const bgColor = { background: '#3f62a3' };

const Provinces = () => {
  const { locations, loading, error } = useSelector((state) => state.location);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [filteredLocations, setFilteredLocations] = useState([]);

  useEffect(() => {
    if (!loading && !error) {
      setFilteredLocations(locations);
    }
  }, [loading, error, locations]);

  const handleSearchChange = (searchText) => {
    const filteredProvinces = locations.filter((province) => {
      const provinceName = Object.keys(province)[0];
      return provinceName.toLowerCase().includes(searchText.toLowerCase());
    });

    setFilteredLocations(filteredProvinces);
  };

  const handleCardClick = async (region) => {
    dispatch(fetchDistricts(region));
    navigate(`/districts/${region}`);
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
      <Header numOfLocations={locations.length} typeOfLocation="Provinces" region="Rwanda" handleSearchChange={handleSearchChange} />
      <h1
        className="fs-6 ps-1 pb-1 pt-1 mb-0 text-light"
        style={bgColor}
      >
        STATS BY PROVINCE
      </h1>
      <div className="row g-0 row-cols-2">
        {filteredLocations.map((province) => {
          const provinceName = Object.keys(province)[0];
          const districts = province[provinceName];
          return (
            <ProvinceCard
              key={provinceName}
              region={provinceName}
              numOfDistricts={districts.length}
              onClick={() => handleCardClick(provinceName)}
            />
          );
        })}
      </div>

    </div>
  );
};

export default Provinces;
