import React from 'react'
import "./styles/Experience.scss"
import { motion } from 'framer-motion';


const Cards = ({ title, desc, initialData, view }) => (

  <div className='Experience_cards'>
    <motion.div
      initial={initialData}
      whileInView={view}
      transition={{ type: 'spring', stiffness: 100 }}

    >
      <div className="Experience_card-title">
        <h3>{title}</h3>
      </div>
      <div className="Experience_card-years">
        <div className="Experience_card-years-left">{"Zafytody"}</div>
        <div className="Experience_card-years-right">{"2021"}-2022</div>
      </div>
      <div className="Experience_card-desc">
        <p>
          {desc}
        </p>
      </div>
    </motion.div>
  </div>

)

export default function Experience() {
  return (
    <div id='Experience'>
      <div className="Experience-container">
        <div className="Experience-title">
          <h1>Experience</h1>

        </div>
        <div className="Experience-content">
          <Cards
            initialData={{ x: '-40vw' }}
            view={{ x: 0, Opacity: 1 }}
            title={"Développement de la plateforme 'Zafytody-Online'"}
            desc={`Création et gestion d'une plateforme dédiée aux startups incubées au sein de l'incubateur Zafytody.
            Technologies utilisées : React pour le développement frontend, Django pour le
            backend, Docker pour la containerisation, et Google Cloud Platform pour le
            déploiement.et deperformance applicative.`} />
          <Cards initialData={{ x: '40vw' }} view={{ x: 0, Opacity: 1 }} title={"Responsable Backend et DevOps"} desc={`
            Depuis février 2023 smart entreprise Ampefiloha, antananarivo 101
J'ai participé à la création d'une plateforme appelée Steedy, qui permet aux créateurs
de contenu de rassembler leur communauté. Nous avons utilisé React pour le
frontend et Django pour le backend. Je suis responsable du backend avec Django et de
la mise en place du déploiement en utilisant GitLab CI/CD et Kubernetes, ce qui permet
un développement continu et un déploiement simultané.
            `} />
          <Cards initialData={{ x: '-40vw' }} view={{ x: 0, Opacity: 1 }} title={"Chef de projet MaBoo"} desc={`
            De décembre 2023 à mars 2024 MaBoo ampefiloha, antananarivo 101
Pendant la création de la plateforme MaBoo, j'ai assumé le rôle de chef de projet pour
un projet d'e-commerce destiné aux maternités.
            `} />
          <Cards initialData={{ x: '40vw' }} view={{ x: 0, Opacity: 1 }} title={"Chef de projet FISCACOMPTA"} desc={`
            Octobre 2023 FISCACOMPTA ampefiloha, antananarivo 101
Lors de mon travail chez Smart Entreprise, j'ai occupé le poste de chef de projet pour
un projet de gestion comptable et financière(FISCACOMPTA). Nous avons utilisé React
pour le frontend, Django pour le backend, et Figma pour la maquette. 
            `} />
              <Cards initialData={{ x: '-40vw' }} view={{ x: 0, Opacity: 1 }} title={"Chef de projet MaBoo"} desc={`
            De décembre 2023 à mars 2024 MaBoo ampefiloha, antananarivo 101
Pendant la création de la plateforme MaBoo, j'ai assumé le rôle de chef de projet pour
un projet d'e-commerce destiné aux maternités.
            `} />
          <Cards initialData={{ x: '40vw' }} view={{ x: 0, Opacity: 1 }} title={"Chef de projet FISCACOMPTA"} desc={`
            Octobre 2023 FISCACOMPTA ampefiloha, antananarivo 101
Lors de mon travail chez Smart Entreprise, j'ai occupé le poste de chef de projet pour
un projet de gestion comptable et financière(FISCACOMPTA). Nous avons utilisé React
pour le frontend, Django pour le backend, et Figma pour la maquette. 
            `} />
        </div>
      </div>

    </div>
  )
}
