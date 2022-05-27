import React, { useContext } from "react";
import './App.css'
import Navbar from "./component/Navbar/Navbar";
import Intro from "./component/Intro/Intro";
import Services from "./component/Services/Services";
import Experience from "./component/Experience/Experience";
import Work from "./component/Work/Work";
import Portfolio from "./Portfolio/Portfolio";
import Testimonial from "./component/Testimonial/Testimonial";
import Contact from './component/Contact/Contact'
import Footer from "./component/Footer/Footer";

import {themeContext} from './context'
// import {useContext} from 'react'


function App(){

    const theme = useContext(themeContext)
    const darkMode = theme.state.darkMode

    return(
        <div className="App" 
        style={{
            background: darkMode ? 'black' : '' ,
            color: darkMode ? 'white' : '',
        }}
        >
            <Navbar/>
            <Intro/>
            <Services/>
            <Experience/>
            <Work/>
            <Portfolio/>
            <Testimonial/>
            <Contact/>
            <Footer/>
        </div>
    )
}

export default App;



