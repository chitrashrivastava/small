import React, { useState } from 'react'
import Card from './Card'

const Foreground = () => {
    
    const data = [
     {desc:"lorem is go in go on to home",
     filesize: ".9mb",
     close:true,
     tag:{isOpen:true,tagTitle:"Download Now",tagColor:"green"},
    },
    {desc:"lorem is go in go on to home",
    filesize: ".9mb",
    close:true,
    tag:{isOpen:true,tagTitle:"Download Now",tagColor:"green"},
   },
   {desc:"lorem is go in go on to home",
   filesize: ".9mb",
   close:true,
   tag:{isOpen:true,tagTitle:"Download Now",tagColor:"green"},
  },
    ]
  return (
    <div className=' fixed z-[3] top-0 left-0  w-full h-full flex gap-10 flex -wrap p-5'>
      {data.map((item,index)=>(
        <Card data={item}/>
      ))}
      </div>

  )
}

export default Foreground