import React from 'react';
import "./styles/Project.css"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import { motion, useScroll } from "framer-motion"
import project1 from "../assets/Capture d’écran du 2024-08-25 13-58-47.png"
import project2 from "../assets/Capture d’écran du 2024-08-25 13-59-04.png"
import project3 from "../assets/Capture d’écran du 2024-08-25 13-59-19.png"


const ProjectData=[
  {
      img:"../assets/Capture d’écran du 2024-08-25 13-58-47.png",
  },
  {
    img:"../assets/Capture d’écran du 2024-08-25 13-59-04.png",
},
{
  img:"../assets/Capture d’écran du 2024-08-25 13-59-19.png",
},
]

const Cards = ({ img }) => (
  <div className='project-cards'>
    <div className="project-card-img">
      <img src="../assets/abstract-colorful-mesh-dark-background.png" alt="project1" />
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
          <Swiper
            modules={[Autoplay]}
            spaceBetween={20}
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
                <SwiperSlide key={index} className="slide_img ">
                  <Cards img={data.img} />
                </SwiperSlide>
              ))
            }

          </Swiper>
        </div>
      </div>
    </div>
  )
}
