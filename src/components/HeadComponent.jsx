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
    <section className="flex flex-col gap-2 mt-10">
      <div className="">
        <div className='flex flex-col gap-2 items-center'>
          <div className="max-w-52 border border-gray-500 rounded-lg overflow-hidden">
            <img src={amos} alt="official photo" className="w-full h-full object-cover"/>
          </div>
          <div className='text-center'>
            <h2 className='font-semibold text-center'>Amos Aliko</h2>
            <p className='text-sm'>Frontend Developer</p>
            <p className='flex text-sm'>
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
