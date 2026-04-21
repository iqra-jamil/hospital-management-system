import React from 'react';

const Sortpatientdropdown = ({ handleSort}) => {
  return (
    <div>
      <label>Sort Patients By: </label>
      <select onChange={(e) => handleSort(e.target.value)}>
        <option value="">No Sort</option>
        <option value="Bill">Bill</option>
        <option value="TokenPriority">TokenPriority</option>
      </select>
    </div>
  );
};

export default Sortpatientdropdown;
