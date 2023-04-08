import Topbar from "./components/topbar/Topbar";
import Intro from "./components/introduction/Intro";
import Portfolio from "./components/portfolio/Portfolio";
import Projects from "./components/projects/Projects";
import Technologies from "./components/technologies/Technologies";
import Testimonials from "./components/testimonials/Testimonials";
import Contact from "./components/contact/Contact";



function App() {
  return (
    <div className="app">
      <Topbar/>
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
