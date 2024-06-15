import React from 'react'

const WaveComp1 = ({ forwardedRef }) => {
  return (
    <svg
    ref={forwardedRef}
    className='absolute w-full z-[1] h-[1400px]'
      width="100%"
      height="100%"
      viewBox="0 0 500 1000"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
      overflow="auto"
      shapeRendering="auto"
      fill="#ffffff"
      style={{ transform: 'rotate(180deg)' }} // Rotate the SVG by 180 degrees to make it upside down
    >
      <defs>
        <path
          id="wavepath"
          d="M 0 2000 0 500 Q 150 445 300 500 t 300 0 300 0 300 0 300 0 300 0  v1000 z"
        />
        <path id="motionpath" d="M -600 0 0 0" /> 
      </defs>
      <g>
        <use xlinkHref="#wavepath" y="250" fill="#161616">
          <animateMotion dur="5s" repeatCount="indefinite">
            <mpath xlinkHref="#motionpath" />
          </animateMotion>
        </use>
      </g>
    </svg>
  )
}

export default WaveComp1