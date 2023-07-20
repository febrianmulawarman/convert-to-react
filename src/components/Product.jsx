import React from 'react'
import { vektorKanan, vektorKiri, imgProduct1,imgProduct2,imgProduct3,imgProduct4,imgProduct5,imgProduct6 } from "../assets";




const Product = () => {
  return (
    <div id="product" className="pt-32 md:pt-32">
      <div className="flex justify-center gap-1 h-8 mb-4">
        <img src={vektorKiri} width={75} alt="" />
        <h1 className="font-semibold text-center py-1 text-xl">PRODUCT</h1>
        <img src={vektorKanan} width={75} alt="" />
      </div>
      <div className="grid grid-rows-6 mx-20 md:grid-cols-3 md:grid-rows-2 gap-2 place-items-stretch">
        <img src={imgProduct1} alt="" />
        <img src={imgProduct2} alt="" />
        <img src={imgProduct3} alt="" />
        <img src={imgProduct4} alt="" />
        <img src={imgProduct5} alt="" />
        <img src={imgProduct6} alt="" />
      </div> 
    </div>
  );
}

export default Product