import React, { useState, useEffect } from "react";

const Work: React.FC = () => {
  const [currentJob, setCurrentJob] = useState(0);

  const jobs = [
    {
      jobTitle: "Senior Software Engineer",
      company: "Critical Mass",
      startDate: "September 2021",
      endDate: "Present",
      description: [],
    },
    {
      jobTitle: "Software Engineer",
      company: "ABC Company",
      startDate: "January 2020",
      endDate: "September 2021",
      description: ["Implemented new features", "Improved performance"],
    },
    {
      jobTitle: "Software Engineer Intern",
      company: "XYZ Company",
      startDate: "June 2019",
      endDate: "December 2019",
      description: ["Assisted with testing", "Debugged code"],
    },
  ];

  return (
    <section className="h-screen mb-8" id="work">
      <h2>Work Experience</h2>
      <div className="grid grid-cols-5">
        <div className="tab-list col-span-2 flex flex-col ">
          {jobs.map((job, i) => (
            <button
              key={i}
              onClick={() => setCurrentJob(i)}
              className={currentJob === i ? "active" : ""}
            >
              {job.jobTitle}
            </button>
          ))}
        </div>
        <div className="job-list col-span-3">
          {jobs.map((job, i) => (
            <Job {...job} className={`${currentJob === i ? 'active' : 'hidden'}`} key={i} />
          ))}
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
  className
}) => {
  return (
    <div className={`job ${className}`}>
      <h3>
        <span>{jobTitle} </span>@<span>{company}</span>
      </h3>
      <span>
        {startDate} - {endDate}
      </span>
      <ul>
        {description.map((desc, i) => (
          <li key={i}>{desc}</li>
        ))}
      </ul>
    </div>
  );
};

export default Work;
