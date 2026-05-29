---
name: Clinical Humanism
colors:
  surface: '#fbf9f7'
  surface-dim: '#dbdad8'
  surface-bright: '#fbf9f7'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f5f3f1'
  surface-container: '#efedec'
  surface-container-high: '#eae8e6'
  surface-container-highest: '#e4e2e0'
  on-surface: '#1b1c1b'
  on-surface-variant: '#3f4948'
  inverse-surface: '#30302f'
  inverse-on-surface: '#f2f0ee'
  outline: '#6f7978'
  outline-variant: '#bec9c7'
  surface-tint: '#156967'
  primary: '#03615f'
  on-primary: '#ffffff'
  primary-container: '#2d7a78'
  on-primary-container: '#c0fffc'
  inverse-primary: '#8ad3d0'
  secondary: '#6a5c4e'
  on-secondary: '#ffffff'
  secondary-container: '#f3dfce'
  on-secondary-container: '#706254'
  tertiary: '#404cb2'
  on-tertiary: '#ffffff'
  tertiary-container: '#5965cd'
  on-tertiary-container: '#f4f2ff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#a6f0ed'
  primary-fixed-dim: '#8ad3d0'
  on-primary-fixed: '#00201f'
  on-primary-fixed-variant: '#00504e'
  secondary-fixed: '#f3dfce'
  secondary-fixed-dim: '#d6c3b3'
  on-secondary-fixed: '#231a0f'
  on-secondary-fixed-variant: '#514538'
  tertiary-fixed: '#dfe0ff'
  tertiary-fixed-dim: '#bdc2ff'
  on-tertiary-fixed: '#000965'
  on-tertiary-fixed-variant: '#2e3aa2'
  background: '#fbf9f7'
  on-background: '#1b1c1b'
  surface-variant: '#e4e2e0'
  deep-teal: '#1B4D4B'
  soft-clay: '#D9BBA9'
  clinical-blue: '#4A5568'
  success-green: '#48BB78'
typography:
  display-lg:
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
  headline-lg-mobile:
    fontFamily: manrope
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 36px
  title-md:
    fontFamily: manrope
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
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
  label-sm:
    fontFamily: inter
    fontSize: 13px
    fontWeight: '500'
    lineHeight: 18px
    letterSpacing: 0.05em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 8px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 64px
  max-width: 1280px
---

## Brand & Style
The design system is built on the intersection of **scientific rigor and empathetic care**. The brand personality is grounded and expert, yet remains deeply approachable and "human-first." 

The chosen style is **Modern Corporate with Tactile Warmth**. It avoids the coldness of traditional medical interfaces by using soft transitions, generous whitespace, and a sophisticated color palette. The visual language conveys "Concrete Transformation"—the idea that psychology is a practical, life-changing tool. This is achieved through a structured grid (scientific) paired with organic curves and warm tones (human).

## Colors
The palette is centered around **Deep Teal**, a color that evokes both the sterility of science and the tranquility of nature. 

- **Primary (Teal):** Used for main actions and brand identity. It represents professional stability.
- **Secondary (Warm Neutral/Clay):** Used for background sections and accents to soften the interface and provide a "home-like" feel.
- **Tertiary (Muted Indigo):** Used sparingly for interactive elements that require distinction without being alarming.
- **Neutral (Bone/Sand):** Replaces harsh whites with a warmer base (#F9F7F5) to reduce eye strain and increase accessibility.

## Typography
The typography strategy uses two distinct but harmonious sans-serifs:

- **Manrope** for headlines: Its modern, geometric construction feels precise (scientific), while its slightly rounded terminals feel friendly (human).
- **Inter** for body text: A workhorse for legibility. Its high x-height ensures that therapeutic content and practical information are easy to digest for all users, supporting the accessibility goal.

Large headings use a slightly tighter letter spacing for a "published" editorial look, while labels use increased letter spacing for clarity in navigation.

## Layout & Spacing
The layout follows a **Fixed Grid with Fluid Padding**. Content is contained within a max-width of 1280px to maintain readability on large monitors, centered with generous side margins.

- **Desktop:** 12-column grid, 24px gutters.
- **Tablet:** 8-column grid, 16px gutters.
- **Mobile:** 4-column grid, 16px margins.

Spacing follows an 8px base unit. Larger gaps (64px+) should be used between major sections to provide "breathing room," mirroring the psychological need for space and reflection.

## Elevation & Depth
This design system utilizes **Tonal Layering** rather than aggressive shadows. 

Hierarchy is established by shifting background colors (e.g., moving from a Sand background to a White card). Where elevation is required, use "Ambient Shadows"—extremely soft, low-opacity (#000000 at 4-6%) with a large blur radius (20px+) and no offset. This creates a sense of elements "resting" gently on the surface rather than floating high above it, maintaining a grounded and stable feel.

## Shapes
A **Rounded (0.5rem)** strategy is applied throughout. This choice avoids the "childishness" of pill shapes while moving away from the "harshness" of sharp corners. 

Buttons and input fields use 8px (0.5rem) radii. Large containers, such as testimonial cards or informational modules, can scale up to 16px (1rem) to emphasize a softer, more protective visual container.

## Components
- **Buttons:** Primary buttons use the Deep Teal with white text. Secondary buttons use a Teal outline or the Soft Clay background. No harsh "hover" states; use subtle opacity shifts or slight darkening to maintain a calm experience.
- **Cards:** Cards should have a 1px border in a slightly darker neutral shade (#E2E2E2) instead of heavy shadows. This reinforces the "practical and structured" aspect of the brand.
- **Inputs:** Form fields must be clearly labeled with Inter (Label-sm). Focus states should use a soft teal glow to guide the user without inducing anxiety.
- **Chips/Tags:** Used for categorizing psychological specialties (e.g., "CBT," "Mindfulness"). These should use the Tertiary indigo or Primary teal at very low opacities (10%) with dark text.
- **Progress Indicators:** Since the brand is about "transformation," use soft, rounded progress bars for intake forms or therapy milestones to visualize growth concretely.