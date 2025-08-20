import { Header } from "@/components/header"
import { Item, SectionList } from "@/components/section-list"
import { BlogSection } from "@/components/blog-section"
import { LinksSection } from "@/components/links-section"

const workItems: Item[] = [
  {
    title: "datapizza",
    role: "software developer",
    period: "jun 2023 - present",
    description:
      "early employee (#8) at fast-growing startup that scaled to 80+ employees. led frontend technical strategy for datapizza jobs and built internal crm system supporting 100,000+ candidate pipelines. mentored junior developers and established development standards",
    href: "https://datapizza.tech",
  },
  {
    title: "freelance developer & technical founder",
    role: "self-employed",
    period: "sep 2022 - present",
    description:
      "transform startup and app ideas into working products, delivering full development lifecycle. built nutrivetpet from zero to production: complete pet nutrition platform serving 3,000+ monthly paying users, earning equity stake for technical leadership",
    href: "https://trapani.sh",
  },
]

const projectItems = [
  {
    title: "hyprvoice",
    role: "creator",
    description:
      "voice-powered typing system for wayland/hyprland (arch linux) using go",
    href: "https://github.com/leonardotrapani/hyprvoice",
  },
  {
    title: "omarchy",
    role: "contributor, fork maintainer",
    description:
      "contributor to omarchy (arch linux based linux distro), and built and maintained a fork to adapt it to my own workflow",
    href: "https://github.com/leonardotrapani/omarchy",
  },
  {
    title: "juggle content",
    role: "creator",
    description:
      "content management system that transforms single content pieces into 15+ platform",
    href: "https://jugglecontent.trapani.sh",
  },
]

export default function HomePage() {
  return (
    <>
      <Header />
      <SectionList title="work" items={workItems} />
      <BlogSection />
      <SectionList
        title="projects"
        items={projectItems}
        viewAllHref="/projects"
        viewAllText="all projects"
      />
      <LinksSection />
    </>
  )
}
