import type { Link } from '../data/types';
import {
  linkSections,
  type LinkSectionDefinition,
  type LinkSectionVariant,
} from '../config/link-sections.config';

export interface GroupedLinkSection {
  id: string;
  label: string;
  variant: LinkSectionVariant;
  links: Link[];
}

/**
 * Group links into ordered sections based on link.category and linkSections config.
 * Uncategorized links are appended in an "Other" section.
 */
export function groupLinksBySection(links: Link[]): GroupedLinkSection[] {
  const byCategory = new Map<string, Link[]>();

  for (const link of links) {
    const category = link.category ?? 'other';
    const group = byCategory.get(category) ?? [];
    group.push(link);
    byCategory.set(category, group);
  }

  const grouped: GroupedLinkSection[] = [];

  for (const section of linkSections) {
    const sectionLinks = byCategory.get(section.id);
    if (sectionLinks?.length) {
      grouped.push({
        id: section.id,
        label: section.label,
        variant: section.variant,
        links: sectionLinks,
      });
      byCategory.delete(section.id);
    }
  }

  const remaining = [...byCategory.entries()];
  if (remaining.length > 0) {
    grouped.push({
      id: 'other',
      label: 'More',
      variant: 'secondary',
      links: remaining.flatMap(([, sectionLinks]) => sectionLinks),
    });
  }

  return grouped;
}

export function getLinkSectionDefinition(category: string): LinkSectionDefinition | undefined {
  return linkSections.find((section) => section.id === category);
}
