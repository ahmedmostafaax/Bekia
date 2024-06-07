import axios from "axios";
import { createContext, useState } from "react";


export let storeContext = createContext(0)


async function addToCart(product){
   return axios.post('https://recycling-cycm.onrender.com/api/v1/cart' , {product} , {
    headers:{
        token: localStorage.getItem('token')
    }
   } ).then( ({data}) => data ).catch( err => err )
}




async function getCart(){
    return axios.get('https://recycling-cycm.onrender.com/api/v1/cart' , {
     headers:{
         token: localStorage.getItem('token')
     }
    } ).then( ({data}) => data ).catch( err => err )
 }


 async function deleteItem(product){
    return axios.delete('https://recycling-cycm.onrender.com/api/v1/cart/' + product , {
     headers:{
         token: localStorage.getItem('token')
     }
    } ).then( ({data}) => data ).catch( err => err )
 }

 async function updateQuantity(product,quantity){
    return axios.put('https://recycling-cycm.onrender.com/api/v1/cart/' + product , {quantity} , {
     headers:{
         token: localStorage.getItem('token')
     }
    } ).then( ({data}) => data ).catch( err => err )
 }




export function StoreContextProvider ({children}) {

    let [counter , setCounter] = useState(0)



    return <storeContext.Provider value={{counter , setCounter , addToCart , getCart , deleteItem , updateQuantity }}>
        {children}
    </storeContext.Provider>
}