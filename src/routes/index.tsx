import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { Projects } from "@/components/portfolio/Projects";
import { Experience } from "@/components/portfolio/Experience";
import { Prep } from "@/components/portfolio/Prep";
import { GithubSection } from "@/components/portfolio/GithubSection";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";
import { Particles } from "@/components/portfolio/Particles";
import { ScrollProgress } from "@/components/portfolio/ScrollProgress";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Elango C — Software Developer & Full Stack Java Engineer" },
      {
        name: "description",
        content:
          "Final-year CSE student. Java · Spring Boot · Python · React/Next.js · Machine Learning. National-level project competition winner.",
      },
      { property: "og:title", content: "Elango C — Software Developer" },
      {
        property: "og:description",
        content:
          "Building practical software solutions with Java, AI and modern web technologies.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Elango C",
          jobTitle: "Software Developer",
          email: "mailto:elangovct@gmail.com",
          telephone: "+91-7639416988",
          url: "/",
          sameAs: [
            "https://github.com/ELANGOVCT",
            "https://linkedin.com/in/elango-c-150740359",
          ],
          alumniOf: {
            "@type": "CollegeOrUniversity",
            name: "Velammal Institute of Technology",
          },
          address: {
            "@type": "PostalAddress",
            addressRegion: "Tamil Nadu",
            addressCountry: "IN",
          },
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <Particles />
      <ScrollProgress />
      <Nav />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Prep />
        <GithubSection />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
