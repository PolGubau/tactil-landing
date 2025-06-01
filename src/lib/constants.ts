import path from "node:path";

export const paths = {
  projects: path.join(process.cwd(), "src", "content", "projects"),
  blogs: path.join(process.cwd(), "src", "content", "blog"),
};

export const baseUrl = "https://tactil.digital";

export const metadata = {
  title: "Tactil | Web & UX Studio",
  description:
    "Tactil.digital is a web design and development studio focused on elegant, fast, and scalable digital experiences. Built with real code, not templates or generic CMSs.",
  name: "Tactil",
  longName: "Tactil Digital Studio",
  slogan: "Hand-crafted websites, built with code",
  picture: "/assets/branding/logo.png",
  tags: [
    "Tactil Digital",
    "Tactil",
    "Web Studio",
    "UX Design",
    "Frontend Development",
    "React",
    "Astro",
    "TailwindCSS",
    "Custom Web Design",
    "UI/UX",
    "Barcelona",
    "Germany",
    "Landing Pages",
    "Corporate Websites",
    "Dashboards",
    "Accessible Design",
    "SEO Optimization",
  ],
  links: {
    website: "https://tactil.digital",
    twitter: "https://twitter.com/PolGubau",
    github: "https://github.com/polgubau",
    linkedin: "https://www.linkedin.com/in/polgubauamores/",
    email: "mailto:gubaupol@gmail.com",
  },
  homeOgImage: "/assets/thumbnail.png",
};
