import React from 'react'
import logo from '.././assets/images/recycle-6-svgrepo-com.svg'
import { NavLink, Outlet } from 'react-router-dom'

export default function AuthLayouts() {
  return (
    <>     
     <nav className="navbar navbar-expand-lg bg-body-tertiary py-2">
                <div className="container-fluid  mx-3">
                    <NavLink className="navbar-brand" to="/">
                        <img className='logoo' src={logo} alt="logo icon" />
                    </NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                       
                        <ul className="navbar-nav ms-auto ">
                            <li className="nav-item ">
                                <NavLink className="nav-link" to="/signup">Signup</NavLink>
                            </li>
                            <li className="nav-item ">
                                <NavLink className="nav-link" to="/signin">Signin</NavLink>
                            </li>
                        </ul>

                    </div>
                </div>
            </nav>



    <Outlet/>
    </>
  )
}
