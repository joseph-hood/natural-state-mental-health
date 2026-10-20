/**
 * Site-wide settings. Change things here instead of hunting through pages.
 */
export const SITE = {
  name: 'Natural State Mental Health',
  url: 'https://naturalstatemh.org',
  email: 'admin@NaturalStateMH.org',
  description:
    "We're a group of concerned Arkansans working to pass legislation in 2027 that gives Arkansans access to therapeutic psilocybin.",

  /**
   * CLIENT PREVIEW SWITCH.
   * While true, every page tells search engines not to index it
   * (<meta name="robots" content="noindex">, added in BaseLayout.astro).
   * Set to false when the site is ready to launch.
   */
  noindex: true,

  /**
   * TODO: replace with the real practitioner survey link.
   * It is used by the announcement bar and the footer.
   */
  practitionerSurveyUrl: '#',

  /** The Givebutter campaign that every Donate button links to (see donateLink in src/data/nav.ts). */
  givebutterUrl: 'https://givebutter.com/naturalstatemh',
} as const;
