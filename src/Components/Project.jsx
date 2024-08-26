import React from 'react';
import "./styles/Project.css"
// import { motion, useScroll } from "framer-motion"
import project1 from "../assets/Capture d’écran du 2024-08-25 13-58-47.png"
import project2 from "../assets/Capture d’écran du 2024-08-25 13-59-04.png"
import project3 from "../assets/Capture d’écran du 2024-08-25 13-59-19.png"

const Cards = ({img}) => (
  <div className='project-cards'>
    <div className="project-card-img">
      <img src={img} alt="project1" />
    </div>
    <div className="project-card-content">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus unde illo, itaque debitis libero alias magni. Quas nihil, cum, veritatis fugit odio totam maiores repellat officia molestias aperiam consectetur dolorum.
      </p>
    </div>
  </div>
)

export default function Project() {
  return (
    <div id='Project'>
      <div className="project-container">
        <div className="project-tilte">
          <h1>Recent Project</h1>
          <div className="project-line"></div>
        </div>
        <div className="project-content">
          <Cards img={project1} />
          <Cards img={project2} />
          <Cards img={project3} />
        </div>
      </div>
    </div>
  )
}
