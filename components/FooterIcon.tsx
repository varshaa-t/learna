import React from "react"

interface FooterIconProps{
    icon: React.ReactElement;
}

export default function FooterIcon({icon}: FooterIconProps){

    return (
        <div className="border-[1px] p-3 border-black rounded-full">{icon}</div>
    )
}