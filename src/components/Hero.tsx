import React from "react";

const Hero: React.FC = () => {
  return (
    <section className="hero h-screen-minus-nav">
      <div className="h-full text-side flex flex-col justify-center">
        <h1 className="text-xs mb-4">Hi, my name is</h1>
        <h2 className="">Tim Ferrari.</h2>
        <h3 className="">I help cobble together the web.</h3>
        <p className="pt-8">
          I am a software engineer specializing in building exceptional digital
          experiences. Currently, I am building solutions at Critical Mass.
        </p>
        <p className="pt-8">
          This website is served to you from under my couch.
        </p>
      </div>
    </section>
  );
};

export default Hero;
