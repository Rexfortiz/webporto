import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { useScroll } from "@react-three/drei";
import { div } from "three/examples/jsm/nodes/Nodes.js";

gsap.registerPlugin(ScrollTrigger);

const WebOverlay = (props) => {

  const scroll = useScroll();
  const tl = useRef();

  const div1 = useRef()
  const div2 = useRef()
  const div3 = useRef()
  const div4 = useRef()
  const div5 = useRef()
  const div6 = useRef()
  const tess = useRef()

  // gsap.set(div1.current, {
  //   y:0,
  //   ease: "power1.inOut"
  // })
  // gsap.set(div2.current, {
  //   y:0,
  //   ease: "power1.inOut"
  // })

  // gsap.timeline({
  //   scrollTrigger:{
  //     trigger: div2.current,
  //     start: "top center",
  //     end: "top top",
  //   }
  // })
  // .to(div1.current, {
  //   x:0
  // })
  // .to(div2.current, {
  //   x:200
  // })
  // .to(tess.current, {
  //   scrollLeft: 25
  // })

  useFrame(() => {
    if (scroll.offset * tl.current.duration() > 0.01) { // Adjust the threshold as needed
      tl.current.seek(scroll.offset * tl.current.duration());
      console.log(scroll.offset * tl.current.duration());
    }
  })

  useLayoutEffect(()=> {
    tl.current = gsap.timeline();

    tl.current.to(
      div2.current , {
        y:0,
        duration:0.1
      },
      0
    )
    tl.current.to(
      div3.current , {
        y:0,
        duration:0.1
      },
      0
    )
    tl.current.to(
      div4.current , {
        y:0,
        duration:0.1
      },
      0
    )
    tl.current.to(
      div5.current , {
        y:0,
        duration:0.1
      },
      0
    )
    tl.current.to(
      div6.current , {
        y:0,
        duration:0.1
      },
      0
    )


    tl.current.to(
      div2.current , {
        y:-200,
        duration:0.15
      },
      1.06
    )
    tl.current.to(
      div3.current , {
        y:-500,
        duration:0.12
      },
      1.24
    )
    tl.current.to(
      div4.current , {
        y:-1000,
        duration:0.12
      },
      1.5
    )
    tl.current.to(
      div5.current , {
        y:-1250,
        duration:0.12
      },
      1.68
    )
    tl.current.to(
      div6.current , {
        y:-1550,
        duration:0.1
      },
      1.8
    )

    //benerin jarak dan waktu wkt animasi. durasi sama scroll offset

    tl.current.to(
      div1.current , {
        x:0,
        duration:0.3
      },
      3
    )
  })

  
  return (
    <section
  className={`h-[200vh] relative flex flex-col justify-center border border-red-500 items-end`}
  style={{
    opacity: props.opacity,
  }}
>
  <div className="h-full w-1/2 flex justify-center">
    <div ref={tess} className="h-full overflow-visible border px-8 pt-52 flex flex-col items-center gap-5 w-full">
      <div ref={div1} className="w-full h-[60vh] border shadow-2xl bg-white rounded-lg flex-shrink-0" />
      <div ref={div2} className="w-full h-[60vh] border shadow-2xl bg-white rounded-lg flex-shrink-0" />
      <div ref={div3} className="w-full h-[60vh] border shadow-2xl bg-white rounded-lg flex-shrink-0" />
      <div ref={div4} className="w-full h-[60vh] border shadow-2xl bg-white rounded-lg flex-shrink-0" />
      <div ref={div5} className="w-full h-[60vh] border shadow-2xl bg-white rounded-lg flex-shrink-0" />
      <div ref={div6} className="w-full h-[60vh] border shadow-2xl bg-white rounded-lg flex-shrink-0" />
    </div>
  </div>
</section>
  );
};

export default WebOverlay;
