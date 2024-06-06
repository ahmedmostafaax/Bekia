import axios from 'axios'
import { useFormik } from 'formik'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import * as Yup from 'yup' 
import siginimg from '../../assets/images/sigin2.jpg'

export default function Signin() {

  let navigate = useNavigate()

  const [error , setError ] = useState('')
  const [loading , setLoading] = useState(true)

  function sendDataToApi(values){

    setLoading(false)

    axios.post('https://recycling-cycm.onrender.com/api/v1/auth/signin' , values )
    .then(({data})=>{
      console.log(data);
      if(data.message == 'success'){

        localStorage.setItem('token' , data.token)
        navigate('/Home')
      }
    }).catch((err)=>{
      setError(err.response.data.error)
      setLoading(true)
      // console.log(err.response.data.error);
    })
  }


  function validationSchema (){

    let schema = new Yup.object({
      email:Yup.string().email().required('Email is required'),
      password: Yup.string()
      .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/ , 'enter a valid password')
      .required('Password is required'),
    })
    return schema
  }


  let login = useFormik({
    initialValues:{email:'' , password:''  },
    
    validationSchema ,
    
    onSubmit:(values)=>{
      sendDataToApi(values)
    }
  })


  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <img className='w-100' src={siginimg} alt="" />
          </div>
          <div className="col-md-6 my-4 shadow-sm">
            <h2>login Now</h2>
            <form onSubmit={login.handleSubmit} className='py-2  '>


              <label htmlFor="name">User Email </label>
              <input onBlur={login.handleBlur} value={login.values.email} onChange={login.handleChange} id='email' type="email" name='email' className='form-control mb-3' />
              {login.errors.email && login.touched.email ?  <div className="alert alert-danger">{login.errors.email}</div>:''}
              

              <label htmlFor="name">User Password </label>
              <input onBlur={login.handleBlur} value={login.values.password} onChange={login.handleChange} id='password' type="password" name='password' className='form-control mb-3' />
              {login.errors.password && login.touched.password ?   <div className="alert alert-danger">{login.errors.password}</div>:''}
              

              {error ? <div className="alert alert-danger">{error}</div>:'' }

              <button disabled={!(login.dirty && login.isValid)} type='submit' className='btn btn-success w-100 text-white'>
                {loading? 'Signin' : <i className='fa fa-spinner fa-spin'></i> }  
              </button>
            </form>    
          </div>
        </div>
      </div>
    </div> 
  )
}
