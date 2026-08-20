import { stripHtml } from './html';

export function getCleanEmail(email: string): string {
  try {
    const urlObj = new URL(`mailto:${email}`);
    urlObj.searchParams.delete('utm_source');
    urlObj.searchParams.delete('utm_medium');
    urlObj.searchParams.delete('utm_campaign');
    return urlObj.pathname.slice(1);
  } catch {
    return email;
  }
}

export function addEmailUtmParams(url: string): string {
  try {
    const urlObj = new URL(url);
    urlObj.searchParams.set('utm_source', 'email');
    urlObj.searchParams.set('utm_medium', 'signature');
    urlObj.searchParams.set('utm_campaign', 'PersonalEmail2025');
    return urlObj.toString();
  } catch {
    return url;
  }
}

export function getCleanDisplayUrl(url: string): string {
  try {
    const urlObj = new URL(url);
    urlObj.searchParams.delete('utm_source');
    urlObj.searchParams.delete('utm_medium');
    urlObj.searchParams.delete('utm_campaign');
    return urlObj.hostname + urlObj.pathname;
  } catch {
    return url.replace(/^https?:\/\//, '');
  }
}

export function buildSignatureHtml(
  name: string,
  subtitle: string,
  links: { url: string }[],
  email: string,
): string {
  const linkMarkup = links
    .map((link, index) => {
      const emailUrl = addEmailUtmParams(link.url);
      const displayUrl = getCleanDisplayUrl(link.url);
      const separator = index < links.length - 1 ? ' | ' : '';
      return `<a href="${emailUrl}" target="_blank">🌐 ${displayUrl}</a>${separator}`;
    })
    .join('');

  const emailLine = email ? `📬 ${email}` : '';

  return `<strong>${name}</strong><br><span style="font-size: 80%;">${stripHtml(subtitle)}</span><br>${linkMarkup}<br>${emailLine}`;
}
