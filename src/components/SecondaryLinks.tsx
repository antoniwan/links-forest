import { motion } from "framer-motion";
import type { FC } from "react";
import type { SecondaryLink } from "../data/types";

interface SecondaryLinksProps {
  links: SecondaryLink[];
  accentColor: string;
}

export const SecondaryLinks: FC<SecondaryLinksProps> = ({
  links,
  accentColor,
}) => {
  return (
    <motion.div
      className="grid grid-cols-2 sm:grid-cols-3 gap-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      {links.map((link) => (
        <motion.a
          key={link.title}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className={`p-4 text-center rounded-lg bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-200 dark:border-gray-700 hover:border-opacity-100 ${accentColor}`}
          whileHover={{ scale: 1.02, y: -2 }}
          whileTap={{ scale: 0.98 }}
        >
          <h3 className="text-lg font-semibold tracking-tight mb-1">
            {link.title}
          </h3>
          <p className="text-sm opacity-90">{link.description}</p>
        </motion.a>
      ))}
    </motion.div>
  );
};
