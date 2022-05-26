// import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { setUserSession } from '../Utils/Common';


function SignIn(){
    const [user_type, setType] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate()
    function login() {
        setError(null);
        setLoading(true);
        
        let data=({user_type, email, password})
        if((email === "") & (password === "")){
            alert("Invalid Email and Password");
            // console.warn({email, password, user_type});
        }
        if(user_type === ""){
            alert("Please enter user_type")
        }
        if(email){
            fetch('http://127.0.0.1:8000/login', {
            method:'POST',
            headers:{
                'accept':'application/json',
                'content-type':'application/json',
            },
            body:JSON.stringify(data)
        }).then((result)=>{
            result.json().then((response)=>{
                setLoading(false);
                if(response.detail){
                    alert(response.detail);
                    navigate('/login');
                }
                else{
                    setUserSession(response.token, response.user);
                    navigate('/dashboard');
                }
                
            })
        }).catch(error =>{
                setLoading(false);
                if(error.response.status === 401 || error.response.status === 400){
                    setError(error.response.detail);
                    navigate('/login')
                }else{
                    setError("Something went Wrong. Please try again later.")
                }
                console.error("error", error);
        });
        }
        else if(!data){
            alert("Please fill the form")
        }
    }
    return(
        <div className='container'>
            <div className='row'>
                <div className='col-md-4'></div>
                <div className='col-md-4'>
                    <div className='card'>
                        <h1 className='title text-center'>Login</h1>
                        <form>
                        <div className='mb-3'>
                            <label className='label'>Choose User Type</label>
                            <input className='form-control' type='text' name='user_type' value={user_type} onChange={(e)=>{setType(e.target.value)}} autoComplete='false'></input>
                        </div>
                        {error && <p className='error'>{error}</p>}
                        <div className='mb-3'>
                            <label className='label'>Enter Email</label>
                            <input className='form-control' type='text' name='email' value={email} onChange={(e)=>{setEmail(e.target.value)}} autoComplete='false'></input>
                        </div>
                        {error && <p className='error'>{error}</p>}
                        <div className='mb-3'>
                            <label className='label'>Enter Password</label>
                            <input className='form-control' type='password' name='password' value={password} onChange={(e)=>{setPassword(e.target.value)}}  autoComplete='false'></input>
                        </div>
                        {error && <p className='error'>{error}</p>}
                        <button type='button' onClick={login} className='btn btn-primary' value={loading ? "Loading...":"Login"} >SignIn</button>
                    </form>
                    </div>  
                </div>
                <div className='col-md-4'></div>
            </div>
        </div>
    )
}
export default SignIn;