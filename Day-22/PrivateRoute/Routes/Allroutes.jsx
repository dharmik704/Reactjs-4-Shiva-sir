import React from "react"
import {Routes, Route} from "react-router-dom"
import Home from "../src/pages/Home";
import About from "../src/pages/About";
import Contact from "../src/pages/Contact";
import Login from "../src/pages/Login";
import Signup from "../src/pages/Singnup";
import Privateroutes from "../src/PrivateRoute/Privateroutes";

function Allroutes(){
    return <div>
        <Routes>
            <Route path="/" element={
                <Privateroutes>
                    <Home   /> 
                </Privateroutes>
            }/>

            <Route path="/about" element={   
                <Privateroutes>
                    <About/> 
                </Privateroutes>
            }/>

            <Route path="/contact" element={
                <Privateroutes>
                    <Contact/> 
                </Privateroutes>
            }/>

            <Route path="/login" element={<Login/>}/>

            <Route path="/signup" element={<Signup/>}/>
        </Routes>
    </div>
}

export default Allroutes;