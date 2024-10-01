import React from 'react';
import "./styles/Service.scss"

const CardService=()=>(
  <div className="Service-card"></div>

)

export default function Service() {
  return (
    <div id='Service'>
      <div className="Service-container">
            <div className="Service-title"></div>
            <div className="Service-content">
              <CardService/>              
              <CardService/>              
              <CardService/>              
            </div>
      </div>
    </div>
  )
}
