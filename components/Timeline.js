import React from "react";

export default function Timeline() {
    return (
      <div className="flex justify-center py-10">
        <div className="relative flex flex-col max-w-6xl">
  
          {/* Central Line */}
          <div className="absolute left-1/2 transform border-l border-white h-full"></div>
  
          {/* Timeline Items */}
          {[
              {
                date: "February 2022",
                title: "Machine Learning Engineer at Gemmo AI",
                desc: "Responsible for the entire AI pipeline, from dataset creation to Machine/Deep Learning models development and cloud deployment."
              },
              {
                date: "June 2022",
                title: "Ph.D. in String Theory",
                desc: "Researcher on aspects of Classical Integrability and Duality in String Theory."
              },
              {
                date: "April 2018",
                title: "Master's Degree in Theoretical Physics",
                desc: "Dissertation on Superconformal Quantum Mechanics. Final Grade: 110/110 cum laude"
              },
              {
                date: "December 2015",
                title: "Bachelor's Degree in Physics",
                desc: "Dissertation on Newton-Cartan Geometry. Final Grade: 110/110 cum laude"
              },
          ].map((item, index) => (
            <div key={index} className="flex mb-10">
              <div className="flex-1 text-right pr-10 text-xl">
                {item.date}
              </div>
              <div className="flex-1 pl-10">
                <p className="text-xl">{item.title}</p>
                <p className="text-gray-400">{item.desc}</p>
              </div>
            </div>
          ))}
  
        </div>
      </div>
    );
  }
  