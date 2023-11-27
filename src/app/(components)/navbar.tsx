"use client"

import DarkModeSwitcher from "@/components/darkmodeSwitch"
import { AppBar, Toolbar, Divider, Button } from "@mui/material"
import Link from "next/link"
import { useState } from "react"

const navItems = [
    {
        label: "Home",
        id: "home"
    }, {
        label: "Portfolio",
        id: "portfolio"
    }, {
        label: "Experience",
        id: "experience"
    }, {
        label: "Blog",
        id: "blog"
    },
]

export default function Navbar() {
    const [current, setCurrent] = useState(navItems[0].id)
    return <AppBar position="static" color="transparent">
        <Toolbar className="flex justify-between min-h-0 h-8 my-8 items-center">
            <DarkModeSwitcher />
            <div className="flex gap-6 h-full font-medium items-center">
                <div className="flex gap-4 items-center">
                    {navItems.map((item, key) => <Link href={"#" + item.id} className={`cursor-pointer ${current === item.id ? "text-mauve" : "text-text no-underline"}`} key={key} onClick={() => setCurrent(item.id)}>
                        {item.label}
                    </Link>)}
                </div>
                <Divider flexItem orientation="vertical"></Divider>
                <Button size="large" variant="outlined" className="rounded-full"> Let's Talk </Button>
            </div>
        </Toolbar>
    </AppBar>
}