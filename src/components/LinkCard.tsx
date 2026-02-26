import { motion } from 'framer-motion';
import React, { type FC } from 'react';
import type { Link } from '../data/types';
import { variants, interactions, transitions } from '../config/animations';
import { categoryIconMap, getCategoryIcon } from '../data/categoryIcons';
import { userConfig } from '../config/settings.loader';
import { themeConfig } from '../config/theme.config';

interface LinkCardProps {
  link: Link;
  accentColor: string;
  variant?: 'primary' | 'secondary';
}

export const LinkCard: FC<LinkCardProps> = ({ link, accentColor, variant = 'primary' }) => {
  const { url, title, description, category } = link;
  const currentTheme = themeConfig[userConfig.theme.active];

  return (
    <motion.a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`block rounded-lg p-6 shadow-sm transition-all duration-300 hover:shadow-md sm:p-8 ${currentTheme.styles.card} ${currentTheme.styles.border} ${accentColor}`}
      variants={variants.fadeInUp}
      whileHover={interactions.subtleHover}
      whileTap={interactions.active}
      transition={transitions.smooth}
    >
      <div className="flex flex-col gap-3">
        <div className="flex items-start justify-between gap-4">
          <h3
            className={`text-xl font-semibold tracking-tight sm:text-2xl ${currentTheme.colors.text}`}
          >
            {title}
          </h3>
          {category && (
            <div
              className={`flex h-8 w-8 items-center justify-center transition-colors duration-200 ${currentTheme.colors.text} opacity-60 hover:opacity-100`}
            >
              {React.createElement(categoryIconMap[getCategoryIcon(category)])}
            </div>
          )}
        </div>
        {description && (
          <p className={`leading-relaxed ${currentTheme.colors.text} opacity-80`}>{description}</p>
        )}
      </div>
    </motion.a>
  );
};

interface LinkGridProps {
  links: Link[];
  accentColor: string;
  variant?: 'primary' | 'secondary';
}

export const LinkGrid: FC<LinkGridProps> = ({ links, accentColor, variant = 'primary' }) => {
  return (
    <motion.div
      className={
        variant === 'primary'
          ? 'flex flex-col gap-6'
          : 'grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3'
      }
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      {links.map((link) => (
        <LinkCard key={link.title} link={link} accentColor={accentColor} variant={variant} />
      ))}
    </motion.div>
  );
};
