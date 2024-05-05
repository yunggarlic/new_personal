"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

const Projects = ({ projectsProps }: ProjectsProps) => {
  return (
    <section className="space-y-4" id="projects">
      <h2 className="">Projects</h2>
      <p className="">Check out some of my work</p>
      <div className="flex flex-col">
        {projectsProps.map((project, i) => (
          <FeaturedProject
            {...project}
            className={`featured-project opacity-0 ${
              i % 2 == 0
                ? "translate-x-[25%]"
                : "reverse-align translate-x-[-25%]"
            }`}
            key={i}
          />
        ))}
      </div>
    </section>
  );
};

const FeaturedProject: React.FC<ProjectProp> = ({
  projectTitle,
  description,
  link,
  picSrc,
  width,
  height,
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
            "opacity-0",
            "translate-x-[25%]",
            "translate-x-[-25%]"
          );
          project!.classList.add("opacity-100", "translate-x-0");
          observer.unobserve(project!);
        }
      });
    };
    const observer = new IntersectionObserver(intersectionCallback, {
      root: null,
      rootMargin: "0px",
      threshold: 0.4,
    });

    observer.observe(project!);
  }, []);

  return (
    <div ref={projectRef} className={`relative mb-12 flex py-4 ${className}`}>
      <div
        className={`z-10 flex w-4/5 flex-col tablet:w-3/5 ${
          className?.includes("reverse-align") ? "items-end" : ""
        }`}
      >
        <h2 className="mb-4 h-fit w-fit py-2 text-xl">
          <a
            className="block border-b border-transparent transition-[border-color] duration-200 hover:border-white"
            href={link}
          >
            {projectTitle}
          </a>
        </h2>
        <div className="project-transitions rounded bg-sky-200 py-8 px-4 text-black shadow-lg dark:bg-deep-blue dark:text-slate-200">
          <p>{description}</p>
        </div>
      </div>
      <div
        className={`img-container absolute left-1/2 z-0 w-1/2 overflow-hidden rounded`}
      >
        <Link href={link} className="group">
          <Image
            alt={picAlt}
            src={picSrc}
            className="max-h-[275px] min-h-[100px] w-full object-cover"
            width={width}
            height={height}
          />
          <div className="absolute inset-0 bg-black opacity-40 transition-opacity duration-300 ease-in-out group-hover:opacity-0"></div>
        </Link>
      </div>
    </div>
  );
};

export default Projects;
