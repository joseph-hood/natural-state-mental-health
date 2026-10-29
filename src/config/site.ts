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
   * SEARCH ENGINE SWITCH.
   * While true, every page tells search engines not to index it
   * (<meta name="robots" content="noindex">, added in BaseLayout.astro).
   * The site is launched, so this is false. The 404 page is always noindex.
   */
  noindex: false,

  /**
   * BLOG SWITCH.
   * While false, the Blog links, the home page "Latest from the blog" section,
   * and the "Read the research summary" link are hidden. The blog pages
   * themselves are switched off by the folder name src/pages/_blog/ (Astro
   * skips folders starting with "_"). To turn the blog on: set this to true
   * AND rename src/pages/_blog/ back to src/pages/blog/.
   */
  showBlog: false,

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
