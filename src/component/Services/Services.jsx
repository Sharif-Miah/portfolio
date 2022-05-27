// import React, {useContext} from 'react'
import './Services.css'
import Card from '../card/Card';
import Resume from './resume.pdf';
import { motion } from 'framer-motion';


import HeartEmoji from '../../img/heartemoji.png';
import Glasses from '../../img/glasses.png';
import Humble from '../../img/humble.png';
// import { themeContext } from "../../Context";

const Services = () => {

    const transition = {duration: 1, type: 'spring'}

//      // context
//   const theme = useContext(themeContext);
//   const darkMode = theme.state.darkMode;



  return (
    <div className='services' id='Services'>
        {/* left side */}
        <div className="awesome">
            <span >My Awesome</span>
            <span>services</span>
            <span>My Awesome services section. Lorem inpum is simpley dummy text of printing  of printing of <br />lorem . am the side  ispum is simpley dummy text os printing</span>
            <a href={Resume} download>
            <button className='button s-button'>Download CV</button>
            </a>
            
            <div className='blur s-blur1' style={{background: '#ABF1FF94'}}></div>
        </div>

        {/* right side  */}
        <div className="cards">

            <motion.div
            whileInView={{left: '14rem'}}
            initial={{left: '25%'}}
            transition={transition}
            
            style={{left: '14rem'}}>
                <Card
                emoji={HeartEmoji}
                heading={'Design'}
                detail={'Figma, Sketch, Photoshop, Adobe, Adobe xd'}
                />
            </motion.div>
            {/* second card  */}
            <motion.div
            initial={{ left: "-11rem", top: "12rem" }}
            whileInView={{ left: "-4rem" }}
            transition={transition}
            
            style={{top: '12rem',left: '-4rem'}}>
                <Card
                emoji={Glasses}
                heading={'Developer'}
                detail={'Figma, Sketch, Photoshop, Adobe, Adobe xd'}
                />
            </motion.div>
                        {/* Third card  */}

            <motion.div 
            initial={{ top: "19rem", left: "25rem" }}
            whileInView={{ left: "12rem" }}
            transition={transition}
            
            style={{top: '19rem', left: '12rem'}}>
                <Card
                emoji={Humble}
                heading={'UI/UX'}
                detail={'I am a Web Developer. I am using UX/UI. I create website Html, Css, boostrap, Javascript and React.js'}
                />
            </motion.div>
            <div className='blur s-blur2' style={{background: 'var(--purple)'}}></div>
        </div>
    </div>
  )
}

export default Services