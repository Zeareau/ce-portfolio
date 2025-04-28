import React from 'react'
import ProjectsText from './ProjectsText'
import SingleProject from './SingleProject'
import {motion} from 'framer-motion'
import {fadeIn} from "../../framerMotion/variants"

const projects = [
{
    name:"Portfolio Website",
    year:"April 2025",
    align:"right",
    image:"/website images/portfolioproject.png",
    link:"#",
},
{
    name:"TBD",
    year:"May 2025",
    align:"left",
    image:"/website images/website-img-2.webp",
    link:"#",
},
{
    name:"TBD",
    year:"June 2025",
    align:"right",
    image:"/website images/website-img-3.jpg",
    link:"#",
},
{
    name:"TBD",
    year:"July 2025",
    align:"left",
    image:"/website images/website-img-4.jpg",
    link:"#",
},
]

const ProjectsMain = () => {
  return (
    <div id="projects" className="max-w-[1200px] mx-auto px-4">
        <motion.div
          variants={fadeIn("down",0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{once: "false", amount: 0}}
        >
        <ProjectsText/>
        </motion.div>
    <div className="flex flex-col gap-20 max-w-[900px] mx-auto mt-12">
        {projects.map((item, index)=>{
            return<SingleProject key={index} name={item.name} year={item.year} align={item.align} image={item.image}/>
        })}
    </div>
    </div>
  )
}

export default ProjectsMain