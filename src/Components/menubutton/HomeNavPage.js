
// import './App.css';
import Sidebar from '../menubutton/Sidebar';
import {Routes, Route } from 'react-router-dom';
import { Reports, ReportsOne, ReportsTwo, ReportsThree } from '../../pages/Menupages/Reports';



function HomeNavPage() {
  return (
    <div>
    
     <Sidebar />
    
    <Routes>
      <Route path='/reports' exact component={Reports} />
      <Route path='/reports/reports1' exact component={ReportsOne} />
      <Route path='/reports/reports2' exact component={ReportsTwo} />
      <Route path='/reports/reports3' exact component={ReportsThree} />
     
    </Routes>
    </div>
      
   
  );
}

export default HomeNavPage;



