import { Text } from "@tantuui/react";
import Eyebrow from "./Eyebrow";
import { profileSummary } from "../data/resume";

function About() {
  return (
    <section className="tui-max-w-5xl tui-pb-10" id="about" aria-label="About">
      <Eyebrow>About</Eyebrow>
      {profileSummary.map((summary) => (
        <Text as="p" size="sm" className="tui-mt-4 tui-text-brand-black-700 tui-leading-relaxed" key={summary}>{summary}</Text>
      ))}
    </section>
  );
}

export default About;
