import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Openhouses from './Pages/Openhouses/Openhouses.jsx'
import Project from './Pages/Projects/Project.jsx'
import Pmang from './Pages/Pmang/Pmang.jsx'
import Tenants from './Pages/Tenants/Tenants.jsx'
import ContactUs from './Pages/ContactUs/Contactus.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Bhk from './Pages/Bhk.jsx'

const router = createBrowserRouter([
  {
    path: "/Project1",
    element: <App />,
  },
  {
    path: "/Project1",
    element: <App />,
  },
  {
    path: "/Project1/Openhouses",
    element: <Openhouses />,
  },
  {
    path: "/Project1/Projects",
    element: <Project />,
  },
  {
    path: "/Project1/Pmang",
    element: <Pmang />,
  },
  {
    path: "/Project1/Tenants",
    element: <Tenants />,
  },
  {
    path: "/Project1/ContactUs",
    element: <ContactUs />,
  },
  {
    path: "/Project1/Bhk",
    element: <Bhk />,
  },
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
)
