import React from 'react';
import PropTypes from 'prop-types';
import DarkMap from '../imgs/map_dark.png';

const ProvinceCard = ({ region, numOfDistricts, onClick }) => {
  const handleCardClick = (event) => {
    if (event.type === 'click' || (event.type === 'keydown' && event.key === 'Enter')) {
      onClick();
    }
  };

  return (
    <div
      className="col"
      role="button"
      tabIndex="0"
      onClick={handleCardClick}
      onKeyDown={handleCardClick}
      aria-label={`Select ${region}`}
    >
      <div className="card" style={{ background: '#3f62a3', borderRadius: 0 }}>
        <i
          className="far fa-arrow-alt-circle-right align-self-end"
          style={{
            color: 'var(--bs-body-bg)',
            paddingTop: 0,
            marginTop: 5,
            marginRight: 5,
            fontSize: 18,
          }}
        />
        <div className="card-body">
          <div className="container">
            <div
              className="row flex-column"
              style={{ color: 'var(--bs-body-bg)' }}
            >
              <div className="col-12 col-md-6">
                <img src={DarkMap} alt="dark map" style={{ width: 100 }} />
              </div>
              <div className="col-12 col-md-6" style={{ textAlign: 'right' }}>
                <h4 style={{ fontWeight: 'bold', fontSize: 18 }}>{region}</h4>
                <h4 style={{ fontSize: 16 }}>{`${numOfDistricts} Districts`}</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

ProvinceCard.propTypes = {
  region: PropTypes.string.isRequired,
  numOfDistricts: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ProvinceCard;
