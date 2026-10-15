/**
 * "It's About Time" — what other states have done.
 * Copy comes from the approved design. Double-check every figure with the
 * client before launch.
 */
export interface StateAction {
  id: string;
  name: string;
  /** The big headline number or word on the card. */
  big: string;
  note: string;
}

export const states: StateAction[] = [
  { id: 'MO', name: 'Missouri', big: '137–11', note: 'Psilocybin therapy bill passed the House.' },
  { id: 'IA', name: 'Iowa', big: '84–6', note: 'Psilocybin therapy bill passed the House.' },
  {
    id: 'LA',
    name: 'Louisiana',
    big: 'Unanimous',
    note: 'Enacted unanimously, carried by a Republican sponsor.',
  },
  { id: 'TX', name: 'Texas', big: 'Tens of millions', note: 'Committed to psychedelic therapy research.' },
  { id: 'NM', name: 'New Mexico', big: 'First', note: 'Legislature-created medical psilocybin program.' },
];

/** The big three numbers under the hero. */
export const stats = [
  { figure: '72%', text: 'of U.S. voters back legal therapeutic access to psychedelics.' },
  { figure: '55%', text: 'say they or someone close to them has used psychedelics.' },
  {
    figure: 'Never',
    text: 'Arkansas is one of only a few states that has never attempted psychedelic legislation.',
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
