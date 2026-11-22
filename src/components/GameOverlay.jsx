import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";
import { gamePortoContent, webPortoContent } from "../constants";
import GameCardContent from "../cards/GameCardContent";
import { GAME_CARD_CENTER } from "../constants/scroll";
import PinnedCard from "./PinnedCard";

gsap.registerPlugin(ScrollTrigger);

const GameOverlay = (props) => {

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
  
  // console.log(refs)
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
    // Pinned on screen (inside ContentOverlay's pinned layer): each card shows
    // level with its 3D card while that card faces the camera.
    <section
      className="absolute inset-0 flex justify-start"
      style={{
        opacity: props.opacity,
      }}
    >
      <div className="relative w-1/2 h-full">
        {gamePortoContent.map((content, index) => (
          <PinnedCard key={content.name} index={index} active={props.active} centre={GAME_CARD_CENTER} className="left-[120px] right-8">
            <GameCardContent ref={refs[index]} title={content.name} desc={content.desc} jobdesk={content.jobdesk} trailer={content.trailer} play={content.playUrl} />
          </PinnedCard>
        ))}
      </div>
    </section>
  );
};

export default GameOverlay;
