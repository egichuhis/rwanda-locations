import React from 'react';
import DarkMap from '../imgs/map_dark.png';

const Provinces = () => (
  <div>
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
    <div className="row g-0 row-cols-2" style={{ background: '#3f62a3' }}>
      <div className="col">
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
                  <h4 style={{ fontWeight: 'bold', fontSize: 18 }}>KIGALI</h4>
                  <h4 style={{ fontSize: 16 }}>3 Districts</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col">
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
                  <h4 style={{ fontWeight: 'bold', fontSize: 18 }}>KIGALI</h4>
                  <h4 style={{ fontSize: 16 }}>3 Districts</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col">
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
                  <h4 style={{ fontWeight: 'bold', fontSize: 18 }}>KIGALI</h4>
                  <h4 style={{ fontSize: 16 }}>3 Districts</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col">
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
                  <h4 style={{ fontWeight: 'bold', fontSize: 18 }}>KIGALI</h4>
                  <h4 style={{ fontSize: 16 }}>3 Districts</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
);

export default Provinces;
