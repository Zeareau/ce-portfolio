import React from 'react'
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { RiReactjsFill } from "react-icons/ri";
import { RiTailwindCssLine } from "react-icons/ri";
import { PiMicrosoftExcelLogo } from "react-icons/pi";
import { FaPython } from "react-icons/fa";
import { BsFiletypeSql } from "react-icons/bs";
import { SiAdobecreativecloud } from "react-icons/si";
import SingleSkill from './SingleSkill';
import {motion} from 'framer-motion'
import {fadeIn} from "../../framerMotion/variants"


const skills = [
    {
        skill:"HTML",
        icon: FaHtml5,
    },
    {
        skill:"CSS",
        icon: FaCss3Alt,
    },
    {
        skill:"JavaScript",
        icon: IoLogoJavascript,
    },
    {
        skill:"ReactJS",
        icon: RiReactjsFill,
    },
    {
        skill:"TailwindCSS",
        icon: RiTailwindCssLine,
    },
    {
        skill:"Excel",
        icon: PiMicrosoftExcelLogo,
    },
    {
        skill:"Python",
        icon: FaPython,
    },
    {
        skill:"SQL",
        icon: BsFiletypeSql,
    },
    {
        skill:"Adobe Cloud",
        icon: SiAdobecreativecloud,
    },
    
];

const AllSkillsSM = () => {
  return (
    <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-12 my-12">
        {skills.map((item, index)=>{
            return (
            <motion.div 
              variants={fadeIn("up",0.2)}
              initial="hidden"
              whileInView="show"
              viewport={{once: "false", amount: 0.7}}
            key={index} className="flex flex-col items-center">
                <item.icon className="text-7xl text-red"/>
                <p className="text-center mt-4 text-baseWhite">{item.skill}</p>
            </motion.div>
            )
        })}
    </div>
  )
}

export default AllSkillsSM