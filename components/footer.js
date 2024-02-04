import React from 'react'
import Image from 'next/image'

function Footer() {
  return (
    <div className='h-fit pb-1 flex items-center justify-center gap-5'>
      <div className='flex gap-2 border-r border-black p-5'>
        <p>Challenge by:</p>
        <a className='font-light underline text-blue-600' href="https://www.frontendmentor.io/challenges/news-homepage-H6SWTa1MFl">FrontEndMentor</a>
      </div>
      <div className='flex gap-2'>
        <p>Built by:</p>
        <a className='font-light underline text-blue-600' href="https://github.com/AbdoulayeLat">Abdoulaye Lat Ndiaye</a>
      </div>
    </div>
  )
}

export default Footer