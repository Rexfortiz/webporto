import React from 'react'

const IntroductionOverlay = ( props ) => {
  return (
    <section 
      className='h-screen flex flex-col justify-end items-center p-10'
      style={{
        opacity: props.opacity
      }}
    >
      <div className="z-10 flex items-center justify-center">
        <div className="max-w-xl  w-full mb-52 p-2">
          <p className='text-[36px] font-normal font-comfortaa text-center text-white'>
            I'm a <span className='font-bold'>game developer</span>
            <br />
            &  <span className='font-bold'> self-taught front end web developer.</span>
          </p>
        </div>
      </div>
    </section>
  )
}

export default IntroductionOverlay