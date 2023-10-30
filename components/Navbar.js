import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="flex justify-center space-x-4">
      <Link href="#about">About</Link>
      <Link href="#experience">Experience</Link>
      <Link href="#tech">Tech Stack</Link>
      <Link href="#art">Art</Link>
    </nav>
  );
};

export default Navbar;
