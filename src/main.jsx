import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import store from './store.jsx'

import photoStore from './photoStore.jsx'
import PhotoApi from './Components/PhotoApi.jsx'
import ReduxToolkitCounter from './Components/Redux-Toolkit/ReduxToolkitCounter.jsx'
import storeReduxToolkitcounter from './ReduxToolkitCounterServices/storeReduxToolkit/StoreReduxToolkitCounter.jsx'
import { PostComponent } from './CatchDataApp/Components/PostComponents/PostComponent.jsx'
import PostStore from './CatchDataApp/Services/Poststore/PostStore.jsx'


import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import PostLayout from './CatchDataApp/Components/PostLayout/PostLayout.jsx'
import Login from './CatchDataApp/Components/Login/Login.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <PostLayout></PostLayout>,
    children: [{
      path: "/login",
      element: <Login></Login>
    },
    {
      path: "/register",
      element: <PostComponent></PostComponent>
    },]
  },
  
]);





ReactDOM.createRoot(document.getElementById('root')).render(
 <>
    {/* <Provider store={store}>
      <App />
    </Provider>
    <Provider store={storeReduxToolkitcounter}>
      <ReduxToolkitCounter></ReduxToolkitCounter>
    </Provider> */}

     

    {/* <Provider store={photoStore}>
      <PhotoApi></PhotoApi>
    </Provider> */}


     

       <Provider store={PostStore}>
          <RouterProvider router={router} />
       </Provider>
    
    
   
  </>,


)
