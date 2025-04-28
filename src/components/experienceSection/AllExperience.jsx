import React from 'react'
import SingleExperience from './SingleExperience'
import { FaArrowRight } from "react-icons/fa";
import {motion} from 'framer-motion'
import {fadeIn} from "../../framerMotion/variants"

const experiences =[
    {
        job:"Veteran Services Support Assistant",
        company:"GW Military and Veteran Services Office",
        date: "2024 - 2025",
        responsibilities: ["Assist military-affilitated students process tuition benefits","Organize databases to track student data","Provided customer service through emails, phone calls, and walk-ins"]
    },
    {
        job:"Technical Support Assistant",
        company:"GW IT Department",
        date: "2025 - Present",
        responsibilities: ["TBD","TBD","TBD"]
    },
    {
        job:"Assistant Team Advisor",
        company:"National Student Leadership Conference",
        date: "2025 - Present",
        responsibilities: ["TBD","TBD","TBD"]
    }
]

const AllExperience = () => {
  return (
    <div className="flex md:flex-row sm:flex-col items-center justify-between">
        {experiences.map((experience, index)=>{
            return ( 
                <>
            <SingleExperience key={index} experience={experience}/>
            {index < 2 ? 
            <motion.div
            variants={fadeIn("right",0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{once: "false", amount: 0}}
            >
            <FaArrowRight className="text-6xl text-red lg:block sm:hidden"/> 
            </motion.div>
            : ""}
            </>
            )
        })}
    </div>
  )
}

export default AllExperience