import React from 'react'

const TechCard = ({ img, name }) => {
  return (
    <div className='gradient-btn-mobile flex flex-col gap-3 max-sm:rounded-lg justify-center items-center rounded-lg'>
      <img src={img} className='w-[46px] max-sm:w-[38px]' />
      <p className='text-white font-comfortaa text-[14px]'>{name}</p>
    </div>
  )
}

export default TechCard