import React from 'react';
import '../../scss/layout/Filter.scss';

function FilterByName({ filterName, handleFilterName }) {
  return (
    <div className="filtersContainer__byName">
      <label className="filtersContainer__byName--label">
        Find a Character
      </label>
      <input
        className="filtersContainer__byName--input"
        type="text"
        placeholder="Harry Potter"
        value={filterName}
        onChange={(ev) => {
          handleFilterName(ev.target.value);
        }}
        onKeyDown={(event) => {
          if (event.key === 'Enter') {
            event.preventDefault();
          }
        }}
      />
    </div>
  );
}

export default FilterByName;
