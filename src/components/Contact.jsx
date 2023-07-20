import React from 'react'
import  igLogo  from '../assets/sosmed/ig.svg';
import  fbLogo  from '../assets/sosmed/fb.svg';
import  waLogo  from '../assets/sosmed/wa.svg';
import {vektorKanan, vektorKiri } from "../assets";

const Contact = () => {
  return (
    <div id="contact" className="mt-16 md:pt-8">
      <div className="flex gap-1 h-8 mb-4 justify-center">
        <img src={vektorKiri} width={75} alt="" />
        <h1 className="font-semibold py-1 text-xl">CONTACT</h1>
        <img src={vektorKanan} width={75} alt="" />
      </div>
      <div className=" my-2 justify-center flex">
        <form action="">
          <table className="border-collapse border border-pink-400 h-[400px] w-[400px]">
            <tr>
              <th className="text-center">
                <label for="fName ">Nama</label>
              </th>
              <td>:</td>
              <td>
                <input type="text" id="fname" class="p-1 w-11/12" name="firstname" placeholder="Your name.." />
              </td>
            </tr>
            <tr>
              <th className="text-center">
                <label for="email ">Email</label>
              </th>
              <td>:</td>
              <td>
                <input type="text" id="email" class="p-1 w-11/12" name="firstname" placeholder="Your Email.." />
              </td>
            </tr>
            <tr>
              <th className="text-center">
                <label for="email ">No. Kontak</label>
              </th>
              <td>:</td>
              <td>
                <input type="text" id="kontak" class="p-1 w-11/12" name="firstname" placeholder="Write Here.." />
              </td>
            </tr>
            <tr>
              <th></th>
              <td></td>
              <td>
                <textarea id="subject" class="p-1 w-11/12 h-full" name="subject" placeholder="Write something.."></textarea>
              </td>
            </tr>
            <tr>
              <th></th>
              <td></td>
              <td className="flex gap-1">
                <input type="submit" value="Submit" className="p-1 text-white bg-green-300 uppercase hover:bg-green-700 rounded" />
                <input type="reset" value="Reset" className="p-1 text-white bg-green-300 uppercase hover:bg-green-700 rounded" />
              </td>
            </tr>
          </table>
        </form>
      </div>

      <div>
        <ul className="flex justify-center">
          <li>
            <img src={igLogo} alt="" />
          </li>
          <li>
            <img src={fbLogo} alt="" />
          </li>
          <li>
            <img src={waLogo} alt="" />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Contact