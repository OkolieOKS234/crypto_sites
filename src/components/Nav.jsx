import React, {useState} from 'react'
import LogoImage from "../assets/Logo.png"
import { HashLink as Link } from 'react-router-hash-link';


function Nav() {
// Links
let Links =[
    {key: 1,name:"Home",link:"#"},
    {key: 2,name:"Faucets",link:"#footer"},
    {key:3, name:"Gigs",link:"#section"},  
    {key:4, name:"Payment Proofs",link:"#section"},  
  ];


let [open, setOpen] = useState(false);

  return (
    <div className='shadow-sm w-full  top-0 left-0 '>
    <div className='  bg-[#0D0D2B] md:flex items-center justify-between  py-4 md:px-2 px-7'>
    <div className='font-bold bg-[#0D0D2B]  cursor-pointer flex items-center font-[Poppins] 
    text-gray-800'>
      <div className=' mr-1 p-0 m-0 '>
      <img src={LogoImage} alt="Maro_logo" className='sm:ml-2 md:w-36 sm:w-56 lg:w-full md:ml-2 lg:ml-16'/>
      </div>
     
    </div>
    
    <div onClick={()=>setOpen(!open)} className=' text-3xl absolute right-8 top-6 cursor-pointer md:hidden text-white'>
    <ion-icon name={open ? 'close':'menu'}></ion-icon>
    </div>
    <ul className={`navbar_big bg-[#0D0D2B] cursor-pointer md:flex md:items-center md:pb-0 pb-1 absolute md:static  z-[2] left-0 w-full  md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 ':'top-[-490px]'}`}>
        {
          Links.map((link)=>(
            
            <ul key={link.key} to={link.link} className=' cursor-pointer md:ml-8 text-xl md:my-0 my-7 text-white' smooth >
              <li className='text-white  hover:text-gray-400 duration-500 cursor-pointer'>{link.name}</li>
            </ul>
          ))
        }
        
      </ul>
      </div>
    </div>


  )
}

export default Nav