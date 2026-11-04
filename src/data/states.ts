import type { ImageMetadata } from 'astro';
import signingCeremony from '../assets/signing-ceremony.jpg';
import listeningCircle from '../assets/listening-circle.jpg';

/**
 * "It's About Time" — what other states have done.
 * Copy comes from the approved design. Double-check every figure with the
 * client before launch.
 */
export interface StateAction {
  id: string;
  name: string;
  big: string;
  note: string;
  bill: string;
  billUrl: string;
  votes: { label: string; href: string }[];
}

export const states: StateAction[] = [
  {
    id: 'MO', name: 'Missouri', big: '137–11',
    note: 'House passed a psilocybin research bill in 2026. It did not become law.',
    bill: 'HB 1717 · 2026',
    billUrl: 'https://house.mo.gov/BillActions.aspx?bill=HB1717&code=R&year=2026',
    votes: [{ label: 'House: 137–11', href: 'https://documents.house.mo.gov/billtracking/bills261/jrnpdf/jrn046.pdf#page=17' }],
  },
  {
    id: 'IA', name: 'Iowa', big: '84–6',
    note: 'House passed a psilocybin production and administration bill in 2025.',
    bill: 'HF 978 · 2025 vote',
    billUrl: 'https://www.legis.iowa.gov/legislation/billTracking/billHistory?billName=HF978&ga=91',
    votes: [{ label: 'House: 84–6', href: 'https://www.legis.iowa.gov/docs/publications/HJNL/20250421_HJNL.pdf#page=10' }],
  },
  {
    id: 'LA', name: 'Louisiana', big: 'Unanimous',
    note: 'Final votes for the 2026 psychedelic-assisted therapy research law.',
    bill: 'SB 43 · Act 956 · 2026',
    billUrl: 'https://www.legis.la.gov/legis/BillInfo.aspx?i=249751',
    votes: [
      { label: 'House: 97–0', href: 'https://www.legis.la.gov/legis/ViewDocument.aspx?d=1479324' },
      { label: 'Senate: 35–0', href: 'https://www.legis.la.gov/legis/ViewDocument.aspx?d=1478932' },
    ],
  },
  {
    id: 'TX', name: 'Texas', big: '27–4',
    note: 'Senate adopted the final ibogaine research bill in 2025; enacted that June.',
    bill: 'SB 2308 · 2025',
    billUrl: 'https://capitol.texas.gov/billlookup/BillSummary.aspx?Bill=SB2308&LegSess=89R',
    votes: [{ label: 'Final votes: Senate 27–4; House 134–4', href: 'https://capitol.texas.gov/tlodocs/89R/billtext/html/SB02308F.htm' }],
  },
  {
    id: 'NM', name: 'New Mexico', big: '33–4',
    note: 'Senate passed the Medical Psilocybin Act; signed into law in April 2025.',
    bill: 'SB 219 · 2025',
    billUrl: 'https://www.nmlegis.gov/Legislation/Legislation?Chamber=S&LegNo=219&LegType=B&year=25',
    votes: [
      { label: 'Senate: 33–4', href: 'https://www.nmlegis.gov/Sessions/25%20Regular/votes/SB0219SVOTE.pdf' },
      { label: 'House: 56–8', href: 'https://www.nmlegis.gov/Sessions/25%20Regular/votes/SB0219HVOTE.pdf' },
    ],
  },
  {
    id: 'OK', name: 'Oklahoma', big: '69–21',
    note: 'House approved the final ibogaine clinical-trials bill; signed in May 2026.',
    bill: 'HB 3834 · 2026',
    billUrl: 'https://www.oklegislature.gov/BillInfo.aspx?Bill=HB3834&session=2600',
    votes: [
      { label: 'Final House: 69–21', href: 'https://www.oklegislature.gov/cf/2025-26%20SUPPORT%20DOCUMENTS/votes/House/HB3834_VOTES.HTM' },
      { label: 'Senate: 33–9', href: 'https://www.oklegislature.gov/cf/2025-26%20SUPPORT%20DOCUMENTS/votes/Senate/HB3834_VOTES.HTM' },
    ],
  },
];

export interface Stat {
  figure: string;
  text: string;
  /** Optional photo shown above the number. */
  image?: ImageMetadata;
  /** Describes the photo for screen readers. Required whenever `image` is set. */
  imageAlt?: string;
}

/** The two big numbers under the hero. */
export const stats: Stat[] = [
  {
    figure: '72%',
    text: 'of U.S. voters back legal therapeutic access to psychedelics.',
    image: signingCeremony,
    imageAlt:
      'A signing ceremony in the White House: a seated man holds up a signed document while people standing behind the desk applaud.',
  },
  {
    figure: '55%',
    text: 'say they or someone close to them has used psychedelics.',
    image: listeningCircle,
    imageAlt: 'A small group sits in a circle in a living room with bookshelves, talking and listening to each other.',
  },
];

export const statsSource = {
  survey: {
    label: 'UC Berkeley Psychedelics Survey, 2025',
    href: 'https://psychedelics.berkeley.edu/uc-berkeley-bcsp-second-psychedelic-survey-results/',
  },
  via: {
    label: 'Psychedelic Alpha',
    href: 'https://psychedelicalpha.com/resources/the-psychedelics-perceptions-tracker/',
  },
  sample: 'n=1,577 U.S. voters',
};

export const conditions = [
  'Depression',
  'Anxiety',
  'PTSD',
  'Addiction',
  'Eating Disorders',
  'OCD',
  'End-of-Life Anxiety',
  'Traumatic Brain Injury',
];
