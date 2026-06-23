import { FaMapMarkerAlt, FaGraduationCap } from "react-icons/fa";

const experiences = [
  {
    company: "RMoreno LLC",
    location: "Remote",
    role: "Software Engineer · ryventory (independent product)",
    period: "2025 – Present",
    projects: [
      {
        bullets: [
          "Built an event-driven crosslisting engine that syncs inventory across eBay, Shopify, and other marketplaces and auto-delists sold items, using webhook subscriptions and a Redis-backed job queue with idempotency to prevent overselling.",
          "Integrated the Shopify GraphQL Admin API to run the storefront as POS and source of truth, and built a photo-based pricing tool that uses a multimodal LLM with market comps from PriceCharting and eBay.",
          "Designed and built the application end to end — the full Next.js / React UI and component library on a custom design system, plus Supabase Auth and the normalized Product → Item → Listing data model.",
          "Built a catalog entity-resolution engine that resolves incoming items (barcode misses, LLM identification, manual entry) to canonical Product records, using token-based fuzzy matching with blocking to skip O(n²) comparisons and confidence thresholds that auto-merge clear matches and route the rest to review.",
        ],
        stack: [
          "TypeScript",
          "React / Next.js",
          "Node.js",
          "Supabase",
          "Redis",
          "Shopify GraphQL API",
        ],
      },
    ],
  },
  {
    company: "Felipa",
    location: "Remote",
    role: "Software Engineer (Contract) · AI personal-finance app",
    period: "2023 – 2024",
    projects: [
      {
        bullets: [
          "Built the reporting UI for a consumer personal-finance app that uses an LLM to summarize users' bank activity, integrating Plaid to securely connect accounts and feed transaction data into the summarization layer.",
          "Made the app multi-platform from a single codebase — packaging the web app for iOS and Android with Capacitor.",
        ],
        stack: ["TypeScript", "React", "Capacitor", "Plaid API", "LLMs"],
      },
    ],
  },
  {
    company: "Reina LLC",
    location: "Remote",
    role: "Software Engineer (Contract)",
    period: "2021 – 2022",
    note: "Influencer Marketing Services",
    projects: [
      {
        title: "Influencer Discovery & Outreach Automation",
        bullets: [
          "Built an automated influencer-discovery pipeline in n8n that scouts creators against defined criteria, replacing manual sourcing and multiplying outreach-team throughput.",
          "Designed and wrote the multi-factor ranking algorithm at the core of the pipeline — a weighted scoring function that grades each scouted creator against fit criteria and outputs a ranked score, so outreach prioritizes the highest-value prospects first.",
          "Re-architected the discovery system from the n8n workflow into a native TypeScript service, adding request batching and parallelization to query social-platform data (TikTok, Instagram) at higher speed and volume.",
        ],
        stack: [
          "TypeScript",
          "n8n",
          "Redis",
          "Redux Toolkit (RTK)",
          "Supabase",
          "OpenAI SDK",
        ],
      },
      {
        title: "AI Ticket-Generation Tool · Codebase-Aware Workflow",
        bullets: [
          "Built a full-stack tool (Next.js frontend → n8n orchestration → LLM) that turns a feature objective plus codebase context into structured, ready-to-work ClickUp / JIRA tickets, replacing manual ticket writing.",
          "Implemented a RAG pipeline over the codebase with Supabase pgvector — indexing GitHub branches, semantically chunking source files, and retrieving the most relevant code so generated tickets reference real implementation detail.",
        ],
        stack: [
          "TypeScript",
          "React / Next.js",
          "n8n",
          "Supabase (pgvector)",
          "GitHub API",
          "LLMs / RAG",
        ],
      },
    ],
  },
];

const education = [
  {
    school: "Miami Dade College",
    location: "Miami, FL",
    credential:
      "B.S. in Information Systems Technology — Software Engineering Concentration",
    period: "2018 – 2021",
  },
  {
    school: "Thinkful",
    location: "Remote",
    credential: "Certificate, Software Engineering",
    period: "2021 – 2022",
  },
];

function StackChip({ label }) {
  return (
    <span className="px-3 py-1 text-tag font-semibold rounded-full bg-surface text-muted">
      {label}
    </span>
  );
}

function ExperienceCard({ exp }) {
  return (
    <article className="w-full p-6 sm:p-8 bg-bg border border-border rounded-3xl shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover">
      <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
        <h3 className="text-h4 text-heading">{exp.company}</h3>
        <span className="inline-flex items-center gap-1.5 text-body-sm font-semibold text-muted">
          <FaMapMarkerAlt className="w-3.5 h-3.5 text-accent" />
          {exp.location}
        </span>
      </div>
      <div className="flex flex-col gap-0.5 mt-1 sm:flex-row sm:items-baseline sm:justify-between">
        <p className="font-semibold text-text">{exp.role}</p>
        <p className="text-body-sm font-semibold text-accent">{exp.period}</p>
      </div>
      {exp.note && <p className="mt-1 text-body-sm text-muted">{exp.note}</p>}

      <div className="flex flex-col gap-6 mt-5">
        {exp.projects.map((project, pIdx) => (
          <div key={pIdx}>
            {project.title && (
              <p className="mb-3 font-semibold text-heading">{project.title}</p>
            )}
            <ul className="flex flex-col gap-3">
              {project.bullets.map((bullet, bIdx) => (
                <li key={bIdx} className="flex gap-3 text-body text-text">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-2 mt-4">
              {project.stack.map((tech) => (
                <StackChip key={tech} label={tech} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </article>
  );
}

function EducationCard({ item }) {
  return (
    <article className="flex flex-col w-full p-6 bg-bg border border-border rounded-3xl shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover">
      <div className="flex items-center gap-3">
        <span className="flex items-center justify-center w-10 h-10 rounded-full bg-surface text-accent shrink-0">
          <FaGraduationCap className="w-5 h-5" />
        </span>
        <div className="flex flex-col">
          <h4 className="font-semibold text-heading">{item.school}</h4>
          <span className="text-body-sm text-muted">{item.location}</span>
        </div>
      </div>
      <p className="mt-4 text-body-sm text-text">{item.credential}</p>
      <p className="mt-2 text-body-sm font-semibold text-accent">
        {item.period}
      </p>
    </article>
  );
}

function ResumeViewer() {
  return (
    <div className="w-full px-6 md:px-8 lg:px-16 mt-10">
      <div className="flex flex-col gap-6">
        {experiences.map((exp) => (
          <ExperienceCard key={exp.company} exp={exp} />
        ))}
      </div>

      <p className="eyebrow text-eyebrow mt-14">Education</p>
      <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
        {education.map((item) => (
          <EducationCard key={item.school} item={item} />
        ))}
      </div>
    </div>
  );
}

export default ResumeViewer;
