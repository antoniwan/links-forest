import React from "react";
import { ProfilePicture } from "./ProfilePicture";
import { userConfig } from "../config/settings.loader";
import { themeConfig } from "../config/theme.config";

interface HeroProps {
  name: string;
  image?: string;
  /** Subtitle/tagline; may contain simple HTML (e.g. <sup>4</sup>) */
  subtitle?: string;
}

export const Hero: React.FC<HeroProps> = ({ name, image, subtitle }) => {
  const currentTheme = themeConfig[userConfig.theme.active];

  return (
    <section className="relative w-full max-w-4xl mx-auto flex flex-col md:flex-row items-center md:items-end gap-8 py-10 md:py-16 px-4 md:px-8 mb-10 md:mb-16">
      {/* Background gradient effect */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div
          className={`w-full h-2/3 md:h-full bg-gradient-to-br from-${
            currentTheme.colors.primary.split("-")[1]
          }-100/60 via-white/80 to-transparent dark:from-${
            currentTheme.colors.primary.split("-")[1]
          }-900/40 dark:via-gray-900/80 dark:to-transparent rounded-3xl blur-2xl scale-105`}
        />
      </div>
      {/* Profile Image */}
      <div className="z-10 flex-shrink-0 flex justify-center md:justify-end w-full md:w-auto">
        <ProfilePicture name={name} image={image} size="lg" />
      </div>
      {/* Name and Subtitle */}
      <div className="z-10 flex flex-col items-center md:items-start text-center md:text-left w-full md:w-auto">
        <h1
          className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight ${currentTheme.colors.text} mb-3 animate-fade-in-up`}
        >
          {name}
        </h1>
        {subtitle && (
          <p
            className={`text-lg sm:text-xl lg:text-2xl max-w-2xl leading-relaxed animate-fade-in-up delay-100 ${currentTheme.colors.text} opacity-80`}
            dangerouslySetInnerHTML={{ __html: subtitle }}
          />
        )}
      </div>
      {/* Animation styles moved to global.css */}
    </section>
  );
};
