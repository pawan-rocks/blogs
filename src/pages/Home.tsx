import About from "../components/About";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import PersonalProjects from "../components/PersonalProjects";

function Home() {
  return (
    <div className="tui-w-full tui-px-6 tui-pt-6 tui-pb-10">
      <About />
      <Experience />
      <Projects />
      <PersonalProjects />
    </div>
  );
}

export default Home;
