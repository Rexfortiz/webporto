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

// Timeline seconds <-> design px scrolled.
const timeToY = (t) =>
  t <= SLOW_FROM_SECONDS
    ? t * BASE_PX_PER_SECOND
    : SLOW_FROM_PX + (t - SLOW_FROM_SECONDS) * SLOW_PX_PER_SECOND;
const yToTime = (y) =>
  y <= SLOW_FROM_PX
    ? y / BASE_PX_PER_SECOND
    : SLOW_FROM_SECONDS + (y - SLOW_FROM_PX) / SLOW_PX_PER_SECOND;

// ---- Lining HTML cards up with their 3D cards ----
// Each 3D carousel turns a new card to face the camera every 0.5s. Every HTML
// card gets a slot of that much scroll, placed so the card's centre sits level
// with its 3D card in the middle of that card's 0.5s in front. Measured by
// replaying the GSAP timeline and camera: the front web card is centred 61.6%
// down the screen (cards in front from 2.5s), the front game card 47.7% (from
// 7.0s, when the camera arrives at the game carousel).
export const CARD_SLOT_PX = 0.5 * SLOW_PX_PER_SECOND;
const firstSlotTop = (firstWindowSeconds, screenFraction) =>
  timeToY(firstWindowSeconds + 0.25) + screenFraction * SCREEN_PX - CARD_SLOT_PX / 2;

// Design-px positions from the top of the overlay.
export const WEB_CARDS_TOP = firstSlotTop(2.5, 0.616); // web carousel: 6 cards
export const GAME_CARDS_TOP = firstSlotTop(7.0, 0.477); // game carousel: 7 cards
// Titles sit just above their first card (cards are ~430px tall, centred in slot).
const TITLE_HEIGHT = 210; // text-[140px] at line-height 1.5
const titleTop = (cardsTop) => cardsTop + CARD_SLOT_PX / 2 - 255 - TITLE_HEIGHT;
export const WEB_TITLE_TOP = titleTop(WEB_CARDS_TOP);
export const GAME_TITLE_TOP = titleTop(GAME_CARDS_TOP);

// The "More About Me" heading comes into view midway through the camera's
// move to the contact view (10.6s-11.6s), after a gap from the game cards.
const ABOUT_APPEARS_SECONDS = 11.1;
const ABOUT_HEADING_OFFSET = 175; // empty space above the heading in its block
export const CONTACT_TOP = timeToY(ABOUT_APPEARS_SECONDS) + SCREEN_PX - ABOUT_HEADING_OFFSET;
const ABOUT_HEIGHT = 700; // ContactMe: "More About Me" block
const CONTACT_FORM_HEIGHT = 920; // ContactMe: "Contact Me!" block

// The scroll ends with the contact form centred on the last screen.
// (The 3D just holds the contact view after 11.6s.)
const SCROLL_END_PX = CONTACT_TOP + ABOUT_HEIGHT + CONTACT_FORM_HEIGHT / 2 - SCREEN_PX / 2;

// drei <ScrollControls pages>: one screen + the scroll distance in screens.
export const SCROLL_PAGES = 1 + (SCROLL_END_PX * HTML_ZOOM) / DESIGN_HEIGHT;

// scroll.offset (0..1) -> 3D timeline seconds.
export const offsetToSeconds = (offset) => yToTime(offset * SCROLL_END_PX);

// Convert a scroll.offset value tuned against the original 11.7-page scroll.
export const tunedOffset = (original) => timeToY(original * 14) / SCROLL_END_PX;
