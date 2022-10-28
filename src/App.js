import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Data from './trail/Data';
import Dashboard from '../src/utilities/dashboardPage/Dashboard'
import MainBoard from './pages/SecondPage/MainBoard';
// import LoginPage from './pages/loginPage/LoginPage';



function App() {
  return (
    <div className="sidebar">
      <Dashboard />
      {/* <Data /> */}
      <MainBoard />
      {/* <LoginPage /> */}

    </div>
  );
}

export default App;

