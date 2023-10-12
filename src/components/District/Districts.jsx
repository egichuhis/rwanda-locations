import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import DistrictCard from './DistrictCard';
import Header from '../Layout/Header';

const bgColor = { background: '#3f62a3' };

const Districts = () => {
  const {
    districts, loading, error,
  } = useSelector((state) => state.location);
  const { region } = useParams();

  const [filteredDistricts, setFilteredDistricts] = useState([]);

  useEffect(() => {
    if (!loading && !error) {
      setFilteredDistricts(districts);
    }
  }, [loading, error, districts]);

  const handleSearchChange = (searchText) => {
    const filteredDistrictsList = districts
      .filter((district) => district.toLowerCase().includes(searchText.toLowerCase()));
    setFilteredDistricts(filteredDistrictsList);
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
      <Header numOfLocations={districts.length} typeOfLocation="Districts" region={region} handleSearchChange={handleSearchChange} />
      <h1 className="fs-6 text-light ps-1 pb-1 pt-1 mb-0" style={bgColor}>
        STATS BY DISTRICTS
      </h1>
      <div className="row g-0" style={bgColor}>
        {filteredDistricts.map((district) => (<DistrictCard key={district} district={district} />))}
      </div>
    </div>
  );
};

export default Districts;
