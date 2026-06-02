function SkillPill({ label, delay }) {
  return (
    <span
      className="px-3 py-1.5 m-1 font-mono uppercase tracking-[0.08em] text-tag rounded-md bg-surface text-text border border-border"
      data-aos="fade-right"
      data-aos-anchor-placement="center-center"
      data-aos-delay={delay}
      data-aos-duration="1000"
      data-aos-offset="300"
    >
      {label}
    </span>
  );
}

function SkillSection({ title, skills, titleDelay = "500", isFirst = false }) {
  return (
    <>
      <h3
        className={`pl-6 md:pl-[75px] text-h3 text-heading ${
          isFirst ? "mt-6" : "mt-14"
        }`}
        data-aos="fade-right"
        data-aos-anchor-placement="center-center"
        data-aos-delay={titleDelay}
        data-aos-duration="1000"
        data-aos-offset="350"
      >
        {title}
      </h3>
      <div className="flex flex-wrap w-full pr-4 pl-6 md:pl-[75px] mt-6">
        {skills.map((skill, index) => (
          <SkillPill key={skill} label={skill} delay={800 + index * 100} />
        ))}
      </div>
    </>
  );
}

const frontendSkills = [
  "TypeScript",
  "JavaScript",
  "HTML5",
  "CSS3",
  "React",
  "Next.js",
  "Redux / RTK",
  "React Native",
  "Vue / Nuxt",
  "Tailwind",
  "Material UI",
  "SASS",
];

const backendSkills = [
  "Node.js",
  "Express",
  "REST",
  "GraphQL",
  "PostgreSQL",
  "MySQL",
  "MongoDB",
  "Supabase",
  "Redis",
  "Python",
  "Go",
];

const toolsSkills = [
  "LLMs",
  "RAG",
  "AWS",
  "Docker",
  "Git",
  "GitHub",
  "n8n",
];

const agenticToolsSkills = [
  "Cursor",
  "MCP",
  "Superset",
  "OpenAI SDK",
];

function Skills() {
  return (
    <div className="flex flex-col w-full bg-bg pt-24 pb-20 sm:pt-28 sm:pb-24">
      <p className="pl-6 eyebrow text-eyebrow md:pl-[75px]">01 — Stack</p>
      <h2
        className="w-full pl-6 mt-3 text-h2 text-heading hide md:pl-[75px]"
        data-aos="fade-down"
        data-aos-anchor-placement="center-center"
        data-aos-delay="500"
        data-aos-duration="1000"
        data-aos-offset="350"
        id="skills"
      >
        Skills
      </h2>
      <SkillSection title="Frontend" skills={frontendSkills} isFirst />
      <SkillSection title="Backend" skills={backendSkills} />
      <SkillSection title="Tools" skills={toolsSkills} />
      <SkillSection title="Agentic Tools" skills={agenticToolsSkills} />
    </div>
  );
}

export default Skills;
