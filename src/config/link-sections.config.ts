export type LinkSectionVariant = 'primary' | 'secondary';

export interface LinkSectionDefinition {
  /** Category id — must match Link.category */
  id: string;
  /** Display label for the section header */
  label: string;
  /** Layout variant for links in this section */
  variant: LinkSectionVariant;
}

/** Ordered section definitions. Links are grouped by matching category. */
export const linkSections: LinkSectionDefinition[] = [
  { id: 'childrens-books', label: "Children's Books", variant: 'primary' },
  { id: 'writing', label: 'Writing & Reading', variant: 'primary' },
  { id: 'work', label: 'Work & Consulting', variant: 'primary' },
  { id: 'code', label: 'Code & Projects', variant: 'secondary' },
  { id: 'brand', label: 'Brand', variant: 'primary' },
  { id: 'connect', label: 'Connect & Support', variant: 'secondary' },
];
