import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import statesmenPic from "../../public/statesmen.png";
import tygkoPic from "../../public/tygko.png";
import githubPic from "../../public/github.png";
import { useEffect, useState, useRef } from "react";
import { Inter } from 'next/font/google'

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({ subsets: ['latin'] })


export default function Home(): JSX.Element {
  const [picSrc, setPicSrc] = useState("");
  const imgRef = useRef(null);

  useEffect(() => {
    const query = async (data = { inputs: "Astronaut riding a horse" }) => {
      const response = await fetch(
        "https://api-inference.huggingface.co/models/runwayml/stable-diffusion-v1-5",
        {
          headers: {
            Authorization: "Bearer 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",
          },
          method: "POST",
          body: JSON.stringify(data),
        }
      );
      const results = await response.blob();
      const src = URL.createObjectURL(results);

      setPicSrc(src);
    };

    query();
  }, []);

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
      <main className={`container mx-auto px-4 py-8 ${inter.className}`}>
        <div className="hero mb-8">
          <div className="hero-content text-center">
            <h1 className="text-4xl font-bold mb-4">Hey!</h1>
            <p className="text-xl">Welcome to my website.</p>
            <p className="text-xl">
              Served to you from the RaspberryPi located under the couch in my
              living room.
            </p>
          </div>
          <img
            width="500"
            height="500"
            ref={imgRef}
            src={picSrc}
            className="mx-auto rounded-full shadow-md"
            alt="Software Developer Tim Ferrari smiling."
          />
        </div>
        <div className="projects mb-8">
          <h2 className="text-3xl font-bold mb-2">Projects</h2>
          <span className="text-lg mb-4">Check out some of my work</span>
          <div className="project-list grid grid-cols-3 gap-4">
            <div>
              <h3 className="text-2xl mb-2">The Statesmen Podcast App</h3>
              <Image
                width="500"
                height="500"
                src={statesmenPic}
                alt="A screenshot of the home page of the Statesmen Podcast App."
                className="rounded shadow-md"
              />
            </div>
            <div>
              <h3 className="text-2xl mb-2">TYGKO - A Musicians Website</h3>
              <Image
                width="500"
                height="500"
                src={tygkoPic}
                alt="A screenshot of the home page of the TYGKO website."
                className="rounded shadow-md"
              />
            </div>
            <div>
              <h3 className="text-2xl mb-2">Check out my Github for more</h3>
              <Image
                width="500"
                height="500"
                src={githubPic}
                alt="Github Logo"
                className="rounded shadow-md"
              />
            </div>
          </div>
        </div>
        <div className="skills mb-8">
          <h2 className="text-3xl font-bold">Skills</h2>
        </div>
        <div className="contact">
          <h2 className="text-3xl font-bold">Contact</h2>
        </div>
      </main>
    </>
  );
}
