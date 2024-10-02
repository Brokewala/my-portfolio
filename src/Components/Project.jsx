import "./styles/Project.scss"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import { motion, useScroll } from "framer-motion"
import project1 from "../assets/project1.png"
import project2 from "../assets/project2.png"
import project3 from "../assets/project3.png"
import project4 from "../assets/project4.png"
import project5 from "../assets/project5.png"
import project6 from "../assets/project6.png"
import project7 from "../assets/project7.png"
import project8 from "../assets/project8.png"


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
            {/* slide1 */}
            <SwiperSlide >
              <div className='project-cards'>
                <div className="project-card-img">
                  <img src={project1} alt="project1" />
                </div>
                <div className="project-card-content">
                  <h4>My portfolio</h4>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident perferendis modi voluptas itaque unde hic reiciendis suscipit, quod alias nam expedita architecto, natus laboriosam officia debitis sapiente. Blanditiis, illum sint.
                  </p>
                  <a href={"https://lodphin24.netlify.app/"} target='__blanks' >
                    <button>Discover</button>
                    <img src="/src/assets/icons8-droite-24.png" alt="image" />
                  </a>
                </div>
              </div>
            </SwiperSlide>
            {/* slide2 */}
            <SwiperSlide >
              <div className='project-cards'>
                <div className="project-card-img">
                  <img src={project2} alt="project1" />
                </div>
                <div className="project-card-content">
                  <h4>zafy tody</h4>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id accusamus perferendis nemo. Blanditiis minima, iste voluptatem aliquam, iure sunt ducimus tenetur repellat saepe similique possimus, delectus aliquid amet quam mollitia.
                  </p>
                  <a href={"https://lodphin24.netlify.app/"} target='__blanks' >
                    <button>Discover</button>
                    <img src="/src/assets/icons8-droite-24.png" alt="image" />
                  </a>
                </div>
              </div>
            </SwiperSlide>

            {/* slide3 */}
            <SwiperSlide >
              <div className='project-cards'>
                <div className="project-card-img">
                  <img src={project3} alt="project1" />
                </div>
                <div className="project-card-content">
                  <h4>zafy tody</h4>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates obcaecati sint qui, pariatur necessitatibus atque ipsa, accusamus nam quis labore rerum modi quo sapiente accusantium earum nemo dolore rem tenetur.
                  </p>
                  <a href={"https://lodphin24.netlify.app/"} target='__blanks' >
                    <button>Discover</button>
                    <img src="/src/assets/icons8-droite-24.png" alt="image" />
                  </a>
                </div>
              </div>
            </SwiperSlide>

            {/* slide4 */}
            <SwiperSlide >
              <div className='project-cards'>
                <div className="project-card-img">
                  <img src={project4} alt="project1" />
                </div>
                <div className="project-card-content">
                  <h4>zafy tody</h4>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates obcaecati sint qui, pariatur necessitatibus atque ipsa, accusamus nam quis labore rerum modi quo sapiente accusantium earum nemo dolore rem tenetur.
                  </p>
                  <a href={"https://lodphin24.netlify.app/"} target='__blanks' >
                    <button>Discover</button>
                    <img src="/src/assets/icons8-droite-24.png" alt="image" />
                  </a>
                </div>
              </div>
            </SwiperSlide>

            {/* slide5 */}
            <SwiperSlide >
              <div className='project-cards'>
                <div className="project-card-img">
                  <img src={project5} alt="project1" />
                </div>
                <div className="project-card-content">
                  <h4>zafy tody</h4>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates obcaecati sint qui, pariatur necessitatibus atque ipsa, accusamus nam quis labore rerum modi quo sapiente accusantium earum nemo dolore rem tenetur.
                  </p>
                  <a href={"https://lodphin24.netlify.app/"} target='__blanks' >
                    <button>Discover</button>
                    <img src="/src/assets/icons8-droite-24.png" alt="image" />
                  </a>
                </div>
              </div>
            </SwiperSlide>

            {/* slide6 */}
            <SwiperSlide >
              <div className='project-cards'>
                <div className="project-card-img">
                  <img src={project6} alt="project1" />
                </div>
                <div className="project-card-content">
                  <h4>zafy tody</h4>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates obcaecati sint qui, pariatur necessitatibus atque ipsa, accusamus nam quis labore rerum modi quo sapiente accusantium earum nemo dolore rem tenetur.
                  </p>
                  <a href={"https://lodphin24.netlify.app/"} target='__blanks' >
                    <button>Discover</button>
                    <img src="/src/assets/icons8-droite-24.png" alt="image" />
                  </a>
                </div>
              </div>
            </SwiperSlide>
            {/* slide7 */}
            <SwiperSlide >
              <div className='project-cards'>
                <div className="project-card-img">
                  <img src={project7} alt="project1" />
                </div>
                <div className="project-card-content">
                  <h4>zafy tody</h4>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates obcaecati sint qui, pariatur necessitatibus atque ipsa, accusamus nam quis labore rerum modi quo sapiente accusantium earum nemo dolore rem tenetur.
                  </p>
                  <a href={"https://lodphin24.netlify.app/"} target='__blanks' >
                    <button>Discover</button>
                    <img src="/src/assets/icons8-droite-24.png" alt="image" />
                  </a>
                </div>
              </div>
            </SwiperSlide>
            {/* slide8 */}
            <SwiperSlide >
              <div className='project-cards'>
                <div className="project-card-img">
                  <img src={project8} alt="project1" />
                </div>
                <div className="project-card-content">
                  <h4>zafy tody</h4>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates obcaecati sint qui, pariatur necessitatibus atque ipsa, accusamus nam quis labore rerum modi quo sapiente accusantium earum nemo dolore rem tenetur.
                  </p>
                  <a href={"https://lodphin24.netlify.app/"} target='__blanks' >
                    <button>Discover</button>
                    <img src="/src/assets/icons8-droite-24.png" alt="image" />
                  </a>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  )
}
