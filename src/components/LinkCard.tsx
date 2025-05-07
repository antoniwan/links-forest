import { motion } from "framer-motion";
import type { FC } from "react";
import type { Link } from "../data/types";

interface LinkCardProps {
  link: Link;
  accentColor: string;
  variant?: "primary" | "secondary";
}

export const LinkCard: FC<LinkCardProps> = ({
  link,
  accentColor,
  variant = "primary",
}) => {
  const { url, title, description, category } = link;

  return (
    <motion.a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`block p-6 sm:p-8 bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 border border-gray-200 dark:border-gray-700 hover:border-opacity-100 ${accentColor}`}
      whileHover={{ scale: 1.01, y: -2 }}
      whileTap={{ scale: 0.99 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex flex-col gap-3">
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-xl sm:text-2xl font-serif font-semibold tracking-tight">
            {title}
          </h3>
          {category && (
            <span className="text-xs uppercase tracking-wider opacity-75 whitespace-nowrap">
              {category}
            </span>
          )}
        </div>
        <p className="text-base sm:text-lg opacity-90 leading-relaxed font-sans">
          {description}
        </p>
      </div>
    </motion.a>
  );
};

interface LinkGridProps {
  links: Link[];
  accentColor: string;
  variant?: "primary" | "secondary";
}

export const LinkGrid: FC<LinkGridProps> = ({
  links,
  accentColor,
  variant = "primary",
}) => {
  return (
    <motion.div
      className={
        variant === "primary"
          ? "flex flex-col gap-6"
          : "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
      }
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      {links.map((link) => (
        <LinkCard
          key={link.title}
          link={link}
          accentColor={accentColor}
          variant={variant}
        />
      ))}
    </motion.div>
  );
};
