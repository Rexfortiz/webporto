import React from 'react'
import GradientButton from '../buttons/GradientButton'
import Skill from './Skill'

const WebCardContent = ({ title, desc, skillList }) => {
  // Fixed width (what w-[80%] measured at the 2560px design) so text wraps
  // the same on every screen shape; capped to the column on narrow screens.
  return (
    <div className="backdrop-blur-[17.9px] backdrop-filter gradient w-[972.8px] max-w-full rounded-lg flex-shrink-0">
      <div className='px-16 py-9 h-full'>
        <div className='flex flex-col h-full gap-12 justify-between'>
          <div className='flex flex-col gap-5'>
            <p className='font-sans font-bold text-white text-[36px]'>{title}</p>
            <p className='font-comfortaa text-white text-[16px]'>{desc}</p>
          </div>

          <div className='flex flex-col gap-5'>
            <div className='flex gap-5 p-2'>
              {skillList.map((skill, index) => (
                <Skill key={index} text={skill.text} img={skill.img} responsive={false} />
              ))}
            </div>
            <div className='flex gap-5'>
              <GradientButton text={"Live Demo"} />
              <GradientButton text={"Github"} />
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default WebCardContent