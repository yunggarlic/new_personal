import Head from "next/head";
import { ThemeContext } from "@/lib/context";

import { JobProp, ProjectsProps, ProjectProp } from "../lib/types";
import { useState } from "react";

import { Roboto_Mono } from "next/font/google";
import {
  Navbar,
  Hero,
  Projects,
  Skills,
  About,
  Work,
  Contact,
  ThemeToggle,
  Footer,
} from "../components";

// If loading a variable font, you don't need to specify the font weight
const roboto = Roboto_Mono({ subsets: ["latin"] });

export default function Home({
  projects,
  jobs,
}: {
  projects: ProjectProp[];
  jobs: JobProp[];
}): JSX.Element {
  const [theme, setTheme] = useState("light");
  return (
    <ThemeContext.Provider value={theme}>
      <Head>
        <title>Tim Ferrari | Software Developer</title>
        <meta
          name="description"
          content="Discover the world of software development with Tim Ferrari, a seasoned software developer with expertise in multiple programming languages and platforms."
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <link rel="icon" href="/TF_WB.png" />
      </Head>
      <main
        className={`mx-auto max-w-5xl bg-stars-tall bg-right-top  ${roboto.className}`}
      >
        <div className="w-full px-6 tablet:px-10 ">
          <Navbar />
          <ThemeToggle setTheme={setTheme} />
          <Hero />
          <About />
          <Work jobs={jobs} />
          <Projects projectsProps={projects} />
          <Contact />
          <Footer />
        </div>
      </main>
    </ThemeContext.Provider>
  );
}

export async function getStaticProps() {
  return {
    props: {
      projects: require("../content/projects.json") as ProjectProp[],
      jobs: require("../content/jobs.json") as JobProp[],
    },
  };
}
