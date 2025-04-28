import React from 'react'
import SingleContactSocial from './SingleContactSocial'
import { FiGithub } from "react-icons/fi";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const ContactSocial = () => {
  return (
    <div className="flex gap-4">
        <SingleContactSocial link="https://github.com/Zeareau" Icon={FiGithub}/>
        <SingleContactSocial link="https://www.linkedin.com/in/chrisenriquezwork/" Icon={FaLinkedin}/>
        <SingleContactSocial link="https://www.instagram.com/chrisbyhimself/" Icon={FaInstagram}/>
    </div>
  )
}

export default ContactSocial