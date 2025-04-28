import React from 'react'
import { HiOutlineMail } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import SingleInfo from './SingleInfo';

const ContactInfo = () => {
  return (
    <div className="flex flex-col gap-4 text-baseWhite">
        <SingleInfo text="chrisenriquezwork@gmail.com" Image={HiOutlineMail}/>
        <SingleInfo text="+1(719)663-6688" Image={FiPhone}/>
        <SingleInfo text="Lorton, VA" Image={IoLocationOutline}/>
    </div>
  )
}

export default ContactInfo