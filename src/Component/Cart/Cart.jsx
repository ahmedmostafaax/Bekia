 import React, { useContext, useEffect, useState } from 'react'
import { storeContext } from '../../Context/storeContext.js'
import Loading from '../Loading/Loading.jsx'
import { toast } from 'react-toastify'
import { NavLink } from 'react-router-dom'
import CreateOrder from '../CreateOrder/CreateOrder.jsx'

export default function Cart() {


  let { getCart , deleteItem , setCounter ,updateQuantity} = useContext(storeContext)
  let [data , setData] = useState(null)
  let [loading , setLoading] = useState(true)

    useEffect(()=>{
    ( async ()=>{
      let data = await getCart()
      setData(data)
      console.log(data);
      setLoading(false)

      })()
    }, [])


   async function deleteProduct(id){
     let data = await deleteItem(id)
     console.log(data);
     if(data.message=='success'){
      toast.error('Product deleted Successfully ')
      // setCounter(data.cartitems)
      setData(data)
     }
    }


    async function updateProduct(id  ,quantity){
      let data = await updateQuantity(id , quantity)
      // console.log(data);
      if(data.message=='success'){
       toast.success('Product updated Successfully ')
       setData(data)
      }
     }


    if(loading) return <Loading/>
  return (
    <div className='container my-4  '>
     <div className="row bg-main-light my-4  p-4 rounded">
     <h2 className='text-main'>Cart : </h2>
      <p>Your Cart Points : <b className='text-main'>{data?.cart.totalPrice}</b> Points</p>
      <p>Your Cart Price : <b className='text-main'>{data?.cart.totalPrice * 0.5}</b> EGP</p>
     </div>
     {data?.cart.cartitems.map(item=>{
      return <div key={item._id} className="row py-4 border-bottom ">
        <div className="col-md-2 bg-main-light p-3">
          <img src={item.product.imgCover} className='w-100' alt="" />
        </div>
        <div className="col-md-10 bg-main-light p-3 d-flex justify-content-between">
          <div>
            <p className='text-main m-2'>{item.product.title}</p>
            <p>Points: <b className='text-main'>{item.price}</b> </p>
            <button onClick={()=>deleteProduct(item.product._id)} className='btn btn-danger my-3'> <i class="fa-solid fa-trash-can"></i> </button>
            <NavLink to={'/CreateOrder'}><button className='btn btn-success m-3'>Create Order</button></NavLink>
          </div>
          <div className='my-5'>  
            <button onClick={()=>updateProduct(item.product._id , item.quantity + 1)} className='btn btn-outline-success border-1'><i class="fa-solid fa-plus"></i></button>
            <span className='px-2 border-bottom text-main'>{item.quantity}</span>
            <button disabled={item.quantity <= 1} onClick={()=>updateProduct(item.product._id , item.quantity - 1)} className='btn btn-outline-success border-1'><i class="fa-solid fa-minus"></i></button>
          </div>
        </div>
      </div>
     })}
    </div>
  )
}
