import About from "./components/About";
import Projects from "./components/Projects";
import Header from "./components/Header"
import 'bootstrap/dist/css/bootstrap.min.css';
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App(){

  const revealItem = ()=>{
    let reveals = document.querySelectorAll(".reveal");

    for (let i = 0; i < reveals.length; i++) {
      let windowHeight = window.innerHeight;
      let revealTop = reveals[i].getBoundingClientRect().top;
      let revealPoint = 150;

      if (revealTop < windowHeight - revealPoint) {
        reveals[i].classList.add('scrolled');
      } else {
        reveals[i].classList.remove('scrolled');
      }
    }
  };

  return(
    <div>
      <Header />
      <div id="home">
        <About />
      </div>
      <div id="projects">
        <Projects revealItem={revealItem} />
      </div>
      <div id="skills">
        <Skills revealItem={revealItem} />
      </div>
      <div id="contact">
        <Contact revealItem={revealItem} />
      </div>
      <Footer />
    </div>
  )
} 