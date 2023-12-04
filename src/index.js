import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Layout from './Componets/ReactRouter/Layout';
import Home from './Componets/ReactRouter/Home';
import About from './Componets/ReactRouter/About';
import Contact from './Componets/ReactRouter/Contact';
import Github from './Componets/ReactRouter/Github';
// import reportWebVitals from './reportWebVitals';

// const router=createBrowserRouter(
//   createRoutesFromElements(
//     <Route path='/' element={<Layout/>}>
//       <Route path='home' element={<Home/>}/>
//       <Route path='about' element={<About/>}/>
//       <Route path='contact' element={<Contact/>}/>
//       <Route path='github' element={<Github/>}/>

//     </Route>
//   )
// )
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <App />
    {/* <RouterProvider router={router}/> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
