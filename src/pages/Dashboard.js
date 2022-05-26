import React from 'react';
import { useNavigate } from 'react-router-dom';
import { getUser, removeUserSession } from '../Utils/Common';

function Dashboard() {
    const user = getUser()
    const navigate = useNavigate()
    function logout() {
        removeUserSession();
        navigate('/login')
    }
    return(
        <div className='container'>
            <div className='row'>
                <div className='col-md-4'></div>
                <div className='col-md-4'>
                    <h1 className='title text-center'>Home Dashboard</h1>
                    <p className='title text-center'>Welcome {user}</p>
                </div>
                <div className='col-md-4'>
                    <button onClick={logout} className='btn btn-danger'>Logout</button>
                </div>
            </div>
        </div>
    )
    }
export default Dashboard;

