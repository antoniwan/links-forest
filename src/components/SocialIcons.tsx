import { motion } from "framer-motion";
import type { FC } from "react";
import type { SocialLink } from "../data/types";
import { socialIconMap } from "../data/icons";
import { variants, interactions, transitions } from "../config/animations";
import { userConfig } from "../config/settings.loader";
import { themeConfig } from "../config/theme.config";

interface SocialIconsProps {
  socialLinks: SocialLink[];
  className?: string;
}

export const SocialIcons: FC<SocialIconsProps> = ({
  socialLinks,
  className = "",
}) => {
  const currentTheme = themeConfig[userConfig.theme.active];

  // Group social links by category
  const groupedLinks = socialLinks.reduce<Record<string, SocialLink[]>>(
    (acc, link) => {
      const category = link.platform;
      if (!acc[category]) {
        acc[category] = [];
      }
      acc[category].push(link);
      return acc;
    },
    {}
  );

  return (
    <motion.div
      className={`w-full max-w-2xl mx-auto ${className}`}
      variants={variants.staggerContainer}
      initial="initial"
      animate="animate"
    >
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
        {Object.entries(groupedLinks).map(([category, links]) => (
          <div key={category} className="flex flex-col items-center space-y-4">
            {links.map((item) => {
              const Icon =
                socialIconMap[item.icon as keyof typeof socialIconMap];
              return (
                <motion.a
                  key={item.platform}
                  href={item.url}
                  className={`w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center transition-all duration-300 shadow-sm hover:shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 ${currentTheme.styles.card} ${currentTheme.styles.border} ${currentTheme.colors.text} hover:opacity-100 opacity-80`}
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
