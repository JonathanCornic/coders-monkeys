import { AppLinks } from "@/types/app-links";
import { RiLinkedinFill, RiSlackFill, RiYoutubeFill } from "react-icons/ri";

const footerApplicationLinks: AppLinks[] = [
  {
    label: "Accueil",
    baseUrl: "/",
    type: "internal",
  },
  {
    label: "Projets",
    baseUrl: "/#",
    type: "internal",
  },
  {
    label: "Coders Monkeys",
    baseUrl: "/#",
    type: "internal",
  },
  {
    label: "Formation",
    baseUrl: "https://youtube.com/@remotemonkey",
    type: "external",
  },
];
const footerUsersLinks: AppLinks[] = [
  {
    label: "Mon espace",
    baseUrl: "/#",
    type: "internal",
  },
  {
    label: "Connexion",
    baseUrl: "/#",
    type: "internal",
  },
  {
    label: "inscription",
    baseUrl: "/#",
    type: "internal",
  },
  {
    label: "Mot de passe oublié",
    baseUrl: "#",
    type: "internal",
  },
];
const footerInformationsLinks: AppLinks[] = [
  {
    label: "CGU",
    baseUrl: "/#",
    type: "internal",
  },
  {
    label: "Confidentialité",
    baseUrl: "/#",
    type: "internal",
  },
  {
    label: "A propos",
    baseUrl: "/#",
    type: "internal",
  },
  {
    label: "Contact",
    baseUrl: "/#",
    type: "internal",
  },
];
export const footerSocialsLinks: AppLinks[] = [
  {
    label: "Linkedin",
    baseUrl: "https://www.linkedin.com/",
    type: "external",
    icon: RiYoutubeFill,
  },
  {
    label: "Youtube",
    baseUrl: "https://www.youtube.com",
    type: "external",
    icon: RiLinkedinFill,
  },
  {
    label: "Slack",
    baseUrl: "https://www.slack.com",
    type: "external",
    icon: RiSlackFill,
  },
];

export const footerLinks = [
  {
    label: "App",
    links: footerApplicationLinks
  },
  {
    label: "Utilisateurs",
    links: footerUsersLinks
  },
  {
    label: "Informations",
    links: footerInformationsLinks
  },
  {
    label: "Réseaux",
    links: footerSocialsLinks
  }
]