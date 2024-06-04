import React from 'react'
import GradientButton from '../buttons/GradientButton'
import Skill from './Skill'

const WebCardContent = ({ title, desc, skillList }) => {
  return (
    <div className="backdrop-blur-[17.9px] backdrop-filter gradient w-[80%] rounded-lg flex-shrink-0">
      <div className='max-2xl:px-12 px-16 py-9 h-full'>
        <div className='flex flex-col h-full gap-12 justify-between'>
          <div className='flex flex-col gap-5'>
            <p className='font-sans font-bold text-white max-2xl:text-[24px] text-[36px]'>{title}</p>
            <p className='font-comfortaa text-white max-2xl:text-[15px] text-[16px]'>{desc}</p>
          </div>

          <div className='flex flex-col gap-5'>
            <div className='flex gap-5 p-2'>
              {skillList.map((skill, index) => (
                <Skill key={index} text={skill.text} img={skill.img} />
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