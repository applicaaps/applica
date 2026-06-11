# Patients Page Image Integration Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the image placeholder on the Patients page with the actual `unnamed.jpg` photo, renamed to `pazienti.jpg`, and delete the temporary root file.

**Architecture:** Copy `unnamed.jpg` into `applica-app/public/pazienti.jpg`. Update `applica-app/app/pazienti/page.tsx` to render a responsive `<Image>` component from Next.js inside the placeholder container.

**Tech Stack:** Next.js (App Router), Tailwind CSS.

---

### Task 1: Copy Image Asset

**Files:**
- Create: `applica-app/public/pazienti.jpg`

- [ ] **Step 1: Copy unnamed.jpg to public/pazienti.jpg**
  Run command to copy the image to the app public assets directory.
  Command: `Copy-Item c:\Users\elton_kvh7ex\Desktop\applicaAPS\unnamed.jpg c:\Users\elton_kvh7ex\Desktop\applicaAPS\applica-app\public\pazienti.jpg`

- [ ] **Step 2: Commit file copying**
  Git commit the new image file.
  Command: `git add applica-app/public/pazienti.jpg`
  Command: `git commit -m "feat: copy patients image to public assets"`

### Task 2: Update Patients Page Component

**Files:**
- Modify: `applica-app/app/pazienti/page.tsx`

- [ ] **Step 1: Add import for Image component**
  Add `import Image from "next/image"` at the top of the file.

- [ ] **Step 2: Replace placeholder UI with Image component**
  Modify the `aspect-[4/3]` div placeholder:
  ```tsx
  <RevealSection stagger={2}>
    <div className="relative aspect-[4/3] rounded-3xl overflow-hidden bg-white/40 backdrop-blur-md border border-white/60 shadow-[0_8px_30px_rgb(0,0,0,0.08)]">
      <Image 
        src="/pazienti.jpg" 
        alt="Accoglienza e Terapia" 
        fill 
        className="object-cover"
        sizes="(max-width: 1024px) 100vw, 50vw"
      />
    </div>
  </RevealSection>
  ```

- [ ] **Step 3: Run typescript / build compiler check**
  Run: `npm --prefix applica-app run build`
  Expected: Build succeeds without typescript or build errors.

- [ ] **Step 4: Commit code modifications**
  Command: `git add applica-app/app/pazienti/page.tsx`
  Command: `git commit -m "feat: replace placeholder with Patienten image using Next.js Image"`

### Task 3: Cleanup Root Image File

**Files:**
- Delete: `unnamed.jpg`

- [ ] **Step 1: Delete unnamed.jpg**
  Run: `Remove-Item c:\Users\elton_kvh7ex\Desktop\applicaAPS\unnamed.jpg`

- [ ] **Step 2: Commit cleanup**
  Command: `git add -A`
  Command: `git commit -m "chore: remove temporary unnamed.jpg from repository root"`
