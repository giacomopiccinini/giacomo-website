import Image from 'next/image';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Timeline from '../components/Timeline';
import Tech from '../components/Tech';
import Art from '../components/Art';

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen items-center p-24">
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
      <div id="about" className="flex flex-col items-center">
        <h1 className="text-4xl font-bold mb-16">HEY!</h1>
        <div className="flex items-start max-w-5xl">
          <div className="w-1/2 pr-8 mt-6">
            <Image
              src="/images/boat.jpg"
              alt="Portrait"
              width={400}
              height={600}
              className="rounded"
            />
          </div>
          <div className="w-1/2 border-l pl-8 space-y-6 text-gray-400">
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
      {/* EXPERIENCE */}
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
