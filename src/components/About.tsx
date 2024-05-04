import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import picSrc from "../../public/me.jpg";
import Link from "next/link";

const About: React.FC = () => {
  const aboutRef = useRef<HTMLElement>(null);
  const [intersected, setIntersected] = useState<Boolean>(false);

  const skills = [
    "Javascript",
    "TypeScript",
    "React",
    "NextJS",
    "Tailwind",
    "Vite",
    "Webpack",
    "Express",
    "Electron",
    "NodeJS",
    "Python",
    "Nginx",
    "Linux",
    "AEM (Adobe)",
    "Git",
  ];

  return (
    <section
      className={
        "about flex translate-y-10 flex-col items-center space-y-8 tablet:flex-row"
      }
      id="about"
      ref={aboutRef}
    >
      <div className={`space-y-4`}>
        <h2>About Me</h2>
        <p className="">
          {
            "I have always had a strong interest in computers, which have played a significant role in my life for as long as I can remember. Though I initially hesitated to transform this fascination into a career, it eventually became an undeniable calling."
          }
        </p>
        <p className="">
          {"Today, I'm proud to be part of the talented team at "}
          <Link className="hover:border-b" href="criticalmass.com">
            Critical Mass
          </Link>
          {
            ", where I have the opportunity to breathe new life into legacy websites by migrating them to cutting-edge frameworks. As a dynamic, forward-thinking professional, I'm always eager to explore and embrace the latest technological advancements to elevate my work and create unparalleled digital experiences."
          }
        </p>
        <p className="">
          {"Here are a few technologies I've been working with recently:"}
        </p>
        <ul className="skills-list grid auto-rows-fr grid-cols-3 gap-4">
          {skills.map((skill, index) => {
            return (
              <li className={`text-test dark:text-testDark`} key={index}>
                {skill}
              </li>
            );
          })}
        </ul>
      </div>
      <div
        className={`about img-side min-w-[33%] max-w-[360px] translate-y-10  ${
          intersected ? "animate-up" : ""
        }`}
      >
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
