import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import About from "./component/About.jsx"
import Interests from "./component/Interests.jsx"
import Info from "./component/Info.jsx"
import Footer from "./component/Footer.jsx"


export default function App(){
    return(
        <div className="app">
            <div className='informations'>
                <Info />
                <About />
                <Interests />
                <Footer />
            </div>
        </div>
    )
}
