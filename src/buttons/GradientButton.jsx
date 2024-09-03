

const GradientButton = ({text, link}) => {
  return (
    <a href={link} target='_blank'>
      <button disabled={link == "unavailable"} className={`gradient-btn shadow-sm shadow-white px-8 ${link == "unavailable" ? "py-[18px]" : "py-5"} text-white text-[16px] font-bold font-comfortaa`}>
        <p className={`${link == "unavailable" && "text-[10px]"}`}>{text}</p>
        <p className='text-[10px]'>{link == "unavailable" && "(Unavailable)"}</p>
      </button>
    </a>
  )
}

export default GradientButton