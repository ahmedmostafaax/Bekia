import axios from 'axios'
import { useFormik } from 'formik'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import * as Yup from 'yup' 
import signupimg from '../../assets/images/signup2 (1).jpg'

export default function Signup() {

  let navigate = useNavigate()

  const [error , setError ] = useState('')
  const [loading , setLoading] = useState(true)

  async function sendDataToApi(values){

    setLoading(false)

   await axios.post('https://recycling-cycm.onrender.com/api/v1/auth/signup' , values )
    .then(({data})=>{
      console.log(data);
      if(data.message == 'success'){
        navigate('/signin')
      }
    }).catch((err)=>{
      setError(err.response.data.error)
      setLoading(true)
      // console.log(err.response.data.error);
    })
  }


  function validationSchema (){

    let schema = new Yup.object({
      name:Yup.string().min(2).max(28).required('Name is required'),
      email:Yup.string().email().required('Email is required'),
      password: Yup.string()
      .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/ , 'enter a valid password')
      .required('Password is required'),
      rePassword:Yup.string().oneOf([Yup.ref('password')]).required('enter confirm password ')
    })
    return schema
  }


  let register = useFormik({
    initialValues:{name:'' , email:'' , password:'' , rePassword:'' },
    
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
            <img className='w-100' src={signupimg} alt="" />
          </div>
          <div className="col-md-6 my-4 shadow-sm">
            <h2>Register Now</h2>
            <form onSubmit={register.handleSubmit} className='py-2'>

              <label htmlFor="name">User Name </label>
              <input onBlur={register.handleBlur} value={register.values.name} onChange={register.handleChange} id='name' type="text" name='name' className='form-control mb-3' />
              {register.errors.name && register.touched.name ?  <div className="alert alert-danger">{register.errors.name}</div>:''}


              <label htmlFor="name">User Email </label>
              <input onBlur={register.handleBlur} value={register.values.email} onChange={register.handleChange} id='email' type="email" name='email' className='form-control mb-3' />
              {register.errors.email && register.touched.email ?  <div className="alert alert-danger">{register.errors.email}</div>:''}
              

              <label htmlFor="name">User Password </label>
              <input onBlur={register.handleBlur} value={register.values.password} onChange={register.handleChange} id='password' type="password" name='password' className='form-control mb-3' />
              {register.errors.password && register.touched.password ?   <div className="alert alert-danger">{register.errors.password}</div>:''}
              

              <label htmlFor="name">Confirm Password </label>
              <input onBlur={register.handleBlur} value={register.values.rePassword} onChange={register.handleChange} id='rePassword' type="password" name='rePassword' className='form-control mb-3' />
              {register.errors.rePassword && register.touched.rePassword ?  <div className="alert alert-danger">{register.errors.rePassword}</div>:''}
              

              {error ? <div className="alert alert-danger">{error}</div>:'' }

              <button disabled={!(register.dirty && register.isValid)} type='submit' className='btn btn-success w-100 text-white'>
                {loading? 'Signup' : <i className='fa fa-spinner fa-spin'></i> }  
              </button>
            </form>    
          </div>
        </div>
      </div>
    </div> 
  )
}
