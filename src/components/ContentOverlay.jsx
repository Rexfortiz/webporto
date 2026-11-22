import { Scroll, useScroll } from "@react-three/drei"
import { useFrame, useThree } from "@react-three/fiber";
import { useState, useLayoutEffect, useRef, useEffect } from "react";
import IntroductionOverlay from "./IntroductionOverlay";
import TechStack from "./TechStack";

import gsap from "gsap";
import WebOverlay from "./WebOverlay";
import GameOverlay from "./GameOverlay";
import ContactMe from "./ContactMe";
import {
  CONTACT_SCALE, CONTACT_TOP, DESIGN_HEIGHT, GAME_CARD_WINDOWS, GAME_TITLE_TOP, HTML_ZOOM, WEB_CARD_WINDOWS,
  WEB_TITLE_TOP, cardAt, offsetToSeconds, offsetToY, tunedOffset,
} from "../constants/scroll";

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

const ContentOverlay = () => {

  // The 3D scene scales with the canvas height (fixed vertical FOV), so the
  // HTML is scaled by the height too. See constants/scroll.js for how this and
  // SCROLL_PAGES keep each section in sync with its 3D keyframe.
  const { width, height } = useThree((state) => state.size);
  const scale = (HTML_ZOOM * height) / DESIGN_HEIGHT;

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

  // Cards pinned to their 3D cards: a one-screen layer that cancels out the
  // scroll (drei moves this HTML up by the scrolled amount), plus which web and
  // game card faces the camera right now.
  const pinnedRef = useRef(null);
  const [activeWeb, setActiveWeb] = useState(-1);
  const [activeGame, setActiveGame] = useState(-1);

  useFrame(() => {
    if (pinnedRef.current) {
      pinnedRef.current.style.transform = `translate3d(0px, ${offsetToY(scroll.offset)}px, 0px)`;
    }
    const seconds = offsetToSeconds(scroll.offset);
    setActiveWeb(cardAt(WEB_CARD_WINDOWS, seconds));
    setActiveGame(cardAt(GAME_CARD_WINDOWS, seconds));
  });

  useFrame(() => {
    setOpacityFirstSection(1 - scroll.range(0, tunedOffset(1 / 3)));
    setOpacitySecondSection(scroll.curve(tunedOffset(1 / 7), tunedOffset(4 / 7) - tunedOffset(1 / 7)));
    setOpacityLastSection(scroll.range(tunedOffset(2 / 3), tunedOffset(1) - tunedOffset(2 / 3)))
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
          // One screen in design px. Use instead of vh (vh ignores the scale).
          "--screen-h": `${DESIGN_HEIGHT / HTML_ZOOM}px`,
          transform: `scale(${scale})`,
          transformOrigin: "top left",
          position: "relative",
        }}
      >
        <IntroductionOverlay opacity={opacityFirstSection} />
        <TechStack tl={tl} techRef={techRef} wrapperRef={wrapperRef} />
        {/* Everything below is placed by the 3D timeline (constants/scroll.js). */}
        <div className="absolute inset-x-0 flex justify-center" style={{ top: WEB_TITLE_TOP }}>
          <h1 className="text-white font-bold font-sans text-[140px]">Web Portofolio</h1>
        </div>
        <div className="absolute inset-x-0 flex justify-center" style={{ top: GAME_TITLE_TOP }}>
          <h1 className="text-white font-bold font-sans text-[140px]">Game Portofolio</h1>
        </div>
        <div
          className="absolute inset-x-0"
          style={{ top: CONTACT_TOP, transform: `scale(${CONTACT_SCALE})`, transformOrigin: "top center" }}
        >
          <ContactMe />
        </div>
        <div ref={pinnedRef} className="absolute inset-x-0 top-0 h-[var(--screen-h)] pointer-events-none">
          <WebOverlay opacity={1} active={activeWeb} />
          <GameOverlay opacity={1} active={activeGame} />
        </div>
      </div>
    </Scroll>
  )
}

export default ContentOverlay;