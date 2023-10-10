import React from 'react';
import PropTypes from 'prop-types';

const DistrictCard = ({ district }) => (
  <div className="col-12" style={{ paddingTop: 5, paddingBottom: 5 }}>
    <div className="card" style={{ background: '#3f62a3', borderRadius: 0 }}>
      <div className="card-body">
        <div className="container">
          <div
            className="row flex-column"
            style={{ color: 'var(--bs-body-bg)' }}
          >
            <div
              className="col-12 col-md-6 d-flex flex-row justify-content-between align-items-center"
              style={{ textAlign: 'right' }}
            >
              <h4 style={{ fontWeight: 'bold', fontSize: 18 }}>{district}</h4>
              <i
                className="far fa-arrow-alt-circle-right d-flex align-self-start"
                style={{
                  color: 'var(--bs-body-bg)',
                  paddingTop: 0,
                  marginTop: 5,
                  marginRight: 5,
                  fontSize: 18,
                }}
              />
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
