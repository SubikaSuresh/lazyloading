import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Intro from "./pages/Intro";
import Gallery from "./pages/Gallery";
import Login from "./pages/Login";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/intro" element={<Intro />} />
        <Route path="/travel" element={<Gallery category="travel" />} />
        <Route path="/art" element={<Gallery category="art" />} />
        <Route path="/food" element={<Gallery category="food" />} />
        <Route path="/books" element={<Gallery category="books" />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
