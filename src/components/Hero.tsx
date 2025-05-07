import React from "react";
import { ProfilePicture } from "./ProfilePicture";

interface HeroProps {
  name: string;
  image?: string;
  subtitle?: string;
}

export const Hero: React.FC<HeroProps> = ({ name, image, subtitle }) => {
  return (
    <section className="relative w-full max-w-4xl mx-auto flex flex-col md:flex-row items-center md:items-end gap-8 py-10 md:py-16 px-4 md:px-8 mb-10 md:mb-16">
      {/* Background gradient effect */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="w-full h-2/3 md:h-full bg-gradient-to-br from-blue-100/60 via-white/80 to-transparent dark:from-blue-900/40 dark:via-gray-900/80 dark:to-transparent rounded-3xl blur-2xl scale-105" />
      </div>
      {/* Profile Image */}
      <div className="z-10 flex-shrink-0 flex justify-center md:justify-end w-full md:w-auto">
        <ProfilePicture name={name} image={image} size="lg" />
      </div>
      {/* Name and Subtitle */}
      <div className="z-10 flex flex-col items-center md:items-start text-center md:text-left w-full md:w-auto">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-gray-100 mb-3 animate-fade-in-up">
          {name}
        </h1>
        {subtitle && (
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 dark:text-gray-300 max-w-2xl leading-relaxed animate-fade-in-up delay-100">
            {subtitle}
          </p>
        )}
      </div>
      {/* Animation styles moved to global.css */}
    </section>
  );
};
