import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";
import { webPortoContent } from "../constants";
import WebCardContent from "../cards/WebCardContent";

gsap.registerPlugin(ScrollTrigger);

const WebOverlay = (props) => {

  const refs = useRef(webPortoContent.map(() => useRef(null)));

  if(refs.current[0].current){
    gsap.set(refs.current[1].current, {
      y:0,
      ease: "power1.in",
    })
    gsap.set(refs.current[2].current, {
      y:-200,
      ease: "power1.inOut"
    })
  }
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
  
  console.log(refs)
  useLayoutEffect(()=> {

  //   gsap.timeline({
  //     scrollTrigger:{
  //       trigger: div0.current,
  //       start: "center center",
  //       end: "bottom top",
  //       scrub:true,
  //       ease: "none",
  //     }
  //   })
  //   .to(div1.current, {
  //     y:-200,
  //   })
  //   .to(div2.current, {
  //     y:-200,
  //   })
  //   .to(div3.current, {
  //     y:-200,
  //   })
  //   .to(div4.current, {
  //     y:-200,
  //   })
  //   .to(div5.current, {
  //     y:-200,
  //   })

  //   gsap.timeline({
  //     scrollTrigger:{
  //       trigger: div1.current,
  //       start: "center center",
  //       end: "bottom top",
  //       scrub:true,
  //       ease: "none"
  //     }
  //   })
  //   .to(div2.current, {
  //     y:-400
  //   })
  //   .to(div3.current, {
  //     y:-400,
  //   })
  //   .to(div4.current, {
  //     y:-400,
  //   })
  //   .to(div5.current, {
  //     y:-400,
  //   })

  //   gsap.timeline({
  //     scrollTrigger:{
  //       trigger: div2.current,
  //       start: "center center",
  //       end: "bottom top",
  //       scrub:true,
  //     }
  //   })
  //   .to(div3.current, {
  //     y:-600
  //   })
  //   .to(div4.current, {
  //     y:-600,
  //   })
  //   .to(div5.current, {
  //     y:-600,
  //   })

  //   gsap.timeline({
  //     scrollTrigger:{
  //       trigger: div3.current,
  //       start: "top center",
  //       end: "bottom top",
  //       scrub:true,
  //     }
  //   })
  //   .to(div4.current, {
  //     y:-800
  //   })
  //   .to(div5.current, {
  //     y:-800
  //   })

  //   gsap.timeline({
  //     scrollTrigger:{
  //       trigger: div4.current,
  //       start: "top center",
  //       end: "bottom top",
  //       scrub:true,
  //     }
  //   })
  //   .to(div5.current, {
  //     y:-1000
  //   })
  })

  
  return (
    <section
      className={`h-[330vh] relative flex flex-col justify-center border border-red-500 items-end`}
      style={{
        opacity: props.opacity,
      }}
    >
      <div className="h-full w-1/2 flex justify-center">
        <div className="h-full border px-8 pt-52 flex flex-col items-center gap-5 w-full">
          {webPortoContent.map((content, index) => (
            <WebCardContent ref={refs[index]} key={content.name} title={content.name} desc={content.desc} skillList={content.skill} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WebOverlay;
