import { SITE } from '../config/site';

export interface NavLink {
  label: string;
  href: string;
}

/** Links shown in the header (the Donate button is separate). */
export const mainNav: NavLink[] = [
  { label: 'About', href: '/about' },
  { label: 'The Legislation', href: '/legislation' },
  { label: 'Join the Coalition', href: '/join' },
  { label: 'Blog', href: '/blog' },
];

export const donateLink: NavLink = { label: 'Donate', href: '/donate' };

/** Link columns in the footer. */
export const footerNav: { heading: string; links: NavLink[] }[] = [
  {
    heading: 'Organization',
    links: [
      { label: 'About', href: '/about' },
      { label: 'Statement of Purpose', href: '/about#statement-of-purpose' },
      { label: 'Blog', href: '/blog' },
    ],
  },
  {
    heading: 'Take action',
    links: [
      { label: 'The Legislation', href: '/legislation' },
      { label: 'Join the Coalition', href: '/join' },
      { label: 'Practitioner Survey', href: SITE.practitionerSurveyUrl },
    ],
  },
];
