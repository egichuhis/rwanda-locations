import React from 'react';
import PropTypes from 'prop-types';

const Search = ({ onSearchChange }) => (
  <input
    className="focus-ring"
    type="search"
    placeholder="Search Location"
    name="search"
    autoComplete="on"
    style={{ marginTop: 10 }}
    onChange={(e) => onSearchChange(e.target.value)}
  />
);

Search.propTypes = {
  onSearchChange: PropTypes.func.isRequired,
};

export default Search;
