import React, { useState } from 'react';

function SignUp() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")

   
    function registration(){
        console.warn({name, email, password})
        let data = ({name, email, password})
        if(data){
            fetch('http://127.0.0.1:8000/registration', {
            method:'POST',
            headers:{
                'accept':'application/json',
                'content-type':'application/json',
            },
            body:JSON.stringify(data)
        }).then((result)=>{
            result.json().then((response)=>{
                console.log("response", response)
            })
        })
        }
        // navigate('/login')
    }
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-md-4'></div>
                <div className='col-md-4'>
                    <div className='card'>
                        <h1 className='title text-center'>Registration</h1>
                        <form>
                        <div className='mb-3'>
                            <label className='label'>Enter Name</label>
                            <input className='form-control' type='text' name='name' value={name} onChange={(e)=>{setName(e.target.value)}} autoComplete='false'></input>
                        </div>    
                        <div className='mb-3'>
                            <label className='label'>Enter Email</label>
                            <input className='form-control' type='email' name='email' value={email} onChange={(e)=>{setEmail(e.target.value)}} autoComplete='false'></input>
                        </div>
                        {error && <p className='error'>{error}</p>}
                        <div className='mb-3'>
                            <label className='label'>Enter Password</label>
                            <input className='form-control' type='password' name='password' value={password} onChange={(e)=>{setPassword(e.target.value)}}  autoComplete='false'></input>
                        </div>
                        {error && <p className='error'>{error}</p>}
                        <button type='button' onClick={registration} className='btn btn-primary'>SignIn</button>
                    </form>
                    </div>
                </div>
                <div className='col-md-4'></div>
            </div>
        </div>
    )
}

export default SignUp;