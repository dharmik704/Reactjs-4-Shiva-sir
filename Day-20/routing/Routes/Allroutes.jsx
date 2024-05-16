import React from "react"
import {Routes, Route} from "react-router-dom"
import Home from "../src/pages/Home";
import About from "../src/pages/About";
import Contact from "../src/pages/Contact";
import Login from "../src/pages/Login";
import Signup from "../src/pages/Singnup";

function Allroutes(){
    return <div>
        <Routes>
            <Route path="/" element={<Home/>}/>

            <Route path="/about" element={<About/>}/>

            <Route path="/contact" element={<Contact/>}/>

            <Route path="/login" element={<Login/>}/>

            <Route path="/signup" element={<Signup/>}/>
        </Routes>
    </div>
}

export default Allroutes;