import { motion } from "framer-motion";
import type { FC } from "react";
import type { SocialLink, SocialPlatform } from "../data/types";
import { emojiMap } from "../data/emojis";

interface SocialIconsProps {
  socialLinks: SocialLink[];
  className?: string;
}

// Group social platforms by category for better organization
const platformCategories: Record<string, SocialPlatform[]> = {
  professional: ["linkedin", "github"],
  social: ["twitter", "instagram", "facebook", "reddit", "tiktok"],
  communication: ["whatsapp", "telegram", "discord", "slack"],
  media: ["youtube"],
  contact: ["email", "website"],
} as const;

export const SocialIcons: FC<SocialIconsProps> = ({
  socialLinks,
  className = "",
}) => {
  // Group links by category
  const groupedLinks = socialLinks.reduce((acc, link) => {
    const category =
      Object.entries(platformCategories).find(([_, platforms]) =>
        platforms.includes(link.platform)
      )?.[0] || "other";

    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(link);
    return acc;
  }, {} as Record<string, SocialLink[]>);

  return (
    <div className={`w-full max-w-2xl mx-auto ${className}`}>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
        {Object.entries(groupedLinks).map(([category, links]) => (
          <div key={category} className="flex flex-col items-center space-y-3">
            {links.map((item) => (
              <motion.a
                key={item.platform}
                href={item.url}
                className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-white dark:bg-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-300 shadow-sm hover:shadow-md border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 dark:focus:ring-offset-gray-800"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit ${item.platform}`}
                whileHover={{ scale: 1.05, rotate: 2 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <span className="sr-only">{item.platform}</span>
                <span className="text-2xl sm:text-3xl transform transition-transform duration-300 hover:scale-110">
                  {emojiMap[item.icon as keyof typeof emojiMap]}
                </span>
              </motion.a>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};
