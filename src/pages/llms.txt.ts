import type { APIRoute } from 'astro';
import { userSettings } from '../config/user-settings';
import { platformLabel } from '../data/platform-labels';
import { groupLinksBySection } from '../utils/groupLinksBySection';
import { stripHtml } from '../utils/html';

/**
 * `/llms.txt` (https://llmstxt.org): the same page, as markdown for agents.
 * Built from user-settings.ts, so it changes when the page changes.
 */

const oneLine = (text: string) => stripHtml(text).replace(/\s+/g, ' ');

const listItem = (title: string, url: string, note?: string) =>
  `- [${oneLine(title)}](${url})${note ? `: ${oneLine(note)}` : ''}`;

export const GET: APIRoute = () => {
  // Raw settings, not userConfig: the loader adds UTM tags, which agents do not need.
  const { profile, links, social, site } = userSettings;
  const { seo } = site;
  const about = seo.metaDescription ?? seo.defaultDescription;

  const sections = groupLinksBySection(links).map(
    (section) =>
      `## ${section.label}\n\n${section.links
        .map((link) => listItem(link.title, link.url, link.description))
        .join('\n')}`,
  );

  const profiles = social.map((item) => listItem(platformLabel[item.platform], item.url));

  const body = `# ${oneLine(profile.name)}

> ${oneLine(profile.subtitle)}

${oneLine(about)}

This is a link page. Each section below lists its links in page order, with the note shown on the page.

${sections.join('\n\n')}

## Profiles

${profiles.join('\n')}
`;

  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
