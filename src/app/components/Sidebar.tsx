import React from 'react'
import Image from 'next/image'

import {IoBrowsersOutline, IoCalculator, IoLogoReact,  } from 'react-icons/io5'
import { GiSkateboard } from "react-icons/gi";
import { SidebarMenuItem } from './SidebarMenuItem'


const menuItems =[{

    path:'/dashboard/main',
    icon: <IoBrowsersOutline size={40} />,
    title: 'Dshboard',
    subTitle:'Visualixaxion'
},

{
    path:'/dashboard/counter',
    icon: <IoCalculator   size={40} />,
    title: 'counter',
    subTitle:'contador de lado del cliente'
},


]

export const Sidebar = () => {
  return (
    <div id="menu" 
    style={{width:'400px'}}

    className="bg-gray-900 min-h-screen z-10 text-slate-300 w-64  left-0 h-screen overflow-y-scroll">
    <div id="logo" className="my-4 px-6">
     <h1 className=" flex items-center text-lg md:text-2xl font-bold text-white">

     <GiSkateboard size={'30px'}  className="mr-2 pb-1"/>
        Dash<span className="text-blue-500">Sk8</span> Board</h1>
     <p className="text-slate-500 text-sm text-center">Un dashboard de un patineto</p>
    </div>
    <div id="profile" className="px-6 py-10">
     
     <a href="#" className="inline-flex space-x-2 items-center">
         <span>
             <Image className="rounded-full w-8 h-8" src="/uno.jpeg" alt="foto"  width={500} height={400}/>
         </span>
         <span className="text-sm md:text-base font-bold">
          Noisk8
         </span>
         </a>
    </div>


    <div id="nav" className="w-full px-6">

        {

            menuItems.map(item => (

                <SidebarMenuItem 
                
                key= {item.path} {...item}/>
            ))
        }

  

 
     
    </div>
 </div>
  )
}
