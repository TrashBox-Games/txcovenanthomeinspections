---
name: Stately Professional
colors:
  surface: '#f9f9ff'
  surface-dim: '#cfdaf1'
  surface-bright: '#f9f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f0f3ff'
  surface-container: '#e7eeff'
  surface-container-high: '#dee8ff'
  surface-container-highest: '#d8e3fa'
  on-surface: '#111c2c'
  on-surface-variant: '#43474e'
  inverse-surface: '#263142'
  inverse-on-surface: '#ebf1ff'
  outline: '#73777f'
  outline-variant: '#c3c6cf'
  surface-tint: '#3f6187'
  primary: '#001f3b'
  on-primary: '#ffffff'
  primary-container: '#0c3559'
  on-primary-container: '#7d9ec8'
  inverse-primary: '#a7c9f5'
  secondary: '#7e5700'
  on-secondary: '#ffffff'
  secondary-container: '#ffc96f'
  on-secondary-container: '#785300'
  tertiary: '#1c1f20'
  on-tertiary: '#ffffff'
  tertiary-container: '#313435'
  on-tertiary-container: '#9a9c9d'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d1e4ff'
  primary-fixed-dim: '#a7c9f5'
  on-primary-fixed: '#001d36'
  on-primary-fixed-variant: '#25496e'
  secondary-fixed: '#ffdeac'
  secondary-fixed-dim: '#f3be64'
  on-secondary-fixed: '#281900'
  on-secondary-fixed-variant: '#604100'
  tertiary-fixed: '#e1e3e4'
  tertiary-fixed-dim: '#c5c7c8'
  on-tertiary-fixed: '#191c1d'
  on-tertiary-fixed-variant: '#454748'
  background: '#f9f9ff'
  on-background: '#111c2c'
  surface-variant: '#d8e3fa'
typography:
  headline-xl:
    fontFamily: manrope
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: manrope
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: manrope
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 36px
  headline-md:
    fontFamily: manrope
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-md:
    fontFamily: inter
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
    letterSpacing: 0.01em
  label-sm:
    fontFamily: inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.05em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  base: 4px
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 32px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 40px
  max-width: 1280px
---

## Brand & Style

This design system is built upon a foundation of **Corporate Modernism** with a focus on institutional trust and precision. It targets a professional audience in finance, law, or high-end enterprise SaaS, where the emotional response must be one of stability, authority, and meticulous attention to detail.

The aesthetic utilizes a balanced mix of heavy whitespace and structured layouts to convey clarity. The design style prioritizes "Information First" hierarchy, using subtle depth and a restrained color palette to guide the user without unnecessary decoration. The result is a UI that feels established, premium, and inherently reliable.

## Colors

The color palette is anchored by a deep Navy Primary (`#0c3559`), representing institutional strength. The updated Secondary Gold (`#b88935`) acts as a refined accent for primary actions and key highlights, providing a sophisticated contrast that meets AA accessibility standards against white backgrounds.

- **Primary (Navy):** Used for headers, primary navigation, and high-emphasis typography.
- **Secondary (Gold):** Reserved for call-to-actions, active states, and premium signaling.
- **Surface/Tertiary:** A very light cool gray is used for section backgrounds to prevent ocular fatigue.
- **Neutral:** A range of slate grays are employed for body text and secondary information.

## Typography

This design system uses a dual-sans-serif pairing to distinguish between structural hierarchy and functional readability. 

**Manrope** is used for all headlines. Its modern, geometric construction provides a clean and authoritative "voice" for the brand. **Inter** is utilized for body copy and interface labels due to its exceptional legibility and systematic, utilitarian nature.

Maintain tight tracking on larger headlines to ensure a "locked-in" feel. For labels, especially at small sizes, use slightly increased letter spacing and medium weights to ensure clarity in dense data environments.

## Layout & Spacing

The design system follows a **Fixed Grid** philosophy for desktop to maintain a prestigious, editorial-like structure, while transitioning to a fluid model for mobile.

- **Grid:** 12-column grid on desktop with a 1280px maximum container width.
- **Rhythm:** An 8px linear scale is the primary driver for all spatial relationships. Use 16px (`md`) for internal component padding and 24px (`lg`) for vertical rhythm between sections.
- **Mobile:** Margins shrink to 16px, and columns collapse into a single-column stack. Gutters remain 16px to maintain density without feeling cluttered.

## Elevation & Depth

Visual hierarchy is established through **Tonal Layers** and extremely subtle **Ambient Shadows**.

Depth is used sparingly to denote interactivity or separation of concerns. 
- **Level 0 (Base):** White or Tertiary Gray background.
- **Level 1 (Cards):** White surface with a 1px border (`#E2E8F0`) or a very soft, high-diffusion shadow (0px 4px 20px, 5% opacity).
- **Level 2 (Overlays):** Modals and dropdowns use a more pronounced shadow (0px 10px 30px, 10% opacity) to create a clear "float" above the content.

Avoid heavy blurs or vibrant glows. The "depth" should feel like high-quality stationery or architectural layers.

## Shapes

The shape language is **Soft (0.25rem)**. This subtle rounding removes the harshness of 90-degree corners while maintaining a professional, structured appearance. 

- **Standard Elements:** Inputs, buttons, and small cards use the base 4px (0.25rem) radius.
- **Large Containers:** Hero sections or large layout blocks use 8px (0.5rem).
- **Functional Components:** Checkboxes maintain a strict 2px radius to feel precise and technical.

## Components

### Buttons
- **Primary:** Navy background with white text. On hover, the Navy darkens slightly.
- **Secondary (Accent):** Gold background (`#b88935`) with white text. Use this exclusively for the "final" action in a flow.
- **Ghost:** Transparent background with a 1px Navy border.

### Input Fields
- Use a 1px border (`#CBD5E0`). When focused, the border transitions to Navy with a 2px offset "halo" of Gold at 20% opacity.

### Cards
- Cards are the primary organizational unit. They should have a 1px light gray border and no background shadow unless they are interactive (e.g., clickable dashboard widgets).

### Navigation
- Top navigation uses Manrope Medium. Active states are indicated by a 2px Gold bottom border, ensuring the accent color is used as a functional guide.

### Data Tables
- Use Inter at `label-md` for headers. Use alternating row stripes (Tertiary Gray) for readability in high-density views.
