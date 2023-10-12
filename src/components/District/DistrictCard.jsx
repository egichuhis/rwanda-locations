import React from 'react';
import PropTypes from 'prop-types';

const bgColor = { background: '#3f62a3' };

const DistrictCard = ({ district }) => (
  <div className="col-12 py-2">
    <div className="card rounded-0" style={bgColor}>
      <div className="card-body">
        <div className="container">
          <div className="row flex-column text-light">
            <div
              className="col-12 col-md-6 d-flex flex-row justify-content-between align-items-center text-right"
            >
              <h4 className="fw-bold fs-5">{district}</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

DistrictCard.propTypes = {
  district: PropTypes.string.isRequired,
};

export default DistrictCard;
