import "./App.css";
import NavBar from "./components/NavBar";
import Countries from "./pages/Countries";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Favoritos from "./pages/Favoritos";

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Countries />} />
          <Route path="/favoritos" element={<Favoritos />} />
        </Routes>
      </Router>


    </>
  );
}

export default App;
