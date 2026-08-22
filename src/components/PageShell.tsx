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

export const PageShell = ({
  profile,
  links,
  social,
  configuredTheme,
  showThemePreview = false,
}: PageShellProps) => {
  const [themeName, setThemeName] = useState<ThemeName>(configuredTheme);
  const currentTheme = themeConfig[themeName];

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
    <>
      <div
        className={`${currentTheme.colors.text} ${currentTheme.styles.font} relative min-h-screen antialiased`}
      >
        <div
          className={`${currentTheme.colors.background} relative z-10 min-h-screen overflow-hidden ${cssTransitions.smooth}`}
        >
          <div
            className={`pointer-events-none absolute inset-0 ${currentTheme.styles.atmosphere}`}
            aria-hidden="true"
          />

          <div className="page-content relative z-10 mx-auto max-w-2xl px-5 py-10 sm:px-6 sm:py-14 lg:max-w-3xl lg:px-8 lg:py-20">
            <header className="mb-12 sm:mb-16">
              <Hero
                name={profile.name}
                image={profile.image}
                subtitle={profile.subtitle}
                themeName={themeName}
              />
            </header>

            <main>
              <LinkSections links={links} themeName={themeName} />
            </main>

            <footer
              className={`mt-16 space-y-8 border-t pt-10 sm:mt-20 ${currentTheme.styles.border}`}
            >
              <SocialIcons socialLinks={social} themeName={themeName} />
              <Footer themeName={themeName} />
            </footer>
          </div>
        </div>
      </div>

      {showThemePreview && (
        <ThemePreviewer
          active={themeName}
          configured={configuredTheme}
          onSelect={selectTheme}
        />
      )}
    </>
  );
};
