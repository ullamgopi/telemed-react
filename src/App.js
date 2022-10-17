// import './App.css';
// import LoginPage from './pages/loginPage/LoginPage';
// import { Route,Routes } from 'react-router-dom'
// import Dashboard from './pages/dashboardPage/Dashboard';





// function App() {
//   return (
//     <div className="App">
//     <Routes>
//         <Route path='/Login' element={<LoginPage />} />
//         <Route path='/' element={<Dashboard />} />
//     </Routes>
//     </div>
//   );
// }

// export default App;


// import './App.css';
import Sidebar from '../src/Components/menubutton/Sidebar';
import {Routes, Route } from 'react-router-dom';
import { State, ReportsOne, ReportsTwo, ReportsThree } from '../src/pages/Menupages/Reports';



function HomeNavPage() {
  return (
    <div>
    
     <Sidebar />
    
    <Routes>
      <Route path='/state' exact component={State} />
      <Route path='/reports/reports1' exact component={ReportsOne} />
      <Route path='/reports/reports2' exact component={ReportsTwo} />
      <Route path='/reports/reports3' exact component={ReportsThree} />
     
    </Routes>
    </div>
      
   
  );
}

export default HomeNavPage;



