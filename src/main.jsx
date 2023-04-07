import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import Meals from './components/Meals';
import FoodDetails from './components/FoodDetails';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App></App>,
    children: [
      {
        path: '/',
        element:<Home></Home>
      },
      {
        path: 'meals',
        element: <Meals></Meals>,
        loader: ()=> fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=b')
      },
      {
        path: 'desh/:idMeal',
        element: <FoodDetails></FoodDetails>,
        loader: ({ params }) => fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.idMeal}`)
      },
      {
        path: 'about',
        element: <About></About>
      }
    ]
  }, 
 
])





ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
