import React from 'react'
import NavbarNexus from '../../../components/nexus/navbarnexus';
import FooterNexus from '../../../components/nexus/footernexus';
import INTERNAL from '../../../assets/dinas nexus/press release/internal/internal.png';
export const Internal = () => {
  return (
    <div>
      <NavbarNexus />
      <img src={INTERNAL} alt="Internal" />
      {/* Overlay hitam dengan opacity */}
      <div className="absolute inset-0 w-full h-[757px] bg-black opacity-50"></div>
      <FooterNexus />
    </div>
  )
}
export default Internal;
