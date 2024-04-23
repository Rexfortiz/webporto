

const TechStack = () => {
  return (
    <section 
      className='z-0 h-screen flex flex-col justify-center items-center'
    >
      <div 
        className="border border-white bg-base max-2xl:shadow-section_lg max-2xl:shadow-base shadow-section
        shadow-base w-screen h-full flex justify-center"
      >
        <div className="mt-10 relative justify-center items-center">
          <img src="/images/photo.png" className="absolute z-[2]" />
          <h2 className="tech-text flex z-[1] justify-center items-center text-[120px] font-black">TECH STACK</h2>
          <h2 className="tech-text top-[-180px] relative z-[3] justify-center items-center text-[120px] text-transparent font-black">TECH STACK</h2>
          <div className="w-full gap-5 overflow-hidden overflow-x-scroll h-36 absolute z-[3] flex items-center justify-start border">
            <div className="bg-red-400 w-20 h-20">
              <p>123454653</p>
            </div>
            <div className="bg-red-400 w-20 h-20">
              <p>123454653</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TechStack