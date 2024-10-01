import React from 'react';
import "./styles/Banner.css"
import lod from "../assets/Shooting studio  (5).jpg"
import { motion } from "framer-motion"

export default function Banner() {
  return (
    <div id='Banner'>
      <div className='banner-container'>
        <div className='banner-left'>
          <div className="banner-left-content">
            <h1>
              Hello i'm Lodphin
            </h1>

            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur aut, debitis nemo iste a esse velit ad, praesentium dolores provident porro reiciendis recusandae fugit. Eos sed facilis illum delectus itaque!
            </p>

            <div className="banner_btns">
              <motion.a
                whileHover={{ scale: 1.2 }}
                onHoverStart={e => { }}
                onHoverEnd={e => { }}
              >
                <button className='hire_me'>Hire me</button>
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.2 }}
                onHoverStart={e => { }}
                onHoverEnd={e => { }}
              >

                <button className='download'>Download cv</button>
              </motion.a>
            </div>
          </div>
        </div>
        <div className="banner-right">
          <motion.div
            className="box"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.5,
              ease: [0, 0.71, 0.2, 1.01]
            }}
          >
            <div className="banner-right-img">
              <img src={lod} alt="lodphin" />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
