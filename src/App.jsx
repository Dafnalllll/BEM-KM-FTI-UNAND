import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import Bemfti from "./bemfti";
import Kabinet from "./kabinet";
import Sinergi from "./pages/sinergi/sinergi";
import TentangSinergi from "./pages/sinergi/tentangsinergi";
import Nexus from "./pages/nexus/nexus";
import Inti from "./pages/nexus/dinas/inti";
import Ristek from "./pages/nexus/dinas/ristek";
import Audkes from "./pages/nexus/dinas/audkes";
import Sosmasling from "./pages/nexus/dinas/sosmasling";
import Kastrat from "./pages/nexus/dinas/kastrat";
import Adkesma from "./pages/nexus/dinas/adkesma";
import Psdm from "./pages/nexus/dinas/psdm";
import Internal from "./pages/nexus/dinas/internal";
import Bistech from "./pages/nexus/dinas/bistech";
import Medinkraf from "./pages/nexus/dinas/medinkraf";
import Eksternal from "./pages/nexus/dinas/eksternal";
import NotFound from "./notfound";
import Loading from "./components/loading fti";
import IntiSinergi from "./pages/sinergi/dinas/inti";
import RistekSinergi from "./pages/sinergi/dinas/ristek";
import AdkesmaSinergi from "./pages/sinergi/dinas/adkesma";
import SosmaslingSinergi from "./pages/sinergi/dinas/sosmasling";
import EksternalSinergi from "./pages/sinergi/dinas/eksternal";
import InternalSinergi from "./pages/sinergi/dinas/internal";
import BistechSinergi from "./pages/sinergi/dinas/bistech";
import MedinkrafSinergi from "./pages/sinergi/dinas/medinkraf";
import PsdmSinergi from "./pages/sinergi/dinas/psdm";
import KastratSinergi from "./pages/sinergi/dinas/kastrat";
import AuditInternalSinergi from "./pages/sinergi/dinas/auditinternal";
import KestariSinergi from "./pages/sinergi/dinas/kestari";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
    // Tampilkan loading selama 1.5 detik
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) return <Loading />;

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Bemfti />} />
        <Route path="/kabinet" element={<Kabinet />} />
        <Route path="/sinergi" element={<Sinergi />} />
        <Route path="/nexus" element={<Nexus />} />

        {/* Kabinet Nexus */}
        <Route path="/dinasnexus/inti" element={<Inti />} />
        <Route path="/dinasnexus/ristek" element={<Ristek />} />
        <Route path="/dinasnexus/audkes" element={<Audkes />} />
        <Route path="/dinasnexus/sosmasling" element={<Sosmasling />} />
        <Route path="/dinasnexus/kastrat" element={<Kastrat />} />
        <Route path="/dinasnexus/adkesma" element={<Adkesma />} />
        <Route path="/dinasnexus/psdm" element={<Psdm />} />
        <Route path="/dinasnexus/internal" element={<Internal />} />
        <Route path="/dinasnexus/bistech" element={<Bistech />} />
        <Route path="/dinasnexus/medinkraf" element={<Medinkraf />} />
        <Route path="/dinasnexus/eksternal" element={<Eksternal />} />

        {/* Kabinet Sinergi */}
        <Route path="/tentangsinergi" element={<TentangSinergi />} />
        <Route path="/dinassinergi/inti" element={<IntiSinergi />} />
        <Route path="/dinassinergi/ristek" element={<RistekSinergi />} />
        <Route path="/dinassinergi/adkesma" element={<AdkesmaSinergi />} />
        <Route path="/dinassinergi/sosmasling" element={<SosmaslingSinergi />} />
        <Route path="/dinassinergi/eksternal" element={<EksternalSinergi />} />
        <Route path="/dinassinergi/internal" element={<InternalSinergi />} />
        <Route path="/dinassinergi/bistech" element={<BistechSinergi />} />
        <Route path="/dinassinergi/medinkraf" element={<MedinkrafSinergi />} />
        <Route path="/dinassinergi/psdm" element={<PsdmSinergi />} />
        <Route path="/dinassinergi/kastrat" element={<KastratSinergi />} />
        <Route path="/dinassinergi/auditinternal" element={<AuditInternalSinergi />} />
        <Route path="/dinassinergi/kestari" element={<KestariSinergi />} />
        

        

        {/* 404 Not Found - harus di paling bawah */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
