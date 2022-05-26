import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-warning fixed-top">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">My App</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link " aria-current="page" to="/" >Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link " aria-current="page" to="/about">About</Link>
                        </li>
                    </ul>
                    <ul className="navbar-nav d-flex">
                        
                        <li className="nav-item">
                            <Link className="nav-link " aria-current="page" to="/dashboard">Dashboard</Link>
                        </li>
                        
                        <li className="nav-item">
                            <Link className="nav-link" aria-current="page" to="/login">Login</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" aria-current="page" to="/registration">Registration</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Header;