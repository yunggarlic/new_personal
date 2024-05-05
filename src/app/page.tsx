import {
  Navbar,
  Hero,
  Projects,
  About,
  Work,
  Contact,
  ThemeWrapper,
  Footer,
} from "../components";
import jobs from "../content/jobs.json";
import projects from "../content/projects.json";
export default async function Home() {
  return (
    <main className="mx-auto max-w-5xl bg-stars-tall bg-right-top">
      <div className="w-full px-6 tablet:px-10 ">
        <ThemeWrapper>
          <Navbar />
          <Hero />
          <About />
          <Work jobs={jobs} />
          <Projects projectsProps={projects} />
          <Contact />
          <Footer />
        </ThemeWrapper>
      </div>
    </main>
  );
}
