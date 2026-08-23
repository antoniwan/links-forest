import { useEffect, useState } from 'react';
import type { Link, Profile, SocialLink } from '../data/types';
import type { ThemeName } from '../data/theme.types';
import { isValidThemeName } from '../data/theme.types';
import { themeConfig } from '../config/theme.config';
import { cssTransitions } from '../config/animations';
import { Hero } from './Hero';
import { LinkSections } from './LinkSections';
import { SocialIcons } from './SocialIcons';
import { Footer } from './Footer';
import { ThemePreviewer } from './ThemePreviewer';

interface PageShellProps {
  profile: Profile;
  links: Link[];
  social: SocialLink[];
  configuredTheme: ThemeName;
  showThemePreview?: boolean;
}

function readPreviewTheme(configured: ThemeName): ThemeName {
  if (typeof window === 'undefined') return configured;
  const requested = new URLSearchParams(window.location.search).get('theme');
  if (requested && isValidThemeName(requested)) return requested;
  return configured;
}

function writePreviewTheme(name: ThemeName | null, configured: ThemeName) {
  const url = new URL(window.location.href);
  if (name === null || name === configured) {
    url.searchParams.delete('theme');
  } else {
    url.searchParams.set('theme', name);
  }
  window.history.replaceState({}, '', url);
}

function splitSocial(social: SocialLink[]) {
  const marked = social.filter((item) => item.primary);
  if (marked.length > 0) {
    return { hero: marked, footer: social.filter((item) => !item.primary) };
  }
  return { hero: social.slice(0, 4), footer: social.slice(4) };
}

export const PageShell = ({
  profile,
  links,
  social,
  configuredTheme,
  showThemePreview = false,
}: PageShellProps) => {
  const [themeName, setThemeName] = useState<ThemeName>(configuredTheme);
  const currentTheme = themeConfig[themeName];
  const { hero: heroSocial, footer: footerSocial } = splitSocial(social);

  useEffect(() => {
    if (!showThemePreview) return;
    setThemeName(readPreviewTheme(configuredTheme));
  }, [configuredTheme, showThemePreview]);

  const selectTheme = (name: ThemeName | null) => {
    const next = name ?? configuredTheme;
    setThemeName(next);
    writePreviewTheme(name, configuredTheme);
  };

  return (
    <div
      className={`${currentTheme.colors.text} ${currentTheme.styles.font} relative min-h-screen antialiased`}
    >
      <div
        className={`${currentTheme.colors.background} relative min-h-screen ${cssTransitions.smooth}`}
      >
        <div
          className={`pointer-events-none absolute inset-0 ${currentTheme.styles.atmosphere}`}
          aria-hidden="true"
        />

        <div className="page-content relative z-10 mx-auto max-w-xl px-5 py-8 sm:px-6 sm:py-12 lg:max-w-2xl lg:py-16">
          <header className="mb-10 sm:mb-12">
            <Hero
              name={profile.name}
              handle={profile.handle}
              image={profile.image}
              subtitle={profile.subtitle}
              themeName={themeName}
              socialLinks={heroSocial}
            />
          </header>

          <main>
            <LinkSections links={links} themeName={themeName} />
          </main>

          <footer
            className={`mt-14 space-y-6 border-t pt-8 sm:mt-16 ${currentTheme.styles.border}`}
          >
            {footerSocial.length > 0 ? (
              <SocialIcons
                socialLinks={footerSocial}
                themeName={themeName}
                size="sm"
                variant="ghost"
              />
            ) : null}
            <Footer themeName={themeName} />
          </footer>
        </div>
      </div>

      {showThemePreview ? (
        <ThemePreviewer
          active={themeName}
          configured={configuredTheme}
          onSelect={selectTheme}
        />
      ) : null}
    </div>
  );
};
