import { motion } from "framer-motion";
import type { FC } from "react";
import type { Theme } from "../data/types";
import { userConfig } from "../config/user.config";
import type { Size } from "../config/ui";

interface ProfilePictureProps {
  name: string;
  image?: string;
  themeId?: Theme;
  size?: Size;
}

const sizeClasses = {
  sm: "w-16 h-16 text-lg",
  md: "w-32 h-32 text-2xl",
  lg: "w-48 h-48 text-4xl",
} as const;

export const ProfilePicture: FC<ProfilePictureProps> = ({
  name,
  image,
  themeId = userConfig.theme.active,
  size = "md",
}) => {
  const theme = userConfig.theme;
  const initials = name
    .split(" ")
    .map((word) => word[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);

  const width = size === "sm" ? 64 : size === "md" ? 128 : 192;
  const height = size === "sm" ? 64 : size === "md" ? 128 : 192;
  const baseClass = `${sizeClasses[size]} rounded-full`;

  return (
    <motion.div
      className="flex items-center justify-center"
      role="img"
      aria-label={`Profile picture of ${name}`}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
    >
      {image ? (
        <motion.img
          src={image}
          alt={`Profile picture of ${name}`}
          className={`${baseClass} object-cover`}
          width={width}
          height={height}
          loading="lazy"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        />
      ) : (
        <motion.div
          className={`${baseClass} flex items-center justify-center ${theme.accent} border-2`}
          aria-hidden="true"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="font-bold">{initials}</span>
        </motion.div>
      )}
    </motion.div>
  );
};
