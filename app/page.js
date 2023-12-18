import Image from 'next/image';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Timeline from '../components/Timeline';
import Tech from '../components/Tech';
import Art from '../components/Art';

export default function Home() {
  return (
    //<main className="flex flex-col min-h-screen items-center p-24"> "flex flex-col min-h-screen items-center px-4 md:px-24 py-6"
    <main className="flex flex-col min-h-screen items-center px-4 md:px-24 py-6">
      <Navbar />
      <div className="w-full p-4 mt-8 mb-8"> 
        <p className="text-center text-4xl">
          Giacomo Piccinini
        </p>
        <p className="mt-4 text-center text-xl text-gray-500">
          Machine Learning Engineer
        </p>
      </div>
      {/* ABOUT ME */}
      <div id="about" className="flex flex-col items-center w-full">
      {/* </div><div id="about" className="flex flex-col items-center"> */}    
        <h1 className="text-4xl font-bold mb-16">HEY!</h1>
        <div className="flex flex-col md:flex-row items-center items-start max-w-5xl w-full">
          <div className="md:w-1/2 w-full mb-4 md:mb-0 md:pr-8">
            <Image
              src="/images/boat.jpg"
              alt="Portrait"
              width={400}
              height={600}
              className="rounded w-full h-auto"
            />
          </div>
          {/* <div className="w-1/2 border-l pl-8 space-y-6 text-gray-400"> */}
          <div className="md:w-1/2 w-full md:border-l md:pl-8 space-y-6 text-gray-400">
            <p>I am Giacomo, a Machine Learning engineer specialising in Vision and Audio.</p>
            <p> Currently, I am working (remotely from Italy) at&nbsp;
              <Link href="https://gemmo.ai/" className="text-white hover:text-purple-400">Gemmo AI</Link>, a Dublin-based start-up that provides bespoke Deep Learning solutions.</p>
            <p>In my previous life I was a Ph.D. student in String Theory at Swansea University (Wales).</p>
            <p>In my spare time, I am trying to develop tools for leveraging Deep Learning to tackle what I believe are interesting problems in the artistic aspects of Vision and Audio.</p>
          </div>
        </div>
      </div>
      {/* EXPERIENCE */}
      <div id="experience" className="flex flex-col items-center">
        <h1 className="text-4xl font-bold mb-16 mt-24">EXPERIENCE</h1>
      </div>
      <Timeline />
      {/* TECH */}
      <div id="tech" className="flex flex-col items-center">
        <h1 className="text-4xl font-bold mb-16 mt-24">TECH STACK</h1>
      </div>
      <Tech />
      <div id="art" className="flex flex-col items-center">
        <h1 className="text-4xl font-bold mb-16 mt-24">ART</h1>
      </div>
      <Art />
      <Footer />
    </main>
  );
}
