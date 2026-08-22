import { motion } from 'framer-motion';
import { createElement, type FC } from 'react';
import type { Link } from '../data/types';
import { categoryIconMap, getCategoryIcon } from '../data/categoryIcons';
import { themeConfig } from '../config/theme.config';
import type { ThemeName, ThemeRail } from '../data/theme.types';

interface LinkCardProps {
  link: Link;
  index: number;
  themeName: ThemeName;
}

function AccentRail({
  rail,
  accent,
  accentSoft,
}: {
  rail: ThemeRail;
  accent: string;
  accentSoft: string;
}) {
  switch (rail) {
    case 'left':
      return (
        <div
          className={`pointer-events-none absolute inset-y-0 left-0 w-1 origin-top scale-y-0 bg-linear-to-b opacity-0 transition-all duration-300 group-hover:scale-y-100 group-hover:opacity-100 ${accent}`}
          aria-hidden="true"
        />
      );
    case 'bottom':
      return (
        <div
          className={`pointer-events-none absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 bg-linear-to-r opacity-0 transition-all duration-300 group-hover:scale-x-100 group-hover:opacity-100 ${accent}`}
          aria-hidden="true"
        />
      );
    case 'glow':
      return (
        <div
          className={`pointer-events-none absolute -inset-px rounded-[inherit] opacity-0 blur-md transition-opacity duration-500 group-hover:opacity-40 ${accent}`}
          aria-hidden="true"
        />
      );
    case 'frame':
      return (
        <div
          className={`pointer-events-none absolute inset-0 rounded-[inherit] border-2 border-transparent transition-colors duration-200 group-hover:border-current ${accentSoft}`}
          aria-hidden="true"
        />
      );
    case 'slash':
      return (
        <div
          className={`pointer-events-none absolute -top-8 -right-8 h-20 w-20 origin-center rotate-45 scale-0 bg-linear-to-br opacity-0 transition-all duration-300 group-hover:scale-100 group-hover:opacity-30 ${accent}`}
          aria-hidden="true"
        />
      );
    default:
      return null;
  }
}

export const LinkCard: FC<LinkCardProps> = ({ link, index, themeName }) => {
  const { url, title, description, category } = link;
  const currentTheme = themeConfig[themeName];
  const { motion: themeMotion } = currentTheme;
  const Icon = category ? categoryIconMap[getCategoryIcon(category)] : null;

  return (
    <motion.a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`group relative block overflow-hidden p-5 sm:p-6 ${currentTheme.styles.card}`}
      initial={{ opacity: 0, ...themeMotion.cardEntrance }}
      animate={{ opacity: 1, x: 0, y: 0, scale: 1, filter: 'blur(0px)', rotate: 0 }}
      transition={{ ...themeMotion.cardTransition, delay: index * themeMotion.stagger }}
      whileHover={themeMotion.cardHover}
      whileTap={themeMotion.cardTap}
    >
      <AccentRail
        rail={themeMotion.rail}
        accent={currentTheme.colors.accent}
        accentSoft={currentTheme.styles.accentSoft}
      />

      <div className="relative flex items-start justify-between gap-4">
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-3">
            {Icon && (
              <span
                className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-black/4 text-base opacity-70 transition-opacity group-hover:opacity-100 dark:bg-white/8 ${currentTheme.styles.accentSoft}`}
              >
                {createElement(Icon)}
              </span>
            )}
            <h3
              className={`truncate text-lg font-semibold tracking-tight sm:text-xl ${currentTheme.colors.text}`}
            >
              {title}
            </h3>
          </div>
          {description && (
            <p
              className={`mt-2 text-sm leading-relaxed opacity-65 transition-opacity group-hover:opacity-80 sm:text-[0.95rem] ${currentTheme.colors.text}`}
            >
              {description}
            </p>
          )}
        </div>

        <span
          className={`mt-1 shrink-0 text-lg opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:opacity-70 ${currentTheme.styles.accentSoft}`}
          aria-hidden="true"
        >
          →
        </span>
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
  return (
    <div
      className={
        variant === 'primary'
          ? 'flex flex-col gap-3 sm:gap-4'
          : 'grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4'
      }
    >
      {links.map((link, index) => (
        <LinkCard
          key={link.title}
          link={link}
          index={startIndex + index}
          themeName={themeName}
        />
      ))}
    </div>
  );
};
