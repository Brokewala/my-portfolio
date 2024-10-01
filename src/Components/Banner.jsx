import React from 'react';
import "./styles/Banner.scss"
import lod from "../assets/me1.png"
import { motion } from "framer-motion"

import { MdOutlineFileDownload } from "react-icons/md";

export default function Banner() {
  return (
    <div id='Banner'>
      <div className='banner-container'>
        <div className='banner-left'>
          <div className="banner-left-content">
            <div className="banner-title">

              <h1>
                Hello<span>.</span>
              </h1>
              <h3>
                i' am Lodphin
              </h3>
            </div>

            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur aut, debitis nemo iste a esse velit ad, praesentium dolores provident porro reiciendis recusandae fugit. Eos sed facilis illum delectus itaque!
            </p>

            <div className="banner_btns">
              <motion.a
                whileHover={{ scale: 1.2 }}
                onHoverStart={e => { }}
                onHoverEnd={e => { }}
              >
                <a href='#' className='download_cv'>
                  <MdOutlineFileDownload />
                  <span>

                  Download cv
                  </span>
                  </a>
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
