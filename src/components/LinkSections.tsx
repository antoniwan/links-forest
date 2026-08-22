import type { FC } from 'react';
import type { Link } from '../data/types';
import type { ThemeName } from '../data/theme.types';
import { themeConfig } from '../config/theme.config';
import { groupLinksBySection } from '../utils/groupLinksBySection';
import { LinkGrid } from './LinkCard';

interface LinkSectionsProps {
  links: Link[];
  themeName: ThemeName;
}

export const LinkSections: FC<LinkSectionsProps> = ({ links, themeName }) => {
  const sections = groupLinksBySection(links);
  const currentTheme = themeConfig[themeName];
  let linkIndex = 0;

  return (
    <div className="flex flex-col gap-12 sm:gap-14">
      {sections.map((section) => {
        const startIndex = linkIndex;
        linkIndex += section.links.length;

        return (
          <section key={section.id} aria-label={section.label} className="space-y-5">
            <div className="flex items-center gap-3">
              <div className={`h-px flex-1 border-t opacity-60 ${currentTheme.styles.border}`} />
              <h2
                className={`text-[11px] font-medium tracking-[0.2em] uppercase opacity-45 ${currentTheme.colors.text}`}
              >
                {section.label}
              </h2>
              <div className={`h-px flex-1 border-t opacity-60 ${currentTheme.styles.border}`} />
            </div>
            <LinkGrid
              links={section.links}
              variant={section.variant}
              themeName={themeName}
              startIndex={startIndex}
            />
          </section>
        );
      })}
    </div>
  );
};
