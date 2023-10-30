import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="w-full mt-12">
    <footer className="p-4 text-white">
        <div className="text-center space-x-4">
          <Link href="https://github.com/giacomopiccinini" className="text-white hover:text-purple-400">GitHub</Link>
          <Link href="https://twitter.com/G_Piccinini_" className="text-white hover:text-purple-400">X</Link>
          <Link href="https://www.linkedin.com/in/piccinini-giacomo/" className="text-white hover:text-purple-400">LinkedIn</Link>
          <Link href="https://medium.com/@giacomo.piccinini" className="text-white hover:text-purple-400">Medium</Link>
        </div>
        <div className="text-center mt-4 text-gray-500">
          <p>© 2023 Giacomo Piccinini</p>
        </div>
    </footer> 
    </div>
  );
}