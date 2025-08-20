import { ScrambleText } from "@/components/scramble-text"
import { ProjectCard } from "@/components/project-card"
import { Metadata } from "next"

const projects = [
  {
    title: "hyprvoice",
    description:
      "voice-powered typing system for wayland/hyprland (arch linux) using go",
    role: "creator",
    period: "2025 - present",
    achievements: [
      "implemented complex thread synchronization for parallel audio processing, transcription, and injection",
      "designed daemon architecture with state machine for audio recording, transcription, and text injection workflow",
      "real-time audio capture via pipewire and ai transcription",
    ],
    technologies: ["go"],
    href: "https://github.com/leonardotrapani/hyprvoice",
  },
  {
    title: "juggle content",
    description:
      "content management system that transforms single content pieces into 15+ platform",
    role: "creator",
    period: "2025 - present",
    achievements: [
      "optimized content repurposing using ai agents",
      "built full agent workflow with external api calls (youtube, twitter api...)",
      "organized the entire project with a pleasing ui and a solid architecture",
    ],
    technologies: [
      "typescript",
      "next.js",
      "trpc",
      "prisma",
      "tailwind css",
      "auth.js",
      "shadcn ui",
    ],
    href: "https://jugglecontent.trapani.sh",
  },
  {
    title: "omarchy",
    description:
      "contribution to omarchy (arch linux based linux distro), and built and maintained a fork to adapt it to my own workflow",
    role: "contributor, fork maintainer",
    period: "2025 - present",
    achievements: [
      "contributed on bug fixes and features to omarchy",
      "created my own opinionated fork by adapting it to my specific needs",
      "added custom installations and configurations like tmux with theme sync, neovim, and other cli tools",
    ],
    technologies: ["bash", "arch linux"],
    href: "https://github.com/leonardotrapani/omarchy",
  },
]

export default function ProjectsPage() {
  return (
    <main className="animate-fade-in-up">
      <h1 className="text-4xl font-bold mb-8 text-white">
        <span className="text-accent mr-2">*</span>
        <ScrambleText text="projects" />
      </h1>

      <p className="text-gray-400 mb-12 leading-relaxed">
        here are the most important projects i&apos;ve worked on. i try to solve
        real-world problems and deep into their technicalitiesa while doing that
      </p>

      <div className="space-y-12">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </main>
  )
}

export const metadata: Metadata = {
  title: "Projects",
  description: "Some of the projects I've worked on.",
  openGraph: {
    images: [
      {
        url: "https://trapani.sh/og/home?title=projects",
      },
    ],
  },
}
