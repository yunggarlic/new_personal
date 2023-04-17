import React from 'react';

const Contact: React.FC = () => {
  return (
    <section className="flex flex-col items-center pb-48" id="contact">
      <h2 className="mb-8 text-3xl font-bold">Contact</h2>
      <span>
        {"Let's get in touch! I'm always looking for new opportunities."}
      </span>
      <a
        className="mt-12 rounded-lg border-2 px-8 py-4 transition duration-300  ease-in-out hover:bg-sky-200 dark:text-slate-200 dark:hover:bg-deep-blue dark:hover:text-slate-200"
        href="mailto:hey@timferrari.com"
      >
        {'Say Hi!'}
      </a>
    </section>
  );
};

export default Contact;
