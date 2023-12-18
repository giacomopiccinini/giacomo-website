import React from "react"; 

export default function Timeline() {
  return (
    <div className="flex justify-center">
      <div className="relative flex flex-col max-w-6xl w-full">

        {/* Conditional Rendering of Central Line based on screen size */}
        <div className="absolute hidden md:block left-1/2 transform -translate-x-1/2 border-l border-white h-full"></div>

        {/* Items */}
        {[
              {
                date: "February 2022 - Present",
                title: "Machine Learning Engineer at Gemmo AI",
                desc: "Responsible for the entire AI pipeline, from dataset creation to Machine/Deep Learning models development and cloud deployment."
              },
              {
                date: "September 2018 - June 2022",
                title: "Ph.D. in String Theory",
                desc: "Researcher on aspects of Classical Integrability and Duality in String Theory."
              },
              {
                date: "September 2015 - April 2018",
                title: "Master's Degree in Theoretical Physics",
                desc: "Dissertation on Superconformal Quantum Mechanics. Final Grade: 110/110 cum laude"
              },
              {
                date: "September 2012 - December 2015",
                title: "Bachelor's Degree in Physics",
                desc: "Dissertation on Newton-Cartan Geometry. Final Grade: 110/110 cum laude"
              }
        ].map((item, index) => (
          <div key={index} className="flex flex-col md:flex-row mb-10">
            <div className="flex-1 md:text-right mb-4 md:mb-0 md:pr-10 text-xl text-center md:text-right">
              {item.date}
            </div>
            {/* Mobile Line */}
            <div className="md:hidden border-t border-white w-full my-2"></div>
            <div className="flex-1 md:pl-10">
              <p className="text-xl">{item.title}</p>
              <p className="text-gray-400">{item.desc}</p>
            </div>
          </div>
        ))}

      </div>
    </div>
  );
}
