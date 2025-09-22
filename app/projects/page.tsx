import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

/**
 * Renders the projects page, which showcases a list of software development projects.
 * This component displays a grid of project cards, each with an image, title, description, and technologies used.
 * It uses a hardcoded `projects` array as the data source.
 */
export default function ProjectsPage() {
  const projects = [
    {
      id: 1,
      title: "Vendstash",
      description:
        "VendStash is a secure escrow-based transaction platform that protects both buyers and merchants in online commerce.",
      technologies: [
        "Node.js",
        "Express",
        "TypeORM",
        "TypeScript",
        "JWT",
        "TypeOrm",
        "NestJs",
        "Swagger",
        "Sentry",
        "Grafana",
        "Redis",
      ],
      image: "/images/vendstash.png",
      github: "https://vendstash.com/",
      //demo: "https://secure-auth-demo.example.com"
    },
    {
      id: 2,
      title: "ChopApp",
      description:
        "ChopApp is an all in one digital platform that streamlines food ordering and vendor operations for both customers and businesses.",
      technologies: [
        "Node.js",
        "Express",
        "MongoDB",
        "Jwt",
        "Nest.Js",
        "TypeScript",
        "Swagger",
        "Sentry",
      ],
      //image: "/project-scanner.svg",
      github: "https://vendor.chopapp.co.uk/",
      //demo: null
    },
    {
      id: 3,
      title: "Financial-tracker",
      description:
        "FinTracker is a personal finance management platform designed to help individuals and businesses take full control of their money.",
      technologies: [
        "Next.js",
        "NeonDb",
        "Stripe",
        "Tailwind CSS",
        "TypeScript",
        "SQL",
        "Drizzle ORM",
        "Node.js",
        "Clerk Authentication",
      ],
      image: "/images/finTracker.png",
      github: "https://financial-tracker-lac.vercel.app/",
      demo: "https://studio.youtube.com/video/lSV7hSNlDy0/edit",
    },
    {
      id: 4,
      title: "RhythmFindMi",
      description:
        "This is a collaborative group project focused on developing a personalized music recommendation system",
      technologies: ["Next.js", "Supabase", "Hono.js", "Tailwind CSS"],
      image: "/images/rythmfindme.png",
      github: "https://rythmfindmi.vercel.app/",
      demo: "https://studio.youtube.com/video/BHaFjbD5-8k/edit",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold mb-4">My Projects</h1>
      <p className="text-xl text-muted-foreground mb-8">
        A showcase of my work in software development and cybersecurity.
      </p>

      <div className="grid gap-8 md:grid-cols-2">
        {projects.map((project) => (
          <div
            key={project.id}
            className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="h-48 bg-muted flex items-center justify-center">
              {project.image ? (
                <Image
                  src={project.image}
                  alt={project.title}
                  width={200}
                  height={200}
                  className="object-cover h-full w-full"
                />
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="64"
                  height="64"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                  <line x1="8" y1="21" x2="16" y2="21"></line>
                  <line x1="12" y1="17" x2="12" y2="21"></line>
                </svg>
              )}
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
              <p className="text-muted-foreground mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-300 text-sm rounded-md"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-4 mt-4">
                <Link
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="default" size="sm">
                    GitHub
                  </Button>
                </Link>
                {project.demo && (
                  <Link
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="secondary" size="sm">
                      Live Demo
                    </Button>
                  </Link>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
