import React from 'react';
import './App.css';
import {RecoilRoot} from 'recoil';
import RecoilizeDebugger from 'recoilize';
import AddItem from './component/AddItem';
import FilterItem from './component/FilterItem';
import DisplayList from './component/DisplayList';
import Input from './component/Input';

function App() {
  return (
    <div className="App">
      <RecoilRoot>
        <RecoilizeDebugger/>
        <AddItem/>
        <FilterItem/>
        <DisplayList/>

        <Input/>

      </RecoilRoot>

    </div>
  );
}

export default App;
