import Head from 'next/head';
import Link from 'next/link';

import statesmenPic from '../../public/statesmen.png';
import aetherPic from '../../public/aether.png';

import { Roboto_Mono } from 'next/font/google';
import {
  Navbar,
  Hero,
  Projects,
  Skills,
  About,
  Work,
  Contact,
} from '../components';

// If loading a variable font, you don't need to specify the font weight
const roboto = Roboto_Mono({ subsets: ['latin'] });

const projectProps = [
  {
    projectTitle: 'The Statesmen Podcast App',
    description:
      "A podcast app for the Statesmen Podcast that dynamically reads the show's RSS feed for the most updated episode. Built with React, MaterialUI and Redis.",
    link: 'https://statesmenpodcast.com',
    picSrc: statesmenPic,
    picAlt: 'A screenshot of the home page of the Statesmen Podcast App.',
  },
  {
    projectTitle: 'Aether',
    description:
      'Aether is a multiplayer music game built with Threejs, React Socket.io, and Firebase enabling users to play music in realtime and save creations to their profile.',
    link: 'https://aether.timferrari.com',
    picSrc: aetherPic,
    picAlt: 'A screenshot of the home page of the Aether App.',
  },
];

export default function Home(): JSX.Element {
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
      <Navbar className={`${roboto.className}`} />
      <main
        className={`max-w-5xl bg-stars-tall bg-right-top mx-auto px-6 tablet:px-10 space-y-10 ${roboto.className}`}
      >
        <Hero />
        <About />
        <Work />
        <Projects projectsProps={projectProps} />
        {/* <Skills /> */}
        <Contact />
        <footer>
          <div className="max-w-5xl mx-auto text-center pb-8 tablet:px-10">
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
      </main>
    </>
  );
}
