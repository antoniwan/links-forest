import { motion } from 'framer-motion';
import type { FC } from 'react';
import type { SocialLink } from '../data/types';
import { emojiMap } from '../data/emojis';
import { themeConfig } from '../config/theme.config';
import type { ThemeName } from '../data/theme.types';

interface SocialIconsProps {
  socialLinks: SocialLink[];
  className?: string;
  themeName: ThemeName;
}

export const SocialIcons: FC<SocialIconsProps> = ({
  socialLinks,
  className = '',
  themeName,
}) => {
  const currentTheme = themeConfig[themeName];
  const { motion: themeMotion } = currentTheme;

  return (
    <motion.div
      className={`flex flex-wrap items-center justify-center gap-3 ${className}`}
      initial="hidden"
      animate="show"
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: themeMotion.stagger } },
      }}
    >
      {socialLinks.map((item) => {
        const emoji = emojiMap[item.icon];
        return (
          <motion.a
            key={item.platform}
            href={item.url}
            className={`flex h-12 w-12 items-center justify-center rounded-2xl text-xl opacity-75 transition-opacity hover:opacity-100 focus:outline-hidden focus-visible:ring-2 focus-visible:ring-offset-2 sm:h-14 sm:w-14 sm:text-2xl ${currentTheme.styles.card} ${currentTheme.colors.text}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Visit ${item.platform}`}
            variants={{
              hidden: { opacity: 0, ...themeMotion.cardEntrance },
              show: { opacity: 1, x: 0, y: 0, scale: 1, filter: 'blur(0px)', rotate: 0 },
            }}
            whileHover={themeMotion.socialHover}
            whileTap={themeMotion.cardTap}
            transition={themeMotion.cardTransition}
          >
            <span aria-hidden="true">{emoji}</span>
          </motion.a>
        );
      })}
    </motion.div>
  );
};
