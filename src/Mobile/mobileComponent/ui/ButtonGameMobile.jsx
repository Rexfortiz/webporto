
const ButtonGameMobile = ({text, link}) => {
  return (
    <a href={link} target='_blank'>
      
    <button disabled={link == "unavailable"} 
      className={` flex justify-center items-center gap-2
        bg-white font-comfortaa px-5 max-md:px-4 rounded-full 
        ${link == "unavailable" ? "py-3 max-md:py-2.5 text-gray-400" : "py-3 max-md:py-2.5 hover:shadow-gray-500 hover:shadow-inner"} 
        text-[16px] font-bold font-comfortaa
        
      `}
    >
      <img src={`${text == "Trailer" ? "./icons/film-solid.svg" : "./icons/play-solid.svg"}`} width={text == "Trailer" ? 18 : 12} />
      <p >
        {text}
      </p>
      <p className='text-[10px]'>{link == "unavailable" && "(Unavailable)"}</p>
    </button>
  </a>
  )
}

export default ButtonGameMobile