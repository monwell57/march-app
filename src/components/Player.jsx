"use client"

import Image from "next/image"
import { AudioPlayer } from "react-audio-play"
import {motion} from "framer-motion"
import { fadeIn } from "../../variants"



export const Player = ({song}) => {
    const { fileLocation } = song[0];
  return (
    <>
    <div className="bg-gradient-to-r from-tertiary/70 to-primary/10 
    backdrop-blur-[15px] h-[112px] flex items-center
    relative z-40
    "
    
    >
     <div className="container mx-auto">
        {/* text & avatar */}
        <div>text & avatar img</div>
        {/* player */}
        <div>
            <AudioPlayer loop preload="none" color='#333' volume={40} volumePlacement="top" src={fileLocation} style={{
                background: 'transparent',
                boxShadow: 'none',
                width: '100%'
            }}/>
        </div>
     </div>
    </div>
    </>
  )
}
