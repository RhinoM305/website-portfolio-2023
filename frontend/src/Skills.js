function SkillPill({ label, delay }) {
  return (
    <p
      className="px-4 py-1 m-1 rounded-lg bg-stone-700"
      data-aos="fade-right"
      data-aos-anchor-placement="center-center"
      data-aos-delay={delay}
      data-aos-duration="1000"
      data-aos-offset="300"
    >
      {label}
    </p>
  );
}

function SkillSection({ title, skills, titleDelay = "500", isFirst = false }) {
  return (
    <>
      <h3
        className={`pl-2 md:pl-[75px] text-5xl font-thin text-white font-Oswald xxl:text-6xl ${
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
      <div className="flex flex-wrap w-full pl-2 md:pl-[75px] mt-8 text-lg text-white md:text-2xl font-Roboto">
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
    <div className="w-full flex flex-col bg-[black] pt-28 pb-24">
      <h2
        className="w-full mt-10 text-6xl font-bold text-center text-white font-Oswald hide xxl:text-7xl xxl:mb-2"
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
