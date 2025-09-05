import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import Bemfti from "./bemfti";
import Kabinet from "./kabinet";
import Sinergi from "./pages/sinergi/sinergi";
import Nexus from "./pages/nexus/nexus";
import DinasNexus from "./pages/nexus/dinasnexus";
import Inti from "./pages/nexus/dinas/inti";
import NotFound from "./notfound";
function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Bemfti />} />
        <Route path="/kabinet" element={<Kabinet />} />
        <Route path="/sinergi" element={<Sinergi />} />
        <Route path="/nexus" element={<Nexus />} />

        {/* Kabinet Nexus */}
        <Route path="/dinasnexus" element={<DinasNexus />} />
          <Route path="/dinasnexus/inti" element={<Inti />} />

        {/* 404 Not Found - harus di paling bawah */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
