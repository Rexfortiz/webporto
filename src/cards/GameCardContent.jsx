import React from 'react'
import GradientButton from '../buttons/GradientButton'

// Inside of a game portfolio card (desktop overlay). The glass card around it,
// its fixed width and its fade come from PinnedCard.
const GameCardContent = ({ title, desc, jobdesk, trailer, play, }) => {
  return (
    <div className='px-16 py-11 h-full'>
      <div className='flex flex-col h-full gap-7 justify-between'>
        <div className='flex flex-col gap-6 font-medium'>
          <p className='font-sans font-bold text-white text-[48px] leading-tight'>{title}</p>
          <p className='font-comfortaa text-white text-[22px] leading-relaxed'>{desc}</p>
        </div>

        <div className='flex flex-col gap-7'>
          <div className='flex flex-col gap-2 font-medium'>
            <p className='text-white text-[27px]'>What i did:</p>
            <p className='text-white text-[24px]'>{jobdesk}</p>
          </div>
          <div className='flex gap-5'>
            <GradientButton text={"Trailer"} link={trailer} large />
            <GradientButton text={"Play"} link={play} large />
          </div>
        </div>
      </div>
    </div>
  )
}

export default GameCardContent
