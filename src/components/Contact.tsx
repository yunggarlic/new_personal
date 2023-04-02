import React from 'react';

const Contact: React.FC = () => {
  return (
    <section className="pb-48 flex flex-col items-center" id="contact">
      <h2 className="text-3xl font-bold mb-8">Contact</h2>
      <span>Let's get in touch! I'm always looking for new opportunities.</span>
      <a
        className="mt-12 px-8 py-4 border-2 hover:bg-sky-200 dark:hover:bg-emerald-800 dark:hover:text-slate-200  dark:text-slate-200 rounded-lg transition duration-300 ease-in-out"
        href="mailto:ferrari.tim.v@gmail.com"
      >
        Say Hi!
      </a>
    </section>
  );
};

export default Contact;
