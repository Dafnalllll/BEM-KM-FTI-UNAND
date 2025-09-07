import React, {useEffect} from "react";
import NavbarNexus from "../../../components/nexus/navbarnexus";
import FooterNexus from "../../../components/nexus/footernexus";
import MEDINKRAF from "../../../assets/dinas nexus/press release/medinkraf/medin.png";
export const Medinkraf = () => {
  useEffect(() => {
    document.title = "Medinkraf || Nexus Inspirasi";
  }, []);
  return (
    <div className="min-h-screen flex flex-col">
      <NavbarNexus />
      <div className="relative z-10 flex flex-col min-h-screen">
        <img src={MEDINKRAF} alt="MEDINKRAF" />
        {/* Overlay hitam */}
        <div className="absolute inset-0 w-full h-full bg-black opacity-50 pointer-events-none z-0"></div>
      </div>

      <FooterNexus />
    </div>
  );
};
export default Medinkraf;
