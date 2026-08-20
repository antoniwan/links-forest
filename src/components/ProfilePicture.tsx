/** @jsxImportSource react */
import { themeConfig } from '../config/theme.config';
import type { ThemeName } from '../data/theme.types';
import type { Size } from '../config/ui';
import { userConfig } from '../config/settings.loader';

interface ProfilePictureProps {
  name: string;
  image?: string;
  themeId?: ThemeName;
  size?: Size;
}

const sizeClasses = {
  sm: 'w-16 h-16 text-lg',
  md: 'w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40 text-xl sm:text-2xl',
  lg: 'w-36 h-36 sm:w-44 sm:h-44 lg:w-52 lg:h-52 text-2xl sm:text-4xl',
} as const;

export const ProfilePicture = ({
  name,
  image,
  themeId = userConfig.theme.active,
  size = 'md',
}: ProfilePictureProps) => {
  const theme = themeConfig[themeId];

  const initials = name
    .split(' ')
    .map((word) => word[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);

  const width = size === 'sm' ? 64 : size === 'md' ? 160 : 208;
  const height = size === 'sm' ? 64 : size === 'md' ? 160 : 208;
  const baseClass = `${sizeClasses[size]} rounded-full object-cover transition-transform duration-500 ease-out hover:scale-[1.03]`;

  return (
    <div
      className={`relative flex items-center justify-center ${theme.styles.ring}`}
      role="img"
      aria-label={`Profile picture of ${name}`}
    >
      {image ? (
        <img
          src={image}
          alt={`Profile picture of ${name}`}
          className={`${baseClass} shadow-lg`}
          width={width}
          height={height}
          loading="eager"
          decoding="async"
        />
      ) : (
        <div
          className={`${baseClass} flex items-center justify-center border border-black/5 bg-white shadow-lg dark:border-white/10 dark:bg-slate-800`}
          aria-hidden="true"
        >
          <span className="font-bold">{initials}</span>
        </div>
      )}
    </div>
  );
};
