import React from 'react'

const Skill = ({ text,img }) => {
  return (
    <div className='flex flex-col justify-start items-center gap-2 '>
      <img src={img} className='fill-white w-8 h-8 max-sm:h-10 max-sm:w-10' />
      <p className='font-comfortaa text-white max-2xl:text-[14px] max-sm:text-[16px] '>{text}</p>
    </div>
  )
}

export default Skill