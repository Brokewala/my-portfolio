import React from 'react'
import "./styles/Skills.css"

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

const Cards= ({img,name})=>(
  <div className='skills-cards'>
    <div className="skills-card-img">
      <img src={img} alt={name} />
    </div>
    <div className="skills-card-content">
      <h4>{name}</h4>
    </div>
  </div>
)

export default function Skills() {
  return (
    <div id='Skills'>
      <div className="skill-container">
        <div className="skill-content">
          <div className="skill-title">
            <h1>MySkills</h1>
    
          </div>
          <div className="skill-all">
            {/* backend */}
            <Cards img={django} name={"django"} />
            <Cards img={nodejs} name={"nodejs"} />
            <Cards img={python} name={"python"} />
            <Cards img={php} name={"PHP"} />
            {/* frontend */}
            <Cards img={js} name={"Javascript"} />
            <Cards img={css} name={"Css"} />
            <Cards img={html} name={"html"} />
            <Cards img={react} name={"react"} />
            {/* base de donne */}
            <Cards img={mongodb} name={"mongodb"} />
            <Cards img={postgres} name={"postgres"} />
            <Cards img={mysql} name={"mysql"} />
            <Cards img={docker} name={"docker"} />
            {/*  */}
            <Cards img={git} name={"git"} />
            <Cards img={Github} name={"Github"} />
            <Cards img={gitlab} name={"gitlab"} />
            <Cards img={k8s} name={"k8s"} />
            {/* <Cards img={ansible} name={"ansible"} /> */}
          </div>


        </div>
      </div>
    </div >
  )
}
