import React from 'react'

const LayeredText = ({ text, classNameProps }) => {
  return (
    <h1 className={`layered-text ${classNameProps}`} data-text={text}>{text}</h1>
  )
}

export default LayeredText