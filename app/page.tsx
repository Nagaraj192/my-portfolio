"use client";
import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ExternalLink, FileDown, MapPin, Calendar, Laptop, Sun, Moon, ArrowRight, BookOpen, Briefcase, GraduationCap } from "lucide-react";
import { Button } from "./components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./components/ui/card";
import { Badge } from "./components/ui/badge";

// -----------------------------
// 🔧 Quick Edit Zone (fill these out!)
// -----------------------------
const PROFILE = {
  name: "Nagaraju Thaduri",
  title: "Full-Stack Developer",
  tagline:
    "I build clean, performant web apps with React, Node.js, and cloud-native tooling.",
  location: "New Jersey,United States",
  email: "nag.thaduri001@gmail.com",
  github: "https://github.com/Nagaraj192", // ← replace
  linkedin: "https://www.linkedin.com/in/nagarajuthaduri/", // ← replace
  resumeUrl: "#", // link to your PDF resume
};

const SKILLS = [
  "JavaScript/TypeScript",
  "React / Next.js",
  "Node.js / Express",
  "REST / GraphQL",
  "PostgreSQL / MongoDB",
  "AWS / Vercel / Netlify",
  "Docker / CI-CD",
  "HTML / CSS / Tailwind",
  "Git / GitHub Actions"
];

// Showcase projects here. Add as many as you like.
const PROJECTS = [
  {
    name: "JobTrackr",
    description:
      "A job application tracker with resume-parsing and status pipelines. Built with Next.js, Prisma, and PostgreSQL.",
    tech: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Tailwind"],
    live: "https://example.com", // ← replace or remove if none
    repo: "https://github.com/your-username/jobtrackr" // ← replace
  },
  {
    name: "DevShelf",
    description:
      "Curated dev bookmarks with tagging, full-text search, and social sharing. Serverless functions + MongoDB Atlas.",
    tech: ["React", "Vite", "Netlify Functions", "MongoDB"],
    live: "https://example.com",
    repo: "https://github.com/your-username/devshelf"
  },
  {
    name: "ImageCraft",
    description:
      "Drag-and-drop image resizer and watermarking tool. Processes images in-browser via Web Workers.",
    tech: ["React", "TypeScript", "Web Workers", "Tailwind"],
    live: "https://example.com",
    repo: "https://github.com/your-username/imagecraft"
  }
];

const EXPERIENCE = [
  {
    role: "Software Engineer (Intern)",
    company: "Acme Systems",
    period: "Jan 2024 – Jun 2024",
    points: [
      "Built internal dashboards in React to visualize ops metrics; reduced investigation time by 35%.",
      "Designed REST APIs in Node/Express; added caching and input validation to cut 95th percentile latency by 28%.",
      "Wrote GitHub Actions workflows for CI with automated tests and preview deployments."
    ]
  },
  {
    role: "Freelance Developer",
    company: "Multiple clients",
    period: "2023 – Present",
    points: [
      "Delivered responsive marketing sites and admin portals using Next.js and Tailwind.",
      "Integrated Stripe payments and email automations; improved checkout conversion by ~12%.",
      "Set up analytics (GA4/Meta Pixel) and optimized Core Web Vitals for SEO."
    ]
  }
];

const EDUCATION = [
  {
    degree: "B.Tech, Computer Science",
    school: "Your University",
    period: "2019 – 2023",
    notes: ["Relevant Coursework: DSA, DBMS, OS, Networks, Web Dev", "CGPA: 8.5/10"]
  }
];

const CERTS = [
  "AWS Cloud Practitioner (2024)",
  "Meta Front-End Developer Professional Cert",
  "Postman API Fundamentals"
];

// -----------------------------
// 🌓 Theme Toggle (simple, client-only)
// -----------------------------
function ThemeToggle() {
  const [dark, setDark] = React.useState(true);

  React.useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  return (
    <Button variant="ghost" className="rounded-2xl" onClick={() => setDark((d) => !d)}>
      {dark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
    </Button>
  );
}

// -----------------------------
// ✨ Animations helpers
// -----------------------------
const fadeUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

// -----------------------------
// 🧩 Components
// -----------------------------
function Header() {
  return (
    <header className="sticky top-0 z-20 backdrop-blur bg-white/70 dark:bg-neutral-950/70 border-b border-neutral-200/60 dark:border-neutral-800/60">
      <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Laptop className="h-6 w-6" />
          <span className="font-semibold">{PROFILE.name}</span>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm text-neutral-600 dark:text-neutral-300">
          <a href="#projects" className="hover:opacity-80">Projects</a>
          <a href="#about" className="hover:opacity-80">About</a>
          <a href="#experience" className="hover:opacity-80">Experience</a>
          <a href="#contact" className="hover:opacity-80">Contact</a>
        </nav>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Button asChild>
            <a href={PROFILE.resumeUrl} target="_blank" rel="noreferrer" className="flex items-center gap-2">
              <FileDown className="h-4 w-4" /> Resume
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="max-w-6xl mx-auto px-6 pt-16 pb-10 md:pt-24 md:pb-16">
      <motion.div {...fadeUp} className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        <div className="max-w-3xl">
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight">
            {PROFILE.title}
          </h1>
          <p className="mt-3 text-neutral-600 dark:text-neutral-300 text-base md:text-lg">
            {PROFILE.tagline}
          </p>
          <div className="mt-5 flex items-center flex-wrap gap-3 text-sm text-neutral-600 dark:text-neutral-300">
            <MapPin className="h-4 w-4" /> {PROFILE.location}
            <span className="mx-2">•</span>
            <Calendar className="h-4 w-4" /> Available for full-time roles
          </div>
          <div className="mt-6 flex items-center gap-3">
            <Button asChild>
              <a href="#projects" className="flex items-center gap-2">
                View Projects <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
            <Button variant="secondary" asChild>
              <a href={`mailto:${PROFILE.email}`} className="flex items-center gap-2">
                <Mail className="h-4 w-4" /> Get in touch
              </a>
            </Button>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3 w-full md:w-auto">
          {SKILLS.slice(0, 6).map((s) => (
            <Badge key={s} className="text-sm px-3 py-2 rounded-xl justify-center">
              {s}
            </Badge>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

function SectionTitle({ icon: Icon, title, id }: { icon: any; title: string; id: string }) {
  return (
    <div id={id} className="flex items-center gap-2 mb-6">
      <Icon className="h-5 w-5" />
      <h2 className="text-xl md:text-2xl font-semibold">{title}</h2>
    </div>
  );
}

function Projects() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-10" id="projects">
      <SectionTitle icon={BookOpen} title="Projects" id="projects" />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {PROJECTS.map((p) => (
          <Card key={p.name} className="rounded-2xl shadow-sm">
            <CardHeader>
              <CardTitle className="text-lg">{p.name}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-sm text-neutral-600 dark:text-neutral-300">{p.description}</p>
              <div className="flex flex-wrap gap-2">
                {p.tech.map((t: string) => (
                  <Badge key={t} variant="secondary" className="rounded-xl">{t}</Badge>
                ))}
              </div>
              <div className="flex items-center gap-3 pt-2">
                {p.live && (
                  <a
                    className="text-sm inline-flex items-center gap-1 hover:underline"
                    href={p.live}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live <ExternalLink className="h-4 w-4" />
                  </a>
                )}
                {p.repo && (
                  <a
                    className="text-sm inline-flex items-center gap-1 hover:underline"
                    href={p.repo}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Code <Github className="h-4 w-4" />
                  </a>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-10" id="about">
      <SectionTitle icon={Briefcase} title="About" id="about" />
      <Card className="rounded-2xl">
        <CardContent className="pt-6">
          <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed">
            I'm a full‑stack developer focused on building delightful UI and reliable backends.
            I enjoy working across the stack—React on the front, Node/Express on the back, and
            databases like PostgreSQL or MongoDB. I care about clean code, performance, and DX.
          </p>
          <div className="flex flex-wrap gap-2 mt-4">
            {SKILLS.map((s) => (
              <Badge key={s} className="rounded-xl">{s}</Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </section>
  );
}

function Experience() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-10" id="experience">
      <SectionTitle icon={GraduationCap} title="Experience & Education" id="experience" />
      <div className="grid md:grid-cols-2 gap-6">
        <Card className="rounded-2xl">
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <Briefcase className="h-4 w-4" /> Experience
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-5">
            {EXPERIENCE.map((e) => (
              <div key={e.role}>
                <div className="font-medium">{e.role} — {e.company}</div>
                <div className="text-sm text-neutral-500">{e.period}</div>
                <ul className="list-disc ml-5 mt-2 text-sm space-y-1">
                  {e.points.map((pt) => (
                    <li key={pt}>{pt}</li>
                  ))}
                </ul>
              </div>
            ))}
          </CardContent>
        </Card>
        <div className="space-y-6">
          <Card className="rounded-2xl">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <GraduationCap className="h-4 w-4" /> Education
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {EDUCATION.map((ed) => (
                <div key={ed.school}>
                  <div className="font-medium">{ed.degree}</div>
                  <div className="text-sm text-neutral-500">{ed.school} • {ed.period}</div>
                  <ul className="list-disc ml-5 mt-2 text-sm space-y-1">
                    {ed.notes.map((n) => (
                      <li key={n}>{n}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </CardContent>
          </Card>
          <Card className="rounded-2xl">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <BookOpen className="h-4 w-4" /> Certifications
              </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-2">
              {CERTS.map((c) => (
                <Badge key={c} variant="secondary" className="rounded-xl">{c}</Badge>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-10" id="contact">
      <SectionTitle icon={Mail} title="Contact" id="contact" />
      <Card className="rounded-2xl">
        <CardContent className="pt-6 flex flex-col md:flex-row items-start gap-8">
          <div className="space-y-3 text-sm">
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              <a href={`mailto:${PROFILE.email}`} className="hover:underline">{PROFILE.email}</a>
            </div>
            <div className="flex items-center gap-2">
              <Github className="h-4 w-4" />
              <a href={PROFILE.github} target="_blank" rel="noreferrer" className="hover:underline">GitHub</a>
            </div>
            <div className="flex items-center gap-2">
              <Linkedin className="h-4 w-4" />
              <a href={PROFILE.linkedin} target="_blank" rel="noreferrer" className="hover:underline">LinkedIn</a>
            </div>
          </div>
          <form className="w-full md:max-w-md space-y-3">
            <div className="grid grid-cols-2 gap-3">
              <input className="w-full rounded-xl border px-3 py-2 bg-white dark:bg-neutral-900 border-neutral-200 dark:border-neutral-800" placeholder="Your name" />
              <input className="w-full rounded-xl border px-3 py-2 bg-white dark:bg-neutral-900 border-neutral-200 dark:border-neutral-800" placeholder="Your email" />
            </div>
            <textarea rows={4} className="w-full rounded-xl border px-3 py-2 bg-white dark:bg-neutral-900 border-neutral-200 dark:border-neutral-800" placeholder="Message" />
            <Button className="w-full">Send Message</Button>
            <p className="text-xs text-neutral-500">This is a static form. Replace with Formspree, Resend, or server action.</p>
          </form>
        </CardContent>
      </Card>
    </section>
  );
}

function Footer() {
  return (
    <footer className="py-10 border-t border-neutral-200 dark:border-neutral-800 mt-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-neutral-500">
        <div>
          © {new Date().getFullYear()} {PROFILE.name}. All rights reserved.
        </div>
        <div className="flex items-center gap-4">
          <a href={PROFILE.github} target="_blank" rel="noreferrer" className="hover:underline inline-flex items-center gap-1">
            <Github className="h-4 w-4" /> GitHub
          </a>
          <a href={PROFILE.linkedin} target="_blank" rel="noreferrer" className="hover:underline inline-flex items-center gap-1">
            <Linkedin className="h-4 w-4" /> LinkedIn
          </a>
          <a href={`mailto:${PROFILE.email}`} className="hover:underline inline-flex items-center gap-1">
            <Mail className="h-4 w-4" /> Email
          </a>
        </div>
      </div>
    </footer>
  );
}

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-white text-neutral-900 dark:bg-neutral-950 dark:text-neutral-100">
      <Header />
      <Hero />
      <Projects />
      <About />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
}

// 💡 Deployment notes:
// - If you’re using Next.js, drop this component into app/page.tsx or pages/index.tsx,
//   and ensure Tailwind is configured. Replace static form with an API route or Formspree.
// - For a single-file Vite React app, render <Portfolio /> in main.tsx.
// - Update PROFILE, PROJECTS, EXPERIENCE, EDUCATION, and CERTS above.
