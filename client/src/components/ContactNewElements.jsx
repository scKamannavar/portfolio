import React from 'react'

const ContactNewElements = ({text, icon, link}) => {
  return (
    <div>
      <div className='flex h-20 w-20 md:w-40 bg-none rounded-md justify-center items-center'>       
        <a className='hover:cursor-pointer' href={link} target={text !== 'Telephone' ?'_blank':''}>
            {icon}
        </a>
     </div>
    </div>
  )
}

export default ContactNewElements
