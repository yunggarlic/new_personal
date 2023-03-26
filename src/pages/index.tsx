import Head from 'next/head';
import Image from 'next/image';
import styles from '@/styles/Home.module.css';

import { useEffect, useState, useRef } from 'react';
import { Inter } from 'next/font/google';
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
const inter = Inter({ subsets: ['latin'] });

export default function Home(): JSX.Element {
  return (
    <>
      <Head>
        <title>Tim Ferrari | Software Developer</title>
        <meta
          name="description"
          content="Tim Ferrari is a software developer "
        />
        <meta
          name="viewport"
          content="Discover the world of software development with Tim Ferrari, a seasoned software developer with expertise in multiple programming languages and platforms."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`container px-12 mx-auto ${inter.className}`}>
        <Navbar />
        <Hero />
        <About />
        <Work />
        <Projects />
        {/* <Skills /> */}
        <Contact />
      </main>
    </>
  );
}
