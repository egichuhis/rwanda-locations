import React from 'react';
import PropTypes from 'prop-types';
import DarkMap from '../../imgs/map_dark.png';
import NavBar from './NavBar';
import Search from './Search';

const bgColor = { background: '#5688e4' };

const Header = ({
  numOfLocations, typeOfLocation, region, handleSearchChange,
}) => (
  <>
    <NavBar />
    <div className="card rounded-0" style={bgColor}>
      <div className="card-body">
        <div className="container">
          <div className="row text-light">
            <div className="col-6 col-md-6">
              <img src={DarkMap} alt="Rwanda Map" width={100} />
            </div>
            <div className="col-6 col-md-6 align-self-center">
              <h4 className="fw-bold">{region}</h4>
              <h4>
                {`${numOfLocations} ${typeOfLocation}`}
                {' '}
              </h4>
            </div>
            <Search onSearchChange={handleSearchChange} />
          </div>
        </div>
      </div>
    </div>
  </>
);

Header.propTypes = {
  numOfLocations: PropTypes.string.isRequired,
  typeOfLocation: PropTypes.string.isRequired,
  region: PropTypes.string.isRequired,
  handleSearchChange: PropTypes.func.isRequired,
};

export default Header;
