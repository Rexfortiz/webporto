import React, { useRef } from 'react'
import Hero from './sections/Hero'
import TechStackMobile from './sections/TechStackMobile'
import WebPorto from './sections/WebPorto'
import GamePorto from './sections/GamePorto'
import ContactMobile from './sections/ContactMobile'
import Reminder from './sections/Reminder'


const MobileApp = () => {

  return (
    <>
      <div className='main'>
          <div className='gradient-mobile'/>
      </div>

      <div className='app overflow-hidden'>
          <Hero />
          <Reminder />
          <TechStackMobile />
          <WebPorto />
          <GamePorto />
          <ContactMobile />
      </div>
    </>
  )
}

export default MobileApp