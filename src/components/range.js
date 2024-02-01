// RangeInput.js

import React from "react";

const RangeInput = ({ id, min, max, step }) => {
  return (
    <div className="col-md-3 mb-3">
      <input
        type="range"
        className="form-range custom-range"
        id={id}
        min={min}
        max={max}
        step={step}
      />
    
    </div>
  );
};

export default RangeInput;
