import { LinkText, Text } from "@tantuui/react";
import Eyebrow from "./Eyebrow";
import { personalProjects } from "../data/resume";

function PersonalProjects() {
  return (
    <section className="tui-py-10 tui-border-t tui-border-brand-black-200" id="personal-projects" aria-labelledby="personal-projects-title">
      <Eyebrow>Personal Projects</Eyebrow>
      <Text as="h3" id="personal-projects-title" size="lg" weight="bold" className="tui-ml-10 tui-mt-2 tui-text-brand-pink-800">Reusable frontend foundations.</Text>
      <div className="tui-flex tui-flex-wrap tui-gap-5 tui-mt-6">
        {personalProjects.map((project) => (
          <article className="tui-flex tui-flex-col tui-gap-3 tui-w-64 tui-grow tui-p-5 tui-border tui-border-brand-black-200 tui-rounded-lg tui-bg-brand-white-50 tui-shadow-sm" key={project.title}>
            <Text as="h3" size="md" weight="bold" className="tui-text-brand-pink-800">{project.title}</Text>
            <Text as="p" size="sm" className="tui-text-brand-black-700">{project.description}</Text>
            <LinkText href={project.href} as="a" target="_blank" rel="noreferrer" size="xs" weight="semibold" noHoverUnderline className="tui-mt-auto tui-self-start">{project.linkLabel}</LinkText>
          </article>
        ))}
      </div>
    </section>
  );
}

export default PersonalProjects;
