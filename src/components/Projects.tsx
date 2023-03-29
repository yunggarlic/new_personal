import React from 'react';
import Image, { StaticImageData } from 'next/image';
import statesmenPic from '../../public/statesmen.png';
import aetherPic from '../../public/aether.png';
import githubPic from '../../public/github.png';

const projectProps = [
  {
    projectTitle: 'The Statesmen Podcast App',
    description:
      'A podcast app for the Statesmen Podcast. Built with React, and Material UI',
    link: 'statesmenpodcast.com',
    picSrc: statesmenPic,
    picAlt: 'A screenshot of the home page of the Statesmen Podcast App.',
    className: '',
  },
  {
    projectTitle: 'Aether',
    description:
      'Aether is a multiplayer music game built with React and Socket.io',
    link: 'aether.timferrari.com',
    picSrc: aetherPic,
    picAlt: 'A screenshot of the home page of the Aether App.',
    className: '',
  },
];

const Projects: React.FC = () => {
  return (
    <section className="space-y-4" id="projects">
      <h2 className="">Projects</h2>
      <p className="">Check out some of my work</p>
      <div className="flex flex-col">
        {projectProps.map((project, i) => (
          <FeaturedProject key={i} {...project} />
        ))}
      </div>
    </section>
  );
};

interface ProjectProps {
  projectTitle: string;
  description: string;
  link: string;
  picSrc: StaticImageData;
  picAlt: string;
  className: string;
}

const FeaturedProject: React.FC<ProjectProps> = ({
  projectTitle,
  description,
  link,
  picSrc,
  picAlt,
  className,
}) => {
  return (
    <div
      className={`flex relative h-72 py-4 mb-12 ${className}`}
    >
      <div className="w-3/5 z-10">
        <h2 className="text-xl mb-4">
          <a href={link}>{projectTitle}</a>
        </h2>
        <div className="py-8 px-4 rounded shadow-lg bg-blue-900 text-slate-200 dark:text-black dark:bg-slate-400">
          <p>{description}</p>
        </div>
      </div>
      <div className="w-1/2 absolute left-1/2 z-0 rounded overflow-hidden">
        <a href={link} className="relative group">
          <Image
            alt={picAlt}
            src={picSrc}
            className="max-h-[275px] w-full object-cover transition duration-300 ease-in-out"
          />
          <div className="absolute inset-0 bg-black opacity-40 group-hover:opacity-0 transition duration-300 ease-in-out"></div>
        </a>
      </div>
    </div>
  );
};

export default Projects;
