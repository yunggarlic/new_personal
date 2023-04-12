import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import picSrc from '../../public/me.jpg';
import Link from 'next/link';

const About: React.FC = () => {
  const aboutRef = useRef<HTMLElement>(null);
  const [intersected, setIntersected] = useState<Boolean>(false);

  const skills = [
    'Javascript',
    'TypeScript',
    'React',
    'NextJS',
    'Tailwind',
    'Express',
    'NodeJS',
    'Python',
    'Nginx',
    'Linux',
    'AEM (Adobe)',
    'Git',
  ];

  useEffect(() => {
    let about = aboutRef.current;
    const intersectionCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIntersected(true);
          observer.unobserve(about!);
        }
      });
    };
    const observer = new IntersectionObserver(intersectionCallback, {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    });

    observer.observe(about!);
  }, []);

  return (
    <section
      className={`flex translate-y-10 flex-col items-center space-y-8 transition-all duration-1000 tablet:flex-row ${
        intersected ? 'animate-up opacity-100' : 'opacity-0'
      }`}
      id="about"
      ref={aboutRef}
    >
      <div className={`space-y-4 bg-fade`}>
        <h2>About Me</h2>
        <p className="">
          {
            'I have always had a strong interest in computers, which have played a significant role in my life for as long as I can remember. Though I initially hesitated to transform this fascination into a career, it eventually became an undeniable calling.'
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
            return <li key={index}>{skill}</li>;
          })}
        </ul>
      </div>
      <div
        className={`img-side translate-y-10 transition-transform duration-700 min-w-[33%] max-w-[360px] ${
          intersected ? 'animate-up' : ''
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
