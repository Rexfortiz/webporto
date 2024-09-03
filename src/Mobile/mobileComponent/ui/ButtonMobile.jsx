import { HoverBorderGradient } from "../../../components/ui/HoverBorderGradient"

const ButtonMobile = ({text, link}) => {
  return (
    <a href={link} target='_blank'>
      <button disabled={link == "unavailable"} 
        className={`
          bg-white font-comfortaa px-5 max-md:px-4 rounded-full 
          ${link == "unavailable" ? "py-[18px]" : "py-3 max-md:py-2.5"} 
          text-[16px] font-bold font-comfortaa
          hover:shadow-gray-500 hover:shadow-inner
          `}
          >
        <p className={`${link == "unavailable" && "text-[10px]"}`}>{text}</p>
        <p className='text-[10px]'>{link == "unavailable" && "(Unavailable)"}</p>
      </button>
    </a>
  )
}

export default ButtonMobile