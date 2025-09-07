import React, {useEffect} from 'react'
import NavbarNexus from '../../../components/nexus/navbarnexus';
import FooterNexus from '../../../components/nexus/footernexus';
import PSDM from '../../../assets/dinas nexus/press release/psdm/psdm.png';
export const Psdm = () => {
  useEffect(() => {
    document.title = "Psdm || Nexus Inspirasi";
  } , []);
  return (
    <div className="min-h-screen flex flex-col">
          <NavbarNexus />
          <div className="relative z-10 flex flex-col min-h-screen">
            <img src={PSDM} alt="Psdm" />
            {/* Overlay hitam */}
            <div className="absolute inset-0 w-full h-[773px] bg-black opacity-50 pointer-events-none z-0"></div>
          </div>
          <FooterNexus />
        </div>
  )
}

export default Psdm;
