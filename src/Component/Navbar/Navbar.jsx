import React, { useContext, useEffect } from 'react'
import logo from '../..//assets/images/recycle-6-svgrepo-com.svg'
import { NavLink } from 'react-router-dom'
import { storeContext } from '../../Context/storeContext.js'

export default function Navbar() {


   let {counter , getCart , setCounter} = useContext(storeContext)

//    useEffect(()=>{
//     ( async ()=>{
//        let data = await getCart()
//        console.log(data);
//        setCounter(data.cart.cartitems)
//     })()
//    }, [])

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
                        <ul className="navbar-nav mr-auto mb-2 mb-lg-0">

                            <li className="nav-item">
                                <NavLink className="nav-link" to="/home">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/Category">Category</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/Product">Product</NavLink>
                            </li>
                        </ul>

                        <ul className="navbar-nav ms-auto my-1 ">
                            <li className="nav-item cartIcon ">
                                <NavLink className="nav-link position-relative" to="/cart"><i className="fa-solid fa-cart-shopping">
                                <span class="spanaia position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                    {counter}
                                    <span class="visually-hidden">unread messages</span>
                                </span>
                                </i></NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/signin">SignOut</NavLink>
                            </li>
                        </ul>

                    </div>
                </div>
            </nav>
        </>
    )
}
