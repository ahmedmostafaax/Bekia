import axios from 'axios';
import React from 'react'
import { useQuery } from 'react-query';
import Loading from '../Loading/Loading.jsx';

export default function Category() {

  function getCategory(){
    return axios.get('https://recycling-cycm.onrender.com/api/v1/categories')
}
let {data , isLoading , isFetching , refetch} = useQuery('getCategory',getCategory , {
})
console.log(data);


if(isLoading) return <Loading/>
  
  return (
    <>
    <div className="container my-5">
      <div className="row">
        {data?.data.categories.map( item =>{
          return <div className="col-md-4 my-3">
            <div className="product cursor-pointer py-4 d-flex flex-column align-items-center">
            <img src={item.image} className='w-50 mx-auto d-block' alt="" />
            <h6 className='py-2 text-center text-main'>{item.name}</h6>
            </div>
          </div>
        })}
      </div>
    </div>
    </>
  )
}










