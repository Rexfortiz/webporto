import { Scroll, useScroll } from "@react-three/drei"
import { useFrame, useThree } from "@react-three/fiber";
import { useState, useLayoutEffect, useRef, useEffect } from "react";
import IntroductionOverlay from "./IntroductionOverlay";
import TechStack from "./TechStack";

import gsap from "gsap";
import WebOverlay from "./WebOverlay";
import GameOverlay from "./GameOverlay";
import ContactMe from "./ContactMe";

const Section = (props) => {
  return(
    <section 
      className={`h-screen flex flex-col justify-center ${props.center && "items-center"} ${props.right && "items-end"} ${props.left && "items-start"} p-10`}
      style={{
        opacity: props.opacity
      }}
    >
      <div className="w-1/2 flex items-center justify-center">
        <div className="max-w-sm w-full">
          <div className="bg-white rounded-lg px-8 py-12">
            {props.children}
          </div>
        </div>
      </div>
    </section>
  )
}

// Viewport height this layout was designed and tuned at (2560x1280: a
// 1920x1080 monitor at 75% browser zoom). All px values in the overlay
// assume it. If things drift, set this to `innerHeight` from your console
// at the zoom level where everything lines up.
const DESIGN_HEIGHT = 1280;

const ContentOverlay = () => {

  // The 3D scene scales with the canvas height (fixed vertical FOV) and drei
  // scrolls this HTML by `height * (pages - 1) * offset`. Scaling the HTML by
  // the same height keeps every section at the same scroll offset as its 3D
  // keyframe on any screen, like browser zoom did at 75%.
  const { width, height } = useThree((state) => state.size);
  const scale = height / DESIGN_HEIGHT;

  const scroll = useScroll();
  const tl = useScroll();
  const techRef = useRef(null);
  const wrapperRef = useRef(null);
  const stageRef = useRef(null);
  const positionedForHeight = useRef(null);

  // drei only repositions <Scroll html> when the scroll offset changes, so after
  // a resize (window, fullscreen, browser zoom) the HTML would stay at the old
  // height's position until the next scroll. Re-apply drei's formula once per
  // size change. (Checked per frame because drei renders this HTML in its own
  // React root, so the element may not exist yet when an effect would run.)
  useFrame(() => {
    const dreiScrollDiv = stageRef.current?.parentElement;
    if (!dreiScrollDiv || positionedForHeight.current === height) return;
    dreiScrollDiv.style.transform =
      `translate3d(0px, ${-height * (scroll.pages - 1) * scroll.offset}px, 0px)`;
    positionedForHeight.current = height;
  });

  const [opacityFirstSection, setOpacityFirstSection] = useState(1)
  const [opacitySecondSection, setOpacitySecondSection] = useState(1)
  const [opacityLastSection, setOpacityLastSection] = useState(1)

  useFrame(() => {
    setOpacityFirstSection(1 - scroll.range(0, 1 / 3));
    setOpacitySecondSection(scroll.curve(1 / 7, 3/ 7));
    setOpacityLastSection(scroll.range(2 / 3, 1 / 3))
    // console.log(scroll.offset)
    // tl.current.seek(scroll.offset * tl.current.duration())
    
  })

  return (
    <Scroll html>
      <div
        ref={stageRef}
        style={{
          // Lay out at design height; fill the real screen width once scaled.
          width: width / scale,
          // Use instead of vh inside the overlay (vh would ignore the scale).
          "--screen-h": `${DESIGN_HEIGHT}px`,
          transform: `scale(${scale})`,
          transformOrigin: "top left",
        }}
      >
        <IntroductionOverlay opacity={opacityFirstSection} />
        <TechStack tl={tl} techRef={techRef} wrapperRef={wrapperRef} />
        <div className="flex justify-center mt-[50px]">
          <h1 className="text-white font-bold font-sans text-[140px]">Web Portofolio</h1>
        </div>
        <WebOverlay opacity={1} />
        <div className={`flex justify-center mt-72 margin-sec`}>
          <h1 className="text-white font-bold font-sans text-[140px]">Game Portofolio</h1>
        </div>
        <GameOverlay opacity={1} />
        <ContactMe />
      </div>
    </Scroll>
  )
}

export default ContentOverlay;