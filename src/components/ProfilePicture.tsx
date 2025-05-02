/** @jsxImportSource react */
import { userConfig } from "../config/user.config";
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
  md: "w-32 h-32 text-2xl",
  lg: "w-48 h-48 text-4xl",
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

  const width = size === "sm" ? 64 : size === "md" ? 128 : 192;
  const height = size === "sm" ? 64 : size === "md" ? 128 : 192;
  const baseClass = `${sizeClasses[size]} rounded-full`;

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
          className={`${baseClass} object-cover`}
          width={width}
          height={height}
          loading="lazy"
        />
      ) : (
        <div
          className={`${baseClass} flex items-center justify-center ${theme.styles.border} border-2`}
          aria-hidden="true"
        >
          <span className="font-bold">{initials}</span>
        </div>
      )}
    </div>
  );
};
