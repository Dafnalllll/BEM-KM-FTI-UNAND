import React from 'react'
import NavbarNexus from '../../../components/nexus/navbarnexus';
import FooterNexus from '../../../components/nexus/footernexus';
import SOSMASLING from '../../../assets/dinas nexus/press release/sosmasling/sosmasling.png';
export const Sosmasling = () => {
  return (
    <div>
      <NavbarNexus />
      <img src={SOSMASLING} alt="Sosmasling" />
      {/* Overlay hitam dengan opacity */}
      <div className="absolute inset-0 w-full h-[994px] bg-black opacity-50"></div>
      <FooterNexus />
    </div>
  )
}

export default Sosmasling;
