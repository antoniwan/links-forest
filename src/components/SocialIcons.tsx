import { motion } from 'framer-motion';
import type { FC } from 'react';
import type { SocialLink } from '../data/types';
import { socialIconMap } from '../data/icons';
import { variants, interactions, transitions } from '../config/animations';
import { userConfig } from '../config/settings.loader';
import { themeConfig } from '../config/theme.config';

interface SocialIconsProps {
  socialLinks: SocialLink[];
  className?: string;
}

export const SocialIcons: FC<SocialIconsProps> = ({ socialLinks, className = '' }) => {
  const currentTheme = themeConfig[userConfig.theme.active];

  // Group social links by category
  const groupedLinks = socialLinks.reduce<Record<string, SocialLink[]>>((acc, link) => {
    const category = link.platform;
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(link);
    return acc;
  }, {});

  return (
    <motion.div
      className={`mx-auto w-full max-w-2xl ${className}`}
      variants={variants.staggerContainer}
      initial="initial"
      animate="animate"
    >
      <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-5">
        {Object.entries(groupedLinks).map(([category, links]) => (
          <div key={category} className="flex flex-col items-center space-y-4">
            {links.map((item) => {
              const Icon = socialIconMap[item.icon as keyof typeof socialIconMap];
              return (
                <motion.a
                  key={item.platform}
                  href={item.url}
                  className={`flex h-14 w-14 items-center justify-center rounded-2xl shadow-sm transition-all duration-300 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 sm:h-16 sm:w-16 ${currentTheme.styles.card} ${currentTheme.styles.border} ${currentTheme.colors.text} opacity-80 hover:opacity-100`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit ${item.platform}`}
                  variants={variants.staggerItem}
                  whileHover={interactions.playfulHover}
                  whileTap={interactions.active}
                  transition={transitions.smooth}
                >
                  <span className="sr-only">{item.platform}</span>
                  <motion.div
                    className="text-2xl sm:text-3xl"
                    whileHover={{ scale: 1.1 }}
                    transition={transitions.quick}
                  >
                    {Icon && <Icon />}
                  </motion.div>
                </motion.a>
              );
            })}
          </div>
        ))}
      </div>
    </motion.div>
  );
};
