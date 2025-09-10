import { RiNextjsFill } from "react-icons/ri";
import {
  BiLogoPostgresql,
  BiLogoTailwindCss,
  BiLogoReact,
  BiLogoFlask,
  BiLogoTypescript,
  BiLogoJavascript,
} from "react-icons/bi";
import {
  FaLaravel,
  FaBootstrap,
  FaPhp,
  FaSass,
  FaPython,
} from "react-icons/fa";
import { DiMysql } from "react-icons/di";
import { SiExpress } from "react-icons/si";

export const highlightPortfolio = [
  {
    id: 1,
    title: "PharmaForecast",
    description:
      "Pharmacist system to manage stock of medicine on integrated POS and Dashboard Forecasting system",
    image: "/images/pharmaforecast.png",
    link: "https://github.com/FaishalHilmi/antibiotic-sales-forecast",
    icons: [
      <RiNextjsFill key="nextjs" />,
      <BiLogoTypescript key="ts" />,
      <BiLogoPostgresql key="postgre" />,
      <BiLogoTailwindCss key="tailwind" />,
    ],
  },
  {
    id: 2,
    title: "MaizeCare",
    description:
      "A machine learning-based system designed to identify diseases in corn leaves from leaf images",
    image: "/images/pharmaforecast.png",
    link: "https://github.com/FaishalHilmi/maizecare",
    icons: [
      <BiLogoReact key="reactjs" />,
      <BiLogoFlask key="flask" />,
      <BiLogoJavascript key="javascript" />,
      <FaPython key="python" />,
      <BiLogoTailwindCss key="tailwind" />,
    ],
  },
];

export const portfolios = [
  {
    id: 1,
    title: "PharmaForecast",
    description:
      "Pharmacist system to manage stock of medicine on integrated POS and Dashboard Forecasting system",
    image: "/images/pharmaforecast.png",
    link: "https://github.com/FaishalHilmi/antibiotic-sales-forecast",
    icons: [
      <RiNextjsFill key="nextjs" />,
      <BiLogoTypescript key="ts" />,
      <BiLogoPostgresql key="postgre" />,
      <BiLogoTailwindCss key="tailwind" />,
    ],
  },
  {
    id: 2,
    title: "MaizeCare",
    description:
      "A machine learning-based system designed to identify diseases in corn leaves from leaf images",
    image: "/images/maizecare.png",
    link: "https://github.com/FaishalHilmi/maizecare",
    icons: [
      <BiLogoReact key="reactjs" />,
      <BiLogoFlask key="flask" />,
      <BiLogoJavascript key="javascript" />,
      <FaPython key="python" />,
      <BiLogoTailwindCss key="tailwind" />,
    ],
  },
  {
    id: 3,
    title: "Queasy",
    description:
      "A learning quiz system that challenges your knowledge while boosting your skills",
    image: "/images/queasy.png",
    link: "https://github.com/FaishalHilmi/queasy-app",
    icons: [
      <BiLogoReact key="reactjs" />,
      <BiLogoJavascript key="javascript" />,
      <BiLogoTailwindCss key="tailwind" />,
    ],
  },
  {
    id: 4,
    title: "Simekarsari",
    description:
      "The Mekar Sari Village Information System facilitates information sharing, and promotes MSMEs",
    image: "/images/simekarsari.png",
    link: "https://github.com/FaishalHilmi/simekarsari-app",
    icons: [
      <FaLaravel key="laravel" />,
      <DiMysql key="mysql" />,
      <BiLogoTailwindCss key="tailwind" />,
      <FaBootstrap key="bootstrap" />,
    ],
  },
  {
    id: 5,
    title: "GrantMatch",
    description:
      "Web-based decision support system for scholarship selection using the Weighted Product method",
    image: "/images/grantmatch.png",
    link: "https://github.com/FaishalHilmi/spk-wp",
    icons: [
      <BiLogoReact key="reactjs" />,
      <SiExpress key="expressjs" />,
      <BiLogoJavascript key="javascript" />,
      <BiLogoTailwindCss key="tailwind" />,
      <DiMysql key="mysql" />,
    ],
  },
  {
    id: 6,
    title: "Dirent",
    description:
      "A user-friendly web-based car rental platform with a booking system, fleet list, and pricing information",
    image: "/images/dirent.png",
    link: "https://github.com/FaishalHilmi/website-dirent",
    icons: [
      <FaPhp key="php" />,
      <DiMysql key="mysql" />,
      <FaBootstrap key="bootstrap" />,
      <FaSass key="sass" />,
    ],
  },
];
