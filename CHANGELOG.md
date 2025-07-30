# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

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
