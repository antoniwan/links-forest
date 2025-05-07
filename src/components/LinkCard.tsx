import { motion } from "framer-motion";
import type { FC } from "react";

interface LinkCardProps {
  href: string;
  title: string;
  description: string;
  accentColor: string;
}

export const LinkCard: FC<LinkCardProps> = ({
  href,
  title,
  description,
  accentColor,
}) => {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`block p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 border border-gray-200 dark:border-gray-700 hover:border-opacity-100 ${accentColor}`}
      whileHover={{ scale: 1.01, y: -2 }}
      whileTap={{ scale: 0.99 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex flex-col gap-2">
        <h3 className="text-xl font-semibold tracking-tight">{title}</h3>
        <p className="text-base opacity-90 leading-relaxed">{description}</p>
      </div>
    </motion.a>
  );
};
