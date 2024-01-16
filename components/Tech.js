import React from "react"; 

export default function Tech() {
  return (
    <div className="flex justify-center">
      <div className="relative flex flex-col max-w-6xl w-full">

        {/* Conditional Rendering of Central Line based on screen size */}
        <div className="absolute hidden md:block left-1/2 transform -translate-x-1/2 border-l border-white h-full"></div>

        {/* Items */}
        {[
              {
                title: "Languages",
                desc: "Python (proficient), C++ (basic), Rust (basic), SQL (basic), JavaScript (very basic)"
              },
              {
                title: "(Favourite) Libraries",
                desc: "Polars, Torch/Torchaudio/Torchvision, Modal, FastAPI, Librosa, OpenCV, Ruff"
              },
              {
                title: "Cloud Services",
                desc: "AWS, Modal"
              },
              {
                title: "Tools",
                desc: "Docker, NeonDB, CockroachDB, Git"
              }
        ].map((item, index) => (
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

  