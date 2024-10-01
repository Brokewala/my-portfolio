import React from 'react';
import "./styles/Service.scss";
import { FaLaptopCode, FaCloud, FaCogs, FaSitemap } from 'react-icons/fa';



export default function Service() {
  return (
    <div id="Service">
      <div className="Service-container">
        <div className="Service-title">
          <h5>Services</h5>
          <h3>What i do ?</h3>
        </div>
        <div className='ServicesContainer'>
          <div className='ServiceCardItem' >
            <div className='IconWrapper'>
              <FaLaptopCode />
            </div>
            <h3>Web Development</h3>
            <p>Creating elegant and professional websites to promote your business.</p>
          </div >
          <div className='ServiceCardItem'>
            <div className='IconWrapper'>
              <FaSitemap />
            </div>
            <h3>App Development</h3>
            <p>Building custom mini-platforms tailored to your specific needs.</p>
          </div >
          <div className='ServiceCardItem'>
            <div className='IconWrapper'>
              <FaCloud />
            </div>
            <h3>Deployment</h3>
            <p>Fast and efficient deployment of your applications on the cloud.</p>
          </div >
          <div className='ServiceCardItem'>
            <div className='IconWrapper'>
              <FaCogs />
            </div>
            <h3>Integration of Other Services</h3>
            <p>Seamless integration with third-party services to enhance your applications.</p>
          </div >
        </div>
      </div>
    </div>
  )
}

