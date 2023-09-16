import React, { useState } from 'react'
import axios from 'axios'

const contact = () => {
    const [alertmes,setAlertmes] = useState(false);
    const [name, setName] = useState('')
    const [bodym, setBodym] = useState('')
    const [email, setEmail] = useState('')

    const[alertContent, setAlertContent] = useState('')

    // let messageArray = []

    // const Submit = ((e)=>{
    //   e.preventDefault()
    //   const inputObject = {
    //     name : name,
    //     email : email,
    //     message : bodym
    //   }
    //   const arr = [];
      
 
    //   console.log(inputObject);
    // })
    //  _______________________________________________________Api call__________________________________________________________________
    const alert = (arg)=>{
      setAlertContent(arg)
      setAlertmes(true);
      setTimeout(() => {
        setAlertmes(false)
      }, 4000);

    }
    const Submit = (e)=>{
        e.preventDefault(); 
        // axios.post('https://portfolio-api-one-olive.vercel.app/sendMessage',{ //old link
        axios.post('https://portfolio-3l81v7gz2-sckamannavar.vercel.app/sendMessage',{
          name, email, bodym
        }).then(res =>{
          console.log(res.data)
          setBodym('')
          setEmail('')
          setName(' ')
          alert('Message Recieved')
        })
        .catch(err => {
          console.log(err)
          alert('something Went wrong, Please try again Later')
        }); 
        
      }

    //  _______________________________________________________Api call__________________________________________________________________
  return (
    <div className='flex flex-col bg-green-200 py-20 ' id='contact'>

      <div className='flex text-4xl justify-center font-Outfit'>
        <h1>Contact</h1>
      </div>
         
        <form className='flex flex-col h-full self-center rounded w-[85%] md:w-[60%] overflow-hidden shadow-md bg-black shadow-gray-400 md:m-4 mt-12 p-6 ' onSubmit={Submit} >
            <div class={ alertmes ? 'bg-blue-100 border-blue-600 border-2 text-blue-700 px-4  sm:mx-24 py-3 rounded relative ':'hidden' } role="alert">
                <strong class="font-bold">{alertContent}</strong>
                {/* <span class="block sm:inline">Will get back to you in no time.</span> */}
            </div>
            <div className='flex flex-col md:flex-row md:px-20'>
                <div className='flex flex-1 justify-center flex-col p-2'>
                    
                    <input className='border-2 border-blue-400 sm:h-16 h-10 rounded-lg p-2 my-2 text-grey-darkest' value={name} type="text" name="userName" placeholder='Enter Name' id="" onChange={(e)=>{setName(e.target.value)}}/>
                    <input className='border-2 border-blue-400 sm:h-16 h-10 rounded-lg p-2 my-2' value={email} type="text" name="userEmail" placeholder='Enter Email' id="" onChange={(e)=>{setEmail(e.target.value)}} />
                </div>
                <div className='flex flex-1 justify-center p-2'>
                    
                    <textarea className='border-2 border-blue-400 w-full p-2 rounded-lg h-24 sm:h-36 my-2' value={bodym}  name="userMessage" placeholder='Write your Message' id="" cols="" rows="" onChange={(e)=>{setBodym(e.target.value)}}></textarea>
                </div>
            </div>
            <div className='flex justify-center pb-6 border-b-2 '>
                {/* <a href={`mailto:${email}? body:${body}`} target='_blank' >Send Message</a> */}
                <input type="submit"value="Send Message"  className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition ease-in-out delay-150 '/>
            </div>
            <div className='text-white p-8 text-left font-Outfit flex justify-center text-md md:text-lg'>
                <div className='pr-4 text-[#00cdda] '>
                    <h2>Mobile </h2>
                    <h2>Email   </h2>
                </div>
                <div className='pl-4 '>
                    <h2>+91-8150903238</h2>
                    <h2>sagarck08@gmail.com</h2>
                </div>
            </div>
        </form>
       

    </div>
  )
}

export default contact
