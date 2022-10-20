import React from 'react';
import './App.css';
// import Side from './trail/Side';
// import SideData from '../src/trail/SideData'
// import {SideData} from './trail/Dummy'
import {Side} from './trail/Dummy'


function App() {
  return (
    <div className="sidebar">
      {/* <Dummy /> */}
      {/* <SideData /> */}
      <Side />
   
    </div>
  );
}

export default App;

