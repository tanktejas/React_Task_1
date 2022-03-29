import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./component/Home/Home";
import About from "./component/aboutus/about";
import Services from "./component/services/services";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/about" element={<About />}></Route>
          <Route exact path="/services" element={<Services />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
