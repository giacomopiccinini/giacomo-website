import React from "react"; 
import Link from 'next/link';

export default function Art() {
  // Define the items array with JSX directly, not functions returning JSX
  const items = [
    {
      title: "Music",
      desc: (
        <>
          Drummer and Synth boy for <Link href="https://www.youtube.com/c/MysteriaNoctis" className="text-white hover:text-purple-400">Mysteria Noctis</Link> 
        </>
      )
    },
    {
      title: "Drawing",
      desc: (
        <>
          Find some pencil drawings on my <Link href="https://www.instagram.com/giacomo_piccinini_/" className="text-white hover:text-purple-400">Instagram</Link> 
        </>
      )
    }
  ];

  return (
    <div className="flex justify-center">
      <div className="relative flex flex-col max-w-6xl w-full">

        {/* Conditional Rendering of Central Line based on screen size */}
        <div className="absolute hidden md:block left-1/2 transform -translate-x-1/2 border-l border-white h-full"></div>

        {/* Items */}
        {items.map((item, index) => (
          <div key={index} className="flex flex-col md:flex-row mb-10">
            <div className="flex-1 md:text-right mb-4 md:mb-0 md:pr-10 text-xl text-center md:text-right">
              {item.title}
            </div>
            {/* Mobile Line */}
            <div className="md:hidden border-t border-white w-full my-2"></div>
            <div className="flex-1 md:pl-10">
              <p className="text-gray-400">{item.desc}</p>
            </div>
          </div>
        ))}

      </div>
    </div>
  );
}
 