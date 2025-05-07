/**
 * Adds UTM parameters to a URL
 * @param url The original URL
 * @param source The UTM source parameter
 * @param medium The UTM medium parameter
 * @param campaign The UTM campaign parameter (optional)
 * @returns URL with UTM parameters
 */
export function addUtmParams(
  url: string,
  source: string,
  medium: string,
  campaign?: string
): string {
  try {
    const urlObj = new URL(url);
    urlObj.searchParams.set("utm_source", source);
    urlObj.searchParams.set("utm_medium", medium);
    if (campaign) {
      urlObj.searchParams.set("utm_campaign", campaign);
    }
    return urlObj.toString();
  } catch (e) {
    // If URL parsing fails, return original URL
    return url;
  }
}
