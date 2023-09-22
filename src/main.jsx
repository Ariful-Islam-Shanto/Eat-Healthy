import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Componets/Home/Home.jsx';
import Meals from './Componets/Meals/Meals.jsx';
import Contact from './Componets/Contact/Contact.jsx';
import About from './Componets/About/About.jsx';
import Recipe from './Componets/Recipe/Recipe.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>,
    children: [
      {
        path: '/meals',
        loader: () => fetch('https://www.themealdb.com/api/json/v1/1/search.php?s'), 
        element: <Meals></Meals>
      },
      {
        path: '/about',
        element: <About></About>
      },
    {
      path: '/contact',
      element: <Contact></Contact>
    },
    {
      path: '/showRecipe/:mealId',
      loader: ({params}) => fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.mealId}`),
      element: <Recipe></Recipe>
    }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
