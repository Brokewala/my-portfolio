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
              <motion.div
                initial={{y: '-20vh', opacity: 0 }}
                whileInView={{ y:0, opacity: 1 }}
                transition={{ duration: 0.8, ease: 'easeInOut' }}

              >
                <h1>
                  Hello<span>.</span>
                </h1>

              </motion.div>
              <motion.div
                initial={{ y: '-20vh',  opacity: 0 }}
                whileInView={{ y:0, opacity: 1 }}
                transition={{ duration: 0.9, ease: 'easeInOut' }}

              >
                <h3>
                  i' am Lodphin
                </h3>
              </motion.div>
            </div>
            <motion.div
              initial={{x: '-20vw', opacity: 0 }}
              whileInView={{x: 0,  opacity: 1 }}
              transition={{ duration: 0.7, ease: 'easeInOut' }}

            >
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur aut, debitis nemo iste a esse velit ad, praesentium dolores provident porro reiciendis recusandae fugit. Eos sed facilis illum delectus itaque!
              </p>
            </motion.div>

            <div className="banner_btns">
              <motion.div
                initial={{ x: '-20vw', opacity: 0 }}
                whileInView={{x: 0, opacity: 1 }}
                whileHover={{ scale: 1.1 }}
                transition={{ type: 'spring', stiffness: 100 }}

              >
                <a href='#' className='download_cv'>
                  <MdOutlineFileDownload />
                  <span>

                    Download cv
                  </span>
                </a>
              </motion.div>
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
