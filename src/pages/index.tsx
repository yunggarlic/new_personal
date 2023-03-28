import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";

import { useEffect, useState, useRef } from "react";
import { Roboto_Mono } from "next/font/google";
import {
  Navbar,
  Hero,
  Projects,
  Skills,
  About,
  Work,
  Contact,
} from "../components";

// If loading a variable font, you don't need to specify the font weight
const roboto = Roboto_Mono({ subsets: ["latin"] });

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
      <Navbar />
      <main className={`max-w-5xl mx-auto px-6 tablet:px-10 space-y-10 ${roboto.className}`}>
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
