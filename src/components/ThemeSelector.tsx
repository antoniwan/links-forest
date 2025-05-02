import { useState } from "react";
import type { Theme } from "../data/types";

interface ThemeSelectorProps {
  currentTheme: Theme;
  onThemeChange: (theme: Theme) => void;
}

const themes: { id: Theme; name: string; description: string }[] = [
  {
    id: "wolf",
    name: "The Wolf",
    description: "Instinct, loyalty, protection",
  },
  { id: "fox", name: "The Fox", description: "Cunning, adaptability, wisdom" },
  { id: "owl", name: "The Owl", description: "Wisdom, mystery, intuition" },
  {
    id: "raven",
    name: "The Raven",
    description: "Transformation, magic, insight",
  },
  { id: "deer", name: "The Deer", description: "Gentleness, grace, awareness" },
  {
    id: "bear",
    name: "The Bear",
    description: "Strength, introspection, healing",
  },
  {
    id: "eagle",
    name: "The Eagle",
    description: "Vision, freedom, perspective",
  },
  {
    id: "salmon",
    name: "The Salmon",
    description: "Determination, persistence, flow",
  },
  {
    id: "otter",
    name: "The Otter",
    description: "Playfulness, joy, connection",
  },
  { id: "lynx", name: "The Lynx", description: "Mystery, secrets, perception" },
];

export default function ThemeSelector({
  currentTheme,
  onThemeChange,
}: ThemeSelectorProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 py-2 rounded-lg bg-opacity-10 bg-white hover:bg-opacity-20 transition-all"
      >
        <span>Theme: {themes.find((t) => t.id === currentTheme)?.name}</span>
        <svg
          className={`w-4 h-4 transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-64 rounded-lg shadow-lg bg-white bg-opacity-90 backdrop-blur-sm">
          <div className="py-2">
            {themes.map((theme) => (
              <button
                key={theme.id}
                onClick={() => {
                  onThemeChange(theme.id);
                  setIsOpen(false);
                }}
                className={`w-full px-4 py-2 text-left hover:bg-opacity-20 transition-all ${
                  currentTheme === theme.id ? "bg-opacity-20" : ""
                }`}
              >
                <div className="font-medium">{theme.name}</div>
                <div className="text-sm opacity-70">{theme.description}</div>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
