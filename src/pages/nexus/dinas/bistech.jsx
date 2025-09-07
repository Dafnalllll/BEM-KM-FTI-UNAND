import React, {useEffect} from 'react'
import NavbarNexus from '../../../components/nexus/navbarnexus'
import FooterNexus from '../../../components/nexus/footernexus'
import BISTECH from '../../../assets/dinas nexus/press release/bistech/tech.png'
export const Bistech = () => {
  useEffect(() => {
    document.title = "Bistech || Nexus Inspirasi";
  }, []);
  return (
     <div className="min-h-screen flex flex-col">
          <NavbarNexus />
          <div className="relative z-10 flex flex-col min-h-screen">
            <img src={BISTECH} alt="Bistech" />
            {/* Overlay hitam */}
            <div className="absolute inset-0 w-full h-[888px] bg-black opacity-50 pointer-events-none z-0"></div>
          </div>
          <FooterNexus />
        </div>
  )
}

export default Bistech;