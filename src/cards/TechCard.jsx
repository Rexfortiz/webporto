import React from 'react'

const TechCard = ({ name, img } ) => {
  return (
    <div className="bg-base-2 gradient-btn gap-4 min-w-40 w-40 h-40 max-2xl:min-w-32 max-2xl:w-32 max-2xl:h-32 rounded-2xl flex flex-col justify-center items-center">
      <img src={img} width={50} className='max-2xl:w-[30px]' />
      <p className='font-comfortaa text-[18px] text-base_light-2 font-bold'>{name}</p>
    </div>
  )
}

export default TechCard