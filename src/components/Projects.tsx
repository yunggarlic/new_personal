import React from "react";
import Image from "next/image";
import statesmenPic from "../../public/statesmen.png";
import tygkoPic from "../../public/tygko.png";
import githubPic from "../../public/github.png";

const Projects: React.FC = () => {
  return (
    <div className="h-screen mb-8" id="projects">
      <h2 className="text-3xl font-bold mb-2">Projects</h2>
      <span className="text-lg mb-4">Check out some of my work</span>
      <div className="project-list grid grid-cols-3 gap-4">
        <div>
          <h3 className="text-2xl mb-2">The Statesmen Podcast App</h3>
          <Image
            width="500"
            height="500"
            src={statesmenPic}
            alt="A screenshot of the home page of the Statesmen Podcast App."
            className="rounded shadow-md"
          />
        </div>
        <div>
          <h3 className="text-2xl mb-2">TYGKO - A Musicians Website</h3>
          <Image
            width="500"
            height="500"
            src={tygkoPic}
            alt="A screenshot of the home page of the TYGKO website."
            className="rounded shadow-md"
          />
        </div>
        <div>
          <h3 className="text-2xl mb-2">Check out my Github for more</h3>
          <Image
            width="500"
            height="500"
            src={githubPic}
            alt="Github Logo"
            className="rounded shadow-md"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
