import React from 'react'
import FooterNexus from '../../../components/nexus/footernexus';
import AUDKES from '../../../assets/dinas nexus/press release/audkes/audkes.png';
import NavbarNexus from '../../../components/nexus/navbarnexus';
export const Audkes = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <NavbarNexus />
      <div className="relative z-10 flex flex-col min-h-screen">
        <img src={AUDKES} alt="AUDKES" />
        {/* Overlay hitam */}
        <div className="absolute inset-0 w-full h-[739px] bg-black opacity-50 pointer-events-none z-0"></div>
      </div>
      <FooterNexus />
    </div>
  )
}

export default Audkes;