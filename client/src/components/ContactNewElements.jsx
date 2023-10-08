import React from 'react'

const ContactNewElements = ({text, icon, link}) => {
  return (
    <div>
      <div className='flex h-full w-full md:w-full bg-none rounded-md justify-center items-center'>       
        <a className='hover:cursor-pointer' href={link} target={text !== 'Telephone' ?'_blank':''}>
            {icon}
        </a>
     </div>
    </div>
  )
}

export default ContactNewElements
