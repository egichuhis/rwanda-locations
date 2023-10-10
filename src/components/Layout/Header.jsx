import React from 'react';
import PropTypes from 'prop-types';
import DarkMap from '../../imgs/map_dark.png';

const Header = ({ numOfLocations, typeOfLocation, region }) => (
  <div className="card" style={{ background: '#5688e4', borderRadius: 0 }}>
    <div className="card-body">
      <div className="container">
        <div className="row" style={{ color: 'var(--bs-body-bg)' }}>
          <div className="col-6 col-md-6">
            <img src={DarkMap} alt="Rwanda Map" style={{ width: 100 }} />
          </div>
          <div className="col-6 col-md-6 align-self-center">
            <h4 style={{ fontWeight: 'bold' }}>{region}</h4>
            <h4>
              {`${numOfLocations} ${typeOfLocation}`}
              {' '}
            </h4>
          </div>
        </div>
      </div>
    </div>
  </div>
);

Header.propTypes = {
  numOfLocations: PropTypes.string.isRequired,
  typeOfLocation: PropTypes.string.isRequired,
  region: PropTypes.string.isRequired,
};

export default Header;
