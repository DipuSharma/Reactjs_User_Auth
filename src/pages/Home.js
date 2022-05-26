import React, { useState, useEffect } from 'react'
import { getToken } from "../Utils/Common";
function Home() {
    const token = getToken()
    const [posts, setPosts] = useState([])
    useEffect(() => {
        setTimeout(() => {
            fetch("http://127.0.0.1:8000/me", {
                method: "GET",
                headers: { "Authorization": `Bearer ${token}` }
            })
                .then((result) => {
                    result.json().then((response) => {
                        if (response) {
                            setPosts(response.data)
                        }
                    })
                });
        }, 1000);
    }, []);
    const listItems = posts.address?.map(
        (element) => {
            return (
                <div>
                    <p>Address  1 : {element.address_line_1}</p>
                    <p>Address  2 : {element.address_line_2}</p>
                    <p>Zipcode    :{element.zipcode}</p>
                    <p>Country Code : {element.country_name}</p>
                    <p>State Code   : {element.state}</p>
                    <p>District   : {element.district}</p>
                    <p>Mobile No. : {element.mobile_number}</p>
                </div>
                    
            )
        }
    );
    return (
        <div className='container'>
            <div className='row'>
                <h1>Home Page</h1>
                <div className='col-md-4'></div>
                <div className='col-md-4'>
                    <h3>Details</h3>
                    <div className='details'>
                        <p>Name  :  {posts.name}</p>
                        <p>Email :  {posts.email}</p>
                    </div>
                    {listItems}
                </div>
                <div className='col-md-4'></div>
            </div>
        </div>
    )
}

export default Home;