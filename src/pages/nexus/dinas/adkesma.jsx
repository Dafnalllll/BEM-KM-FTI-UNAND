import React from 'react'
import NavbarNexus from '../../../components/nexus/navbarnexus';
import FooterNexus from '../../../components/nexus/footernexus';
import ADKESMA from '../../../assets/dinas nexus/press release/adkesma/ma.png';
export const Adkesma = () => {
  return (
    <div>
      <NavbarNexus />
      <img src={ADKESMA} alt="Adkesma" />
      {/* Overlay hitam dengan opacity */}
      <div className="absolute inset-0 w-full h-[966px] bg-black opacity-50"></div>
      <FooterNexus />
    </div>
  )
}

export default Adkesma;
