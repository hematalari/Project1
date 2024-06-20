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
    path: "Home",
    element: <App />,
  },
  {
    path: "/",
    element: <App />,
  },
  {
    path: "Openhouses",
    element: <Openhouses />,
  },
  {
    path: "Projects",
    element: <Project />,
  },
  {
    path: "Pmang",
    element: <Pmang />,
  },
  {
    path: "Tenants",
    element: <Tenants />,
  },
  {
    path: "ContactUs",
    element: <ContactUs />,
  },
  {
    path: "Bhk",
    element: <Bhk />,
  },
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
)
