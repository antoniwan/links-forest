import { motion } from 'framer-motion';
import { createElement, type FC } from 'react';
import type { Link } from '../data/types';
import { interactions, transitions } from '../config/animations';
import { categoryIconMap, getCategoryIcon } from '../data/categoryIcons';
import { userConfig } from '../config/settings.loader';
import { themeConfig } from '../config/theme.config';

interface LinkCardProps {
  link: Link;
  index: number;
}

export const LinkCard: FC<LinkCardProps> = ({ link, index }) => {
  const { url, title, description, category } = link;
  const currentTheme = themeConfig[userConfig.theme.active];
  const Icon = category ? categoryIconMap[getCategoryIcon(category)] : null;

  return (
    <motion.a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`group relative block overflow-hidden p-5 sm:p-6 ${currentTheme.styles.card}`}
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ ...transitions.smooth, delay: index * 0.05 }}
      whileHover={interactions.subtleHover}
      whileTap={interactions.active}
    >
      <div
        className={`pointer-events-none absolute inset-y-0 left-0 w-1 origin-top scale-y-0 bg-linear-to-b opacity-0 transition-all duration-300 group-hover:scale-y-100 group-hover:opacity-100 ${currentTheme.colors.accent}`}
        aria-hidden="true"
      />

      <div className="flex items-start justify-between gap-4">
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
}

export const LinkGrid: FC<LinkGridProps> = ({ links, variant = 'primary' }) => {
  return (
    <div
      className={
        variant === 'primary'
          ? 'flex flex-col gap-3 sm:gap-4'
          : 'grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4'
      }
    >
      {links.map((link, index) => (
        <LinkCard key={link.title} link={link} index={index} />
      ))}
    </div>
  );
};
