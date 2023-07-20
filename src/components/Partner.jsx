import React from 'react'
import { logoPartner1,logoPartner2,logoPartner3,logoPartner4,logoPartner5,logoPartner6 ,logoPartner7, logoPartner8, vektorKanan, vektorKiri} from '../assets';
const Partner = () => {
  return (
    <div id="partner" className="mt-16 md:pt-8">
      <div className="flex justify-center gap-1 h-8 mb-4">
        <img src={vektorKiri} width={75} alt="" />
        <h1 className="font-semibold text-center py-1 text-xl">PARTNER</h1>
        <img src={vektorKanan} width={75} alt="" />
      </div>
      <div className="grid grid-cols-4 grid-rows-2 text-center gap-1 place-items-center sm:place-items-stretch md:h-60  bg-gray-300 mx-20">
        <img src={logoPartner1} alt="logo1" />
        <img src={logoPartner2} alt="logo2" />
        <img src={logoPartner3} alt="logo3" />
        <img src={logoPartner4} alt="logo4" />
        <img src={logoPartner5} alt="logo5" />
        <img src={logoPartner6} alt="logo6" />
        <img src={logoPartner7} alt="logo7" />
        <img src={logoPartner8} alt="logo8" />
      </div>
    </div>
  );
}

export default Partner