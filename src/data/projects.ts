export interface Project {
  number: string;
  title: string;
  subtitle: string;
  category: string;
  description: string;
  technologies: string[];
  slug: string;
  github?: string;
  demo?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    number: "01",
    title: "BATI",
    subtitle: "AI Trust Infrastructure",
    category: "AI / DIGITAL GOVERNANCE",
    description:
      "A privacy-oriented research prototype exploring digital identity, credential verification, AI-assisted risk intelligence, governance, compliance, and accountable digital systems.",
    technologies: [
      "React",
      "TypeScript",
      "Python",
      "FastAPI",
    ],
    slug: "bati",
    github:
      "https://github.com/austinibe15/Barbados-AI-Trust-Infrastructure",
    demo:
      "https://barbados-ai-trust-infrastructure.netlify.app/",
    featured: true,
  },

  {
    number: "02",
    title: "NEUROCARE AI",
    subtitle: "AI-Assisted Healthcare",
    category: "AI / HEALTHCARE",
    description:
      "An AI-assisted healthcare prototype combining voice and text event logging, severity analysis, emergency workflows, analytics, and blockchain-ready health event records.",
    technologies: [
      "JavaScript",
      "Node.js",
      "AI",
      "Web Speech API",
      "Chart.js",
    ],
    slug: "neurocare-ai",
    github:
      "https://github.com/austinibe15/seizure-care-assistant",
    demo:
      "https://neuroc-ai.netlify.app",
    featured: true,
  },

  {
    number: "03",
    title: "GROVE MEDICS",
    subtitle: "Healthcare Mobile Platform",
    category: "MOBILE / FULL-STACK",
    description:
      "A healthcare platform connecting mobile application experiences with backend services, authentication, data management, payments, notifications, and healthcare workflows.",
    technologies: [
      "React Native",
      "Expo",
      "Node.js",
      "MongoDB",
      "Firebase",
    ],
    slug: "grove-medics",
    github:
      "https://github.com/austinibe15/grove-medics",
    demo:
      "https://grovemedics.netlify.app/",
    featured: true,
  },

  {
    number: "04",
    title: "PARENT–TEACHER",
    subtitle: "Communication Platform",
    category: "FULL-STACK",
    description:
      "A full-stack communication platform designed around secure messaging, announcements, profiles, and structured communication between parents and teachers.",
    technologies: [
      "React",
      "Bootstrap",
      "Django",
      "Django REST Framework",
      "SQLite",
    ],
    slug: "parent-teacher",
    github:
      "https://github.com/austinibe15/parent_teacher_communication",
    demo:
      "https://parent-teacher-communication.netlify.app/",
    featured: true,
  },
];