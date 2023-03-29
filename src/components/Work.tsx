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

  return (
    <section
      className="flex items-center h-screen"
      id="work"
    >
      <div className="w-full my-auto">
        <h2 className="pb-8">Work Experience</h2>
        <div className="work-inner flex flex-col tablet:flex-row h-full space-y-8 tablet:space-y-0">
          <div className="tab-list flex justify-between gap-4 tablet:flex-col tablet:mr-6">
            {jobs.map((job, i) => (
              <button
                key={i}
                onClick={() => setCurrentJob(i)}
                className={`${
                  currentJob === i ? 'active bg-blue-500/10 dark:bg-blue-500/20' : ''
                } w-full rounded tablet:whitespace-nowrap text-left p-4 tablet:px-6 text-xs tablet:h-12 transition-all hover:bg-blue-500/10 dark:hover:bg-blue-500/20`}
              >
                {job.jobTitle}
              </button>
            ))}
          </div>
          <div className="job-list relative w-full">
            {jobs.map((job, i) => (
              <Job
                {...job}
                className={`transition-opacity duration-500 ${
                  currentJob === i
                    ? 'visible opacity-100 h-full'
                    : 'invisible opacity-0 h-0'
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
        <span>{jobTitle} </span><a className="block text-lg"> {company}</a>
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
