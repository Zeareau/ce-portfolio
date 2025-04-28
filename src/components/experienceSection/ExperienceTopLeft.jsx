import React from 'react'
import ExperienceInfo from './ExperienceInfo'

const ExperienceTopLeft = () => {
  return (
    <div className="flex flex-col gap-6 w-[300px] ">
    <p className="text-red font-bold uppercase text-3xl font-special text-center">Since 2023</p>
    <div className="flex justify-center items-center gap-4">
        <ExperienceInfo number="2" text="Years"/>
        <p className="font-bold text-6xl text-lightGrey">-</p>
        <ExperienceInfo number="4" text="Jobs"/>
    </div>
    <p className="text-center text-baseWhite">With 2 years of dynamic customer support, IT assitance, and project management.</p>
    <ExperienceInfo number="100+" text="People Helped"/>
    </div>
  )
}

export default ExperienceTopLeft