import React from 'react'
import NavbarNexus from '../../../components/nexus/navbarnexus';
import FooterNexus from '../../../components/nexus/footernexus';
import KASTRAT from '../../../assets/dinas nexus/press release/kastrat/kastrat.png';
export const Kastrat = () => {
  return (
    <div>
      <NavbarNexus />
      <img src={KASTRAT} alt="Kastrat" />
      {/* Overlay hitam dengan opacity */}
      <div className="absolute inset-0 w-full h-[843px] bg-black opacity-50"></div>
      <FooterNexus />
    </div>
  );
}

export default Kastrat;