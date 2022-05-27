import React from 'react'
import './Work.css'
import { motion } from 'framer-motion';


import Upwork from '../../img/Upwork.png';
import Fiverr from '../../img/fiverr.png';
import Amazon from '../../img/amazon.png';
import Shopify from '../../img/Shopify.png';
import Facebook from '../../img/Facebook.png';




const Work = () => {
  return (
    <div className='works'>
        <div className="awesome">
            <span>Works for All these</span>
            <span>Brands & Clients</span>
            <span>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam error, pariatur ullam <br /> asperiores nulla ut autem aliquam voluptatem vero molestiae porro deleniti est reiciendis. <br /> Temporibus, ea. Facilis temporibus necessitatibus qui? Eos blanditiis similique vero <br /> qui placeat fugit unde? Sapiente mollitia cupiditate aspernatur magni excepturi blanditiis <br /> sint facere, harum consequatur in delectus voluptatum accusantium ullam repellat tempora? <br /> Magni sint perspiciatis libero.</span>
            <button className='button s-button'>Hire me</button>
            
            <div className='blur s-blur1' style={{background: '#ABF1FF94'}}></div>
        </div>

        {/* Right side  */}

        <div className="w-right">
            <motion.div 
            initial={{ rotate: 45 }}
            whileInView={{ rotate: 0 }}
            viewport={{ margin: "-40px" }}
            transition={{ duration: 3.5, type: "spring" }}
            className="w-mainCircle">
                <div className="w-secCircle">
                    <img src={Upwork} alt="" />
                </div>
                <div className="w-secCircle">
                    <img src={Fiverr} alt="" />
                </div>
                <div className="w-secCircle">
                    <img src={Amazon} alt="" />
                </div>
                <div className="w-secCircle">
                    <img src={Shopify} alt="" />
                </div>
                <div className="w-secCircle">
                    <img src={Facebook} alt="" />
                </div>
            </motion.div>
            {/* background Circles  */}
            <div className="w-backCircle blueCircle"></div>
            <div className="w-backCircle yellowCircle"></div>

        </div>
    </div>
  )
}

export default Work;