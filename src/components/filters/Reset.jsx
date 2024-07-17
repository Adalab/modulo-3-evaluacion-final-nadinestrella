import React from 'react';
import '../../scss/layout/Filter.scss';

function Reset({ resetButon }) {
  return (
    <div className="filtersContainer__reset">
      <button
        className="filtersContainer__reset--btn"
        type="button"
        onClick={resetButon}
      >
        Reset
      </button>
    </div>
  );
}

export default Reset;
