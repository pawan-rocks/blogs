import { Text } from "@tantuui/react";
import Eyebrow from "./Eyebrow";
import TimelineItem from "./TimelineItem";
import { experience } from "../data/resume";

function Experience() {
  return (
    <section className="tui-py-10 tui-border-t tui-border-brand-black-200" id="experience" aria-label="Experience">
      <Eyebrow>Experience</Eyebrow>
      <div className="tui-mt-6">
        {experience.map((entry, index) => (
          <TimelineItem key={`${entry.company}-${entry.period}`} period={entry.period} isLast={index === experience.length - 1}>
            <Text as="h3" size="lg" weight="bold" className="tui-text-brand-pink-800">{entry.company}</Text>
            <div className="tui-mt-1">
              {entry.roles.map((role) => <Text as="span" size="sm" weight="semibold" className="tui-block tui-text-brand-pink-600" key={role}>{role}</Text>)}
              {entry.location && <Text as="span" size="sm" className="tui-block tui-mt-1 tui-text-brand-black-500">{entry.location}</Text>}
            </div>
            <ul className="tui-grid tui-gap-2 tui-mt-3 tui-mb-0 tui-pl-4 tui-pr-0 tui-text-sm tui-text-brand-black-700 tui-leading-relaxed tui-list-disc">
              {entry.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
            </ul>
          </TimelineItem>
        ))}
      </div>
    </section>
  );
}

export default Experience;
