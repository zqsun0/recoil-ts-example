import React from "react";
import { useRecoilState } from 'recoil';

import { filterListValue } from '../store';

const FilterItem = () => {
  const [filterListState,filterList] = useRecoilState(filterListValue);

  const filter = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    filterList(value);
  }

  const clearFilter = () => filterList("");

  return (
    <div className="filterItemContainer">
      <p className="addItemText">Filter : </p>
      <input
        className="addItemInput"
        type="text"
        value={filterListState}
        onChange={(e) => filter(e)}
      />

      <button className="addInputButton" onClick={() => clearFilter()}>
        Clear
      </button>
    </div>
  );
};

export default FilterItem;
