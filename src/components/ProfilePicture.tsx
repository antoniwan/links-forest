/** @jsxImportSource react */
import { themeConfig } from '../config/theme.config';
import type { ThemeName } from '../data/theme.types';
import type { Size } from '../config/ui';

interface ProfilePictureProps {
  name: string;
  image?: string;
  themeId: ThemeName;
  size?: Size;
}

const sizeClasses = {
  sm: 'h-16 w-16 text-lg',
  md: 'h-[4.5rem] w-[4.5rem] text-xl sm:h-24 sm:w-24 sm:text-2xl',
  lg: 'h-24 w-24 text-2xl sm:h-32 sm:w-32 sm:text-3xl lg:h-36 lg:w-36',
} as const;

const pixelSize = {
  sm: 64,
  md: 96,
  lg: 144,
} as const;

function imageSrc(image: string) {
  if (image.startsWith('http') || image.startsWith('/') || image.startsWith('data:')) {
    return image;
  }
  return `/${image}`;
}

export const ProfilePicture = ({
  name,
  image,
  themeId,
  size = 'md',
}: ProfilePictureProps) => {
  const theme = themeConfig[themeId];

  const initials = name
    .split(' ')
    .map((word) => word[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);

  const dim = pixelSize[size];
  const baseClass = `${sizeClasses[size]} rounded-full object-cover transition-transform duration-500 ease-out hover:scale-[1.03]`;

  return (
    <div
      className={`relative flex items-center justify-center rounded-full ${theme.styles.ring}`}
      role="img"
      aria-label={`Profile picture of ${name}`}
    >
      {image ? (
        <img
          src={imageSrc(image)}
          alt={`Profile picture of ${name}`}
          className={`${baseClass} shadow-md`}
          width={dim}
          height={dim}
          loading="eager"
          decoding="async"
        />
      ) : (
        <div
          className={`${baseClass} flex items-center justify-center border border-black/5 bg-white shadow-md dark:border-white/10 dark:bg-slate-800`}
          aria-hidden="true"
        >
          <span className="font-bold">{initials}</span>
        </div>
      )}
    </div>
  );
};
