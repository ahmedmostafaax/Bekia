import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import Loading from '../Loading/Loading.jsx'
import { useQuery } from 'react-query'
import {Link} from 'react-router-dom'
import { storeContext } from '../../Context/storeContext.js'
import { toast } from 'react-toastify'


export default function Shop() {

  let {counter , setCounter , addToCart} = useContext(storeContext)
  let [btnLoading , setBtnLoading] = useState(true)

  async function addProdectToCart(product){
    setBtnLoading(false)
    let data = await addToCart(product)
    console.log(data);

    if(data.message =='success'){
      toast.success(' added successfully ')
      setCounter(data.cart.cartitems.quantity)
      setBtnLoading(true)
    }
  }



  function getProd(){
   return axios.get('https://recycling-cycm.onrender.com/api/v1/shop')

  }

 let {data , isLoading , isFetching , refetch} = useQuery('getProd',getProd , {
  // cacheTime:3000 , 
  // refetchInterval:1000,
  // refetchOnMount:false,
  // enabled:false
   
 })




  if(isLoading) return <Loading/>
  return (
    <>

{/* <button onClick={refetch} className='btn btn-danger'>refeach</button> */}

    <div className="container my-5">
      <div className="row">
        { data?.data.shops.map( item => {
          return  <div  className="col-md-3 my-3">
                    <div className="product cursor-pointer py-4 d-flex flex-column align-items-center">
                     <Link to={'/shop-details/'+item._id}>
                          <img src={item.imgCover} className='w-50 mx-auto d-block' alt="" />
                          <h6 className='py-2 text-center text-main'>{item.title.split('').slice(0,15)}</h6>
                     </Link>
                          <button disabled={!btnLoading} onClick={()=>{(addProdectToCart(item._id)) , counter} } className='btn btn-success'>
                          {btnLoading?'Add To Cart':<i className='fa fa-spinner fa-spin'></i>}
                          </button>
                  </div>
                </div>
        })}
      </div>
    </div>
    </>
  )
}
