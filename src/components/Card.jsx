import React from 'react'
import { FaFileAlt } from "react-icons/fa";
import { MdFileDownload } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import { motion } from "framer-motion"



const Card = ({data}) => {
  return (
    < motion.div drag className='relative flex-shrink-0 overflow-hidden w-60 h-72 rounded-[30px] bg-zinc-600 text-white px-5 py-10'>
        <FaFileAlt/>
        <p className='text-xs mt-5 font-semibold leading-tight'>{data.desc}</p>
        <div className='footer absolute bottom-0  w-full h-20 left-0  '>
            <div className='flex items-center justify-between px-8 py-3 mb-5'>
                <h5>{data.filesize}</h5>
                <span className='w-5 h-5 bg-white-200 rounded-full flex items-center justify-center'>
                    {data.close ? <IoMdClose/> :  <MdFileDownload size=".8em"/>}
               
                </span>
            </div>
            {data.tag.isOpen && (
               <div className={`tag w-full h-36 py-6 bg-green-600 flex items-center justify-center`}>
            <h3 className='text-2xl '>Download Now</h3>
                </div>
            ) }
            
        </div>
        
    </motion.div>
    
  )
}

export default Card;