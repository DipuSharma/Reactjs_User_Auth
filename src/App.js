import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';
import SignIn from './pages/Login';
import SignUp from './pages/Registration';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import About from './pages/About';
import PublicRoute from './Utils/PublicRoute';
import PrivateRoute from './Utils/PrivateRout';


function App() {
    
    return (
        <div className='container'>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path='/login' element={<PublicRoute><SignIn/></PublicRoute>} />
                <Route path='/registration' element={<PublicRoute><SignUp/></PublicRoute>} />
                <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} /> 
            </Routes>
        </div>
    );
}

export default App;
