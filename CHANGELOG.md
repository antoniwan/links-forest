# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [2.1.0] - 2025-01-XX

### 🎨 Enhanced

- **Theme Typography System**: Complete overhaul of theme typography for better archetypal expression

  - **Distinctive Font Styling**: Each theme now has unique font weights, tracking, and special effects
  - **Builder Theme**: Roboto Mono with medium weight for technical, systematic feel
  - **Wolf Theme**: Montserrat with semibold weight for instinctual, loyal energy
  - **Mystic Theme**: Cormorant Garamond with italic styling for spiritual elegance
  - **Dragon Theme**: Cinzel with bold weight and wide tracking for power and force
  - **Artist Theme**: Playfair Display with semibold weight for creative expression
  - **Warrior Theme**: Bebas Neue with bold weight, wide tracking, and uppercase for action
  - **Healer Theme**: Quicksand with medium weight and wide tracking for soothing energy
  - **Alchemist Theme**: EB Garamond with semibold weight for transformation energy
  - **Strategist Theme**: Raleway with medium weight and wide tracking for mental clarity
  - **Steward Theme**: Lora with medium weight and wide tracking for legacy and care

- **Font Application Fixes**: Resolved font inheritance issues across components

  - **LinkCard Component**: Removed hardcoded font-serif override to properly inherit theme fonts
  - **Button Typography**: Enhanced button styling with theme-appropriate font weights
  - **Link Typography**: Improved link styling with appropriate font characteristics
  - **Font Loading**: Ensured proper font loading and fallback handling

- **Visual Distinction**: Enhanced theme differentiation while maintaining legibility
  - **Letter Spacing**: Added appropriate tracking for each archetype's character
  - **Font Weights**: Strategic use of medium, semibold, and bold weights
  - **Special Effects**: Italic for mystic, uppercase for warrior, etc.
  - **Color Harmony**: Maintained existing color schemes while enhancing typography

### 🔧 Fixed

- **Font Inheritance**: Fixed issue where LinkCard titles were overriding theme fonts
- **Theme Application**: Ensured theme fonts are properly applied to all text elements
- **Typography Consistency**: Improved consistency between theme fonts and component styling

### Technical

- **Theme Configuration**: Enhanced theme.config.ts with more sophisticated typography rules
- **Component Updates**: Updated LinkCard component to properly inherit theme fonts
- **Font Loading**: Verified proper Google Fonts loading for all theme fonts
- **Backward Compatibility**: All changes maintain existing functionality while enhancing visual appeal

## [2.0.0] - 2025-01-XX

### 🔄 Architecture Changes

- **Configuration System Refactor**: Complete architectural change from TypeScript objects to JSON-like configuration structure
  - **New Configuration Format**: `user-settings.ts` replaces `user.config.ts`
  - **Settings Loader**: New abstraction layer introduced for processing configuration
  - **Site Configuration**: Moved from separate files into user settings
  - **UTM Parameters**: Now handled automatically by the settings loader

### Enhanced

- **Layout Spacing**: Improved vertical spacing throughout the application for better legibility and visual hierarchy

  - Increased header spacing for better separation from content
  - Enhanced main content gaps between sections
  - Improved footer spacing with proper separation between social icons and footer content
  - Added consistent spacing wrapper for footer components

- **Footer Component**: Enhanced the "footer's footer" section for better user experience

  - Increased padding for more breathing room
  - Added better internal spacing between text and link elements
  - Enhanced typography with improved line height
  - Added hover background effects for better interactivity

- **Social Icons**: Improved spacing and visual organization

  - Increased grid gaps for better icon separation
  - Enhanced group spacing within icon categories
  - Better visual hierarchy in the social icons section

- **Signature Page**: Enhanced email signature generator interface
  - Improved editor container spacing and typography
  - Enhanced preview area with better padding and line height
  - Better mobile responsiveness for button groups
  - Improved instruction section styling and readability

### Technical

- **Architecture**: Complete refactor of configuration system for better maintainability
- **Settings Loader**: New abstraction layer for processing user configuration
- **UTM Parameters**: Automated handling of tracking parameters
- **Type Safety**: Maintained through TypeScript interfaces

## [1.2.1] - Previous Release

### Enhanced

- **Layout Spacing**: Improved vertical spacing throughout the application for better legibility and visual hierarchy

  - Increased header spacing for better separation from content
  - Enhanced main content gaps between sections
  - Improved footer spacing with proper separation between social icons and footer content
  - Added consistent spacing wrapper for footer components

- **Footer Component**: Enhanced the "footer's footer" section for better user experience

  - Increased padding for more breathing room
  - Added better internal spacing between text and link elements
  - Enhanced typography with improved line height
  - Added hover background effects for better interactivity

- **Social Icons**: Improved spacing and visual organization

  - Increased grid gaps for better icon separation
  - Enhanced group spacing within icon categories
  - Better visual hierarchy in the social icons section

- **Signature Page**: Enhanced email signature generator interface
  - Improved editor container spacing and typography
  - Enhanced preview area with better padding and line height
  - Better mobile responsiveness for button groups
  - Improved instruction section styling and readability

### Technical

- All changes are backward-compatible
- No breaking changes or user configuration updates required
- Improved accessibility through better spacing and typography
- Enhanced mobile experience with responsive design improvements

## [1.2.0] - Previous Release

### Added

- Email signature generator page (`/signature`)
- Automatic UTM parameter handling for email signatures
- Enhanced social media icon support
- Improved theme system with archetypal designs

### Changed

- Updated layout structure for better component organization
- Enhanced footer with social icons and self-hosting promotion
- Improved responsive design across all components

## [1.1.0] - Previous Release

### Added

- Multiple archetypal themes (builder, wolf, mystic, dragon, artist, warrior, healer, alchemist, strategist, steward)
- Enhanced social media integration
- Improved SEO and meta tag configuration
- Better accessibility features

### Changed

- Refactored configuration system for better maintainability
- Enhanced animation system with Framer Motion
- Improved responsive design

## [1.0.0] - Initial Release

### Added

- Core link-sharing platform functionality
- Basic theme system
- Profile customization
- Social media integration
- Responsive design
- SEO optimization
