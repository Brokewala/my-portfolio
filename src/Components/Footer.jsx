import React from 'react';
import { ArrowRight, Facebook, Twitter, Instagram, LinkedIn, Google, LocationOn } from "@mui/icons-material"
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import "./styles/Footer.scss";

export default function Footer() {

  return (
    <div id='Footer' >
      <div className='Footer-container' >


        <div className='Footer-left'>
          <h3>Contactez-moi</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis, dolorem quasi iure similique tenetur corporis nesciunt suscipit voluptatibus corrupti neque quisquam fugiat in cum odit veritatis fugit aliquid eos minus.
          </p>
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

        <div className="footer-center">
          <h3>Quick links</h3>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Skiil</a>
            </li>
            <li>
              <a href="#">Experience</a>
            </li>
            <li>
              <a href="#">Home</a>
            </li>
          </ul>
        </div>
        <div className="footer-right">
          <h3>Contacte</h3>
          <ul>
            <li>
              IIF33INH ANDRAISORO ANTANANARIVO 101 MADAGASCAR
            </li>
            <li>
              Brokewala@gmail.com
            </li>
          </ul>
        </div>
      </div>

      <hr />
      <div className='Footer-copyright'>
        <p>&copy; Copyright portfolio-S.R 2023 -Mentions Legales <i>@lodphon-broke </i></p>
      </div>
    </div>
  )
}