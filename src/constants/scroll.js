// How the HTML overlay and the 3D timeline share one scroll (desktop version).
//
// The overlay is laid out in "design px": as if the screen were DESIGN_HEIGHT
// tall (the layout was tuned on a 1920x1080 monitor at 75% browser zoom), then
// scaled to the real screen. The 3D timeline (14s of GSAP tweens) is tied to
// how far you've scrolled in design px, so the two stay in sync on any screen.

export const DESIGN_HEIGHT = 1280;

// How big the HTML is drawn (1 = the original 75%-zoom look).
export const HTML_ZOOM = 14 / 11.6; // ~1.21
const SCREEN_PX = DESIGN_HEIGHT / HTML_ZOOM; // one screen, in design px

// ---- Pace: how much scrolling each second of the 3D timeline takes ----
// Original pace: <ScrollControls pages={11.7}> spread the 14s over 10.7 screens.
const BASE_PX_PER_SECOND = (10.7 * DESIGN_HEIGHT) / 14;
// From the web carousel on, the 3D plays this many times slower per scroll
// (card turns and camera moves need more scrolling). The intro, tech stack
// and web title keep the original pace.
export const SLOWDOWN = 1.5;
const SLOW_FROM_SECONDS = 2.5;
const SLOW_FROM_PX = SLOW_FROM_SECONDS * BASE_PX_PER_SECOND;
const SLOW_PX_PER_SECOND = BASE_PX_PER_SECOND * SLOWDOWN;

// ---- Tech stack: drawn bigger, with the 3D paused behind it ----
// The tech stack block (title, photo, cards) is drawn this much bigger, and
// its dark band grows to match (originally 920px tall). While the band covers
// the whole screen (from when it reaches the top), the 3D pauses for exactly
// the extra height, so the band leaves and the 3D carries on as before.
export const TECH_STACK_SCALE = 1.4;
export const TECH_STACK_HEIGHT = 920 * TECH_STACK_SCALE;
const HOLD_PX = TECH_STACK_HEIGHT - 920;
const HOLD_AT_SECONDS = SCREEN_PX / BASE_PX_PER_SECOND; // tech stack follows the one-screen intro
const HOLD_FROM_PX = HOLD_AT_SECONDS * BASE_PX_PER_SECOND;

// Timeline seconds <-> design px scrolled.
const timeToY = (t) => {
  if (t <= HOLD_AT_SECONDS) return t * BASE_PX_PER_SECOND;
  if (t <= SLOW_FROM_SECONDS) return t * BASE_PX_PER_SECOND + HOLD_PX;
  return SLOW_FROM_PX + HOLD_PX + (t - SLOW_FROM_SECONDS) * SLOW_PX_PER_SECOND;
};
const yToTime = (y) => {
  if (y <= HOLD_FROM_PX) return y / BASE_PX_PER_SECOND;
  if (y <= HOLD_FROM_PX + HOLD_PX) return HOLD_AT_SECONDS; // paused behind the tech stack
  if (y <= SLOW_FROM_PX + HOLD_PX) return (y - HOLD_PX) / BASE_PX_PER_SECOND;
  return SLOW_FROM_SECONDS + (y - SLOW_FROM_PX - HOLD_PX) / SLOW_PX_PER_SECOND;
};

// ---- HTML cards pinned to their 3D cards ----
// Each 3D carousel turns a new card to face the camera every 0.5s. The HTML
// cards don't scroll: each one is pinned on screen, level with its 3D card,
// only while that card is in front. Measured by replaying the GSAP timeline
// and camera: the front web card is centred 61.6% down the screen, the front
// game card 47.7% (on the right, so the HTML game cards go on the left).
export const WEB_CARD_CENTER = 0.616;
export const GAME_CARD_CENTER = 0.477;
// [from, to) timeline seconds each card is shown, in content order.
export const WEB_CARD_WINDOWS = [[2.5, 3], [3, 3.5], [3.5, 4], [4, 4.5], [4.5, 5], [5, 5.6]];
export const GAME_CARD_WINDOWS = [[7, 7.5], [7.5, 8], [8, 8.5], [8.5, 9], [9, 9.5], [9.5, 10], [10, 10.6]];
// Index of the card to show at time t; -1 before the first, windows.length after the last.
export const cardAt = (windows, t) => {
  if (t < windows[0][0]) return -1;
  const i = windows.findIndex(([from, to]) => t >= from && t < to);
  return i === -1 ? windows.length : i;
};

// Section titles pass through the middle of the screen at these moments:
// "Web Portofolio" while the camera rises to the web carousel, "Game
// Portofolio" midway through the camera's move to the game carousel.
const TITLE_HEIGHT = 210; // text-[140px] at line-height 1.5
const centredAt = (seconds) => timeToY(seconds) + SCREEN_PX / 2 - TITLE_HEIGHT / 2;
export const WEB_TITLE_TOP = centredAt(2.15);
export const GAME_TITLE_TOP = centredAt(6.5);

// "More About Me" + "Contact Me!" (ContactMe) are drawn this much bigger.
export const CONTACT_SCALE = 1.3;
const ABOUT_HEIGHT = 700 * CONTACT_SCALE; // "More About Me" block
const CONTACT_FORM_HEIGHT = 920 * CONTACT_SCALE; // "Contact Me!" block

// The "More About Me" heading comes into view midway through the camera's
// move to the contact view (10.6s-11.6s), after a gap from the game cards.
const ABOUT_APPEARS_SECONDS = 11.1;
const ABOUT_HEADING_OFFSET = 175 * CONTACT_SCALE; // empty space above the heading in its block
export const CONTACT_TOP = timeToY(ABOUT_APPEARS_SECONDS) + SCREEN_PX - ABOUT_HEADING_OFFSET;

// The scroll ends with the contact form centred on the last screen.
// (The 3D just holds the contact view after 11.6s.)
const SCROLL_END_PX = CONTACT_TOP + ABOUT_HEIGHT + CONTACT_FORM_HEIGHT / 2 - SCREEN_PX / 2;

// drei <ScrollControls pages>: one screen + the scroll distance in screens.
export const SCROLL_PAGES = 1 + (SCROLL_END_PX * HTML_ZOOM) / DESIGN_HEIGHT;

// scroll.offset (0..1) -> design px scrolled, and -> 3D timeline seconds.
export const offsetToY = (offset) => offset * SCROLL_END_PX;
export const offsetToSeconds = (offset) => yToTime(offsetToY(offset));

// Convert a scroll.offset value tuned against the original 11.7-page scroll.
export const tunedOffset = (original) => timeToY(original * 14) / SCROLL_END_PX;
