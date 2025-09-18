import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold mb-8">About Me</h1>
      
      <div className="flex flex-col md:flex-row gap-8 mb-12">
        <div className="md:w-1/3 flex justify-center">
          {/* Placeholder for profile image - replace with your actual image */}
          <div className="w-64 h-64 rounded-full bg-muted flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
          </div>
        </div>
        
        <div className="md:w-2/3">
          <h2 className="text-2xl font-semibold mb-4">Personal Introduction</h2>
          <p className="text-lg mb-4">
            I'm Godwin, a passionate Cyber Security Analyst and Software Engineer with a strong focus on building secure, efficient applications. I enjoy solving complex problems and creating innovative solutions that make a difference.
          </p>
          <p className="text-lg">
            With expertise in both offensive and defensive security practices, as well as full-stack development, I bring a unique perspective to every project I work on.
          </p>
        </div>
      </div>
      
      <div className="grid md:grid-cols-2 gap-6 mb-12">
        <div className="p-6 border rounded-lg shadow-sm">
          <h2 className="text-2xl font-semibold mb-4">My Journey</h2>
          <p className="mb-2">
            My career in technology began with a fascination for how systems work and how they can be secured. This led me to pursue education in computer science with a specialization in cybersecurity.
          </p>
          <p>
            Throughout my career, I've worked on various projects ranging from web applications to security infrastructure, always focusing on creating robust and secure solutions.
          </p>
        </div>
        
        <div className="p-6 border rounded-lg shadow-sm">
          <h2 className="text-2xl font-semibold mb-4">Core Skills</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Penetration Testing & Vulnerability Assessment</li>
            <li>Secure Application Development</li>
            <li>Full-Stack Web Development</li>
            <li>Network Security & Monitoring</li>
            <li>Incident Response</li>
            <li>Cloud Security (AWS, Azure)</li>
          </ul>
        </div>
      </div>
      
      {/* Tech Stack Section */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Tech Stack</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {[
            { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
            { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
            { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
            { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
            { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
            { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
            { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
            { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
            { name: "AWS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg" },
            { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
            { name: "Supabase", icon: "https://seeklogo.com/images/S/supabase-logo-DCC676FFE2-seeklogo.com.png" },
            { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" }
          ].map((tech, index) => (
            <div key={index} className="flex flex-col items-center p-4 border rounded-lg hover:shadow-md transition-all">
              <img 
                src={tech.icon} 
                alt={tech.name} 
                className="w-12 h-12 mb-2" 
              />
              <span className="text-sm font-medium">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}