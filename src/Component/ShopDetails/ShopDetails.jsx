import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Loading from '../Loading/Loading.jsx';
import { storeContext } from '../../Context/storeContext.js';

export default function ShopDetails() {


    let {counter , setCounter } = useContext(storeContext)


    let x = useParams ()
    console.log(x);


    let [product , setProduct] = useState({})
    let [loading , setLoading] = useState(true)


    async function getProduct(){
        let {data} = await axios.get(`https://recycling-cycm.onrender.com/api/v1/shop/${x.id}`)
        setProduct(data.shop)
        setLoading(false)
    //     console.log(data);
    }


    
  async function addProdectToCart(shop){
    setBtnLoading(false)
    let data = await addToCart(shop)
    console.log(data);

    if(data.message =='success'){
      toast.success(' added successfully ')
      setCounter(data.cart.cartitems.quantity)
      setBtnLoading(true)
    }
  }







    useEffect(()=>{ 
        getProduct()
    },[])


    if(loading) return <Loading/>

    return (
    <div>
        <div className="container my-5">
            <div className="row">
                <div className="col-md-4">
                     <img src={product.imgCover} className='w-100 rounded-5' alt="" />
                </div>
                <div className="col-md-8 shadow-sm">
                    <h4 className='text-center text-main'>{product.title}</h4>
                    <p className='py-2'>visual representation of the concept of recycling, typically depicted as a circular arrow symbol. The symbol is often composed of three arrows that form a triangle, representing the three stages of recycling: collection, processing, and manufacturing into new products.</p>
                    <div>
                        <div>
                            <span className='m-2 ms-auto border-bottom border-width: 10px;'>It's cost <b className='text-main m-2 ms-auto border-bottom border-width: 10px;'>{product.price}</b>EGP</span>
                        </div>
                    </div>
                    <button onClick={()=>  {(addProdectToCart(item._id)) , counter} } className='btn btn-success w-100 my-4'>
                        Add To Cart
                        <i class="fa-solid fa-cart-shopping"></i>
                    </button>
                </div>

            </div>
        </div>
    </div>
  )
}
