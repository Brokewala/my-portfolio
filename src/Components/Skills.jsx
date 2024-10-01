import React from 'react'
import "./styles/Skills.css"
import { motion } from 'framer-motion';

// frontend
import css from '../assets/icons8-css3-96.png'
import html from '../assets/icons8-html-5-96.png';
import react from '../assets/react.svg';
// backend
import django from '../assets/icons8-django-150.png';
import nodejs from '../assets/icons8-nodejs-96.png';
import python from '../assets/icons8-python-96.png';
import php from '../assets/php.png';
import js from '../assets/js.png';
// base de donne
import mongodb from '../assets/icons8-mongodb-96.png';
import postgres from '../assets/icons8-postgresql-96.png';
import mysql from '../assets/icons8-logo-de-mysql-96.png';
// devops
import ansible from '../assets/icons8-ansible-144.png'
import docker from '../assets/icons8-docker-144.png';
import git from '../assets/icons8-git-144.png';
import k8s from '../assets/icons8-kubernetes-96.png';
// auther
import Github from '../assets/icons8-github-50.png'
import gitlab from '../assets/icons8-gitlab-144.png';

const Cards = ({ img, name ,transition }) => (
  <div className='skills-cards'>
    <motion.dev
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={transition}
    >
      <div className="skills-card-img">
        <img src={img} alt={name} />
      </div>
      <div className="skills-card-content">
        <h4>{name}</h4>
      </div>
    </motion.dev>
  </div>
)

export default function Skills() {
  return (
    <div id='Skills'>
      <div className="skill-container">
        <div className="skill-content">
          <div className="skill-title">
            <h1>My Skills</h1>

          </div>
          <div className="skill-all">
            {/* backend */}
            <Cards  img={django} name={"django"} transition={{ duration: 1.1, ease: 'easeInOut' }} />
            <Cards img={nodejs} name={"nodejs"} transition={{ duration: 1.2, ease: 'easeInOut' }} />
            <Cards img={python} name={"python"} transition={{ duration: 1.3, ease: 'easeInOut' }} />
            <Cards img={php} name={"PHP"} transition={{ duration: 1.4, ease: 'easeInOut' }} />
            {/* frontend */}
            <Cards img={js} name={"Javascript"} transition={{ duration: 1.5, ease: 'easeInOut' }} />
            <Cards img={css} name={"Css"} transition={{ duration: 1.6, ease: 'easeInOut' }} />
            <Cards img={html} name={"html"} transition={{ duration: 1.7, ease: 'easeInOut' }} />
            <Cards img={react} name={"react"} transition={{ duration: 1.8, ease: 'easeInOut' }} />
            {/* base de donne */}
            <Cards img={mongodb} name={"mongodb"} transition={{ duration: 1.9, ease: 'easeInOut' }} />
            <Cards img={postgres} name={"postgres"} transition={{ duration: 1.7, ease: 'easeInOut' }} />
            <Cards img={mysql} name={"mysql"} transition={{ duration: 1.7, ease: 'easeInOut' }} />
            <Cards img={docker} name={"docker"} transition={{ duration: 1.1, ease: 'easeInOut' }} />
            {/*  */}
            <Cards img={git} name={"git"} transition={{ duration: 1.2, ease: 'easeInOut' }} />
            <Cards img={Github} name={"Github"} transition={{ duration: 1.3, ease: 'easeInOut' }} />
            <Cards img={gitlab} name={"gitlab"} transition={{ duration: 1.4, ease: 'easeInOut' }} />
            <Cards img={k8s} name={"k8s"} transition={{ duration: 1.5, ease: 'easeInOut' }} />
            {/* <Cards img={ansible} name={"ansible"} /> */}
          </div>


        </div>
      </div>
    </div >
  )
}
