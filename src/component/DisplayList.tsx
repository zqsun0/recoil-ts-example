import React from "react";
import { useRecoilValue, useResetRecoilState } from 'recoil';
import { filterList, listValue, filterListValue } from '../store'

const DisplayList = () => {
  const listState = useRecoilValue(filterList);
  const resetList = useResetRecoilState(listValue);
  const resetFilterListValue = useResetRecoilState(filterListValue);

  const resetAtoms = () => {
    resetList();
    resetFilterListValue();
  }

  if(!listState.length){
    return (
      <div className="displayListContainerEmpty">
        <p className="listItemValue"> Empty List</p>
      </div>
    );
  }

  return (
    <div className="displayListContainerMain">
      <div className="displayListContainer">
        <p>List</p>
        {listState.map((item, index) => (
          <div key={item.id} className="listItem">
            <p className="listItemValue">{`${index + 1}  ${item.value}`}</p>
          </div>
        ))}
      </div>
      <div className="resetContainer">
        <button className="addInputButton"
                onClick={() => resetAtoms()}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default DisplayList;
