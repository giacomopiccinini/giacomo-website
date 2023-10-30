import React from "react";
import Link from 'next/link';

export default function Art() {
    return (
      <div className="flex justify-center py-10">
        <div className="relative flex flex-col max-w-6xl">
  
          {/* Central Line */}
          <div className="absolute left-1/2 transform border-l border-white h-full"></div>
  
          {/* Timeline Items */}
          {[
              {
                type: "Music",
                desc: () => (
                    <>
                    Drummer and Synth boy for <Link href="https://www.youtube.com/c/MysteriaNoctis" className="text-white hover:text-purple-400">Mysteria Noctis</Link> 
                    </>
                )
              },
              {
                type: "Drawing",
                desc: () => (
                    <>
                    Find some pencil drawings on my <Link href="https://www.instagram.com/giacomo_piccinini_/" className="text-white hover:text-purple-400">Instagram</Link> 
                    </>
                )
              }
          ].map((item, index) => (
            <div key={index} className="flex mb-10">
              <div className="flex-1 text-right pr-10 text-xl">
                {item.type}
              </div>
              <div className="flex-1 pl-10">
                <p className="text-gray-400">{item.desc()}</p>
              </div>
            </div>
          ))}
  
        </div>
      </div>
    );
  }
  