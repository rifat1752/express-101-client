import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import PostUserData from './Components/PostUserData.jsx';
import DisplayUsers from './Components/DisplayUsers.jsx';
import UpdatedData from './Components/UpdatedData/UpdatedData.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <PostUserData></PostUserData>,
  },
  {
    path:"/users",
    element: <DisplayUsers></DisplayUsers>   ,
    loader: ()=> fetch("http://localhost:5000/users")
  },
  {
    path:"/users/:id",
    element: <UpdatedData></UpdatedData>,
    loader: ({params})=> fetch(`http://localhost:5000/users/${params.id}`)
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
 <RouterProvider router={router} />
  </React.StrictMode>,
)
