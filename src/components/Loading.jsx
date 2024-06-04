import React from 'react'
import { Html } from "@react-three/drei";

const Loading = () => {
  return (
    <>
      <Html>
        <div className='flex flex-col gap-5 justify-center items-center'>
          <div className='loader' />
          <div className='text-white'>
            LOADING
          </div>
        </div>
      </Html>
    </>
  )
}

export default Loading