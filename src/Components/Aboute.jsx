import React from 'react'
import "./styles/Aboute.css"
import myimg from "../assets/Shooting studio  (8).jpg"

export default function Aboute() {
  return (
    <div id='Aboute'>
      <div className="about-content">
        <div className="about-left">
          <div className="about-img">
            <img src={myimg} alt="my img" />
          </div>
        </div>
        <div className="about-right">
          <div className="about_title">
            <div className="about_title-value">
              <h1>About me</h1>
            </div>
            <div className="about-line"></div>
          </div>
          <div className="about-desc">

            <p>
              Je m'appelle JACQUES Jean Lodphin, développeur web passionné avec une forte expertise dans le développement backend et DevOps. Professionnel, dynamique et créatif, je suis engagé dans chaque projet que j'entreprends, avec une capacité à m'adapter à différents environnements de travail.
            </p>
            <p>
              Mon parcours académique, complété par un Diplôme de technicien supérieur, m'a permis de maîtriser diverses technologies telles que React, Django, GitLab CI/CD, Kubernetes et Google Cloud. J'ai eu l'opportunité de travailler sur des projets variés, allant de la création de plateformes communautaires comme Steedy à la gestion de projets e-commerce et comptables.
            </p>
            <p>
              En tant que responsable backend et DevOps, j'ai mis en place des infrastructures robustes, déployé des microservices sur Google Kubernetes Engine, et assuré un développement continu grâce à des pipelines CI/CD efficaces. Ma polyvalence me permet également d'assumer des rôles de chef de projet, où j'ai dirigé des équipes pour livrer des solutions de haute qualité.
            </p>
            <p>
              Je suis constamment à la recherche de nouveaux défis pour affiner mes compétences et contribuer à des projets innovants.
            </p>

          </div>
          <div className="about-btns">
            <button className='hire_me'>Hire me</button>
            <button className='download'>Download cv</button>
          </div>
        </div>
      </div>
    </div>
  )
}
