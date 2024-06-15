import React from 'react'

const WaveComp2 = ({ forwardedRef }) => {
  return (
    
    <svg
    ref={forwardedRef}
    className='top-[-270px] absolute w-full z-[2] h-[620px]'
    width="100%"
    height="100%"
    viewBox="0 0 800 1000"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="none"
    overflow="auto"
    shapeRendering="auto"
    fill="#ffffff"
    style={{ transform: 'rotateX(180deg)' }} // Flip the SVG upside down
  >
    <defs>
      <path
        id="wavepath"
        d="M 0 2000 0 500 Q 150 403 300 500 t 300 0 300 0 300 0 300 0 300 0  v1000 z"
      />
      <path id="motionpath" d="M -600 0 0 0" /> 
    </defs>
    <g>
      <use xlinkHref="#wavepath" y="-269" fill="#202020">
        <animateMotion dur="5s" repeatCount="indefinite">
          <mpath xlinkHref="#motionpath" />
        </animateMotion>
      </use>
    </g>
  </svg>
  )
}

export default WaveComp2