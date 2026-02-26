import React from 'react';
import { ProfilePicture } from './ProfilePicture';
import { userConfig } from '../config/settings.loader';
import { themeConfig } from '../config/theme.config';

interface HeroProps {
  name: string;
  image?: string;
  /** Subtitle/tagline; may contain simple HTML (e.g. <sup>4</sup>) */
  subtitle?: string;
}

export const Hero: React.FC<HeroProps> = ({ name, image, subtitle }) => {
  const currentTheme = themeConfig[userConfig.theme.active];

  return (
    <section className="relative mx-auto mb-10 flex w-full max-w-4xl flex-col items-center gap-8 px-4 py-10 md:mb-16 md:flex-row md:items-end md:px-8 md:py-16">
      {/* Background gradient effect */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div
          className={`h-2/3 w-full bg-gradient-to-br md:h-full from-${
            currentTheme.colors.primary.split('-')[1]
          }-100/60 via-white/80 to-transparent dark:from-${
            currentTheme.colors.primary.split('-')[1]
          }-900/40 scale-105 rounded-3xl blur-2xl dark:via-gray-900/80 dark:to-transparent`}
        />
      </div>
      {/* Profile Image */}
      <div className="z-10 flex w-full flex-shrink-0 justify-center md:w-auto md:justify-end">
        <ProfilePicture name={name} image={image} size="lg" />
      </div>
      {/* Name and Subtitle */}
      <div className="z-10 flex w-full flex-col items-center text-center md:w-auto md:items-start md:text-left">
        <h1
          className={`text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl ${currentTheme.colors.text} animate-fade-in-up mb-3`}
        >
          {name}
        </h1>
        {subtitle && (
          <p
            className={`animate-fade-in-up max-w-2xl text-lg leading-relaxed delay-100 sm:text-xl lg:text-2xl ${currentTheme.colors.text} opacity-80`}
            dangerouslySetInnerHTML={{ __html: subtitle }}
          />
        )}
      </div>
      {/* Animation styles moved to global.css */}
    </section>
  );
};
