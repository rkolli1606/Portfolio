//import logo from './logo.svg';
import React from 'react';
import './App.css';
import Header from './components/Header.js'
import Body from './components/Body.js'
import FAQ from './components/FAQ.js'
import Contact from './components/Contact.js'
import Shop from './components/Shop.js'
import SignInPage from './components/SignInPage';
import {Protected} from './components/Protected';
import { Protected1 } from './components/Protected';
import Payment from './components/Payment';

import Footer from './components/Footer'
import Error from './components/Error'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import {Outlet} from 'react-router-dom'
import { AuthContextProvider } from './context/AuthContext';



const App1 = ()=>{
  return(
    <>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  )
}


const appRouter = createBrowserRouter([
  {
    path:'/',
    element:<App1/>,
    errorElement:<Error/>,
    children:[
      {
        path:'/',
        element:<Body/>,
      },
      {
        path:'/signin',
        element:<SignInPage/>,
      },
      {
        path:'/faq',
        element:<FAQ/>
      },
      {
        path:'/contact',
        element:<Contact/>
      },
      {
        path:'/shop',
        element:<Protected><Shop/>
          
        </Protected>,
        children:[
          
          
        ]
      },
      {
        path:'/payment',
        element:<Protected><Payment/></Protected>
      },
        
      
      
    ]
  }
])

function App() {
  return (
    <div className="App">
     <AuthContextProvider>
        <RouterProvider router={appRouter}></RouterProvider>
     </AuthContextProvider>
      
    </div>
  );
}

export default App;
