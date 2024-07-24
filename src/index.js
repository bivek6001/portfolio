import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Education from './components/education/Education';
// import Footer from './components/footer/Footer';
import Skills from './components/skills/Skills';
import {
  createBrowserRouter,
  RouterProvider,

} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: (
    <App/>
    ),
  },
 
  {
    path: "/about",
    element: <About/>,
  },
  {
    path: "/skills",
    element: <Skills/>,
  },
  {
    path: "/education",
    element: <Education/>,
  },
  {
    path:"/contact",
    element:<Contact/>
  }
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <RouterProvider router={router} >
    <App />
    </RouterProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))

