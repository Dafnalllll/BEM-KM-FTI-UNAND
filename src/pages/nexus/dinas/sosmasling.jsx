import React from 'react'
import NavbarNexus from '../../../components/nexus/navbarnexus';
import FooterNexus from '../../../components/nexus/footernexus';
import SOSMASLING from '../../../assets/dinas nexus/press release/sosmasling/sosmasling.png';
export const Sosmasling = () => {
  return (
    <div className="min-h-screen flex flex-col">
          <NavbarNexus />
          <div className="relative z-10 flex flex-col min-h-screen">
            <img src={SOSMASLING} alt="SOSMASLING" />
            {/* Overlay hitam */}
            <div className="absolute inset-0 w-full h-[994px] bg-black opacity-50 pointer-events-none z-0"></div>
          </div>
          <FooterNexus />
        </div>
  )
}

export default Sosmasling;
