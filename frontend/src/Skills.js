import {
  SiTypescript,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiReact,
  SiNextdotjs,
  SiRedux,
  SiVuedotjs,
  SiTailwindcss,
  SiMui,
  SiSass,
  SiNodedotjs,
  SiExpress,
  SiGraphql,
  SiPostgresql,
  SiMysql,
  SiMongodb,
  SiSupabase,
  SiRedis,
  SiPython,
  SiGo,
  SiAmazonaws,
  SiDocker,
  SiGit,
  SiGithub,
  SiOpenai,
} from "react-icons/si";
import { LuBrainCircuit, LuLayers, LuWorkflow, LuMousePointer2, LuPlug, LuBarChart3 } from "react-icons/lu";
import { TbApi } from "react-icons/tb";

function SkillPill({ label, Icon }) {
  return (
    <span className="inline-flex items-center gap-2 px-4 py-2 m-1.5 text-body-sm font-semibold rounded-full bg-bg text-text border border-border shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-accent hover:text-accent hover:shadow-card cursor-default">
      {Icon && <Icon className="w-4 h-4 shrink-0" aria-hidden="true" />}
      {label}
    </span>
  );
}

function SkillSection({ title, skills, isFirst = false }) {
  return (
    <>
      <h3
        className={`pl-6 md:pl-[75px] text-h3 text-heading ${
          isFirst ? "mt-6" : "mt-14"
        }`}
      >
        {title}
      </h3>
      <div className="flex flex-wrap w-full pr-4 pl-6 md:pl-[75px] mt-6">
        {skills.map((skill) => (
          <SkillPill key={skill.label} label={skill.label} Icon={skill.Icon} />
        ))}
      </div>
    </>
  );
}

const frontendSkills = [
  { label: "TypeScript", Icon: SiTypescript },
  { label: "JavaScript", Icon: SiJavascript },
  { label: "HTML5", Icon: SiHtml5 },
  { label: "CSS3", Icon: SiCss3 },
  { label: "React", Icon: SiReact },
  { label: "Next.js", Icon: SiNextdotjs },
  { label: "Redux / RTK", Icon: SiRedux },
  { label: "React Native", Icon: SiReact },
  { label: "Vue / Nuxt", Icon: SiVuedotjs },
  { label: "Tailwind", Icon: SiTailwindcss },
  { label: "Material UI", Icon: SiMui },
  { label: "SASS", Icon: SiSass },
];

const backendSkills = [
  { label: "Node.js", Icon: SiNodedotjs },
  { label: "Express", Icon: SiExpress },
  { label: "REST", Icon: TbApi },
  { label: "GraphQL", Icon: SiGraphql },
  { label: "PostgreSQL", Icon: SiPostgresql },
  { label: "MySQL", Icon: SiMysql },
  { label: "MongoDB", Icon: SiMongodb },
  { label: "Supabase", Icon: SiSupabase },
  { label: "Redis", Icon: SiRedis },
  { label: "Python", Icon: SiPython },
  { label: "Go", Icon: SiGo },
];

const toolsSkills = [
  { label: "LLMs", Icon: LuBrainCircuit },
  { label: "RAG", Icon: LuLayers },
  { label: "AWS", Icon: SiAmazonaws },
  { label: "Docker", Icon: SiDocker },
  { label: "Git", Icon: SiGit },
  { label: "GitHub", Icon: SiGithub },
  { label: "n8n", Icon: LuWorkflow },
];

const agenticToolsSkills = [
  { label: "Cursor", Icon: LuMousePointer2 },
  { label: "MCP", Icon: LuPlug },
  { label: "Superset", Icon: LuBarChart3 },
  { label: "OpenAI SDK", Icon: SiOpenai },
];

function Skills() {
  return (
    <div className="flex flex-col w-full bg-surface pt-24 pb-20 sm:pt-28 sm:pb-24">
      <p className="pl-6 eyebrow text-eyebrow md:pl-[75px]">01 — Stack</p>
      <h2
        className="w-full pl-6 mt-3 text-h2 text-heading md:pl-[75px]"
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
