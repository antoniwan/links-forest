import { motion } from 'framer-motion';
import type { FC } from 'react';
import type { SocialLink } from '../data/types';
import { socialIconMap } from '../data/icons';
import { interactions, transitions } from '../config/animations';
import { userConfig } from '../config/settings.loader';
import { themeConfig } from '../config/theme.config';

interface SocialIconsProps {
  socialLinks: SocialLink[];
  className?: string;
}

export const SocialIcons: FC<SocialIconsProps> = ({ socialLinks, className = '' }) => {
  const currentTheme = themeConfig[userConfig.theme.active];

  return (
    <motion.div
      className={`flex flex-wrap items-center justify-center gap-3 ${className}`}
      initial="hidden"
      animate="show"
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: 0.04 } },
      }}
    >
      {socialLinks.map((item) => {
        const Icon = socialIconMap[item.icon as keyof typeof socialIconMap];
        return (
          <motion.a
            key={item.platform}
            href={item.url}
            className={`flex h-12 w-12 items-center justify-center rounded-2xl text-xl opacity-75 transition-opacity hover:opacity-100 focus:outline-hidden focus-visible:ring-2 focus-visible:ring-offset-2 sm:h-14 sm:w-14 sm:text-2xl ${currentTheme.styles.card} ${currentTheme.colors.text}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Visit ${item.platform}`}
            variants={{
              hidden: { opacity: 0, y: 10 },
              show: { opacity: 1, y: 0 },
            }}
            whileHover={interactions.playfulHover}
            whileTap={interactions.active}
            transition={transitions.smooth}
          >
            {Icon && <Icon />}
          </motion.a>
        );
      })}
    </motion.div>
  );
};
