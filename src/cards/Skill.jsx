import React from 'react'

const Skill = ({ text,img }) => {
  return (
    <div className='flex flex-col justify-start items-center gap-2 '>
      <img src={img} className='fill-white w-8 h-8 max-sm:h-6 max-sm:w-6' />
      <p className='font-comfortaa text-white max-2xl:text-[14px] max-md:text-[13px] max-sm:text-[11px]'>{text}</p>
    </div>
  )
}

export default Skill