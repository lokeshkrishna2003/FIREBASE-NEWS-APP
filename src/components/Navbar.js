import React from "react";
import { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../Context/AuthContext';



export default function Navbar() {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const { currentUser, logout } = useAuth();


  const navigate = useNavigate();


  async function handleLogout(){
      setError('')
      setLoading(true)

      try {
          await logout();
          setTimeout(() => {
              setError('')
              navigate("/")
              
          }, 1000);
          
          
      } catch (error) {
          setError(error)

      }
      setLoading(false);

  }
  return (
    <>
      <nav className="navbar navbar-expand-lg " style={{backgroundColor:'#dce6d9',position:'stickey',top:'2px'}}>
        <div className="container-fluid">
          <h3 className="navbar-brand" >
          <b>SkyLineNews</b>
          </h3>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              
              <li className="nav-item">
                <Link className="nav-link" to="/dashboard">
                  Home
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/dashboard/business">
                  Business
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/dashboard/entertainment">
                  Entertainment
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/dashboard/health">
                  Health
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/dashboard/science">
                  Science
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/dashboard/sports">
                  Sports
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/dashboard/technology">
                  Technology
                </Link>
              </li>
              
                
              
            </ul>
              <div className="d-flex">
                <button type="button" class="btn btn-outline-danger" onClick={handleLogout}>LogOut</button>
                </div>
          </div>
        </div>
      </nav>
    </>
  );
}
