"use client"
import React from 'react'
import {motion} from 'framer-motion'

function Navbar() {
  return (
    <motion.div className='flex justify-between h-[10vh] mb-2 items-center'>
        <motion.img src='/images/logo.svg' className='h-fit'/>
        <motion.div className='flex gap-5 items-center '>
            <motion.p whileHover={{color:'hsl(35, 77%, 62%)'}} className='text-text cursor-pointer'>Home</motion.p>
            <motion.p whileHover={{color:'hsl(35, 77%, 62%)'}} className='text-text cursor-pointer'>New</motion.p>
            <motion.p whileHover={{color:'hsl(35, 77%, 62%)'}} className='text-text cursor-pointer'>Popular</motion.p>
            <motion.p whileHover={{color:'hsl(35, 77%, 62%)'}} className='text-text cursor-pointer'>Trending</motion.p>
            <motion.p whileHover={{color:'hsl(35, 77%, 62%)'}} className='text-text cursor-pointer'>Categories</motion.p>
        </motion.div>
    </motion.div>
  )
}

export default Navbar