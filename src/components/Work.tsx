import React, { useState, useEffect } from "react";
import Link from "next/link";
import { JobProp, JobProps } from "../lib/types";

const Work: React.FC<JobProps> = ({ jobs }) => {
  const [currentJob, setCurrentJob] = useState(0);
  return (
    <section className="bg-fade flex h-screen items-center" id="work">
      <div className="bg-fade my-auto w-full tablet:h-[unset]">
        <h2 className="pb-8">Work Experience</h2>
        <div className="work-inner flex h-full flex-col space-y-4 tablet:flex-row tablet:space-y-0">
          <div className="tab-list flex justify-between gap-4 tablet:mr-6 tablet:flex-col tablet:justify-start">
            {jobs.map((job, i) => (
              <button
                key={i}
                onClick={() => setCurrentJob(i)}
                className={`${
                  currentJob === i
                    ? "active bg-blue-500/10 dark:bg-deep-blue"
                    : ""
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
                    ? "visible h-full opacity-100"
                    : "invisible h-0 opacity-0"
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

const Job: React.FC<JobProp> = ({
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
          {" "}
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
