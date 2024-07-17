import React from 'react';
import '../../scss/layout/Filter.scss';

function FilterByGender({ handleFilterGender, filterGender }) {
  const handleRadio = (ev) => {
    handleFilterGender(ev.target.value);
  };

  return (
    <div className="filtersContainer__byGender">
      <label className="filtersContainer__byGender--label"> By Gender</label>

      <input
        type="radio"
        name="gender"
        value="female"
        onChange={handleRadio}
        checked={filterGender === 'female'}
        className="filtersContainer__byGender--input"
      />
      <label className="filtersContainer__byGender--label">Female </label>

      <input
        type="radio"
        name="gender"
        value="male"
        onChange={handleRadio}
        checked={filterGender === 'male'}
        className="filtersContainer__byGender--input"
      />
      <label className="filtersContainer__byGender--label">Male </label>
    </div>
  );
}

export default FilterByGender;
