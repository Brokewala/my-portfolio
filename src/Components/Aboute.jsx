import React from 'react'
import "./styles/Aboute.scss"
import myimg from "../assets/Shooting studio  (8).jpg"
import { MdOutlineFileDownload } from "react-icons/md";

export default function Aboute() {
  return (
    <div id='Aboute'>
      <div className="about-content">
        <div className="about-left">
          <div className="about-img">
            <img src={myimg} alt="my img" />
          </div>
        </div>
        <div className="about-right">
          <div className="about_title">
            <div className="about_title-value">
              <h1>About me</h1>
            </div>
            <div className="about-line"></div>
          </div>
          <div className="about-desc">
            <p>
              I come from sambava. I am a serious person and I appreciate learning. The more I integrate the world of computer development, the more my passion for it increases.

              Professional, dynamic and creative, I am always dedicated to my work and able to work in various environments.
            </p>


            <p>
              Je suis constamment à la recherche de nouveaux défis pour affiner mes compétences et contribuer à des projets innovants.
            </p>

          </div>
          <div className="aboute-cards">
            <div className="aboute-card">
              <h2>Name</h2>
              <p>JACQUES Jean Lodphin</p>
            </div>
            <div className="aboute-card">
              <h2>Email</h2>
              <p>brokewala@gmail.com</p>
            </div>
            <div className="aboute-card">
              <h2>Address</h2>
              <p>Lot IIf33INH ANDRAISORO Antananarivo 101 Madagascar</p>
            </div>
            <div className="aboute-card">
              <h2>Phone </h2>
              <p>+261 32 22 129 16 ou +261 34 78 423 54</p>
            </div>
          </div>
          <div className="about-btns">
          <a href='#' className='download_cv'>
                  <MdOutlineFileDownload />
                  <span>

                  Download cv
                  </span>
                  </a>
          </div>
        </div>
      </div>
    </div>
  )
}
