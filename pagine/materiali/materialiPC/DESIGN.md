---
name: Clinical Humanism
colors:
  surface: '#f9f9f9'
  surface-dim: '#dadad9'
  surface-bright: '#f9f9f9'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f4f3f3'
  surface-container: '#eeeeed'
  surface-container-high: '#e8e8e8'
  surface-container-highest: '#e2e2e2'
  on-surface: '#1a1c1c'
  on-surface-variant: '#3f4948'
  inverse-surface: '#2f3131'
  inverse-on-surface: '#f1f1f0'
  outline: '#6f7978'
  outline-variant: '#bec9c7'
  surface-tint: '#156967'
  primary: '#03615f'
  on-primary: '#ffffff'
  primary-container: '#2d7a78'
  on-primary-container: '#c0fffc'
  inverse-primary: '#8ad3d0'
  secondary: '#5b5f5f'
  on-secondary: '#ffffff'
  secondary-container: '#dde0e0'
  on-secondary-container: '#5f6364'
  tertiary: '#4e5858'
  on-tertiary: '#ffffff'
  tertiary-container: '#667170'
  on-tertiary-container: '#eaf5f4'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#a6f0ed'
  primary-fixed-dim: '#8ad3d0'
  on-primary-fixed: '#00201f'
  on-primary-fixed-variant: '#00504e'
  secondary-fixed: '#e0e3e3'
  secondary-fixed-dim: '#c4c7c7'
  on-secondary-fixed: '#181c1d'
  on-secondary-fixed-variant: '#434748'
  tertiary-fixed: '#dae5e4'
  tertiary-fixed-dim: '#bec9c8'
  on-tertiary-fixed: '#131d1d'
  on-tertiary-fixed-variant: '#3e4948'
  background: '#f9f9f9'
  on-background: '#1a1c1c'
  surface-variant: '#e2e2e2'
typography:
  display-lg:
    fontFamily: Playfair Display
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 36px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  headline-lg:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.3'
  headline-md:
    fontFamily: Playfair Display
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.4'
  title-lg:
    fontFamily: Playfair Display
    fontSize: 20px
    fontWeight: '600'
    lineHeight: '1.4'
  body-lg:
    fontFamily: Manrope
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Manrope
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  body-sm:
    fontFamily: Manrope
    fontSize: 14px
    fontWeight: '400'
    lineHeight: '1.5'
  label-lg:
    fontFamily: Manrope
    fontSize: 14px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: 0.02em
  label-md:
    fontFamily: Manrope
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: 0.04em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 4px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 48px
  max-width: 1280px
---

## Brand & Style

This design system embodies the "Clinical Humanism" aesthetic—a precise balance between medical-grade reliability and empathetic, patient-centered care. The target audience includes healthcare professionals and patients who require a sense of calm authority and high legibility during moments of high cognitive load.

The style is rooted in **Modern Minimalism** with a focus on editorial clarity. It utilizes generous whitespace to reduce visual noise, ensuring that critical health data and guidance feel manageable rather than overwhelming. The emotional response should be one of quiet confidence, safety, and sophisticated care.

## Colors

The palette is anchored by a deep teal primary color (#2d7a78), chosen for its association with clinical stability and vitality. 

- **Primary:** Used for key actions and brand presence.
- **Secondary/Surface:** A range of soft, cool-toned neutrals that provide a soothing background for complex data.
- **Backgrounds:** Pure white is avoided in favor of slightly tinted off-whites to reduce screen glare and eye strain.
- **Functional Colors:** Success, warning, and error states should maintain the same desaturated, professional tone to integrate seamlessly with the primary palette.

## Typography

The typographic strategy uses a high-contrast serif/sans-serif pairing to establish a hierarchy that is both authoritative and approachable.

- **Headlines & Titles:** Playfair Display provides a sophisticated, editorial "voice." It should be used for all page headers, section titles, and highlighted keywords to inject warmth and a human touch into the interface.
- **Body & Interface:** Manrope is utilized for all functional text, data readouts, and long-form body copy. Its modern, geometric construction ensures maximum legibility at small sizes.
- **Hierarchy:** Maintain clear vertical rhythm by using larger line-heights for body text to improve scanning efficiency.

## Layout & Spacing

The layout follows a **Fixed Grid** model for desktop to ensure content remains focused and readable, transitioning to a fluid model for mobile devices.

- **Grid:** Use a 12-column grid for desktop (1280px max-width) and a 4-column grid for mobile.
- **Rhythm:** An 8px base spacing scale is used for structural elements, while 4px increments are used for internal component spacing.
- **Density:** High whitespace is mandatory around headline elements to allow the Playfair Display typeface to breathe and serve its editorial purpose.

## Elevation & Depth

To maintain the clinical aesthetic, depth is conveyed through **Tonal Layers** rather than heavy shadows.

- **Surfaces:** Use subtle shifts in background color (Tertiary/Secondary) to denote different functional areas or nested content.
- **Shadows:** When necessary for interactive elements like cards or modals, use extremely soft, ambient shadows with a wide blur and low opacity (e.g., 4% alpha of the primary color) to suggest a gentle lift without breaking the "flat" clinical feel.
- **Overlays:** Use a subtle backdrop blur (glassmorphism) for global navigation bars to maintain context of the underlying content.

## Shapes

The shape language is **Soft**, utilizing small radii to suggest approachability without losing the precision required for a professional healthcare tool.

- **Standard Elements:** Use a 0.25rem (4px) radius for buttons, inputs, and small components.
- **Containers:** Large cards and modals should use 0.5rem (8px) or 0.75rem (12px) to feel distinct from interactive controls.
- **Icons:** Icons should feature rounded caps and corners to match the Manrope typeface characteristics.

## Components

- **Buttons:** Primary buttons use a solid #2d7a78 fill with white Manrope text in uppercase for clarity. Secondary buttons use a primary-colored border with no fill.
- **Input Fields:** Use soft-neutral backgrounds (#f4f7f7) with a subtle bottom-border focus state in the primary color. Labels must be Manrope SemiBold.
- **Cards:** Utilize the "Soft" roundedness with no border; instead, use a 1px tonal offset from the main background to define edges.
- **Chips:** Highly rounded (pill-shaped) with light desaturated backgrounds to indicate categories or status filters.
- **Lists:** Clean, hair-line separators (#e0ebea) with generous vertical padding to ensure touch targets are accessible and data is legible.
- **Special Elements:** For "Main Keywords" or "Key Insights," use Playfair Display in Italics to create a distinctive, empathetic callout.