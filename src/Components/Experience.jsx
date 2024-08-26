import React from 'react'
import "./styles/Experience.css"

const Cards = () => (<div className='Experience_cards'>
  <div className="Experience_card-title">
    <h1>Developper web</h1>
  </div>
  <div className="Experience_card-years">
    <div className="Experience_card-years-left">{"rere"}</div>
    <div className="Experience_card-years-right">{"2021"}-2022</div>
  </div>
  <div className="Experience_card-desc">
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus quibusdam, omnis, provident ullam officia dolores illum, cumque asperiores nobis dolore vero. Sequi vero vel quod atque necessitatibus, tenetur ab commodi.
    </p>
  </div>
</div>)

export default function Experience() {
  return (
    <div id='Experience'>
      <div className="Experience-container">
        <div className="Experience-title">
          <h1>Resume</h1>

        </div>
        <div className="Experience-content">
            <Cards />
            <Cards />
            <Cards />
            <Cards />
        </div>
      </div>

    </div>
  )
}
