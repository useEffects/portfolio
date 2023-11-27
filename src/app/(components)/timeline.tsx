"use client"

import { Timeline as MuiTimeline, timelineItemClasses } from "@mui/lab"
import { ReactNode } from "react"

export default function Timeline({ children }: { children: ReactNode }): ReactNode {
    return <MuiTimeline sx={{
        [`& .${timelineItemClasses.root}:before`]: {
            flex: 0,
            padding: 0,
        },
    }}>
        {children}
    </MuiTimeline>
}