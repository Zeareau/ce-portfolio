import React from 'react'

const SingleInfo = ({text, Image}) => {
  return (
    <di className="flex gap-4 items-center justify-start">
        <Image className="text-3xl"/>
        <p>{text}</p>
    </di>
  )
}

export default SingleInfo