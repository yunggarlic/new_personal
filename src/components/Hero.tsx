import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="hero h-screen flex items-center mb-8">
      <div className="relative">
        <div className="text-side flex flex-col justify-center">
          <h1 className="text-xl mb-4">Hi! I am</h1>
          <h2 className="text-6xl ">Tim Ferrari.</h2>
          <h3 className="text-2xl max-w-md">
            I help cobble together the web.
          </h3>
          <p className="text-md max-w-md pt-8">
            This website is served to you from under my couch.
          </p>
        </div>
        {/* <div className="img-side w-1/4">
          <img
            ref={imgRef}
            src={picSrc}
            className="mx-auto rounded-full shadow-md"
            alt="Software Developer Tim Ferrari smiling."
          />
        </div> */}
      </div>
    </div>
  );
};

export default Hero;