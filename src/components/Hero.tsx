import React from 'react';
import Link from 'next/link';

const Hero: React.FC = () => {
  return (
    <section className="hero h-screen-minus-nav">
      <div className="text-side flex h-full flex-col justify-center">
        <h1 className="mb-4 text-xs">Hi, my name is</h1>
        <h2 className="">Tim Ferrari.</h2>
        <h3 className="">I help cobble together the web.</h3>
        <p className="pt-8 tablet:w-3/4">
          I am a software engineer specializing in building exceptional digital
          experiences. Currently, I am building solutions at{' '}
          <Link className="hover:border-b" href="https://criticalmass.com">
            Critical Mass.
          </Link>
        </p>
        <p className="pt-8">
          This website is served to you from under my couch.
        </p>
      </div>
    </section>
  );
};

export default Hero;
