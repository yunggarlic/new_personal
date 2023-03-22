import React from "react";
import Image from "next/image";
import picSrc from "../../public/me.jpg";

const About: React.FC = () => {
  return (
    <section className="h-screen flex items-center gap-8" id="about">
      <div className="w-3/5">
        <h2 className="text-3xl font-bold">About Me</h2>
        <p className="text-md pt-10">
          Hey there! I'm Tim Ferrari and I love a lot of things - but computers
          is one of the big ones. My interest in computers and programming
          started from a young age, but had always rejected the idea of making
          it my career. After working in the film industry for 6 years (and a
          pandemic), I decided to shift gears and pursue a career in software
          engineering.
        </p>
        <p className="text-md pt-4">
          Fast forward to today, I am developing websites and advertising
          solutions at <a href="criticalmass.com">Critical Mass</a> where I am
          bringing large legacy websites to next generation frameworks. I am
          constantly keeping my ear to the ground and looking to utilize the
          latest technology in my workflow. I believe in the power of open
          source and am always looking to contribute to the community.
        </p>
        <p className="text-md pt-4">
          Here are a few technologies I've been working with recently:
        </p>
        <ul className="grid grid-cols-2 gap-4 pt-4">
          <li className="text-xs">JavaScript (ES6+)</li>
          <li className="text-xs">React + Next</li>
          <li className="text-xs">Node.js</li>
          <li className="text-xs">Adobe Experience Manager</li>
          <li className="text-xs">Python</li>
          <li className="text-xs">TypeScript</li>
        </ul>
      </div>
      <div className="img-side w-2/5">
        <Image
          src={picSrc}
          className="mx-auto rounded-full shadow-md"
          alt="Software Developer Tim Ferrari smiling."
        />
      </div>
    </section>
  );
};

export default About;
