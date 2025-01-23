import Navbar from "./components/navbar";
import Projects from "./components/projects";
import Hero from "./components/Hero";
import About from "./components/About";
import Contact from "./components/contact";

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Navbar />
      <Hero />
      <Projects />
      <About />
      <Contact />
    </div>
  );
}

export default App;
