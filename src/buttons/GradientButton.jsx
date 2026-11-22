

// large: bigger text and padding (desktop overlay cards).
const GradientButton = ({text, link, large = false}) => {
  const unavailable = link == "unavailable"
  return (
    <a href={link} target='_blank'>
      <button disabled={unavailable} className={`gradient-btn shadow-sm shadow-white ${large ? 'px-11' : 'px-8'} ${unavailable ? (large ? "py-[22px]" : "py-[18px]") : (large ? "py-6" : "py-5")} text-white ${large ? 'text-[21px]' : 'text-[16px]'} font-bold font-comfortaa`}>
        <p className={`${unavailable && (large ? "text-[14px]" : "text-[10px]")}`}>{text}</p>
        <p className={large ? 'text-[14px]' : 'text-[10px]'}>{unavailable && "(Unavailable)"}</p>
      </button>
    </a>
  )
}

export default GradientButton
