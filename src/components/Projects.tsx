import React, { useEffect, useRef } from 'react';
import Image, { StaticImageData } from 'next/image';
import statesmenPic from '../../public/statesmen.png';
import aetherPic from '../../public/aether.png';
import githubPic from '../../public/github.png';
import Link from 'next/link';
interface ProjectsProps {
  projectsProps: {
    projectTitle: string;
    description: string;
    link: string;
    picSrc: StaticImageData;
    picAlt: string;
  }[];
}

const Projects: React.FC<ProjectsProps> = ({ projectsProps }) => {
  return (
    <section className="space-y-4" id="projects">
      <h2 className="">Projects</h2>
      <p className="">Check out some of my work</p>
      <div className="flex flex-col">
        {projectsProps.map((project, i) => (
          <FeaturedProject
            {...projectsProps}
            className={`opacity-0 transition-all duration-500 ${
              i % 2 == 0 ? 'translate-x-[25%]' : 'translate-x-[-25%]'
            }`}
            key={i}
            {...project}
          />
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
  const projectRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let project = projectRef.current;
    const intersectionCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          project!.classList.remove(
            'opacity-0',
            'translate-x-[25%]',
            'translate-x-[-25%]'
          );
          project!.classList.add('opacity-100', 'translate-x-0');
          observer.unobserve(project!);
        }
      });
    };
    const observer = new IntersectionObserver(intersectionCallback, {
      root: null,
      rootMargin: '0px',
      threshold: 0.4,
    });

    observer.observe(project!);
  }, []);

  return (
    <div
      ref={projectRef}
      className={`flex relative h-72 py-4 mb-12 ${className}`}
    >
      <div className="w-4/5 tablet:w-3/5 z-10">
        <h2 className="w-3/4 tablet:w-full text-xl mb-4">
          <a href={link}>{projectTitle}</a>
        </h2>
        <div className="py-8 px-4 rounded shadow-lg bg-sky-200 dark:bg-emerald-800 dark:text-slate-200 text-black">
          <p>{description}</p>
        </div>
      </div>
      <div className="w-1/2 absolute left-1/2 z-0 rounded overflow-hidden">
        <Link href={link} className="relative group">
          <Image
            alt={picAlt}
            src={picSrc}
            className="max-h-[275px] min-h-[100px] w-full object-cover transition duration-300 ease-in-out"
          />
          <div className="absolute inset-0 bg-black opacity-40 group-hover:opacity-0 transition duration-300 ease-in-out"></div>
        </Link>
      </div>
    </div>
  );
};

export default Projects;
