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
  /** Position on the board. Shown on the home page cards and the About page. */
  role: string;
  /** The one-line "why I'm involved" quote shown on the home page cards. */
  why: string;
  /** Day-job line shown under the name on the About page. */
  headline: string;
  /**
   * The bio on the About page: one entry per paragraph. Plain text, except that
   * <em>…</em> is allowed (for a book title, say).
   */
  bio: string[];
  image: ImageMetadata;
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
    headline: 'Engineer & Research Scientist',
    bio: [
      'Joseph is an engineer, research scientist, and musician. He and his wife Beth are raising a blended family of eight children in Bentonville, Arkansas. His work as an advocate for plant medicines began with his own struggle with major depression and suicidality that conventional therapy and antidepressants failed to treat. Psychedelic medicine reached what those treatments could not, and that firsthand experience drives his conviction that these therapies should be available to the Arkansans who need them.',
      'He brings a scientist’s insistence on an evidence-based approach and careful process to the organization’s legislative work. Joseph also serves on the board of the Psychedelic Society of Arkansas as Director of Ethics, where he helps provide community spaces for education, integration, and harm reduction.',
    ],
    image: josephHood,
  },
  {
    slug: 'lisa-roark',
    name: 'Lisa Roark, MD',
    role: 'VP & Medical Director',
    why: 'A physician who became a patient.',
    headline: 'Family Physician and Patient Advocate',
    bio: [
      'Lisa Roark, MD, is a family physician, patient advocate, and longtime supporter of evidence-informed access to emerging and alternative therapies. She played an active role in advocacy efforts surrounding the legalization and implementation of medical cannabis in Missouri and became the state’s only female dispensary owner at the time.',
      'After being diagnosed with multiple sclerosis, Dr. Roark stepped away from clinical practice and began exploring a broader range of approaches to health and healing, including psychedelic-assisted therapies. Her experience as both a physician and a patient has shaped her commitment to thoughtful, responsible policies that expand therapeutic options while prioritizing patient safety, professional standards, and appropriate medical oversight.',
      'Dr. Roark has completed advanced training in psychedelic-assisted therapy through the Integrative Psychiatry Institute. She serves on the Board of Directors of the Psychedelic Society of Arkansas and leads its Eureka Springs chapter. She brings to this work a unique combination of medical expertise, patient perspective, legislative advocacy, and firsthand experience helping navigate the introduction of an emerging therapeutic modality into state policy.',
    ],
    image: lisaRoark,
  },
  {
    slug: 'sondra-cocheo',
    name: 'Sondra Cocheo',
    role: 'Treasurer',
    why: 'I found healing after years of struggle.',
    headline: 'Founder and Lead Facilitator, Spirit’s Journey Sanctuary',
    bio: [
      'Sondra Cocheo is the founder and lead facilitator of Spirit’s Journey Sanctuary, a nonprofit entheogenic community based in Arkansas, and a board member of Natural State Mental Health, where she supports efforts to advance responsible psychedelic policy and access in the state.',
      'She holds a bachelor’s degree in psychology and has completed immersive training in the Shipibo tradition in the Peruvian Amazon. Her work includes psychedelic preparation, ceremonial facilitation, integration, community education, and advocacy.',
      'Sondra’s involvement in this work is deeply personal. After years of struggling with her own mental health and finding limited relief through conventional approaches, psychedelic medicines profoundly changed the direction of her life. That experience led her to study this work more deeply and support others with greater preparation, safety, and integration.',
      'Today, she brings together lived experience, psychology, ceremonial training, and advocacy with a focus on responsible practice and thoughtful psychedelic policy.',
    ],
    image: sondraCocheo,
  },
  {
    slug: 'beth-day',
    name: 'Beth Day',
    role: 'Secretary & Director of Outreach',
    why: 'I healed from severe PTSD.',
    headline: 'President, Psychedelic Society of Arkansas',
    bio: [
      'Beth is an over 20-year resident of Arkansas living in Bentonville, a mother and stepmother of eight children, a writer, real estate broker, small business owner of The Ravington events venue in Centerton, AR, and a community organizer, activist, and ordained minister. In 2019, Beth began a healing journey with psilocybin that helped her process and heal severe PTSD.',
      'As a result of those life-changing experiences, she helped found the Psychedelic Society of Arkansas, a statewide organization with chapters in Bentonville, Fayetteville, Eureka Springs, and Little Rock, and she serves as its President. Her goal is to make this life-changing treatment available to those who need it most in our state and to steward the safe, ethical, and responsible development of programs that will serve those in greatest need.',
    ],
    image: bethDay,
  },
  {
    slug: 'tristan-hudson',
    name: 'J. Tristan Hudson, DDS',
    role: 'Medical & Legislative Strategy Advisor',
    why: 'I lost my father to opioids.',
    headline: 'Dentist, Engineer, and Entrepreneur',
    bio: [
      'Dr. Tristan Hudson is a dentist, engineer, and entrepreneur serving on the board of Natural State Mental Health. Born in Gravette and raised on a cattle and poultry farm, he earned a chemical engineering degree from the University of Arkansas, graduating magna cum laude, along with graduate degrees in operations management and business administration, before completing his Doctor of Dental Surgery at the University of Oklahoma.',
      'He returned to Northwest Arkansas to found At Ease Dental in Bentonville, a practice built around patients whose fear had long kept them from care. His interest in safer approaches to pain and mental health is personal: his father died at 58 after a struggle involving opioids. He also serves on the board of Wonderful Waterways. Dr. Hudson advocates a nonpartisan, evidence-first approach that pairs responsible access with clinical oversight and strong patient protections.',
    ],
    image: tristanHudson,
  },
  {
    slug: 'kemmi-sadler',
    name: 'Kemmi Sadler',
    role: 'Law Enforcement & Veteran Partnerships',
    why: '26 years as a federal agent. Now I advocate for first responders.',
    headline: 'Retired U.S. Diplomat and Supervisory Special Agent',
    bio: [
      'Kemmi is a retired U.S. diplomat and Supervisory Special Agent with the U.S. Department of State’s Diplomatic Security Service, capping a 26-year career in law enforcement and international security. After retirement, her own healing journey led her to explore ayahuasca, psychedelics, spirituality, and the impact of trauma and moral injury on those who serve.',
      'She is the best-selling author of <em>From the Badge to the Vine: A Journey Through Duty, Trauma, and Healing</em>, a memoir about her transition from a career built on control and resilience toward recognizing her own need to heal. Kemmi writes and speaks on first responder mental health, moral injury, and psychedelic healing.',
      'To raise awareness of first responder suicide, she walked the 780-kilometer Camino de Santiago along with her dog Nona, carrying the names of 56 first responders who had died by suicide. She owns land in the Ozarks outside Harrison, Arkansas, where she is developing a place of respite for veterans, first responders, and others carrying the weight of service.',
    ],
    image: kemmiSadler,
  },
  {
    slug: 'chelsi-musick',
    name: 'Chelsi Musick, CRNA',
    role: 'Clinical Practice Advisor',
    why: 'Ketamine clinic owner since 2019.',
    headline: 'Co-Owner, Ascend Wellness',
    bio: [
      'Chelsi is a co-owner of Ascend Wellness. She has practiced anesthesia since 2014 and spent four years in the ICU before her anesthesia residency. She owns two clinics, one in Lowell, Arkansas, and one in Kansas City, Missouri, where a psychedelics bill recently passed the Missouri House in a landslide 137–11 vote before stalling in the Senate.',
      'Ascend has provided ketamine treatments since 2019, having built its own protocols, systems, and integration programs from the ground up. Chelsi is a member of the American Society of Ketamine Physicians, Psychotherapists and Practitioners. If legislation passes in Arkansas and Missouri, her clinics will be positioned on the front lines, capable of expanding their established ketamine services into psilocybin therapy.',
    ],
    image: chelsiMusick,
  },
  {
    slug: 'blake-bulgar',
    name: 'Blake Bulgar, APRN',
    role: 'Clinical Practice Advisor',
    // The design notes say this line was cut off. Confirm the full wording.
    why: 'Vanderbilt-trained psychiatric NP.',
    headline: 'Psychiatric Nurse Practitioner, Ascend Wellness',
    bio: [
      'Blake is a board-certified psychiatric nurse practitioner at Ascend Wellness. He received his psychiatric training at Vanderbilt University Medical Center in Nashville, Tennessee, and has experience treating a wide range of concerns, including depression, substance use disorders, men’s mental health, OCD, anxiety, sleep disorders, and PTSD across adult and adolescent populations. As a clinician, Blake brings a psychiatric and psychopharmacologic perspective to psychedelic medicine, with a particular interest in the safe and thoughtful integration of emerging treatments into established mental health care. He has visited psilocybin clinics in Colorado to learn firsthand about their structure and approach to care.',
    ],
    image: blakeBulgar,
  },
];
