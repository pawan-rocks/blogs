import Eyebrow from "./Eyebrow";
import ProjectCard from "./ProjectCard";
import TimelineItem from "./TimelineItem";
import { projectGroups } from "../data/resume";

function Projects() {
  return (
    <section className="tui-py-10 tui-border-t tui-border-brand-black-200" id="projects" aria-label="Projects">
      <Eyebrow>Projects</Eyebrow>
      <div className="tui-mt-4">
        {projectGroups.map((group, index) => (
          <TimelineItem key={group.period} period={group.period} isLast={index === projectGroups.length - 1}>
            <div className="tui-grid tui-gap-4">
              {group.projects.map((project) => <ProjectCard key={project.name} project={project} />)}
            </div>
          </TimelineItem>
        ))}
      </div>
    </section>
  );
}

export default Projects;
