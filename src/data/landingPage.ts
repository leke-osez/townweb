import strategyIllustration from "@/assets/images/strategy-illustration.png";
import websiteIllustration from "@/assets/images/website-dev.png";
import contentTeam from "@/assets/images/content-team.svg";
import fileSearchIllustration from "@/assets/images/file-searching.png";

export const servicesList = [
  {
    title: "Strategy",
    services: [
      "ADA 508 Compliant",
      "Accessible Websites",
      "Inclusive User Access",
      "Compliance-First Build",
    ],
    description:
      "All sites are ADA 508 Compliant, which allows people with disabilities to access your website pages and files with ease.",
    img: { src: strategyIllustration, alt: "strategy" },
    buttonProps: { text: "Hire Us", action: () => {} },
  },

  {
    title: "Website",
    services: [
      "User-First Design",
      "Best-Practice Security",
      // "Secure UX",
      "Quality-Driven Build",
      "Standards-Based Development",
    ],
    description:
      "Your site will be built with the best user experience in mind and will be secure because we strictly adhere to best practices",
    img: { src: websiteIllustration, alt: "strategy" },
    buttonProps: { text: "Hire Us", action: () => {} },
  },

  {
    title: "Content Design",
    services: [
      "Localized Information",
      "Curated Public Content",
      "Tailored Municipal Content",
      "Community-Centric Experience",
    ],
    description:
      "Your website is designed with your residents in mind. We curate the best contents tailored to fit your municipal",
    img: { src: contentTeam, alt: "strategy" },
    buttonProps: { text: "Hire Us", action: () => {} },
  },
  {
    title: "File Management & Accessibility",
    services: [
      "Centralized Documents",
      "Organized by Category",
      // "Easy Document Access",
      "Quick Information Retrieval",
      "Search-Friendly Records",
    ],
    description:
      "All your official government documents are stored and collated by category. Everyone can quickly find what they're looking for!",
    img: { src: fileSearchIllustration, alt: "strategy" },
    buttonProps: { text: "Hire Us", action: () => {} },
  },
];
