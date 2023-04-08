import Topbar from "./components/topbar/Topbar";
import Intro from "./components/introduction/Intro";
import Menu from "./components/menu/Menu";
import Portfolio from "./components/portfolio/Portfolio";
import Projects from "./components/projects/Projects";
import Technologies from "./components/technologies/Technologies";
import Testimonials from "./components/testimonials/Testimonials";
import Contact from "./components/contact/Contact";
import { useState } from "react";


function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <div className="app">
      <Topbar menuOpen = {menuOpen} setMenuOpen = {setMenuOpen}/>
      <Menu menuOpen = {menuOpen} setMenuOpen = {setMenuOpen}/>
      <div className="sections">
        <Intro/>
        <Portfolio/>
        <Projects/>
        <Technologies/>
        <Testimonials/>
        <Contact/>
      </div>
    </div>
  );
}

export default App;
