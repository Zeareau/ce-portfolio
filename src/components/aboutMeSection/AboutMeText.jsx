import React from 'react'

const AboutMeText = () => {
  return (
    <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center">
        <h2 className="text-6xl text-cyan mb-10">About Me</h2>
        <p className="text-white">I'm Chris, a sophomore at GWU studying Information Systems. I'm a military kid who's traveled all across the United States growing up. Themes of technology and service
            have been pervasive throughout my life, and my goal is to one day optimize systems to assist others. I'm currently an IT Support Assistant and Intern for the GW IT Department,
            and a Leadership and Service Assistant Team Advisor for the NSLC on-site at Georgetown University. While I work two jobs over the summer, I hope to hone my IT skills to eventually
            contribute to big projects meant to help maximize efficiency and assist others.
        <button className="border border-red rounded-full py-2 px-4 text-lg flex items-center mt-10 hover:bg-red transition-all 
        duration-500 cursor-pointer md:self-start sm:self-center text-white hover:text-cyan">Projects</button>
        </p>
    </div>
  )
}

export default AboutMeText