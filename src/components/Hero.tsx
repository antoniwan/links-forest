import { ProfilePicture } from './ProfilePicture';
import { userConfig } from '../config/settings.loader';
import { themeConfig } from '../config/theme.config';
import type { ThemeName } from '../data/theme.types';

interface HeroProps {
  name: string;
  image?: string;
  /** Subtitle/tagline; may contain simple HTML (e.g. <sup>4</sup>) */
  subtitle?: string;
}

const heroGlow: Record<ThemeName, string> = {
  builder: 'from-stone-100/60 dark:from-stone-900/40',
  wolf: 'from-slate-100/60 dark:from-slate-900/40',
  mystic: 'from-purple-100/60 dark:from-purple-900/40',
  dragon: 'from-red-100/60 dark:from-red-900/40',
  artist: 'from-pink-100/60 dark:from-pink-900/40',
  warrior: 'from-slate-100/60 dark:from-slate-900/40',
  healer: 'from-emerald-100/60 dark:from-emerald-900/40',
  alchemist: 'from-violet-100/60 dark:from-violet-900/40',
  strategist: 'from-blue-100/60 dark:from-blue-900/40',
  steward: 'from-green-100/60 dark:from-green-900/40',
};

export const Hero = ({ name, image, subtitle }: HeroProps) => {
  const currentTheme = themeConfig[userConfig.theme.active];

  return (
    <section className="relative mx-auto mb-10 flex w-full max-w-4xl flex-col items-center gap-8 px-4 py-10 md:mb-16 md:flex-row md:items-end md:px-8 md:py-16">
      {/* Background gradient effect */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div
          className={`h-2/3 w-full scale-105 rounded-3xl bg-linear-to-br via-white/80 to-transparent blur-2xl md:h-full dark:via-gray-900/80 dark:to-transparent ${heroGlow[userConfig.theme.active]}`}
        />
      </div>
      {/* Profile Image */}
      <div className="z-10 flex w-full shrink-0 justify-center md:w-auto md:justify-end">
        <ProfilePicture name={name} image={image} size="lg" />
      </div>
      {/* Name and Subtitle */}
      <div className="z-10 flex w-full flex-col items-center text-center md:w-auto md:items-start md:text-left">
        <h1
          className={`animate-fade-in-up mb-3 text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl ${currentTheme.colors.text}`}
        >
          {name}
        </h1>
        {subtitle && (
          <p
            className={`animate-fade-in-up max-w-2xl text-lg leading-relaxed opacity-80 delay-100 sm:text-xl lg:text-2xl ${currentTheme.colors.text}`}
            dangerouslySetInnerHTML={{ __html: subtitle }}
          />
        )}
      </div>
    </section>
  );
};
