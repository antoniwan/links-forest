import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useRef, useState, type FC, type PointerEvent } from 'react';
import type { SocialLink, SocialPlatform } from '../data/types';
import { emojiMap } from '../data/emojis';
import { themeConfig } from '../config/theme.config';
import type { ThemeName, ThemeMotion } from '../data/theme.types';

const platformLabel: Record<SocialPlatform, string> = {
  twitter: 'X',
  github: 'GitHub',
  linkedin: 'LinkedIn',
  instagram: 'Instagram',
  facebook: 'Facebook',
  youtube: 'YouTube',
  whatsapp: 'WhatsApp',
  telegram: 'Telegram',
  discord: 'Discord',
  slack: 'Slack',
  reddit: 'Reddit',
  tiktok: 'TikTok',
  email: 'Email',
  website: 'Website',
  lastfm: 'Last.fm',
  spotify: 'Spotify',
  medium: 'Medium',
  devto: 'Dev.to',
  stackoverflow: 'Stack Overflow',
  behance: 'Behance',
  dribbble: 'Dribbble',
  pinterest: 'Pinterest',
  twitch: 'Twitch',
  soundcloud: 'SoundCloud',
  apple: 'Apple',
  android: 'Android',
  windows: 'Windows',
  linux: 'Linux',
  mastodon: 'Mastodon',
  threads: 'Threads',
  bluesky: 'Bluesky',
};

const tooltipMotion = {
  initial: { opacity: 0, y: 8, scale: 0.92, x: '-50%' },
  animate: { opacity: 1, y: 0, scale: 1, x: '-50%' },
  exit: { opacity: 0, y: 4, scale: 0.96, x: '-50%' },
  transition: { type: 'spring' as const, stiffness: 520, damping: 34, mass: 0.55 },
};

interface SocialIconsProps {
  socialLinks: SocialLink[];
  className?: string;
  themeName: ThemeName;
  size?: 'sm' | 'md';
  align?: 'start' | 'center';
  variant?: 'ghost' | 'solid';
}

interface SocialIconProps {
  item: SocialLink;
  index: number;
  sizeClass: string;
  surfaceClass: string;
  textClass: string;
  hintClass: string;
  hintTextClass: string;
  themeMotion: ThemeMotion;
}

function SocialIcon({
  item,
  index,
  sizeClass,
  surfaceClass,
  textClass,
  hintClass,
  hintTextClass,
  themeMotion,
}: SocialIconProps) {
  const [open, setOpen] = useState(false);
  const delayRef = useRef<number>(0);
  const label = platformLabel[item.platform];
  const emoji = emojiMap[item.icon];

  useEffect(() => () => window.clearTimeout(delayRef.current), []);

  const reveal = (event: PointerEvent<HTMLAnchorElement>) => {
    if (event.pointerType === 'touch') return;
    window.clearTimeout(delayRef.current);
    delayRef.current = window.setTimeout(() => setOpen(true), 70);
  };

  const conceal = () => {
    window.clearTimeout(delayRef.current);
    setOpen(false);
  };

  return (
    <span className="relative inline-flex">
      <motion.a
        href={item.url}
        className={`flex animate-fade-in-up items-center justify-center focus:outline-hidden focus-visible:ring-2 focus-visible:ring-offset-2 ${sizeClass} ${surfaceClass} ${textClass}`}
        style={{ animationDelay: `${index * themeMotion.stagger}s` }}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Visit ${label}`}
        initial={false}
        whileHover={themeMotion.socialHover}
        whileTap={themeMotion.cardTap}
        transition={themeMotion.cardTransition}
        onPointerEnter={reveal}
        onPointerLeave={conceal}
        onFocus={() => setOpen(true)}
        onBlur={conceal}
      >
        <span aria-hidden="true">{emoji}</span>
      </motion.a>

      <AnimatePresence>
        {open ? (
          <motion.span
            aria-hidden="true"
            className="pointer-events-none absolute bottom-[calc(100%+0.4rem)] left-1/2 z-30 origin-bottom"
            initial={tooltipMotion.initial}
            animate={tooltipMotion.animate}
            exit={tooltipMotion.exit}
            transition={themeMotion.cardTransition}
          >
            <span
              className={`block whitespace-nowrap rounded-md px-2 py-1 text-[10px] font-medium tracking-[0.14em] uppercase shadow-lg shadow-zinc-950/20 ${hintClass} ${hintTextClass}`}
            >
              {label}
            </span>
            <span
              className={`absolute top-full left-1/2 -mt-px h-1.5 w-1.5 -translate-x-1/2 rotate-45 ${hintClass}`}
            />
          </motion.span>
        ) : null}
      </AnimatePresence>
    </span>
  );
}

export const SocialIcons: FC<SocialIconsProps> = ({
  socialLinks,
  className = '',
  themeName,
  size = 'md',
  align = 'center',
  variant = 'solid',
}) => {
  const currentTheme = themeConfig[themeName];
  const { motion: themeMotion } = currentTheme;
  const compact = size === 'sm';

  const sizeClass = compact
    ? 'h-10 w-10 text-lg'
    : 'h-12 w-12 text-xl sm:h-14 sm:w-14 sm:text-2xl';

  const surfaceClass =
    variant === 'ghost'
      ? `${currentTheme.styles.radius} opacity-70 transition-all duration-200 hover:opacity-100 ${currentTheme.styles.wellHover}`
      : `${currentTheme.styles.radius} opacity-75 transition-opacity hover:opacity-100 ${currentTheme.styles.card}`;

  return (
    <div
      className={`flex flex-wrap items-center overflow-visible ${align === 'start' ? 'justify-start' : 'justify-center'} ${compact ? 'gap-1.5' : 'gap-3'} ${className}`}
    >
      {socialLinks.map((item, index) => (
        <SocialIcon
          key={item.platform}
          item={item}
          index={index}
          sizeClass={sizeClass}
          surfaceClass={surfaceClass}
          textClass={currentTheme.colors.text}
          hintClass={currentTheme.styles.hint}
          hintTextClass={currentTheme.styles.hintText}
          themeMotion={themeMotion}
        />
      ))}
    </div>
  );
};
