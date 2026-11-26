import { Text } from "@tantuui/react";
import type { Project } from "../data/resume";

function Label({ children }: { children: string }) {
  return <Text as="strong" weight="bold" className="tui-text-brand-pink-600">{children}</Text>;
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="tui-block tui-bg-brand-white-50 tui-border-b-1 tui-pb-4 tui-border-brand-black-100 last:tui-pb-0 last:tui-border-0">
      <Text as="h3" size="lg" weight="bold" className="tui-text-brand-pink-800">{project.name}</Text>
      <Text as="p" size="sm" className="tui-mt-2 tui-text-brand-black-700"><Label>Company:</Label> {project.company}</Text>
      <Text as="p" size="sm" className="tui-mt-2 tui-text-brand-black-700"><Label>Role:</Label> {project.role} · <Label>Team:</Label> {project.team}</Text>
      <Text as="p" size="sm" className="tui-mt-2 tui-text-brand-black-700"><Label>Technologies:</Label> {project.technologies}</Text>
      <Text as="p" size="sm" className="tui-mt-2 tui-text-brand-black-700"><Label>Project overview:</Label> {project.overview}</Text>
      <ul className="tui-grid tui-gap-1 tui-mt-4 tui-mb-0 tui-pl-4 tui-pr-0 tui-text-sm tui-text-brand-black-700 tui-leading-relaxed tui-list-disc">
        {project.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
      </ul>
    </article>
  );
}

export default ProjectCard;
