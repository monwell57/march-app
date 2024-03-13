"use client"

import Image from "next/image"
import { AudioPlayer } from "react-audio-play"
import {motion} from "framer-motion"
import { fadeIn } from "../../variants"



export const Player = ({song}) => {
    const { fileLocation } = song[0];
    const {artist} = song[0]
    const {featuresong} = song[0]
  return (
    <>
      <motion.div 
                variants={fadeIn("up", .1)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: .1 }}
                className="bg-gradient-to-r from-tertiary/70 to-primary/10 
                backdrop-blur-[15px] h-[112px] flex items-center
                relative z-40"
      >
        <div className="container mx-auto flex flex-col justify-between items-center xl:flex-row">
          <div className="hidden w-[300px] xl:flex items-center gap-x-4">

            <div className="relative w-16 h-16">
              <Image src={'/assets/player/avatar.png'} fill alt='' priority />
            </div>
            <div className="laeding-none">
              <div className="text-lg font-medium">{artist}</div>
              <div className="text-sm font-light">{featuresong}</div>
            </div>
          </div>           
          <div className="w-full max-w-4xl">
              <AudioPlayer width="100%" loop preload="none" color='#333' volume={40} volumePlacement="top" src={fileLocation} style={{
                  background: 'transparent',
                  boxShadow: 'none',
                  width: '100%'
              }}/>
          </div>
        </div>
      </motion.div>
    </>
  )
}
