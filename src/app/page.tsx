import { Button, Chip, Container, Divider } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineSeparator } from "@/components/muilab";
import Timeline from "./(components)/timeline";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import DarkModeSwitcher from "@/components/darkmodeSwitch";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload } from '@fortawesome/free-solid-svg-icons'
import { Heading } from "@/components/heading";

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

const resumes = [
  {
    label: "AI / DL",
    href: ""
  },
  {
    label: "FullStack",
    href: ""
  },
  {
    label: "Software",
    href: ""
  },
  {
    label: "Devops and IT",
    href: ""
  },
  {
    label: "Flutter",
    href: ""
  },
]

export default function Home() {
  return (
    <div className="relative z-10">
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
              <p className="text-xl text-subtext0 font-light"> Self taught programmer, FOSS Enthusiast and Contributor, <span className="text-primary font-normal"> Jack of many trades. </span></p>
            </div>
            <pre className="text-4xl !font-mono text-primary -mt-4 mb-0">
              {ascii}
            </pre>
          </div>
          <div className="flex justify-center gap-4 items-center">
            <div className="neon-dot"></div>
            <p className="text-green text-center"> Available for work </p>
          </div>
          <div className="flex flex-col justify-center gap-4">
            <div className="flex flex-col gap-4">
              <div className="flex gap-4">
                <a className="no-underline w-1/2" href="">
                  <Button className="rounded-full w-full" variant="contained">Download CV</Button>
                </a>
                <a className="no-underline w-1/2" href="">
                  <Button className="rounded-full w-full" variant="contained">Download Resume</Button>
                </a>
              </div>
              <p className="text-subtext0"> Or individual resume's: </p>
              <div className="flex flex-wrap gap-2">
                {resumes.map((resume, i) => <a href={resume.href} key={i} className="text-primary no-underline">
                  <Button variant="outlined" className="rounded-full flex gap-4">
                    <span> {resume.label} </span>
                    <FontAwesomeIcon className="text-primary w-4 h-4" icon={faDownload} />
                  </Button>
                </a>)}
              </div>
            </div>
          </div>
        </Container >
      </div>
      <div className="smooth-bottom"></div>
      <div className="bg-mantle w-full z-10 experience-gradient">
        <Container maxWidth="md" className="p-0">
          <div className="px-4">
            <Heading text="TIMELINE" />
          </div>
          <Timeline>
            {experienceItems.map((item, key) =>
              <TimelineItem key={key}>
                <TimelineSeparator color="primary">
                  <TimelineDot color="primary" />
                  <TimelineConnector color="secondary" />
                </TimelineSeparator>
                <TimelineContent>
                  <div className="bg-base pt-4 rounded flex flex-col gap-2 border-[1px] border-solid border-crust">
                    <div className="ml-auto mr-4 flex gap-2 text-sm">
                      <p> {item.dates[0]} </p>
                      <p> - </p>
                      <p> {item.dates[1]} </p>
                    </div>
                    <p className="text-primary text-lg mx-4"> {item.name} </p>
                    <div className="flex flex-col mx-4 gap-2 my-4">
                      <p className=""> <a href={item.website}> {item.website} </a> </p>
                      <p className="font-medium"> {item.role} </p>
                      <p className=""> {item.location} </p>
                    </div>
                    <div className="bg-mantle py-4 text-sm">
                      {item.content}
                    </div>
                  </div>
                </TimelineContent>
              </TimelineItem>
            )}
          </Timeline>
        </Container>
      </div>
      <div className="smooth-top"></div>
      <Container className="flex bg-base flex-col gap-4" maxWidth="md">
        <Heading text="Blogs" />
        <div className="flex flex-col md:flex-row flex-wrap gap-4">
          {blogItems.map((item, i) => <div className="p-4 rounded-xl hover:bg-base bg-mantle border-[1px] md:w-[calc(50%-0.5rem)] border-mantle border-solid flex flex-col gap-4" key={i}>
            <div className="w-full h-[300px] relative">
              <Image className="rounded-xl" layout="fill" alt="" src={item.thumbnailSrc}></Image>
            </div>
            <div className="flex justify-between">
              <p> {item.readDuration} </p>
              <p> {item.date} </p>
            </div>
            <Divider />
            <p className="font-medium text-xl"> {item.label} </p>
            <p> {item.description} </p>
            <Button className="ml-0 mr-auto"> Read More </Button>
          </div>)}
        </div>
      </Container>
    </div >
  )
}
