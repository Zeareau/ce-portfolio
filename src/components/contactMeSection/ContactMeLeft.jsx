import React from 'react'
import ContactForm from './ContactForm'
import { BiRadioCircle } from 'react-icons/bi'

const ContactMeLeft = () => {
  return (
    <div className="flex flex-col gap-8 w-full">
        <div>
        <h2 className="text-red text-3xl mb-4">Get In Touch</h2>
        <p className="text-baseWhite">Feel free to reach out if you would like to contact me, <br/> you are just a few clicks away! 
        <br/>
        <span className="text-grey text-xs"> *Some emails, like school emails, may not work: insufficient authentification scopes* </span> </p>
        </div>
        <ContactForm/>
    </div>
  )
}

export default ContactMeLeft