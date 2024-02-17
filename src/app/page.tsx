import { Button, Chip, Container, Divider } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineSeparator } from "@/components/muilab";
import Timeline from "./(components)/timeline";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import DarkModeSwitcher from "@/components/darkmodeSwitch";

const ascii = `
⠀ ／l、
（ﾟ､ ｡ ７
⠀ l、ﾞ ~ヽ
  じしf_, )ノ
`

enum Domain {
  FullStack,
  SoftwareDevelopment,
  AppDevelopment,
}

const DomainInfo: Record<Domain, {
  label: string
}> = {
  [Domain.FullStack]: {
    label: "FullStack Development"
  },
  [Domain.SoftwareDevelopment]: {
    label: "Software Development"
  },
  [Domain.AppDevelopment]: {
    label: "App Development"
  },
}

const portfolioItems = [
  {
    img: "/portfolio.jpg",
    name: "Portfolio Website",
    github: "https://github.com/useEffects/portfolio",
    header: "Current website",
    domains: [Domain.FullStack],
    live: "https://itzapril.tech"
  }
]

const experienceItems = [
  {
    name: "Tvarit GmbH",
    website: "https://tvarit.com",
    role: "SDE Intern, Infrastructure team, Software Development Internal Team",
    dates: ["Oct 2022", "Present"],
    location: "Pune, India (Remote)",
    content: <div className="px-2">
      <ul className="[&>li]:my-2">
        <li>
          Maintaining our internal <a href="https://grafana.com"> Grafana </a> repository and add features to it.
        </li>
      </ul>
    </div>
  }, {
    name: "Hyperd",
    website: "https://hyperd.tech",
    role: "Board Member",
    dates: ["Sep 2022", "Present"],
    location: "Coimbatore",
    content: <div className="px-2">
      <ul className="[&>li]:my-2">
        <li>
          Hyperd is the public face of my <span className="font-medium"> College Coding Club </span> where i stand as the club Secretary. Hyperd exists to safeguard the club members' privacy in the internet while showcasing their projects without doxing themselves.
        </li>
        <li>
          Working as a mini freelancing and IT agency.
        </li>
      </ul>
      <p className="mx-4 my-2"> Few things we do in our college club: </p>
      <ul className="[&>li]:my-2">
        <li>
          We are the go-to destination for our college when technical issues arise, as they trust our capability to resolve them.
        </li>
        <li>
          Conducting various seminars and Workshops
        </li>
        <li>
          Working closely with alumni in various workshops and projects.
        </li>
        <li className="font-medium"> ... More on my original CV </li>
      </ul>
    </div>
  }, {
    name: "Tamil Nadu Engineering Admissions",
    website: "https://tneaonline.org",
    role: "FullStack Developer Intern",
    dates: ["Apr 2022", "Sep 2022"],
    location: "Coimbatore",
    content: <div className="px-2">
      <p className="mx-4 my-2"> Developed a web app to facilitate all the colleges in Tamil Nadu ( affiliated to Anna University ) to submit their sanctioned seats for carrying out various internal purposes. </p>
      <ul className="[&>li]:my-2">
        <li>
          Form Submissions & Document Submissions with various and varying constraints
        </li>
        <li>
          Admin page for monitoring and keeping track of colleges that use the app and yet to use the app.
        </li>
        <li>
          Deployed the web app in AWS EC2. The web app was live for <span className="font-medium"> 20 days with 0% downtime </span>. Within that period, I have personally addressed queries like password change, web app usage guidance and more.
        </li>
      </ul>
    </div>
  }
]

const blogItems = [
  {
    thumbnailSrc: "/comic-youtube-thumbnail-background-comic-style_530597-997.jpg",
    readDuration: "5 mins",
    date: "12 Aug 2023",
    label: "Sample Blog",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut, laudantium."
  }, {
    thumbnailSrc: "/comic-youtube-thumbnail-background-comic-style_530597-997.jpg",
    readDuration: "5 mins",
    date: "12 Aug 2023",
    label: "Sample Blog",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut, laudantium."
  },
]

export default function Home() {
  return (
    <div className="">
      <div className="py-4 hero-gradient relative z-10">
        <Container maxWidth="md" className="flex flex-col h-full justify-between gap-12">
          <div className="justify-between items-center h-8 w-full flex">
            <DarkModeSwitcher />
            <Button className="rounded-full" variant="outlined"> Let's Talk </Button>
          </div>
          <div className="flex flex-col-reverse md:flex-row gap-12 justify-center items-center">
            <div className="flex flex-col gap-8">
              <p className="text-5xl merienda"> Hi! I'm Joel Samuel 👋🏼 </p>
              <div className="w-4/5 h-1 bg-primary"></div>
              <p className="text-4xl leading-normal"> <span className="merienda text-primary underline"> "Generative"</span> AI Engineer, Javascript Developer: <span className="merienda text-primary underline"> "FullStack"</span> </p>
              <p className="text-xl text-subtext0 font-light"> Self taught programmer, FOSS Enthusiast and Contributor, <span className="text-primary font-normal"> Jack of many trades </span></p>
            </div>
            <pre className="text-4xl !font-mono text-primary -mt-12">
              {ascii}
            </pre>
          </div>
          <div className="flex flex-col justify-center gap-4">
            <div className="flex gap-4 justify-center">
              <Button className="w-60" variant="outlined">Download CV</Button>
              <Button className="w-60" variant="outlined">Download Resume</Button>
            </div>
          </div>
          <div className="flex justify-center gap-4 items-center">
            <div className="neon-dot"></div>
            <p className="text-green text-center"> Available for work </p>
          </div>
        </Container >
      </div>
      <div className="smooth-top"></div>
      <div className="h-screen bg-mantle w-full"></div>
    </div >
  )
}
