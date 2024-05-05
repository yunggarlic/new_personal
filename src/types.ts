interface ProjectsProps {
  projectsProps: ProjectProp[];
}

type ProjectProp = {
  projectTitle: string;
  description: string;
  link: string;
  picSrc: string;
  width: number;
  height: number;
  picAlt: string;
  className?: string;
};

type JobProp = {
  jobTitle: string;
  company: string;
  companyLink: string;
  startDate: string;
  endDate: string;
  description: string[];
  className?: string;
};

interface JobProps {
  jobs: JobProp[];
}
