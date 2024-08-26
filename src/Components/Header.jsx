import React, { useEffect, useState } from 'react'
import "./styles/Header.css"
import Github from '../assets/icons8-github-50.png'
import Linkedin from '../assets/icons8-linkedin-96.png'
import Fb from '../assets/icons8-github-50.png'

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [scrollValue, setscrollValue] = useState("scrolled");


  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
      // 
      if (window.scrollY == 500) {
        setscrollValue("scrolled_p");
      } 

    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div id='Header'>
      <div className="header-container">
        <div id="header-content" className={scrolled ? 'header '+scrollValue : 'header'}>
          <div className="header-left">
            <a className='link' href="#Home">Home</a>
            <a className='link' href="#Aboute">About</a>
            <a className='link' href="#Project">Project</a>
            <a className='link' href="#Formation">Formation</a>
            <a className='link' href="#Experience">Experience</a>
            <a className='link' href="#Contact">Contact</a>
          </div>
          <div className="header-right">
            <a href="#">
              <img src={Github} alt="github" />
            </a>
            <a href="#">
              <img src={Linkedin} alt="github" />
            </a>
            <a href="#">
              <img src={Fb} alt="github" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
