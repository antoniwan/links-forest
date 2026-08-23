export type LinkSectionVariant = 'primary' | 'secondary';

export interface LinkSectionDefinition {
  /** Category id — must match Link.category */
  id: string;
  /** Display label for the section header */
  label: string;
  /** Layout variant for links in this section */
  variant: LinkSectionVariant;
}

/**
 * Visitor-intent sections. Order = top-to-bottom on the page.
 */
export const linkSections: LinkSectionDefinition[] = [
  { id: 'writing', label: 'Writing', variant: 'primary' },
  { id: 'work', label: 'Work', variant: 'primary' },
  { id: 'elsewhere', label: 'Elsewhere', variant: 'secondary' },
];
