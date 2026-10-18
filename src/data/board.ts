import type { ImageMetadata } from 'astro';

import josephHood from '../assets/board/joseph-hood.png';
import lisaRoark from '../assets/board/lisa-roark.png';
import sondraCocheo from '../assets/board/sondra-cocheo.png';
import bethDay from '../assets/board/beth-day.png';
import tristanHudson from '../assets/board/tristan-hudson.png';
import kemmiSadler from '../assets/board/kemmi-sadler.png';
import chelsiMusick from '../assets/board/chelsi-musick.png';
import blakeBulgar from '../assets/board/blake-bulgar.png';

export interface BoardMember {
  /** Used in the URL anchor, e.g. /about#joseph-hood */
  slug: string;
  name: string;
  role: string;
  /** The one-line "why I'm involved" quote shown on cards. */
  why: string;
  image: ImageMetadata;
  /**
   * Longer bio shown on the About page. Leave it out until the client supplies
   * the text; the About page shows a "[Full bio to come.]" placeholder instead.
   */
  bio?: string;
}

// NOTE: the headshots supplied so far are only ~193px wide, so they look soft
// on cards. Replace the files in src/assets/board/ with larger originals
// (same file names) and the site will pick them up automatically.
export const board: BoardMember[] = [
  {
    slug: 'joseph-hood',
    name: 'Joseph Hood, PhD',
    role: 'President',
    why: 'Depression treatments failed me. Psychedelic therapy didn’t.',
    image: josephHood,
  },
  {
    slug: 'lisa-roark',
    name: 'Lisa Roark, MD',
    role: 'VP & Medical Director',
    why: 'A physician who became a patient.',
    image: lisaRoark,
  },
  {
    slug: 'sondra-cocheo',
    name: 'Sondra Cocheo',
    role: 'Treasurer',
    why: 'I found healing after years of struggle.',
    image: sondraCocheo,
  },
  {
    slug: 'beth-day',
    name: 'Beth Day',
    role: 'Secretary & Director of Outreach',
    why: 'I healed from severe PTSD.',
    image: bethDay,
  },
  {
    slug: 'tristan-hudson',
    name: 'J. Tristan Hudson, DDS',
    role: 'Medical & Legislative Strategy Advisor',
    why: 'I lost my father to opioids.',
    image: tristanHudson,
  },
  {
    slug: 'kemmi-sadler',
    name: 'Kemmi Sadler',
    role: 'Law Enforcement & Veteran Partnerships · Ret. U.S. diplomat & federal agent',
    why: '26 years as a federal agent. Now I advocate for first responders.',
    image: kemmiSadler,
  },
  {
    slug: 'chelsi-musick',
    name: 'Chelsi Musick, CRNA',
    role: 'Clinical Practice Advisor',
    why: 'Ketamine clinic owner since 2019.',
    image: chelsiMusick,
  },
  {
    slug: 'blake-bulgar',
    name: 'Blake Bulgar, APRN',
    role: 'Clinical Practice Advisor',
    // The design notes say this line was cut off. Confirm the full wording.
    why: 'Vanderbilt-trained psychiatric NP.',
    image: blakeBulgar,
  },
];
