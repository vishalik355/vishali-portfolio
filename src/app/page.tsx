import About from "@/components/About";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import MotionProvider from "@/components/MotionProvider";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import WhatsAppButton from "@/components/WhatsAppButton";
import { navLinks, profile } from "@/data/portfolio";

export default function Home() {
  return (
    <MotionProvider>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <About />
        <Experience />
        <Services />
        <Projects />
        <Contact />
      </main>
      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-8 text-sm text-muted sm:flex-row sm:px-6">
          <p>
            © {new Date().getFullYear()} {profile.name}. Built with Next.js, Tailwind & Vengeance UI.
          </p>
          <ul className="flex gap-5">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="hover:text-foreground">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </footer>
      <WhatsAppButton />
    </MotionProvider>
  );
}
