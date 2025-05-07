import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import type { FC } from "react";
import type { SecondaryLink } from "../data/types";
import { LinkCard } from "./LinkCard";

interface SecondaryLinksProps {
  links: SecondaryLink[];
  accentColor?: string;
  className?: string;
}

export const SecondaryLinks: FC<SecondaryLinksProps> = ({
  links,
  accentColor = "rgb(59, 130, 246)", // default blue-500
  className = "",
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  // Group links by category if they have categories
  const groupedLinks = links.reduce((acc, link) => {
    const category = link.category || "Other";
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(link);
    return acc;
  }, {} as Record<string, SecondaryLink[]>);

  return (
    <div className={`space-y-4 ${className}`}>
      <motion.button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full p-4 text-center text-gray-600 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white transition-colors duration-200"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        {isExpanded ? "Show Less" : "View More Links"}
      </motion.button>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="space-y-6"
          >
            {Object.entries(groupedLinks).map(([category, categoryLinks]) => (
              <div key={category} className="space-y-4">
                {category !== "Other" && (
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                    {category}
                  </h3>
                )}
                <div className="space-y-4">
                  {categoryLinks.map((link) => (
                    <LinkCard
                      key={link.url}
                      href={link.url}
                      title={link.title}
                      description={link.description}
                      accentColor={accentColor}
                    />
                  ))}
                </div>
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
