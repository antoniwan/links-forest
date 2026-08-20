import { ProfilePicture } from './ProfilePicture';
import { userConfig } from '../config/settings.loader';
import { themeConfig } from '../config/theme.config';

interface HeroProps {
  name: string;
  image?: string;
  /** Subtitle/tagline; may contain simple HTML (e.g. <sup>4</sup>) */
  subtitle?: string;
}

export const Hero = ({ name, image, subtitle }: HeroProps) => {
  const currentTheme = themeConfig[userConfig.theme.active];

  return (
    <section className="relative z-10 flex w-full flex-col items-center gap-8 text-center md:flex-row md:items-center md:gap-12 md:text-left">
      <div className={`shrink-0 ${userConfig.theme.active === 'warrior' ? '' : 'animate-soft-float'}`}>
        <ProfilePicture name={name} image={image} size="lg" />
      </div>

      <div className="flex min-w-0 flex-1 flex-col items-center md:items-start">
        <h1
          className={`animate-fade-in-up text-4xl leading-[1.05] font-bold tracking-tight sm:text-5xl lg:text-6xl ${
            userConfig.theme.active === 'warrior'
              ? 'font-warrior-display text-5xl tracking-[0.08em] uppercase sm:text-6xl lg:text-7xl'
              : ''
          } ${currentTheme.colors.text}`}
        >
          {name}
        </h1>
        {subtitle && (
          <p
            className={`animate-fade-in-up delay-100 mt-4 max-w-xl text-lg leading-relaxed opacity-75 sm:text-xl ${currentTheme.colors.text}`}
            dangerouslySetInnerHTML={{ __html: subtitle }}
          />
        )}
      </div>
    </section>
  );
};
