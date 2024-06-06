import './App.css';
import { RouterProvider , createBrowserRouter } from 'react-router-dom'
import MainLayout from './Layouts/MainLayout.jsx';
import Home from './Component/Home/Home.jsx';
import Category from './Component/Category/Category.jsx';
import Product from './Component/Product/Product.jsx';
import Cart from './Component/Cart/Cart.jsx';
import Signup from './Component/Signup/Signup.jsx';
import Signin from './Component/Signin/Signin.jsx';
import AuthLayouts from './Layouts/AuthLayouts.jsx';
import NotFound from './Component/NotFound/NotFound.jsx';
import { Offline , Online } from 'react-detect-offline';
import ProtectedRoutes from './Component/ProtectedRoutes/ProtectedRoutes.jsx';
import ProductDetails from "./Component/ProductDetails/ProductDetails.jsx";
import { StoreContextProvider } from './Context/storeContext.js';
import { ToastContainer } from 'react-toastify';
import CreateOrder from './Component/CreateOrder/CreateOrder.jsx';


function App() {
  
  let routes = createBrowserRouter([
    { 
      path:'/' ,element:<MainLayout/>  ,children:[
        { index:true , element: <ProtectedRoutes> <Home/>  </ProtectedRoutes> },
        { path:'/home' , element: <ProtectedRoutes> <Home/> </ProtectedRoutes> },
        { path:'/category' , element:<ProtectedRoutes> <Category/> </ProtectedRoutes>},
        { path:'/product' , element:<ProtectedRoutes> <Product/> </ProtectedRoutes>},
        { path:'/cart' , element:<ProtectedRoutes> <Cart/> </ProtectedRoutes>},
        { path:'/product-details/:id' , element:<ProtectedRoutes> <ProductDetails/> </ProtectedRoutes>},
        { path:'/CreateOrder' , element:<ProtectedRoutes> <CreateOrder/> </ProtectedRoutes>},

        { path:'*' , element: <NotFound/>},
      ]
    },

  { 
    path:'/' ,element:<AuthLayouts/>  ,children:[
      { path:'/signup' , element: <Signup/>},
      { path:'/signin' , element: <Signin/>},
    ] 
  }
])


  return (
   <>

  <Offline>
    <div className='offline'>You Are Offline Now !</div>
  </Offline>

  <ToastContainer theme='colored' />

<StoreContextProvider>
    <RouterProvider router={routes}/>
</StoreContextProvider>

 
   
   </>
  );
}

export default App;
