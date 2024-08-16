import "./App.css";
import Home from "./pages/home";
import About from "./pages/about";
import Experience from "./pages/experience";
import Projects from "./pages/projects";
import Contact from "./pages/contact";
import Travel from "./pages/travel";
import Glob from "./pages/globe";

import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
const App = () => (
  <Router>
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      {/* <Route path="/experience" element={<Experience />} /> */}
      <Route path="/projects" element={<Projects />} />
      {/* <Route path="/contact" element={<Contact />} /> */}
      {/* <Route path="/oldtravel" element={<Travel />} /> */}
      <Route path="/travel" element={<Glob />} />
      <Route path="*" element={<Home />} />
    </Routes>
  </Router>
);
export default App;
