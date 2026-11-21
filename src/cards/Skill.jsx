import React from 'react'

// responsive={false} for the 3D desktop overlay: it's a fixed-size layout that
// gets scaled as a whole, so screen-width breakpoints would shift it.
const Skill = ({ text, img, responsive = true }) => {
  return (
    <div className='flex flex-col justify-start items-center gap-2 '>
      <img src={img} className={`fill-white w-8 h-8 ${responsive ? 'max-sm:h-6 max-sm:w-6' : ''}`} />
      <p className={`font-comfortaa text-white ${responsive ? 'max-2xl:text-[14px] max-md:text-[13px] max-sm:text-[11px]' : ''}`}>{text}</p>
    </div>
  )
}

export default Skill