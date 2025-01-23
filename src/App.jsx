import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Projects from "./components/projects";
import Hero from "./components/Hero";
import About from "./components/About";
import Contact from "./components/contact";
import Blog from "./components/Blog";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white dark:bg-gray-900">
        <Navbar />
        <Routes>
          <Route path="/blog" element={<Blog />} />
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Projects />
                <About />
                <Contact />
              </>
            }
          />
        </Routes>
        <ScrollToTop />
      </div>
    </Router>
  );
}

export default App;
