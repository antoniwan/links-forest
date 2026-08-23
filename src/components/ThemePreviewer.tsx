import { useMemo, useState } from 'react';
import { themeConfig } from '../config/theme.config';
import type { ThemeName } from '../data/theme.types';
import { THEME_NAMES } from '../utils/theme-preview';

interface ThemePreviewerProps {
  active: ThemeName;
  configured: ThemeName;
  onSelect: (theme: ThemeName | null) => void;
}

export const ThemePreviewer = ({ active, configured, onSelect }: ThemePreviewerProps) => {
  const [open, setOpen] = useState(false);
  const isOverride = active !== configured;

  const themes = useMemo(
    () =>
      THEME_NAMES.map((id) => ({
        id,
        description: themeConfig[id].meta.description,
        icon: themeConfig[id].meta.icon,
      })),
    [],
  );

  return (
    <div className="pointer-events-auto fixed right-3 bottom-20 z-[9999] font-sans text-sm sm:right-4 sm:bottom-24">
      {open ? (
        <div className="w-[min(100vw-1.5rem,20rem)] overflow-hidden rounded-2xl border border-zinc-200 bg-white/95 text-zinc-900 shadow-2xl backdrop-blur-md">
          <div className="flex items-center justify-between gap-3 border-b border-zinc-200 px-3 py-2.5">
            <div className="min-w-0">
              <p className="text-[11px] font-semibold tracking-[0.14em] uppercase opacity-50">
                Theme preview
              </p>
              <p className="truncate text-xs opacity-70">
                {isOverride ? `Override · config is ${configured}` : `Using config · ${configured}`}
              </p>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="rounded-lg px-2 py-1 text-xs opacity-60 transition hover:bg-zinc-100 hover:opacity-100"
              aria-label="Collapse theme previewer"
            >
              Hide
            </button>
          </div>

          <ul className="max-h-72 overflow-y-auto p-1.5">
            {themes.map((theme) => {
              const selected = theme.id === active;
              return (
                <li key={theme.id}>
                  <button
                    type="button"
                    onClick={(event) => {
                      event.preventDefault();
                      event.stopPropagation();
                      onSelect(theme.id);
                    }}
                    className={`flex w-full cursor-pointer items-center gap-2.5 rounded-xl px-2.5 py-2 text-left transition ${
                      selected ? 'bg-zinc-900 text-white' : 'hover:bg-zinc-100'
                    }`}
                  >
                    <span className="text-base" aria-hidden="true">
                      {theme.icon}
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block truncate text-sm font-medium">
                        {themeConfig[theme.id].meta.name}
                      </span>
                      <span
                        className={`block truncate text-[11px] ${selected ? 'opacity-70' : 'opacity-50'}`}
                      >
                        {theme.description}
                      </span>
                    </span>
                    {theme.id === configured && (
                      <span
                        className={`shrink-0 rounded-md px-1.5 py-0.5 text-[10px] font-semibold tracking-wide uppercase ${
                          selected ? 'bg-white/15' : 'bg-zinc-200 text-zinc-600'
                        }`}
                      >
                        config
                      </span>
                    )}
                  </button>
                </li>
              );
            })}
          </ul>

          {isOverride && (
            <div className="border-t border-zinc-200 p-1.5">
              <button
                type="button"
                onClick={() => onSelect(null)}
                className="w-full rounded-xl px-2.5 py-2 text-left text-xs font-medium text-zinc-600 transition hover:bg-zinc-100"
              >
                Reset to config ({configured})
              </button>
            </div>
          )}
        </div>
      ) : (
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="rounded-full border border-zinc-200 bg-white/95 px-3 py-2 text-xs font-semibold tracking-wide text-zinc-800 shadow-lg backdrop-blur-md transition hover:bg-white"
          aria-label="Open theme previewer"
        >
          {themeConfig[active].meta.icon} Themes
        </button>
      )}
    </div>
  );
};
