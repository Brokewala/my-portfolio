import React from 'react';
import { ArrowRight, Facebook, Twitter, Instagram, LinkedIn, Google, LocationOn } from "@mui/icons-material"
// import { a } from "react-router-dom";
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import "./styles/Footer.css";

export default function Footer() {

  return (
    <div id='Footer' >
      <div className='Footer-container' >
        <div className='Footer-left'>
          <div className='Footer-left-blog1'>
            <a to="/">
              <span className="logo">Zara sr</span>
            </a>
          </div>
          <div className='Footer-left-blog3'>
            <div className='Footer-left-blog3-contact'>
              <LocationOn className='icon_footer ' sx={{ fontSize: "40px" }} />
              <span className="Footer_Lot">Lot: IIE2YWA Ambatokaranana,<br/> 101 Antananarivo Madagascar</span>
            </div>
            <div className='Footer-left-blog3-contact'>
              <EmailIcon className='icon_footer ' sx={{ fontSize: "40px" }} />
              <span>info.zara@gmail.com</span>
            </div>
            <div className='Footer-left-blog3-contact'>
              <CallIcon className='icon_footer' sx={{ fontSize: "40px" }} />
              <ul className='Footer_ul_num'>
                <li>
                  <span>(+261) 32 04 806 28</span>
                </li>
                <li>
                  <span>(+261) 34 40 558 33</span>
                </li>
                <li>
                  <span>(+261) 33 11 417 07</span>
                </li>
              </ul>
            </div>
          </div>
          <div className='Footer-left-blog2'>
            <ul>
              <li>
                <Facebook className="down iconW" sx={{ fontSize: "40px" }} />
              </li>
              <li>
                <Twitter className="up iconW" sx={{ fontSize: "40px" }} />
              </li>
              <li>
                <Instagram className="down iconW" sx={{ fontSize: "40px" }} />
              </li>
              <li>
                <LinkedIn className="up iconW" sx={{ fontSize: "40px" }} />
              </li>
              <li>
                <Google className="down iconW" sx={{ fontSize: "40px" }} />
              </li>
            </ul>
          </div>
        </div>
        <div className='Footer-center'>
          <h1 className='Footer-title'>Menu</h1>
          <ul>
            <li>
              <ArrowRight sx={{ fontSize: "40px" }} />
              <a to="/mada-randonne" >
                <span>Randonne</span>
              </a>
            </li>
            <li>
              <ArrowRight sx={{ fontSize: "40px" }} />
              <a to="/mada-tretec" >
                <span>Mada tretec</span>
              </a>
            </li>
            <li>
              <ArrowRight sx={{ fontSize: "40px" }} />
              <a to="/find-job" >
                <span>Travail a l'etrange</span>
              </a>
            </li>
            <li>
              <ArrowRight sx={{ fontSize: "40px" }} />
              <a to="/about" >
                <span>A propos</span>
              </a>
            </li>
            <li>
              <ArrowRight sx={{ fontSize: "40px" }} />
              <a to="/contact" >
                <span>Contact</span>
              </a>
            </li>
          </ul>
        </div>
        <div className='Footer-right'>
          <h1 className='Footer-title'>Nos services</h1>
          <ul>
            <li>
              <ArrowRight sx={{ fontSize: "40px" }} />
              <a to="/mada-tretec" >
                <span>Conseil et formation en nouveau technologie</span>
              </a>
            </li>
            <li>
              <ArrowRight sx={{ fontSize: "40px" }} />
              <a to="/mada-tretec" >
                <span>Developpement et creation de site web</span>
              </a>
            </li>
            <li>
              <ArrowRight sx={{ fontSize: "40px" }} />
              <a to="/find-job" >
                <span>Aide les jeunes malagasy pour trouver  un travail a l'etrange</span>
              </a>
            </li>
            <li>
              <ArrowRight sx={{ fontSize: "40px" }} />
              <a to="/mada-randonne" >
                <span>Decouverte ile de Madagascar au randonne </span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <hr />
      <div className='Footer-copyright'>
        <p>&copy; Copyright ZARA-S.R 2023 -Mentions Legales <i>@lodphon-broke </i></p>
      </div>
    </div>
  )
}