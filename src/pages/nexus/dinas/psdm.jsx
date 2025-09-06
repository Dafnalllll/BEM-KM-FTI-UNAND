import React from 'react'
import NavbarNexus from '../../../components/nexus/navbarnexus';
import FooterNexus from '../../../components/nexus/footernexus';
import PSDM from '../../../assets/dinas nexus/press release/psdm/psdm.png';
export const Psdm = () => {
  return (
    <div>
      <NavbarNexus />
      <img src={PSDM} alt="Psdm" />
      {/* Overlay hitam dengan opacity */}
      <div className="absolute inset-0 w-full h-[773px] bg-black opacity-50"></div>
      <FooterNexus />
    </div>
  )
}

export default Psdm;
