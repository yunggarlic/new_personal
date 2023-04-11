export interface ProjectsProps {
    projectsProps: ProjectProp[];
  }

export type ProjectProp = {
    projectTitle: string;
    description: string;
    link: string;
    picSrc: string;
    width: number;
    height: number;
    picAlt: string;
    className: string;
  }

export type JobProp = {
    jobTitle: string;
    company: string;
    companyLink: string;
    startDate: string;
    endDate: string;
    description: string[];
    className: string;
  }

export interface JobProps {
    jobs: JobProp[];
}