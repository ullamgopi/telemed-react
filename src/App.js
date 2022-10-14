import './App.css';
import LoginPage from './pages/loginPage/LoginPage';
import { Route,Routes } from 'react-router-dom'
import Dashboard from './pages/dashboardPage/Dashboard';


function App() {
  return (
    <div className="App">
    <Routes>
        <Route path='/Login' element={<LoginPage />} />
        <Route path='/' element={<Dashboard />} />
    </Routes>
        
    </div>
  );
}

export default App;
