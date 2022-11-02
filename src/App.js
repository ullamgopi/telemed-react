import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Data from './trail/Data';
import Dashboard from '../src/utilities/dashboardPage/Dashboard'
import MainBoard from './pages/DashboardPage/MainBoard';
import LoginPage from './pages/loginPage/LoginPage';
// import SearchBar from './Components/Search/SearchBar';
 import CompleteScreen from './pages/CompletedPages/CompleteScreen';
import DocumentScreen from './pages/DocumentPage/DocumentScreen';
import Protocol from './Components/CompanyProtocol/Protocol';




function App() {
  return (
    <div className="sidebar">
      <Dashboard />
      {/* <Data /> */}
      {/* <MainBoard /> */}
      {/* <LoginPage /> */}
      {/* <SearchBar /> */}
      {/* <CompleteScreen /> */}
      {/* <DocumentScreen /> */}
      <Protocol />

    </div>
  );
}

export default App;

