import { AppBar, Button, Chip, Container, Divider, Toolbar } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

const navItems = [
  {
    label: "Home"
  }, {
    label: "About me"
  }, {
    label: "Portfolio"
  }, {
    label: "Blog"
  }
]

enum Domain {
  FullStack,
  SoftwareDevelopment,
  AppDevelopment,
}

const DomainsInfo: Record<Domain, {
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

export default function Home() {
  return (
    <>
      <Container maxWidth="md">
        <div className="flex flex-col gap-4 w-full h-full p-4">
          <AppBar position="static" color="transparent">
            <Toolbar className="flex justify-between min-h-0 h-8 my-8">
              <p className="text-red"> Made with great <span className="line-through"> love </span> &nbsp;pain </p>
              <div className="flex gap-6 h-full font-medium items-center">
                <div className="flex gap-4 items-center">
                  {navItems.map((item, key) => <p className="my-0 cursor-pointer" key={key}>
                    {item.label}
                  </p>)}
                </div>
                <Divider flexItem orientation="vertical"></Divider>
                <Button size="large" variant="outlined" className="rounded-full"> Let's Talk </Button>
              </div>
            </Toolbar>
          </AppBar>
          <div className="flex flex-col items-center justify-center">
            <div className="flex md:w-[600px] justify-between items-center">
              <div className="w-[300px]">
                <p className="font-medium"> Hi </p>
                <p className=""> I am Aprilia </p>
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
      <div className="bg-mantle">
        <Container maxWidth="md" className="p-8">
          {portfolioItems.map((item, key) => <div className="bg-base hover:bg-mantle hover:border-mauve border-solid border-[1px] border-crust flex flex-col p-8 rounded-xl gap-4 w-[calc(250px+4rem)] transition-all ease-in-out duration-500" key={key}>
            <p className="text-lg font-medium my-0"> {item.name} </p>
            <div className="my-0"> {item.domains.map((domain, key) => <Chip size="small" key={key} label={DomainsInfo[domain].label}></Chip>)} </div>
            <Image src={item.img} width={250} height={250} alt="" className="rounded"></Image>
            <p className="my-0"> {item.header} </p>
            <p className="my-0"> <Link className="text-blue" href={item.github}> {item.github} </Link> </p>
          </div>)}
        </Container>
      </div>
    </>
  )
}
