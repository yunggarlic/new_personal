import React, { useState, useEffect } from 'react';

const Work: React.FC = () => {
  const [currentJob, setCurrentJob] = useState(0);

  const jobs = [
    {
      jobTitle: 'Senior Software Engineer',
      company: 'Critical Mass',
      startDate: 'May 2023',
      endDate: 'Present',
      description: [
        'Architect and strategize innovative solutions to intricate challenges, spearheading the development of cutting-edge features and products',
        'Craft modern, high-performance, and maintainable code across a diverse portfolio of client and internal projects, adhering to best practices and industry standards',
        'Collaborate and effectively communicate with multi-disciplinary teams comprising engineers, designers, producers, and clients, providing technical expertise and ensuring the timely delivery of exceptional products',
      ],
    },
    {
      jobTitle: 'Software Engineer',
      company: 'Critical Mass',
      startDate: 'March 2022',
      endDate: 'May 2023',
      description: [
        'Develop and implement modern, performant, and maintainable code for a wide range of client and internal projects, adhering to best practices and industry standards',
        'Demonstrate proficiency in multiple languages, platforms, frameworks, and content management systems, such as JavaScript, TypeScript, React, Adobe Experience Manager, and Salesforce',
        'Liaise with multi-disciplinary teams of engineers, designers, producers, and clients, offering technical guidance and ensuring the delivery of top-quality products that exceed expectations',
      ],
    },
    {
      jobTitle: 'Software Engineer Intern',
      company: 'Critical Mass',
      startDate: 'September 2021',
      endDate: 'March 2022',
      description: [
        'Gained valuable industry experience by shadowing seasoned engineers and executing a variety of small-scale independent projects, demonstrating adaptability and eagerness to learn',
        'Introduced and implemented a range of development tools and automation scripts to streamline workflows and bolster the efficiency of the development team',
        'Designed, developed, and maintained code for in-house and client websites, utilizing technologies such as HTML, CSS, Less, JavaScript, and jQuery while adhering to best practices',
      ],
    },
  ];

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {};

  return (
    <section
      className="h-screen flex items-center pb-24 max-w-3xl mx-auto"
      id="work"
    >
      <div className="h-80 my-auto">
        <h2 className="text-3xl pb-8">Work Experience</h2>
        <div className="work-inner flex h-full">
          <div className="tab-list flex flex-col">
            {jobs.map((job, i) => (
              <button
                key={i}
                onClick={() => setCurrentJob(i)}
                className={`${
                  currentJob === i ? 'active ' : ''
                } text-left px-6 text-xs w-max h-12`}
              >
                {job.jobTitle}
              </button>
            ))}
          </div>
          <div className="job-list w-full">
            {jobs.map((job, i) => (
              <Job
                {...job}
                className={`transition-opacity delay-500 duration-500 ${
                  currentJob === i ? 'active opacity-100' : 'hidden opacity-0'
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
  startDate: string;
  endDate: string;
  description: string[];
  className: string;
}

const Job: React.FC<JobProps> = ({
  jobTitle,
  company,
  startDate,
  endDate,
  description,
  className,
}) => {
  return (
    <div className={`job ${className}`}>
      <h3 className="leading-8">
        <span>{jobTitle} </span>@<a> {company}</a>
      </h3>
      <p className="text-sm pb-4">
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
