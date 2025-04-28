import React from 'react'
import { GiAtom } from "react-icons/gi";
import {motion} from 'framer-motion'
import {fadeIn} from "../../framerMotion/variants"

const HeroPic = () => {
  return (
    <motion.div 
              variants={fadeIn("left",0.4)}
              initial="hidden"
              whileInView="show"
              viewport={{once: "false", amount: 0}}
    className="h-full flex items-center justify-center -h-[30px] relative">

       <img src="../../website images/Headshot No Background.png" 
       alt="Christopher Enriquez" 
       className="max-h-[350px] w-auto rounded-br-xl rounded-bl-xl rounded-tr-xl border-[2px] rounded-tl-xl h-[333px] flex backdrop-blur-10 shadow-cyanShadow"
       />

       <div className="absolute -z-10 flex justify-center items-center animate-pulse">
       <GiAtom className="md:h-[20%] sm:h-[100%] min-h-[500px] w-auto text-cyan blur-md animate-[spin_20s_linear_infinite]"/>
       </div>

    </motion.div>
  )
}

export default HeroPic