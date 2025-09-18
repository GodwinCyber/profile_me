import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function ProjectsPage() {
  const projects = [
    {
      id: 1,
      title: "Secure Authentication System",
      description: "A robust authentication system with multi-factor authentication, JWT tokens, and role-based access control.",
      technologies: ["Node.js", "Express", "MongoDB", "JWT", "React"],
      image: "/project-auth.svg",
      github: "https://github.com/username/secure-auth",
      demo: "https://secure-auth-demo.example.com"
    },
    {
      id: 2,
      title: "Vulnerability Scanner",
      description: "An automated tool that scans web applications for common security vulnerabilities like XSS, CSRF, and SQL injection.",
      technologies: ["Python", "Docker", "PostgreSQL", "Flask", "Vue.js"],
      image: "/project-scanner.svg",
      github: "https://github.com/username/vuln-scanner",
      demo: null
    },
    {
      id: 3,
      title: "E-Commerce Platform",
      description: "A full-featured e-commerce platform with secure payment processing, inventory management, and analytics dashboard.",
      technologies: ["Next.js", "Supabase", "Stripe", "Tailwind CSS", "TypeScript"],
      image: "/project-ecommerce.svg",
      github: "https://github.com/username/ecommerce-platform",
      demo: "https://ecommerce-demo.example.com"
    },
    {
      id: 4,
      title: "Network Monitoring Tool",
      description: "A real-time network monitoring solution that detects and alerts on suspicious activities and potential security breaches.",
      technologies: ["Python", "Elasticsearch", "Kibana", "React", "WebSockets"],
      image: "/project-network.svg",
      github: "https://github.com/username/network-monitor",
      demo: "https://network-monitor-demo.example.com"
    }
  ];

  return (
    <div className="max-w-6xl mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold mb-4">My Projects</h1>
      <p className="text-xl text-muted-foreground mb-8">
        A showcase of my work in software development and cybersecurity.
      </p>
      
      <div className="grid gap-8 md:grid-cols-2">
        {projects.map((project) => (
          <div key={project.id} className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <div className="h-48 bg-muted flex items-center justify-center">
              {/* Replace with actual project images */}
              <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                <line x1="8" y1="21" x2="16" y2="21"></line>
                <line x1="12" y1="17" x2="12" y2="21"></line>
              </svg>
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
              <p className="text-muted-foreground mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="px-2 py-1 bg-muted text-sm rounded-md">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-4 mt-4">
                <Link href={project.github} target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="sm">GitHub</Button>
                </Link>
                {project.demo && (
                  <Link href={project.demo} target="_blank" rel="noopener noreferrer">
                    <Button size="sm">Live Demo</Button>
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