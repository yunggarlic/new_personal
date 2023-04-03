import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const Work: React.FC = () => {
  const [currentJob, setCurrentJob] = useState(0);

  // const jobs = [
  //   {
  //     jobTitle: 'Senior Software Engineer',
  //     company: 'Critical Mass',
  //     startDate: 'May 2023',
  //     endDate: 'Present',
  //     description: [
  //       'Architect and strategize innovative solutions to intricate challenges, spearheading the development of cutting-edge features and products',
  //       'Craft modern, high-performance, and maintainable code across a diverse portfolio of client and internal projects, adhering to best practices and industry standards',
  //       'Collaborate and effectively communicate with multi-disciplinary teams comprising engineers, designers, producers, and clients, providing technical expertise and ensuring the timely delivery of exceptional products',
  //     ],
  //   },
  //   {
  //     jobTitle: 'Software Engineer',
  //     company: 'Critical Mass',
  //     startDate: 'March 2022',
  //     endDate: 'May 2023',
  //     description: [
  //       'Develop and implement modern, performant, and maintainable code for a wide range of client and internal projects, adhering to best practices and industry standards',
  //       'Demonstrate proficiency in multiple languages, platforms, frameworks, and content management systems, such as JavaScript, TypeScript, React, Adobe Experience Manager, and Salesforce',
  //       'Liaise with multi-disciplinary teams of engineers, designers, producers, and clients, offering technical guidance and ensuring the delivery of top-quality products that exceed expectations',
  //     ],
  //   },
  //   {
  //     jobTitle: 'Software Engineer Intern',
  //     company: 'Critical Mass',
  //     startDate: 'September 2021',
  //     endDate: 'March 2022',
  //     description: [
  //       'Gained valuable industry experience by shadowing seasoned engineers and executing a variety of small-scale independent projects, demonstrating adaptability and eagerness to learn',
  //       'Introduced and implemented a range of development tools and automation scripts to streamline workflows and bolster the efficiency of the development team',
  //       'Designed, developed, and maintained code for in-house and client websites, utilizing technologies such as HTML, CSS, Less, JavaScript, and jQuery while adhering to best practices',
  //     ],
  //   },
  //   {
  //     jobTitle: 'Film Production',
  //     company: 'Freelance',
  //     startDate: 'May 2016',
  //     endDate: 'March 2020',
  //     description: [
  //       'Collaborated with local commercial and wedding clients to capture and edit high-quality videos that met their specific needs and exceeded their expectations',
  //       'Directed and produced a diverse portfolio of short films and music videos, showcasing creativity and technical proficiency that earned recognition in independent festivals',
  //       'Coordinated production logistics and assisted with creative development for high-profile clients, including Rihanna, Tove Lo, Ulta, and others, contributing to successful and memorable projects',
  //     ],
  //   },
  // ];

  const jobs = [
    {
      jobTitle: 'Software Engineer',
      company: 'Critical Mass',
      companyLink: 'https://www.criticalmass.com/',
      startDate: 'March 2022',
      endDate: 'Present',
      description: [
        'Develop and implement modern, performant, and maintainable code for a wide range of client and internal projects, adhering to best practices and industry standards',
        'Demonstrate proficiency in multiple languages, platforms, frameworks, and content management systems, such as JavaScript, TypeScript, React, Tailwind, Adobe Experience Manager, and Salesforce',
        'Liaise with multi-disciplinary teams of engineers, designers, producers, and clients, offering technical guidance and ensuring the delivery of top-quality products that exceed expectations',
      ],
    },
    {
      jobTitle: 'Software Engineer Intern',
      company: 'Critical Mass',
      companyLink: 'https://www.criticalmass.com/',
      startDate: 'September 2021',
      endDate: 'March 2022',
      description: [
        'Designed, developed, and maintained code for in-house and client websites, utilizing technologies such as HTML, CSS, Less, JavaScript, and jQuery while adhering to best practices',
        'Introduced and implemented a range of development tools and automation scripts to streamline workflows and bolster the efficiency of the development team',
        'Gained valuable industry experience by shadowing and pair programming with seasoned engineers and executing a variety of small-scale independent projects, demonstrating adaptability and eagerness to learn',
      ],
    },
    {
      jobTitle: 'Film Production',
      company: 'Freelance',
      companyLink: '/',
      startDate: 'May 2016',
      endDate: 'March 2020',
      description: [
        'Collaborated with local commercial and wedding clients to capture and edit high-quality videos that met their specific needs and exceeded their expectations',
        'Directed and produced a diverse portfolio of short films and music videos, showcasing creativity and technical proficiency that earned recognition in independent festivals',
        'Coordinated production logistics and assisted with creative development for high-profile clients, including Rihanna, Tove Lo, Ulta, and others, contributing to successful and memorable projects',
      ],
    },
  ];

  return (
    <section className="flex h-screen items-center" id="work">
      <div className="my-auto h-full w-full tablet:h-[unset]">
        <h2 className="pb-8">Work Experience</h2>
        <div className="work-inner flex h-full flex-col space-y-4 tablet:flex-row tablet:space-y-0">
          <div className="tab-list flex justify-between gap-4 tablet:mr-6 tablet:flex-col tablet:justify-start">
            {jobs.map((job, i) => (
              <button
                key={i}
                onClick={() => setCurrentJob(i)}
                className={`${
                  currentJob === i
                    ? 'active bg-blue-500/10 dark:bg-blue-500/20'
                    : ''
                } work-tab`}
              >
                {job.jobTitle}
              </button>
            ))}
          </div>
          <div className="job-list relative w-full tablet:max-h-[300px]">
            {jobs.map((job, i) => (
              <Job
                {...job}
                className={`transition-opacity duration-500 ${
                  currentJob === i
                    ? 'visible h-full opacity-100'
                    : 'invisible h-0 opacity-0'
                } `}
                key={i}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

interface JobProps {
  jobTitle: string;
  company: string;
  companyLink: string;
  startDate: string;
  endDate: string;
  description: string[];
  className: string;
}

const Job: React.FC<JobProps> = ({
  jobTitle,
  company,
  companyLink,
  startDate,
  endDate,
  description,
  className,
}) => {
  return (
    <div className={`job ${className}`}>
      <h3 className="leading-8">
        <span>{jobTitle} </span>
        <Link href={companyLink} className="block text-lg">
          {' '}
          {company}
        </Link>
      </h3>
      <p className="pb-4 text-sm">
        {startDate} - {endDate}
      </p>
      <ul>
        {description.map((desc, i) => (
          <li className="pb-4 text-sm last:pb-0" key={i}>
            {desc}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Work;
