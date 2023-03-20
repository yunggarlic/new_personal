import React from "react";

const Skills: React.FC = () => {
  return (
    <div className="h-screen mb-8" id="skills">
      <h2 className="text-3xl font-bold">Skills</h2>
      <div className="grid grid-cols-3 gap-4">
        <div>
          <h3 className="text-2xl mb-2">Frontend</h3>
          <ul className="list-disc list-inside">
            <li>HTML5</li>
            <li>CSS3</li>
            <li>JavaScript</li>
            <li>TypeScript</li>
            <li>React</li>
            <li>Next.js</li>
            <li>Angular</li>
            <li>Vue</li>
          </ul>
        </div>
        <div>
          <h3 className="text-2xl mb-2">Backend</h3>
          <ul className="list-disc list-inside">
            <li>Node.js</li>
            <li>Express</li>
            <li>Python</li>
            <li>Django</li>
            <li>Flask</li>
            <li>Ruby on Rails</li>
            <li>PHP</li>
            <li>Laravel</li>
          </ul>
        </div>
        <div>
          <h3 className="text-2xl mb-2">DevOps & Cloud</h3>
          <ul className="list-disc list-inside">
            <li>Docker</li>
            <li>Kubernetes</li>
            <li>Git</li>
            <li>Jenkins</li>
            <li>AWS</li>
            <li>GCP</li>
            <li>Azure</li>
            <li>Heroku</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Skills;
