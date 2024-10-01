import React from 'react';
import "./styles/Project.scss"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import { motion, useScroll } from "framer-motion"
import project1 from "../assets/Capture d’écran du 2024-08-25 13-58-47.png"
import project2 from "../assets/Capture d’écran du 2024-08-25 13-59-04.png"
import project3 from "../assets/Capture d’écran du 2024-08-25 13-59-19.png"


const ProjectData = [
  {
    img: "/src/assets/Capture d’écran du 2024-08-25 13-58-47.png",
    title: "Capture",
    link: "https://lodphin24.netlify.app/"

  },
  {
    img: "/src/assets/Capture d’écran du 2024-08-25 13-59-04.png",
    title: "Capture",
    link: "https://lodphin24.netlify.app/"
  },
  {
    img: "/src/assets/Capture d’écran du 2024-08-25 13-59-19.png",
    title: "Capture",
    link: "https://lodphin24.netlify.app/"
  },
  {
    img: "/src/assets/Capture d’écran du 2024-08-25 13-58-13.png",
    title: "Capture",
    link: "https://lodphin24.netlify.app/"
  },
  {
    img: "/src/assets/Capture d’écran du 2024-08-25 13-57-33.png",
    title: "Capture",
    link: "https://lodphin24.netlify.app/"
  },
]

const Cards = ({ img, title, link }) => (
  <div className='project-cards'>
    <div className="project-card-img">
      <img src={img} alt="project1" />
    </div>
    <div className="project-card-content">
      <h4>{title}</h4>
      <a href={link} target='__blanks' >
        <button>Discover</button>
        <img src="/src/assets/icons8-droite-24.png" alt={title} />
      </a>
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
          <Swiper
            modules={[Autoplay]}
            spaceBetween={25}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            slidesPerView={3}
            className="tretec_swiper"
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 1
              },
              640: {
                slidesPerView: 1,
                spaceBetween: 1
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 10
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 20
              }
            }}
          >
            {
              ProjectData.map((data, index) => (
                <SwiperSlide key={index} >
                  <Cards img={data.img} title={data.title} link={data.link} />
                </SwiperSlide>
              ))
            }

          </Swiper>
        </div>
      </div>
    </div>
  )
}
