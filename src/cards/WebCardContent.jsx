import React from 'react'
import GradientButton from '../buttons/GradientButton'
import Skill from './Skill'

const WebCardContent = ({ title, desc, tech, skillList }) => {
  return (
    <div className="backdrop-blur-[17.9px] backdrop-filter gradient w-[80%] h-[50vh] rounded-lg flex-shrink-0">
      <div className='px-16 py-9 h-full'>
        <div className='flex flex-col h-full justify-between'>
          <div className='flex flex-col gap-5'>
            <p className='font-sans font-bold text-white text-[36px]'>{title}</p>
            <p className='font-comfortaa text-white text-md'>{desc}</p>
          </div>

          <div className='flex flex-col gap-5'>
            <div className='flex gap-5 p-2'>
              {skillList.map((skill) => (
                <Skill text={skill.text} img={skill.img} />
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