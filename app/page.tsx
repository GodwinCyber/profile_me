import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

/**
 * Renders the home page of the portfolio.
 * It features a hero section with a brief introduction and call-to-action buttons.
 * It also includes a section with quick links to the main pages of the site.
 */
export default function Home() {
  return (
    <div className="flex flex-col min-h-[calc(100vh-73px)]">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-20 px-4 bg-gradient-to-b from-gray-900 via-gray-800 to-black">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">
          Hi, I&apos;m <span className="text-primary">Godwin</span>.
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl">
          Software Engineer
        </p>
        <div className="flex gap-4">
          <Link href="/contact">
            <Button size="lg">Contact Me</Button>
          </Link>
          <Link href="/projects">
            <Button size="lg" variant="outline">
              View Projects
            </Button>
          </Link>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="py-16 px-4 flex-1">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Explore My Portfolio
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link href="/about" className="group">
              <div className="border rounded-lg p-6 h-full transition-all hover:shadow-md hover:border-primary">
                <div className="flex items-center mb-4">
                  <Image src="/file.svg" alt="About" width={24} height={24} />
                  <h2 className="text-2xl font-semibold ml-2">About me</h2>
                </div>
                <p className="text-muted-foreground">
                  Learn more about my background, skills, and experience in
                  software engineering
                </p>
              </div>
            </Link>

            <Link href="/projects" className="group">
              <div className="border rounded-lg p-6 h-full transition-all hover:shadow-md hover:border-primary">
                <div className="flex items-center mb-4">
                  <Image
                    src="/window.svg"
                    alt="Projects"
                    width={24}
                    height={24}
                  />
                  <h2 className="text-2xl font-semibold ml-2">Projects</h2>
                </div>
                <p className="text-muted-foreground">
                  View my portfolio of projects, including software application.
                </p>
              </div>
            </Link>

            <Link href="/contact" className="group">
              <div className="border rounded-lg p-6 h-full transition-all hover:shadow-md hover:border-primary">
                <div className="flex items-center mb-4">
                  <Image
                    src="/globe.svg"
                    alt="Contact"
                    width={24}
                    height={24}
                  />
                  <h2 className="text-2xl font-semibold ml-2">Contact</h2>
                </div>
                <p className="text-muted-foreground">
                  Get in touch with me for collaboration opportunities or
                  questions about my work.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
