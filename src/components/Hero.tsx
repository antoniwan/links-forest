import { ProfilePicture } from './ProfilePicture';
import { themeConfig } from '../config/theme.config';
import type { ThemeName } from '../data/theme.types';

interface HeroProps {
  name: string;
  image?: string;
  /** Subtitle/tagline; may contain simple HTML (e.g. <sup>4</sup>) */
  subtitle?: string;
  themeName: ThemeName;
}

export const Hero = ({ name, image, subtitle, themeName }: HeroProps) => {
  const currentTheme = themeConfig[themeName];

  return (
    <section className="relative z-10 flex w-full flex-col items-center gap-8 text-center md:flex-row md:items-center md:gap-12 md:text-left">
      <div className="shrink-0">
        <ProfilePicture name={name} image={image} size="lg" themeId={themeName} />
      </div>

      <div className="flex min-w-0 flex-1 flex-col items-center md:items-start">
        <h1
          className={`animate-fade-in-up text-4xl leading-[1.1] sm:text-5xl lg:text-6xl ${currentTheme.styles.display} ${currentTheme.colors.text}`}
        >
          {name}
        </h1>
        {subtitle && (
          <p
            className={`animate-fade-in-up delay-100 mt-4 max-w-xl text-lg leading-relaxed opacity-70 sm:text-xl ${currentTheme.colors.text}`}
            dangerouslySetInnerHTML={{ __html: subtitle }}
          />
        )}
      </div>
    </section>
  );
};
