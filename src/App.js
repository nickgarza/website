import "./App.css";
import Home from "./pages/home";
import About from "./pages/about";

import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
const App = () => (
  <Router>
    <Routes>
      <Route exact path="/" element={<Home />} />
      {/* <Route path="/about" element={<About />} /> */}
      <Route path="*" element={<Home />} />
    </Routes>
  </Router>
);
export default App;
