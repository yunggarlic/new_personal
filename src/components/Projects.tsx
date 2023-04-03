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
      className={`relative mb-12 flex h-72 py-4 ${className}`}
    >
      <div className="z-10 w-4/5 tablet:w-3/5">
        <h2 className="mb-4 w-3/4 text-xl tablet:w-full">
          <a href={link}>{projectTitle}</a>
        </h2>
        <div className="rounded bg-sky-200 py-8 px-4 text-black shadow-lg dark:bg-deep-blue dark:text-slate-200">
          <p>{description}</p>
        </div>
      </div>
      <div className="absolute left-1/2 z-0 w-1/2 overflow-hidden rounded">
        <Link href={link} className="group relative">
          <Image
            alt={picAlt}
            src={picSrc}
            className="max-h-[275px] min-h-[100px] w-full object-cover transition duration-300 ease-in-out"
          />
          <div className="absolute inset-0 bg-black opacity-40 transition duration-300 ease-in-out group-hover:opacity-0"></div>
        </Link>
      </div>
    </div>
  );
};

export default Projects;
