import { ProfilePicture } from './ProfilePicture';
import { SocialIcons } from './SocialIcons';
import { themeConfig } from '../config/theme.config';
import type { ThemeName } from '../data/theme.types';
import type { SocialLink } from '../data/types';

interface HeroProps {
  name: string;
  handle?: string;
  image?: string;
  /** Subtitle/tagline; may contain simple HTML (e.g. <sup>4</sup>) */
  subtitle?: string;
  themeName: ThemeName;
  socialLinks?: SocialLink[];
}

function formatHandle(handle: string) {
  return `@${handle.replace(/^@/, '').toLowerCase()}`;
}

export const Hero = ({
  name,
  handle,
  image,
  subtitle,
  themeName,
  socialLinks = [],
}: HeroProps) => {
  const currentTheme = themeConfig[themeName];

  return (
    <section className="relative z-10 flex w-full items-center gap-5 text-left sm:gap-7">
      <div className="shrink-0">
        <ProfilePicture name={name} image={image} size="md" themeId={themeName} />
      </div>

      <div className="flex min-w-0 flex-1 flex-col items-start">
        {handle && (
          <p
            className={`mb-1.5 text-[11px] font-medium lowercase opacity-80 ${currentTheme.styles.kicker} ${currentTheme.styles.accentSoft}`}
          >
            {formatHandle(handle)}
          </p>
        )}
        <h1
          className={`animate-fade-in-up text-[1.65rem] leading-[1.12] sm:text-4xl lg:text-[2.65rem] ${currentTheme.styles.display} ${currentTheme.colors.text}`}
        >
          {name}
        </h1>
        {subtitle && (
          <p
            className={`animate-fade-in-up delay-100 mt-2 max-w-md text-[0.95rem] leading-snug opacity-65 sm:text-lg ${currentTheme.colors.text}`}
            dangerouslySetInnerHTML={{ __html: subtitle }}
          />
        )}
        {socialLinks.length > 0 && (
          <SocialIcons
            socialLinks={socialLinks}
            themeName={themeName}
            size="sm"
            align="start"
            variant="ghost"
            className="animate-fade-in-up delay-200 mt-4"
          />
        )}
      </div>
    </section>
  );
};
