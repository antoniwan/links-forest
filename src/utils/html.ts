/**
 * Strip HTML tags from a string. Use for plain-text fallbacks (SEO meta, email signature).
 */
export function stripHtml(html: string): string {
  return html.replace(/<[^>]*>/g, "").trim();
}
