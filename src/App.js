import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Data from './trail/Data';

import Dashboard from './pages/dashboardPage/Dashboard';
import LoginPage from './pages/loginPage/LoginPage';
import IncompleteScreen from './pages/incompleteVisitPage/IncompleteVisit';
// import SearchBar from './Components/Search/SearchBar';
 import CompleteVisit from './pages/completeVisitPages/CompleteVisit';
import DocumentScreen from './pages/documentPage/DocumentScreen';
import Protocol from './Components/CompanyProtocol/Protocol';
import Text from './Components/scrollTop/Text';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DashboardData from './utilities/dashboardPage/DashboardData';
import Searchcom from './Components/search11/Searchcom';



function App() {
  return (
    <div className="sidebar">
      <DashboardData />
      {/* <Data /> */}
      {/* <MainBoard /> */}
      {/* <LoginPage /> */}
      {/* <SearchBar /> */}
      {/* <CompleteScreen /> */}
      {/* <DocumentScreen /> */}
      {/* <Text /> */}

      {/* <Searchcom /> */}
       {/* <Router>
      <DashboardData /> 
      <Routes>
        <Route path="/" component={Dashboard} />
        <Route path='/DocumentScreen'  component={DocumentScreen}/>
        <Route path='/CompleteVisit'  component={CompleteVisit}/>
        <Route path='/IncompleteScreen'  component={IncompleteScreen}/>
        <Route path='/Protocol'  component={Protocol}/> 
         </Routes>
      </Router>  */}
  
    </div>
  );
}

export default App;

