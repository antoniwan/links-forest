import { motion } from "framer-motion";
import type { FC } from "react";
import type { SocialLink } from "../data/types";
import { emojiMap } from "../data/emojis";

interface SocialIconsProps {
  socialLinks: SocialLink[];
  className?: string;
}

export const SocialIcons: FC<SocialIconsProps> = ({
  socialLinks,
  className = "",
}) => {
  return (
    <div className={`flex justify-center space-x-6 ${className}`}>
      {socialLinks.map((item) => (
        <motion.a
          key={item.platform}
          href={item.url}
          className="w-12 h-12 rounded-full bg-white dark:bg-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-300 shadow-sm hover:shadow-md border border-gray-200 dark:border-gray-700"
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Visit ${item.platform}`}
          whileHover={{ scale: 1.1, rotate: 5 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <span className="sr-only">{item.platform}</span>
          <span className="text-xl">
            {emojiMap[item.icon as keyof typeof emojiMap]}
          </span>
        </motion.a>
      ))}
    </div>
  );
};
