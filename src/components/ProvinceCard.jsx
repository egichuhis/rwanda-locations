import React from 'react';
import PropTypes from 'prop-types';
import DarkMap from '../imgs/map_dark.png';

const bgColor = { background: '#3f62a3' };

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
      <div className="card rounded-0" style={bgColor}>
        <i
          className="far fa-arrow-alt-circle-right text-light align-self-end mt-1 me-2 fs-5"
        />
        <div className="card-body">
          <div className="container">
            <div
              className="row flex-column text-light"
            >
              <div className="col-12 col-md-6">
                <img src={DarkMap} alt="dark map" width={100} />
              </div>
              <div className="col-12 col-md-6 text-end">
                <h4 className="fw-bold fs-5">{region}</h4>
                <h4 className="fs-4">{`${numOfDistricts} Districts`}</h4>
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
