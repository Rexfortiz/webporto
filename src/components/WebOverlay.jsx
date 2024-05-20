import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const WebOverlay = (props) => {

  const div1 = useRef()
  const div2 = useRef()
  const div3 = useRef()
  const div4 = useRef()
  const div5 = useRef()
  const div6 = useRef()

  gsap.set(div2.current, {
    y:0,
    ease: "power1.in",
    
  })
  gsap.set(div3.current, {
    y:-200,
    ease: "power1.inOut"
  })
  // gsap.set(div4.current, {
  //   y:-400,
  //   ease: "power1.inOut"
  // })
  // gsap.set(div5.current, {
  //   y:-600,
  //   ease: "power1.inOut"
  // })
  // gsap.set(div6.current, {
  //   y:-800,
  //   ease: "power1.inOut"
  // })

  useLayoutEffect(()=> {

    gsap.timeline({
      scrollTrigger:{
        trigger: div1.current,
        start: "center center",
        end: "bottom top",
        scrub:true,
        ease: "none",
      }
    })
    .to(div2.current, {
      y:-200,
    })
    .to(div3.current, {
      y:-200,
    })
    .to(div4.current, {
      y:-200,
    })
    .to(div5.current, {
      y:-200,
    })
    .to(div6.current, {
      y:-200,
    })

    gsap.timeline({
      scrollTrigger:{
        trigger: div2.current,
        start: "center center",
        end: "bottom top",
        scrub:true,
        ease: "none"
      }
    })
    .to(div3.current, {
      y:-400
    })
    .to(div4.current, {
      y:-400,
    })
    .to(div5.current, {
      y:-400,
    })
    .to(div6.current, {
      y:-400,
    })

    gsap.timeline({
      scrollTrigger:{
        trigger: div3.current,
        start: "center center",
        end: "bottom top",
        scrub:true,
      }
    })
    .to(div4.current, {
      y:-600
    })
    .to(div5.current, {
      y:-600,
    })
    .to(div6.current, {
      y:-600,
    })

    gsap.timeline({
      scrollTrigger:{
        trigger: div4.current,
        start: "top center",
        end: "bottom top",
        scrub:true,
      }
    })
    .to(div5.current, {
      y:-800
    })
    .to(div6.current, {
      y:-800
    })

    gsap.timeline({
      scrollTrigger:{
        trigger: div5.current,
        start: "top center",
        end: "bottom top",
        scrub:true,
      }
    })
    .to(div6.current, {
      y:-1000
    })
  })

  
  return (
    <section
  className={`h-[330vh] relative flex flex-col justify-center border border-red-500 items-end`}
  style={{
    opacity: props.opacity,
  }}
>
  <div className="h-full w-1/2 flex justify-center">
    <div className="h-full overflow-visible border px-8 pt-52 flex flex-col items-center gap-5 w-full">
      <div ref={div1} className="w-full h-[60vh] border shadow-2xl bg-white rounded-lg flex-shrink-0">
        div 1
      </div>
      <div ref={div2} className="w-full h-[60vh] border shadow-2xl bg-white rounded-lg flex-shrink-0">
        div 2
      </div>
      <div ref={div3} className="w-full h-[60vh] border shadow-2xl bg-white rounded-lg flex-shrink-0">
        div 3
      </div>
      <div ref={div4} className="w-full h-[60vh] border shadow-2xl bg-white rounded-lg flex-shrink-0">
        div 4
      </div>
      <div ref={div5} className="w-full h-[60vh] border shadow-2xl bg-white rounded-lg flex-shrink-0">
        div 5
      </div>
      <div ref={div6} className="w-full h-[60vh] border shadow-2xl bg-white rounded-lg flex-shrink-0">
        div 6
      </div>
    </div>
  </div>
</section>
  );
};

export default WebOverlay;
