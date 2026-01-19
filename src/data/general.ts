import type { EmployeesData, Testimonials } from "@/types";

export enum Department {
  MANAGEMENT = "management",
  OPERATIONS = "operations",
  PRODUCT = "product & development",
  CUSTOMER_SUCCESS = "customer success",
  PROJECTS = "projects",
  SALES = "sales & marketing",
}

export const employeesData: EmployeesData = [
  {
    name: "Dustin",
    id: "dustin",
    imgUrl:
      "https://storage.googleapis.com/juniper-media-library/92/2025/02/dustin-card.png",
    dept: [Department.MANAGEMENT],
    quote: "",
  },
  {
    name: "Cristina",
    id: "cristina",
    imgUrl:
      "https://storage.googleapis.com/juniper-media-library/92/2025/02/cristina-card.png",
    dept: [Department.MANAGEMENT, Department.OPERATIONS],
    quote: "",
  },
  {
    name: "Ivan",
    id: "Ivan",
    imgUrl:
      "https://storage.googleapis.com/juniper-media-library/92/2025/02/ivan-card.png",
    dept: [Department.MANAGEMENT, Department.PRODUCT],
    quote: "",
  },
  {
    name: "Jerrica",
    id: "Jerrica",
    imgUrl:
      "https://storage.googleapis.com/juniper-media-library/92/2025/02/jerrica-card.png",
    dept: [Department.MANAGEMENT],
    quote: "",
  },
  {
    name: "Angi",
    id: "angi",
    imgUrl:
      "https://storage.googleapis.com/juniper-media-library/92/2025/02/angi-card.png",
    dept: [Department.OPERATIONS],
    quote: "",
  },
  {
    name: "Akin",
    id: "akin",
    imgUrl:
      "https://storage.googleapis.com/juniper-media-library/92/2025/02/akin-card.png",
    dept: [Department.PRODUCT],
    quote: "",
  },
  {
    name: "Marko",
    id: "marko",
    imgUrl:
      "https://storage.googleapis.com/juniper-media-library/92/2025/02/marko-card.png",
    dept: [Department.PRODUCT],
    quote: "",
  },
  {
    name: "srdjan",
    id: "srdjan",
    imgUrl:
      "https://storage.googleapis.com/juniper-media-library/92/2025/02/srdjan-card.png",
    dept: [Department.PRODUCT],
    quote: "",
  },
  {
    name: "ana",
    id: "ana",
    imgUrl:
      "https://storage.googleapis.com/juniper-media-library/92/2025/02/ana-card.png",
    dept: [Department.CUSTOMER_SUCCESS],
    quote: "",
  },
  {
    name: "dado",
    id: "DADO",
    imgUrl:
      "https://storage.googleapis.com/juniper-media-library/92/2025/02/dado-card.png",
    dept: [Department.CUSTOMER_SUCCESS],
    quote: "",
  },
  {
    name: "flor",
    id: "flor",
    imgUrl:
      "https://storage.googleapis.com/juniper-media-library/92/2025/02/flor-card.png",
    dept: [Department.CUSTOMER_SUCCESS],
    quote: "",
  },
  {
    name: "jelena",
    id: "jelena",
    imgUrl:
      "https://storage.googleapis.com/juniper-media-library/92/2025/02/jelena-card.png",
    dept: [Department.CUSTOMER_SUCCESS],
    quote: "",
  },
  {
    name: "vanja",
    id: "vanja",
    imgUrl:
      "https://storage.googleapis.com/juniper-media-library/92/2025/02/vanja-card.png",
    dept: [Department.CUSTOMER_SUCCESS],
    quote: "",
  },
  {
    name: "aleksandra",
    id: "aleksandra",
    imgUrl:
      "https://storage.googleapis.com/juniper-media-library/92/2025/02/aleksandra-card.png",
    dept: [Department.PROJECTS],
    quote: "",
  },
  {
    name: "esraa",
    id: "esraa",
    imgUrl:
      "https://storage.googleapis.com/juniper-media-library/92/2025/02/esraa-card.png",
    dept: [Department.PROJECTS],
    quote: "",
  },
  {
    name: "francine",
    id: "francine",
    imgUrl:
      "https://storage.googleapis.com/juniper-media-library/92/2025/02/francine-card.png",
    dept: [Department.PROJECTS],
    quote: "",
  },
  {
    name: "marta",
    id: "marta",
    imgUrl:
      "https://storage.googleapis.com/juniper-media-library/92/2025/02/marta-card.png",
    dept: [Department.PROJECTS],
    quote: "",
  },
  {
    name: "miloš",
    id: "milos",
    imgUrl:
      "https://storage.googleapis.com/juniper-media-library/92/2025/02/milos-card.png",
    dept: [Department.PROJECTS],
    quote: "",
  },
  {
    name: "peter",
    id: "peter",
    imgUrl:
      "https://storage.googleapis.com/juniper-media-library/92/2025/02/peter-card.png",
    dept: [Department.SALES],
    quote: "",
  },
  {
    name: "hans",
    id: "hans",
    imgUrl:
      "https://storage.googleapis.com/juniper-media-library/92/2025/02/hans-card.png",
    dept: [Department.SALES],
    quote: "",
  },
];

export const testimonialsData: Array<Testimonials> = [
  {
    summary: "“You have made it a joy”",
    comment:
      "I wanted to take a moment to express my appreciation on how easy you’ve been to work with. Its been an interesting journey to reach this point, and you have made it a joy. Thank you!”",
    jobTitle: "Treasurer",
    name: "Nan Ladehoff",
    location: "Ponto Lake Township, Minnesota",
    logoUrl:
      "https://storage.googleapis.com/juniper-media-library/92/2024/05/Ponto-Lake-Township-2.png",
  },
  {
    summary: "“Couldn't be Happier”",
    comment:
      "I couldn't be happier!!! This is a four-year dream come true for me. I love working with the Town Web admin site. And adore your support team members.",
    jobTitle: "Clerk",
    name: "Sara Skalle",
    location: "City of Woodland, Minnesota",
    logoUrl:
      "https://storage.googleapis.com/juniper-media-library/92/2024/05/Woodland-color-NO-TREES-1-p-500.png",
  },
  {
    summary: "“A Pretty Effortless Process”",
    comment:
      "This is so exciting!!! Thank you so much for all your help. I look forward to getting familiar with it.",
    jobTitle: "Finance Officer",
    name: "LeAnne Cutts",
    location: "Town of Mission Hill, South Dakota",
    logoUrl:
      "https://storage.googleapis.com/juniper-media-library/92/2024/05/missionhill.png",
  },
  {
    summary: "“All about the Community”",
    comment:
      "This is so awesome to really make our website what you intend it to be, all about the community it represents!",
    jobTitle: "Supervisor",
    name: "Chad Niles",
    location: "Town of Moira, New York",
    logoUrl:
      "https://storage.googleapis.com/juniper-media-library/92/2024/05/Moira-p-500.png",
  },
  {
    summary: "“It is easier to look things up”",
    comment:
      "I really appreciate all that you guys have done. I’ve had some good feedback and people say it is easier to look things up. Again, Thank you so much",
    jobTitle: "Clerk",
    name: "Cindy Beier",
    location: "Town of Ripon, Wisconsin",
    logoUrl:
      "https://storage.googleapis.com/juniper-media-library/92/2024/12/ripon.png",
  },
  {
    summary: "“Always helpful”",
    comment:
      "The team is always helpful and answers me in a timely fashion. I met a couple ladies at the WTA convention, finally, this year. It was a pleasure to talk to them.",
    jobTitle: "Treasurer",
    name: "Kay Murre",
    location: "Town of Byron, Wisconsin",
    logoUrl:
      "https://storage.googleapis.com/juniper-media-library/92/2024/05/town-of-byron-1-p-500.png",
  },
];
