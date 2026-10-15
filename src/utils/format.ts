/**
 * Formats a date like "Oct 2, 2026".
 * Uses UTC so a post dated 2026-10-02 never shows as Oct 1 in US time zones.
 */
export function formatDate(date: Date, style: 'short' | 'long' = 'short'): string {
  return date.toLocaleDateString('en-US', {
    month: style === 'long' ? 'long' : 'short',
    day: 'numeric',
    year: 'numeric',
    timeZone: 'UTC',
  });
}
