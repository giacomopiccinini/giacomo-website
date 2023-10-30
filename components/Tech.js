import React from "react";

export default function Tech() {
    return (
      <div className="flex justify-center py-10">
        <div className="relative flex flex-col max-w-6xl">
  
          {/* Central Line */}
          <div className="absolute left-1/2 transform border-l border-white h-full"></div>
  
          {/* Timeline Items */}
          {[
              {
                type: "Languages",
                desc: "Python (proficient), C++ (basic), Rust (basic), SQL (basic), JavaScript (very basic)"
              },
              {
                type: "(Favourite) Libraries",
                desc: "Polars, Torch/Torchaudio/Torchvision, Modal, FastAPI, Librosa, OpenCV, Ruff"
              },
              {
                type: "Cloud Services",
                desc: "AWS, Modal"
              },
              {
                type: "Tools",
                desc: "Docker, NeonDB, Git"
              }
          ].map((item, index) => (
            <div key={index} className="flex mb-10">
              <div className="flex-1 text-right pr-10 text-xl">
                {item.type}
              </div>
              <div className="flex-1 pl-10">
                <p className="text-gray-400">{item.desc}</p>
              </div>
            </div>
          ))}
  
        </div>
      </div>
    );
  }
  