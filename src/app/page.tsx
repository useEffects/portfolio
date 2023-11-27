import { Button, Chip, Container, Divider } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineSeparator } from "@/components/muilab";
import Timeline from "./(components)/timeline";
import Navbar from "./(components)/navbar";

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
    <div className="flex flex-col">
      <div className="hero-gradient">
        <Container maxWidth="md">
          <div className="flex flex-col gap-4 w-full h-full p-4">
            <div className="flex flex-col items-center justify-center">
              <Navbar />
              <div className="flex md:w-[600px] h-[300px] justify-between items-center">
                <div className="w-[300px] h-full flex flex-col justify-center">
                  <div className="">
                    <p className="font-medium"> Hi </p>
                    <p className=""> I am Aprilia </p>
                  </div>
                </div>
                <div>
                  <Image height={250} width={250} alt="" src="/hero_section.png"></Image>
                  <p className="text-[8px] m-0 p-0"> *Image only for reference, i dont like programming in C </p>
                </div>
              </div>
            </div>
            <div className="flex gap-2 w-full justify-center">
              <Button className="w-40" variant="contained"> Download CV </Button>
              <Button className="w-40" variant="contained"> <Link className="text-inherit no-underline" href="/resume"> Download Resume </Link> </Button>
            </div>
          </div>
        </Container>
      </div>
      <div className="h-40 bg-gradient-to-b from-base to-mantle"></div>
      <div className="bg-mantle" id="portfolio">
        <Container maxWidth="md" className="p-8">
          <p className="text-2xl my-4"> Pinned projects </p>
          {portfolioItems.map((item, key) => <div className="bg-base hover:bg-mantle border-solid border-[1px] border-crust flex flex-col p-8 rounded-xl gap-4 w-[calc(250px+4rem)]" key={key}>
            <p className="text-lg font-medium "> {item.name} </p>
            <div className=""> {item.domains.map((domain, key) => <Chip size="small" key={key} label={DomainInfo[domain].label}></Chip>)} </div>
            <Image src={item.img} width={250} height={250} alt="" className="rounded"></Image>
            <p className=""> {item.header} </p>
            <p className=""> <Link className="text-blue" href={item.github}> {item.github} </Link> </p>
          </div>)}
        </Container>
      </div>
      <div className="h-40 bg-gradient-to-b from-mantle to-base"></div>
      <div className="experience-gradient py-4" id="experience">
        <Container maxWidth="md">
          <p className="text-2xl"> Experience </p>
          <div>
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
                      <p className="text-mauve text-lg mx-4"> {item.name} </p>
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
          </div>
        </Container>
      </div>
      <div className="py-6" id="blog">
        <Container className="flex flex-col gap-4 relative z-10" maxWidth="md">
          <p className="text-2xl"> Blogs </p>
          <div className="flex flex-wrap gap-4">
            {blogItems.map((item, i) => <div className="p-4 rounded-xl hover:bg-base bg-mantle border-[1px] w-[calc(50%-0.5rem)] border-mantle border-solid flex flex-col gap-4" key={i}>
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
      </div>
      <div className="my-40">
        <Container maxWidth="md">
          <p className="text-2xl"> Contact </p>
          
        </Container>
      </div>
      <div className="h-40 bg-gradient-to-b from-base to-mantle"></div>
      <div className="bg-mantle py-6">
        <Container maxWidth="md" className="flex justify-center items-center flex-col gap-4">
          <p className="text-red"> Made with great <span className="line-through"> love </span> &nbsp;pain by myself </p>
          <p> Source code available @<a className="" href="https://github.com/useEffects/portfolio"> https://github.com/useEffects/portfolio </a></p>
        </Container>
      </div>
    </div>
  )
}
