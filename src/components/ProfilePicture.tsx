/** @jsxImportSource react */
import { userConfig } from "../config/settings.loader";
import type { ThemeName } from "../data/theme.types";
import type { Size } from "../config/ui";

interface ProfilePictureProps {
  name: string;
  image?: string;
  themeId?: ThemeName;
  size?: Size;
}

const sizeClasses = {
  sm: "w-16 h-16 text-lg",
  md: "w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40 text-xl sm:text-2xl",
  lg: "w-32 h-32 sm:w-48 sm:h-48 lg:w-64 lg:h-64 text-2xl sm:text-4xl",
} as const;

export const ProfilePicture = ({
  name,
  image,
  themeId = userConfig.theme.active,
  size = "md",
}: ProfilePictureProps) => {
  const theme = userConfig.theme.config;

  const initials = name
    .split(" ")
    .map((word) => word[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);

  const width = size === "sm" ? 64 : size === "md" ? 160 : 256;
  const height = size === "sm" ? 64 : size === "md" ? 160 : 256;
  const baseClass = `${sizeClasses[size]} rounded-full transition-all duration-500 ease-in-out`;

  return (
    <div
      className="flex items-center justify-center"
      role="img"
      aria-label={`Profile picture of ${name}`}
    >
      {image ? (
        <img
          src={image}
          alt={`Profile picture of ${name}`}
          className={`${baseClass} object-cover ${theme.styles.border} border-2 hover:scale-105 hover:shadow-lg`}
          width={width}
          height={height}
          loading="lazy"
        />
      ) : (
        <div
          className={`${baseClass} flex items-center justify-center ${theme.styles.border} border-2 bg-white dark:bg-gray-800 hover:scale-105 hover:shadow-lg`}
          aria-hidden="true"
        >
          <span className="font-bold">{initials}</span>
        </div>
      )}
    </div>
  );
};
