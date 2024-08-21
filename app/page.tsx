import Link from "next/link";
import React from "react";
import Particles from "./components/particles";

const navigation = [
  //{ name: "Projects", href: "/projects" },
<<<<<<< HEAD
  {name:"Services", href:"/services"},
=======
  { name: "Services", href: "/services" },
>>>>>>> 275f383b283473fdea174eb9cc7c0e9aec26eecf
  { name: "Contact", href: "/contact" },
];

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center bg-gradient-to-tl from-black via-zinc-600/20 to-black w-screen h-screen overflow-hidden">
      <nav className="my-16 animate-fade-in">
        <ul className="flex justify-center items-center gap-4">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-zinc-500 hover:text-zinc-300 duration-500"
            >
              {item.name}
            </Link>
          ))}
        </ul>
      </nav>
      <div className="md:block hidden bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0 w-screen h-px animate-fade-left animate-glow" />
      <Particles
        className="-z-10 absolute inset-0 animate-fade-in"
        quantity={100}
      />
      <h1 className="z-10 bg-clip-text bg-white px-0.5 py-3.5 font-display text-4xl text-edge-outline text-transparent sm:text-6xl md:text-9xl whitespace-nowrap animate-title duration-1000 cursor-default">
        indimind
      </h1>

      <div className="md:block hidden bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0 w-screen h-px animate-fade-right animate-glow" />
      <div className="my-16 text-center animate-fade-in">
        <h2 className="text-sm text-zinc-500">
        Inspire India to innovate.
        </h2>
      </div>
    </div>
  );

}
