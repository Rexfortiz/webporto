// One glass HTML card pinned on screen next to its 3D card (desktop overlay).
// It fades and slides into place while its 3D card faces the camera.
//
// The fade is on the glass element itself, not a parent: a partly transparent
// parent makes the browser switch off backdrop-blur inside it until the fade
// ends, so the blur would pop in at the last moment. Cards also hand over in
// turn (old one out fast, new one in after it) instead of cross-fading on top
// of each other.
const PinnedCard = ({ index, active, centre, className = "", children }) => {
  const shown = index === active;
  const shift = shown ? 0 : index < active ? -24 : 24; // past cards leave upward

  return (
    <div
      className={`absolute flex justify-center ${className}`}
      style={{
        top: `${centre * 100}%`,
        transform: "translateY(-50%)",
        pointerEvents: shown ? "auto" : "none",
      }}
      aria-hidden={!shown}
    >
      <div
        className="backdrop-blur-[17.9px] backdrop-filter gradient w-[972.8px] max-w-full rounded-lg flex-shrink-0 transition-[opacity,transform] ease-out"
        style={{
          opacity: shown ? 1 : 0,
          transform: `translateY(${shift}px)`,
          transitionDuration: shown ? "450ms" : "200ms",
          transitionDelay: shown ? "150ms" : "0ms",
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default PinnedCard;
