import packageJson from '../../package.json';
import { themeConfig } from '../config/theme.config';
import type { ThemeName } from '../data/theme.types';

interface FooterProps {
  className?: string;
  themeName: ThemeName;
}

export const Footer = ({ className = '', themeName }: FooterProps) => {
  const currentTheme = themeConfig[themeName];

  return (
    <div className={`pt-2 text-center ${className}`}>
      <p className={`text-xs opacity-45 ${currentTheme.colors.text}`}>
        Want your own LinksForest?{' '}
        <a
          href="https://github.com/antoniwan/links-forest/blob/main/SELF-HOSTING.md"
          target="_blank"
          rel="noopener noreferrer"
          className={`${currentTheme.styles.link} ${currentTheme.styles.accentSoft}`}
        >
          Get it free →
        </a>
      </p>
      <p className={`mt-2 text-[11px] tracking-wide opacity-30 ${currentTheme.colors.text}`}>
        v{packageJson.version}
      </p>
    </div>
  );
};
