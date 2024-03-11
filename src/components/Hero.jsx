"use client";

import Image from "next/image";
import {
  MouseParallaxChild,
  MouseParallaxContainer,
} from "react-parallax-mouse";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";


const Hero = ({data, year}) => {
  // const tourLocal = ['Rome, Italy', 3000, 'Paris, France', 3000, 'Berlin, Germany', 3000, 'Rio Janeiro, Brazil', 3000]
  const tourLocal = data.reduce((acc, cur) => {
    acc.push(cur.city);
    acc.push(cur.duration);
    return acc;
  }, []);

  return (
    <section className="h-[80vh] xl:h-[850px] id='home">
      <div className="container mx-auto h-full flex justify-center items-center xl:justify-start">
        {/* Text */}
        <div className="h-full flex flex-col justify-center items-center xl:items-start z-20 pt-12">
          <MouseParallaxContainer
            globalFactorX={0.1}
            globalFactorY={0.2}
            resetOnLeave
            className="relative flex items-center h-[120px] xl:h-max xl:w-[840px]"
          >
            <MouseParallaxChild
              factorX={0.2}
              factorY={0.4}
              className="relative"
            >
              <motion.div
                variants={fadeIn("up", 0.4)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.3 }}
                className="w-[300px] h-[101.37px] xl:w-[725px] xl:h-[244.97px]"
              >
                <Image
                  src={"/assets/hero/typo-1.svg"}
                  fill
                  alt=""
                  className="object-contain"
                />
              </motion.div>
            </MouseParallaxChild>
            <MouseParallaxChild
              factorX={0.9}
              factorY={0.9}
              className="absolute xl:left-6 z-30"
            >
              <motion.div
                variants={fadeIn("up", 0.7)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.3 }}
                className="w-[300px] h-[101.37px] xl:w-[625px] xl:h-[244.97px]"
              >
                <Image
                  src={"/assets/hero/typo-2.svg"}
                  fill
                  alt=""
                  className="object-contain"
                />
              </motion.div>
            </MouseParallaxChild>
            <MouseParallaxChild
              factorX={0.3}
              factorY={0.6}
              className="hidden xl:flex absolute right-0 z-20 opacity-80"
            >
              <motion.div
                variants={fadeIn("left", 1.4)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.3 }}
                className="w-[150px] h-[100px] xl:w-[248px] xl:h-[200px] mix-blend-luminosity"
              >
                <Image
                  src={"/assets/hero/bird.png"}
                  fill
                  alt=""
                  className="object-contain"
                />
              </motion.div>
            </MouseParallaxChild>
          </MouseParallaxContainer>
          <div className="min-h-[60px] flex items-center mb-6">
            <div className="hidden xl:flex items-center xl:gap-x-0">
            {year.map((tourR) => (

              <div key={tourR.tourRange}>{tourR.tourRange}</div> 
            ))}
              <div className="relative w-2 h-2 mx-2 flex items-center justify-center">
                <Image fill src={"/assets/hero/dot.svg"} />
              </div>
              <div>Tour</div>
              <div className="relative w-2 h-2 mx-2 flex items-center justify-center">
                <Image fill src={"/assets/hero/dot.svg"} />
              </div>
              {year.map((tourY) => (

<div key={tourY.tourYear}>{tourY.tourYear}</div> 
))}
            </div>
            <div className="hidden xl:flex items-center justify-center relative w-7 h-7 mx-4">
              <Image fill src={"/assets/hero/mic.svg"} alt="" />
            </div>
            <TypeAnimation
              sequence={tourLocal}
              wrapper="div"
              speed={10}
              deletionSpeed={10}
              repeat={Infinity}
              cursor={false}
            />
          </div>
        </div>
        {/* Image */}
        <motion.div
          variants={fadeIn("left", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="hidden xl:flex absolute right-0 top-0 before:w-[784px] before:h-[893px] before:absolute before:right-0 before:top-0 before:bg-singerOverlay before:z-10"
        >
          <Image
            src={"/assets/hero/singer.png"}
            width={486}
            height={700}
            alt=""
            quality={100}
            priority
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
