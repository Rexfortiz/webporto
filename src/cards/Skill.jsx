import React from 'react'

const Skill = ({ text,img }) => {
  return (
    <div className='flex flex-col justify-start items-center gap-2'>
      <img src={img} className='fill-white w-8 h-8' />
      <p className='font-comfortaa text-white text-md'>{text}</p>
    </div>
  )
}

export default Skill