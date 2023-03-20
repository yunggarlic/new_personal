import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";

import { useEffect, useState, useRef } from "react";
import { Inter } from "next/font/google";
import { Navbar, Hero, Projects, Skills } from "../components";

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({ subsets: ["latin"] });

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
      <main className={`container px-12 mx-auto ${inter.className}`}>
        <Navbar />
        <Hero />
        <Projects />
        <Skills />
        <div className="h-screen" id="contact">
          <h2 className="text-3xl font-bold">Contact</h2>
        </div>
      </main>
    </>
  );
}
