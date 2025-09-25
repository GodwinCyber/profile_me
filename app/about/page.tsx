import Image from "next/image";

const techStack = [
  { name: "JavaScript", logo: "/tech_logos/javascript.svg" },
  { name: "TypeScript", logo: "/tech_logos/typescript.svg" },
  { name: "Python", logo: "/tech_logos/python.svg" },
  { name: "Node.js", logo: "/tech_logos/nodejs.svg" },
  { name: "MySQL", logo: "/tech_logos/mysql.svg" },
  { name: "Redis", logo: "/tech_logos/redis.svg" },
  { name: "MongoDB", logo: "/tech_logos/mongodb.svg" },
  { name: "Django", logo: "/tech_logos/django.svg" },
  { name: "Flask", logo: "/tech_logos/flask.svg" },
  { name: "Docker", logo: "/tech_logos/docker.svg" },
  { name: "Git", logo: "/tech_logos/git.svg" },
  { name: "Supabase", logo: "/tech_logos/supabase.svg" },
  { name: "Next.js", logo: "/tech_logos/nextjs.svg" },
];

/**
 * Renders the about page, which provides a personal introduction, background, skills, and tech stack.
 * This component displays static information and a dynamic list of technologies with their logos.
 * It relies on the `techStack` constant for the list of technologies and their logos.
 */
export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold mb-8"></h1>

      {/* Personal Introduction Section */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-center">
          Personal Introduction
        </h2>
        <p className="text-lg mb-4">
          I&apos;m Godwin, an experienced Software Engineer with a strong
          background in building robust and scalable applications for both web
          and mobile. My work spans FinTech and SaaS environments, where I focus
          on delivering secure, efficient, and reusable solutions. I&apos;m
          skilled in modern JavaScript stacks and Python-based technologies,
          with deep expertise in database modeling and management-critical for
          financial and enterprise-grade systems.
        </p>
        <p className="text-lg">
          Having contributed to high-impact platforms and cyber-resilient
          infrastructures, I&apos;m committed to continuous improvement,
          adaptability, and creating high-quality solutions that prioritize
          performance, security, and user experience. With expertise in backend
          engineering and full-stack development, I bring a strong focus on
          building scalable architectures, efficient APIs, and reliable database
          solutions, giving every project I work on a solid and impactful
          foundation.
        </p>
      </div>

      {/* Background and Skills Section */}
      <div className="grid md:grid-cols-2 gap-6 mb-12">
        <div className="p-6 border rounded-lg shadow-sm">
          <h2 className="text-2xl font-semibold mb-4">Background</h2>
          <p className="mb-2">
            My career in technology began with a fascination for how systems
            work and function. This curiosity led me to transition into software
            engineering, where I chose to specialize in backend development.
          </p>
          <p>
            Throughout my career, I have contributed to a variety of projects,
            from web applications to mobile solutions, with a consistent focus
            on building robust, scalable, and secure systems.
          </p>
        </div>

        <div className="p-6 border rounded-lg shadow-sm">
          <h2 className="text-2xl font-semibold mb-4">Skills</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Programming Languages: JavaScript, TypeScript, Python</li>
            <li>
              Backend Frameworks & Technologies: Node.js, Hono.js, Express.js,
              NestJS, Flask, Django, Django REST Framework
            </li>
            <li>
              Database & ORM Tools: MySQL, PostgreSQL (Neon DB, Supabase),
              MongoDB, SQLite3, Drizzle ORM, SQLAlchemy ORM
            </li>
            <li>
              Backend Utilities & Tools: Redis, Celery, Git (Version Control),
              Zod Validator, Sentry, Grafana
            </li>
            <li>
              Collaboration & Workflow Tools: ClickUp, Slack, Cursor, Zed, Trae
            </li>
          </ul>
        </div>
      </div>

      {/* Tech Stack Section */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Tech Stack</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {techStack.map((tech, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-4 border rounded-lg hover:shadow-md transition-all"
            >
              <div className="w-12 h-12 mb-2 flex items-center justify-center">
                {tech.logo ? (
                  <Image
                    src={tech.logo}
                    alt={tech.name}
                    width={40}
                    height={40}
                    className="object-contain w-full h-full"
                  />
                ) : (
                  <svg className="w-10 h-10" viewBox="0 0 128 128">
                    <text
                      x="64"
                      y="76"
                      textAnchor="middle"
                      fontSize="60"
                      fontWeight="bold"
                    >
                      {tech.name.charAt(0)}
                    </text>
                  </svg>
                )}
              </div>
              <span className="text-sm font-medium">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
