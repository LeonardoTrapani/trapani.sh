import { ExperienceItem } from "~~/app/page";

export const projectItems = [
  {
    name: "hyprvoice",
    link: "https://github.com/leonardotrapani/hyprvoice",
    position: "creator (2025 - present)",
    description:
      "built voice-powered typing system for wayland/hyprland (arch linux) using go, featuring real-time audio capture via pipewire and ai transcription. designed daemon architecture with state machine for audio recording, transcription, and text injection workflow. implemented complex thread synchronization for parallel audio processing and transcription.",
    github: "https://github.com/leonardotrapani/hyprvoice",
  },
  {
    name: "juggle content",
    link: "https://jugglecontent.trapani.sh",
    position: "creator (2025 - present)",
    description:
      "built content management system that transforms single content pieces into 15+ platform-optimized variations using ai agents and google apis. developed full-stack application with next.js, typescript, prisma, and postgresql, featuring automated content repurposing workflows.",
    github: "https://github.com/leonardotrapani/jugglecontent",
  },
  {
    name: "all projects →",
    link: "https://github.com/leonardotrapani",
    position: "",
    description: "",
  },
] satisfies ExperienceItem[];
