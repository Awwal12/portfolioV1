import Navbar from "./components/navbar";
import Projects from "./components/projects";
import Hero from "./components/Hero";
import About from "./components/About";
import Contact from "./components/contact";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>
      <Projects></Projects>
      <About />
      <Contact />
    </>
  );
}

export default App;
