import React, { useState } from 'react';
import amos from '../../public/images/amos.png';
import { IoMdCopy } from "react-icons/io";

const HeadComponent = () => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText("alikoamosofficial@gmail.com").then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Hide "Copied" after 2 seconds
    });
  };

  return (
    <section className="flex flex-col gap-2">
      <div className="">
        <div className='flex gap-2 items-center'>
          <div className="w-16 h-16 border border-gray-500 rounded-full p-0.5 overflow-hidden">
            <img src={amos} alt="official photo" className="w-full h-full object-cover rounded-full"/>
          </div>
          <div className=''>
            <h2 className='font-semibold'>Amos Aliko</h2>
            <p>Frontend Developer</p>
            <p className='flex items-center'>
              alikoamosofficial@gmail.com
              <IoMdCopy onClick={copyToClipboard} className='cursor-pointer' />
              {copied && <span className="ml-2 text-sm text-green-500">Copied</span>}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeadComponent;
