// import reactLogo from './assets/react.svg'
import './App.css'
import Aboute from './Components/Aboute.jsx';
import Banner from './Components/Banner.jsx';
import Experience from './Components/Experience.jsx';
import Footer from './Components/Footer.jsx';
import Formation from './Components/Formation.jsx';
import Header from './Components/Header.jsx';
import Project from './Components/Project.jsx';
import Service from './Components/Service.jsx';
import Skills from './Components/Skills.jsx';


function App() {

  return (
    <>
      {/* header */}
      <Header />
      {/* banner */}
      <Banner />
      {/* about */}
      <Aboute />
      {/* skills */}
      <Service />
      {/* formation */}
      <Formation />
      {/* footer */}
      <Skills />
      {/* experience */}
      <Experience />
      {/* project */}
      <Project />
      {/* service */}
      <Footer />

    </>
  )
}

export default App
