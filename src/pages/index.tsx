import Head from 'next/head';
import Link from 'next/link';

import { JobProp, ProjectsProps, ProjectProp } from '../lib/types';

import { Roboto_Mono } from 'next/font/google';
import {
  Navbar,
  Hero,
  Projects,
  Skills,
  About,
  Work,
  Contact,
  ThemeToggle,
} from '../components';

// If loading a variable font, you don't need to specify the font weight
const roboto = Roboto_Mono({ subsets: ['latin'] });

export default function Home({
  projects,
  jobs,
}: {
  projects: ProjectProp[];
  jobs: JobProp[];
}): JSX.Element {
  return (
    <>
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
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main
        className={`mx-auto max-w-5xl bg-stars-tall bg-right-top ${roboto.className}`}
      >
        <div className="w-full px-6 tablet:px-10 ">
          <Navbar />
          <ThemeToggle />
          <Hero />
          <About />
          <Work jobs={jobs} />
          <Projects projectsProps={projects} />
          <Contact />
          <footer>
            <div className="mx-auto max-w-5xl pb-8 text-center text-xs tablet:px-10">
              <div>
                <Link className="hover:border-b" href="/">
                  Built by Tim Ferrari
                </Link>
              </div>
              <div>
                <Link
                  className="hover:border-b"
                  href="https://brittanychiang.com/"
                >
                  Inspired by Brittany Chiang
                </Link>
              </div>
            </div>
          </footer>
        </div>
      </main>
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {
      projects: require('../content/projects.json') as ProjectProp[],
      jobs: require('../content/jobs.json') as JobProp[],
    },
  };
}
