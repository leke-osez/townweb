import type { EmployeesData } from "@/types";

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
