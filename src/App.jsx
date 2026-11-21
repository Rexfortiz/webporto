
import { Canvas } from "@react-three/fiber"
import { Test2 } from "./components/Test2"
import { Suspense, useEffect, useState } from "react"
import Loading from "./components/Loading"
import MobileApp from "./Mobile/MobileApp"
import { FloatingNav } from "./components/ui/floating-navbar"

// The 3D version scales its HTML with the window height (see ContentOverlay),
// so it no longer needs a 1780px-wide screen. It needs: a mouse/trackpad (keeps
// tablets on the lighter mobile site), a landscape window at least 16:10 so the
// 3D carousel isn't pushed off the left edge, and enough height that the
// scaled-down text stays readable.
const DESKTOP_QUERY =
  "(pointer: fine) and (min-width: 1280px) and (min-height: 680px) and (min-aspect-ratio: 8/5)";

const useIsDesktop = () => {
  // Read synchronously so phones never mount the heavy 3D scene first.
  const [isDesktop, setIsDesktop] = useState(() => window.matchMedia(DESKTOP_QUERY).matches);

  useEffect(() => {
    const query = window.matchMedia(DESKTOP_QUERY);
    const onChange = () => setIsDesktop(query.matches);
    query.addEventListener("change", onChange);
    return () => query.removeEventListener("change", onChange);
  }, []);

  return isDesktop;
};

const App = () => {

  const isMobile = !useIsDesktop()

  const navItems = [
    {
      name: "Tech stack",
      link: "#tech-mobile",
      
    },
    {
      name: "Web",
      link: "#webporto-mobile",
      
    },
    {
      name: "Game",
      link: "#gameporto-mobile",
    },
    {
      name: "About",
      link: "#about-mobile",

    },
  ];

  return (
    <>
      {
        isMobile ?
        <Suspense fallback={<Loading />} >
          <FloatingNav navItems={navItems}/>
          <MobileApp />
        </Suspense>
        
        :
        <Canvas
          shadows
          camera={{
            fov: 64,
            position: [20, 50, 350],
          }}
        >
          <Suspense fallback={<Loading />} >
            <Test2 /> 
          </Suspense>
        </Canvas>
      }
    </>
  )
}

export default App
