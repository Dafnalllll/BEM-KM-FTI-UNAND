import React, {useEffect} from "react";
import NavbarNexus from "../../../components/nexus/navbarnexus";
import FooterNexus from "../../../components/nexus/footernexus";
import KASTRAT from "../../../assets/dinas nexus/press release/kastrat/kastrat.png";
export const Kastrat = () => {
  useEffect(() => {
    document.title = "Kastrat || Nexus Inspirasi";
  }, []);
  return (
    <div className="min-h-screen flex flex-col">
      <NavbarNexus />
      <div className="relative z-10 flex flex-col min-h-screen">
        <img src={KASTRAT} alt="Kastrat" />
        {/* Overlay hitam */}
        <div className="absolute inset-0 w-full h-[843px] bg-black opacity-50 pointer-events-none z-0"></div>
      </div>
      <FooterNexus />
    </div>
  );
};

export default Kastrat;
