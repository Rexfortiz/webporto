import React from 'react'
import GradientButton from '../buttons/GradientButton'
import Skill from './Skill'

// Inside of a web portfolio card (desktop overlay). The glass card around it,
// its fixed width and its fade come from PinnedCard.
const WebCardContent = ({ title, desc, skillList }) => {
  return (
    <div className='px-16 py-11 h-full'>
      <div className='flex flex-col h-full gap-12 justify-between'>
        <div className='flex flex-col gap-6'>
          <p className='font-sans font-bold text-white text-[48px] leading-tight'>{title}</p>
          <p className='font-comfortaa text-white text-[22px] leading-relaxed'>{desc}</p>
        </div>

        <div className='flex flex-col gap-6'>
          <div className='flex gap-7 p-2'>
            {skillList.map((skill, index) => (
              <Skill key={index} text={skill.text} img={skill.img} responsive={false} large />
            ))}
          </div>
          <div className='flex gap-5'>
            <GradientButton text={"Live Demo"} large />
            <GradientButton text={"Github"} large />
          </div>
        </div>
      </div>
    </div>
  )
}

export default WebCardContent
