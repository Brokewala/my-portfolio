import React from 'react'
import "./styles/Skills.css"
import { motion } from "framer-motion"

// frontend
import css from '../assets/icons8-css3-96.png'
import html from '../assets/icons8-html-5-96.png';
import react from '../assets/react.svg';
// backend
import django from '../assets/icons8-django-150.png';
import nodejs from '../assets/icons8-nodejs-96.png';
import python from '../assets/icons8-python-96.png';
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

export default function Skills() {
  return (
    <div id='Skills'>
      <div className="skill-container">
        <div className="skill-content">
          <div className="skill-title">
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: "calc(100vw - 50%)" }}
            >
              <h1>hello</h1>
            </motion.div>
            <h1>Skills</h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est nam quidem voluptatibus, deserunt asperiores ut quia dolorem dolore saepe amet, distinctio, id porro maxime officia sint explicabo fuga libero recusandae?
            </p>
          </div>
          <div className="skill-frontend">
            <h1>frontend</h1>
            <img src={css} alt="css" />
            <img src={html} alt="gitlab" />
            <img src={react} alt="gitlab" />

          </div>
          <div className="skill-backend">
            <h1>backend</h1>
            <img src={django} alt="django" />
            <img src={nodejs} alt="django" />
            <img src={python} alt="django" />

          </div>
          <div className="skill-db">
            <h1>Base de donne</h1>
            <img src={mysql} alt="mysql" />
            <img src={postgres} alt="postgres" />
            <img src={mongodb} alt="mongodb" />

          </div>
          <div className="skill-backend">
            <h1>devops</h1>
            <img src={gitlab} alt="gitlab" />
            <img src={docker} alt="docker" />
            <img src={git} alt="git" />
            <img src={Github} alt="Github" />
            <img src={ansible} alt="ansible" />
            <img src={k8s} alt="k8s" />
          </div>

        </div>
      </div>
    </div >
  )
}
