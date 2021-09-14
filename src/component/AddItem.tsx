import React, {useState} from 'react';
import {useRecoilState} from 'recoil';
import {listValue} from '../store';
import {v4 as uuid4} from 'uuid';

export interface ListProp{
  id: string;
  value: string;
}
const AddItem = () => {
  const [inputValue, setInput] = useState('');
  const [list ,setList] = useRecoilState(listValue);

  const changeValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {value} = event.target;
    setInput(value);
  };

  const addValue = () => {
    setInput('');
    setList(
      [...list,
        {
          id: uuid4(),
          value: inputValue
        }
      ]
    );
  };

  return (
    <div className="addItemContainer">
      <p className="addItemText">Enter item :</p>
      <input className="addItemInput" type="text" value={inputValue} onChange={e => changeValue(e)}/>
      <button className="addInputButton" onClick={() => addValue()}>Add</button>
    </div>
  );
};

export default AddItem;