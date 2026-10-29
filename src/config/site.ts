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
   * The Google Form behind the "Take our practitioner survey" links (the top
   * banner and the footer). This is the form's public respondent link.
   */
  practitionerSurveyUrl:
    'https://docs.google.com/forms/d/e/1FAIpQLSc33QTTcPNnq9qzBQFJemen0FtXH8zTDtkOv4IL2dz8TaTz8g/viewform',

  /**
   * The Google Form behind "Join the Coalition". This is the form's public
   * respondent link (not its private editing link). Responses go to the Google
   * account that owns the form, where they can be viewed or sent to a Sheet.
   * The /join page embeds it and also offers a link to open it in a new tab.
   */
  coalitionFormUrl:
    'https://docs.google.com/forms/d/e/1FAIpQLSdSZIxDjl2TWl4Pit1XjRqXskyWMDKJF4oSZMVvjSYOYRz0TA/viewform',

  /** The Givebutter campaign that every Donate button links to (see donateLink in src/data/nav.ts). */
  givebutterUrl: 'https://givebutter.com/naturalstatemh',
} as const;
