import React from 'react'
import GradientButton from '../buttons/GradientButton'
import Skill from './Skill'

const GameCardContent = ({ title, desc, jobdesk, trailer, play, }) => {
  return (
    <div className="backdrop-blur-[17.9px] backdrop-filter gradient w-[80%] rounded-lg flex-shrink-0">
      <div className='px-16 py-9 h-full'>
        <div className='flex flex-col h-full gap-5 justify-between'>
          <div className='flex flex-col gap-5 font-medium'>
            <p className='font-sans font-bold text-white max-2xl:text-[24px] text-[36px]'>{title}</p>
            <p className='font-comfortaa text-white max-2xl:text-[15px] text-[16px]'>{desc}</p>
          </div>

          <div className='flex flex-col gap-5'>
            <div className='flex flex-col gap-2 font-medium'>
              <p className='text-white text-[20px] max-2xl:text-[18px]'>What i did:</p>
              <p className='text-white text-[18px] max-2xl:text-[16px]'>{jobdesk}</p>
            </div>
            <div className='flex gap-5'>
              <GradientButton text={"Trailer"} link={trailer} />
              <GradientButton text={"Play"} link={play} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GameCardContent