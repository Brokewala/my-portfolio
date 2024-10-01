import React from 'react'
import "./styles/Formation.css"
import lodphin from "../assets/Shooting studio  (9).jpg"
// import { motion } from "framer-motion";


const FormaValue = ({ years, title, paragraph }) => (
  <div className="Formation-cards">
    <div className="Formation-card-left">
      <h1>{years}</h1>
    </div>
    <div className="Formation-card-right">
      <h4>{title}</h4>
      <p>
        {paragraph}
      </p>
    </div>
  </div>
)

export default function Formation() {
  return (
    <div id='Formation'>
      <div className="Formation-container">
        <div className="Formation-right">
        
            <img src={lodphin} alt="lodphin" />
        </div>
        <div className="Formation-left">
          <div className="Formation-title">
            <h1>My Education</h1>
            <div className="formation_line"></div>
          </div>
          <div className="Formation-content">

            <FormaValue
              years="2022"
              title="Autodidacte"
              paragraph="De janvier 2020 , j'ai apris beaucoup des technologies ou methodologie en autodidact"
            />
            <FormaValue
              years="2021"
              title="Diplôme de technicien supérieur"
              paragraph="De janvier 2020 à décembre 2021 Université Privé Hay 67ha, antananarivo 101"
            />
            <FormaValue
              years="2019"
              title="Bacclauréat"
              paragraph="Lyceé prive fuschia Sambava"
            />
          </div>
          <div className="Formation-footer">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, quas nobis. Veniam aspernatur expedita consequatur dolore ratione quae inventore at, corporis animi facilis blanditiis itaque totam maxime molestiae id? Similique.
            </p>
          </div>
        </div>

      </div>
    </div>
  )
}
