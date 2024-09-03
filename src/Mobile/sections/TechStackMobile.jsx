import { InfiniteMovingCards } from '../../components/ui/infinite-moving-cards'

const TechStackMobile = () => {

  return (
    <section id='tech-mobile' className='w-full flex flex-col gap-5 items-center py-10'>
      <h1 className='text-white font-sans font-black text-[100px] max-lg:text-[80px] max-sm:text-[50px]'>TECH STACK</h1>
      <div className='flex flex-col gap-10 max-md:gap-5'>
        <InfiniteMovingCards direction='right' />
        <InfiniteMovingCards direction='left' />
      </div>
      {/* <div className='text-white w-[600px] bg-black h-[600px] max-sm:w-[402px] max-sm:h-[402px] rounded-3xl'>
        <div className='p-10 max-sm:p-7 h-full'>
          <div className='grid grid-cols-3 h-full gap-9 max-sm:gap-4'>
            
            {techStack.map((card,index) => (
              <TechCard key={index} img={card.img} name={card.name} />
            ))}
          </div>
        </div>
      </div> */}
    </section>
  )
}

export default TechStackMobile