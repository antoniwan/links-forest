import packageJson from '../../package.json';
import { userConfig } from '../config/settings.loader';
import { themeConfig } from '../config/theme.config';

interface FooterProps {
  className?: string;
}

export const Footer = ({ className = '' }: FooterProps) => {
  const currentTheme = themeConfig[userConfig.theme.active];

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
