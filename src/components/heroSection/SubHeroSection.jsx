import React from 'react'

const SubHeroSection = () => {
  return (
    <div className="w-full border-y border-baseWhite text-baseWhite flex justify-around uppercase xl:text-4xl md:text-2xl sm:text-4xl py-8 items-center gap-4 bg-grey">
        <p className="md:block sm:hidden">Quick-Learner</p>
        <p className="md:block sm:hidden">Service Oriented</p>
        <p>Team Player</p>
    </div>
  )
}

export default SubHeroSection