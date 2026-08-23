import { motion } from 'framer-motion';
import type { FC } from 'react';
import type { Link } from '../data/types';
import { resolveLinkEmoji } from '../data/linkIcons';
import { themeConfig } from '../config/theme.config';
import type { ThemeName, ThemeRail } from '../data/theme.types';

interface LinkCardProps {
  link: Link;
  index: number;
  themeName: ThemeName;
  compact?: boolean;
}

function AccentRail({
  rail,
  accent,
  accentSoft,
  active = false,
}: {
  rail: ThemeRail;
  accent: string;
  accentSoft: string;
  active?: boolean;
}) {
  switch (rail) {
    case 'left':
      return (
        <div
          className={`pointer-events-none absolute inset-y-0 left-0 w-1 origin-top bg-linear-to-b transition-all duration-300 group-hover:scale-y-100 group-hover:opacity-100 ${
            active ? 'scale-y-100 opacity-70' : 'scale-y-0 opacity-0'
          } ${accent}`}
          aria-hidden="true"
        />
      );
    case 'bottom':
      return (
        <div
          className={`pointer-events-none absolute inset-x-0 bottom-0 h-0.5 origin-left bg-linear-to-r transition-all duration-300 group-hover:scale-x-100 group-hover:opacity-100 ${
            active ? 'scale-x-100 opacity-70' : 'scale-x-0 opacity-0'
          } ${accent}`}
          aria-hidden="true"
        />
      );
    case 'glow':
      return (
        <div
          className={`pointer-events-none absolute -inset-px rounded-[inherit] blur-md transition-opacity duration-500 group-hover:opacity-40 ${
            active ? 'opacity-25' : 'opacity-0'
          } ${accent}`}
          aria-hidden="true"
        />
      );
    case 'frame':
      return (
        <div
          className={`pointer-events-none absolute inset-0 rounded-[inherit] border-2 transition-colors duration-200 group-hover:border-current ${
            active ? 'border-current' : 'border-transparent'
          } ${accentSoft}`}
          aria-hidden="true"
        />
      );
    case 'slash':
      return (
        <div
          className={`pointer-events-none absolute -top-8 -right-8 h-20 w-20 origin-center rotate-45 bg-linear-to-br transition-all duration-300 group-hover:scale-100 group-hover:opacity-30 ${
            active ? 'scale-100 opacity-20' : 'scale-0 opacity-0'
          } ${accent}`}
          aria-hidden="true"
        />
      );
    default:
      return null;
  }
}

export const LinkCard: FC<LinkCardProps> = ({
  link,
  index,
  themeName,
  compact = false,
}) => {
  const { url, title, description, featured } = link;
  const currentTheme = themeConfig[themeName];
  const { motion: themeMotion } = currentTheme;
  const emoji = resolveLinkEmoji(link);

  const padding = compact ? 'p-4' : featured ? 'p-5 sm:p-6' : 'p-4 sm:p-5';
  const titleSize = compact
    ? 'text-[0.95rem] sm:text-base'
    : featured
      ? 'text-lg sm:text-xl'
      : 'text-base sm:text-lg';
  const wellSize = compact ? 'h-9 w-9 text-base' : 'h-10 w-10 text-lg';

  return (
    <motion.a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`group relative block overflow-hidden animate-fade-in-up ${padding} ${currentTheme.styles.card} ${
        featured ? currentTheme.styles.featured : ''
      }`}
      style={{ animationDelay: `${index * themeMotion.stagger}s` }}
      initial={false}
      whileHover={themeMotion.cardHover}
      whileTap={themeMotion.cardTap}
    >
      <AccentRail
        rail={themeMotion.rail}
        accent={currentTheme.colors.accent}
        accentSoft={currentTheme.styles.accentSoft}
        active={featured}
      />

      <div className="relative flex items-start gap-3.5">
        {emoji && (
          <span
            className={`flex shrink-0 items-center justify-center ${currentTheme.styles.radius} ${currentTheme.styles.well} ${wellSize}`}
            aria-hidden="true"
          >
            {emoji}
          </span>
        )}

        <div className="min-w-0 flex-1">
          <div className="flex items-start justify-between gap-3">
            <h3
              className={`truncate font-semibold tracking-tight ${titleSize} ${currentTheme.colors.text}`}
            >
              {title}
            </h3>
            <span
              className={`mt-0.5 shrink-0 text-base opacity-25 transition-all duration-300 group-hover:translate-x-0.5 group-hover:opacity-70 ${currentTheme.styles.accentSoft}`}
              aria-hidden="true"
            >
              →
            </span>
          </div>
          {description && (
            <p
              className={`mt-1 text-sm leading-relaxed opacity-60 transition-opacity group-hover:opacity-80 ${
                compact ? 'line-clamp-1' : 'line-clamp-2'
              } ${currentTheme.colors.text}`}
            >
              {description}
            </p>
          )}
        </div>
      </div>
    </motion.a>
  );
};

interface LinkGridProps {
  links: Link[];
  accentColor?: string;
  variant?: 'primary' | 'secondary';
  themeName: ThemeName;
  startIndex?: number;
}

export const LinkGrid: FC<LinkGridProps> = ({
  links,
  variant = 'primary',
  themeName,
  startIndex = 0,
}) => {
  const compact = variant === 'secondary';

  return (
    <div
      className={
        compact
          ? 'grid grid-cols-1 gap-3 sm:grid-cols-2 sm:[&>:last-child:nth-child(odd)]:col-span-2'
          : 'flex flex-col gap-3'
      }
    >
      {links.map((link, index) => (
        <LinkCard
          key={link.title}
          link={link}
          index={startIndex + index}
          themeName={themeName}
          compact={compact}
        />
      ))}
    </div>
  );
};
