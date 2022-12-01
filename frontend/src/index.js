import React from 'react';
import ReactDOM from 'react-dom/client';
import Landing from './components/landing';
import Body from './components/body';
import Checkout from "./components/checkout" 

import { BrowserRouter as Router, Link, Routes, Route, BrowserRouter } from "react-router-dom";

// import Myfooter from './extra/footer'; 
import App from './App'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
    
    <BrowserRouter>
        <Routes>
            <Route exact path="/" element={<><Landing/><Body/></>}/>
            <Route exact path = "/cartcheckout" element = {<Checkout/>}/>
        </Routes>
    </BrowserRouter>
    
    
    
    
    
    </>
    
  
);

