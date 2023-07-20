import React, {useState} from 'react'
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
 
const Navbar = () => {

  const [getNav, setNav] = useState()

  const handleNav = () => {
    setNav(!getNav)
  }

  return (
    <div className="fixed flex text-white w-full justify-between items-center h-20 mx-auto px-4 bg-pink-300">
      <h1 className="w-full text-3xl font-bold text-white]">COCO BEAUTY</h1>
      <ul className="hidden  md:flex">
        <li className="p-4">
          <a href="#product" className="hover:underline transition duration-500">
            PRODUK
          </a>
        </li>
        <li className="p-4">
          <a href="#partner" className="hover:underline transition duration-500">
            PARTNER
          </a>
        </li>
        <li className="p-4">
          <a href="#contact" className="hover:underline transition duration-500">
            CONTACT
          </a>
        </li>
      </ul>

      <div className="cursor-pointer block md:hidden" onClick={handleNav}>
       
        {!getNav ? <AiOutlineMenu size={40} /> : <AiOutlineClose size={40} />}
        
      </div>

      <div className={!getNav ? "fixed top-[-100%] " : "fixed left-0 right-0 top-20 w-[100%] border-l border-l-gray-300 bg-pink-300 ease-in-out duration-500"}>
        <ul className="text-center">
          <li className="p-4 border-y border-gray-300">PRODUK</li>
          <li className="p-4 border-b border-gray-300">PARTNER</li>
          <li className="p-4 border-b border-gray-300">CONTACT</li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar