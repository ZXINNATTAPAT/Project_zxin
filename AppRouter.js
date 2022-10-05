import React from "react"
import { BrowserRouter,Routes,Route } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Class from "./pages/Class"
import Bisection from "./pages/Bisection"
import Navbar from "./pages/Navbar"


export default function AppRouter() {
    return(
        <div className="AppRouter">
        <BrowserRouter>

                    <Navbar />
                        
                <Routes>

                <Route path="/" element={<Home />} />

                

                <Route path="/Bisection" element={<Bisection />} />

                <Route path="/About" element={<About />} />

                <Route path="/Class" element={<Class />} />
                

            </Routes>

        </BrowserRouter>
        </div>
    )
}

