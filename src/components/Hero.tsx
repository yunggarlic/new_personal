'use client'
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ThemeContext } from "@/lib/context";
import { useContext } from "react";

const Hero: React.FC = () => {
  const theme = useContext(ThemeContext);
  return (
    <section className="hero h-screen-minus-nav">
      <div className="text-side flex h-full flex-col justify-center">
        <h1 className="mb-4 text-xs">Hi, my name is</h1>
        <h2 className="">Tim Ferrari.</h2>
        <h3 className="">I help cobble together the web.</h3>
        <p className="pt-8 tablet:w-3/4">
          I am a software engineer specializing in building exceptional digital
          experiences. Currently, I am building solutions at{" "}
          <Link className="hover:border-b" href="https://criticalmass.com">
            Critical Mass.
          </Link>
        </p>
        <p className="pt-8">
          This website is served to you from under my couch.
        </p>
        <div className="mt-10 flex flex-row items-center gap-4">
          <a target="_blank" href="https://github.com/yunggarlic">
            <Image
              src={`/github-mark${theme === "dark" ? "-white" : ""}.svg`}
              alt="Github Logo"
              width={40}
              height={40}
              className="dark:fill-white"
            />
          </a>
          <div className="h-[40px] w-[40px]">
            <a target="_blank" href="https://linkedin.com/in/timferrari">
              <Image
                src="/LI-In-Bug.png"
                alt="LinkedIn Logo"
                className="w-auto"
                width={40}
                height={40}
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
