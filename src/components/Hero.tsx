import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="hero h-screen flex items-center mb-8">
      <div className="relative">
        <div className="text-side flex flex-col justify-center">
          <h1 className="text-l mb-4">Hi, my name is</h1>
          <h2 className="text-6xl ">Tim Ferrari.</h2>
          <h3 className="text-2xl max-w-md">
            I help cobble together the web.
          </h3>
          <p className="text-md max-w-md pt-8">
            I am a software engineer specializing in building exceptional digital experiences. Currently, I am building solutions at Critical Mass.
          </p>
          <p className="text-xs max-w-md pt-8">This website is served to you from under my couch.</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;