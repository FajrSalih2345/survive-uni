# AGENT.md - Development & Coding Guidelines for 'Survive Uni'

This document contains strict coding, architecture, and workflow standards for building the **Survive Uni** web application. All AI agents and human contributors working on this codebase must strictly adhere to these rules.

---

## 1. Package Installation Policy

> [!CAUTION]
> **STRICT PACKAGE RESTRICTION**
> Do NOT install any new npm packages or external dependencies (`npm install`, `yarn add`, `pnpm add`, `bun add`) without explicit prior approval from the user.

- Utilize standard Next.js, React, TypeScript, and Tailwind CSS capabilities.
- Icons, layout utilities, and UI elements should be built natively with inline SVG or Tailwind utilities whenever possible.

---

## 2. Framework & Architecture Standards

- **Framework:** Next.js (App Router, React Server / Client Components).
- **Directory Structure:** Standard Next.js App Router layout (`app/` or `src/app/`).
- **Client vs Server Components:**
  - Mark interactive UI components (game state containers, stat indicators, choice cards, report card handlers) with `'use client';` at the very top of the file.
  - Server components should be used for layout templates and static page shells.

---

## 3. React & TypeScript Guidelines

### Functional Components Only
- All React components **must** be functional components using modern React hooks (`useState`, `useReducer`, `useMemo`, `useCallback`, `useEffect`).
- Class components are strictly prohibited.

### Strict TypeScript Types
- **No `any` or `unknown` types:** All props, state structures, event handlers, and scenario objects must be strictly typed.
- Store shared interfaces and types in a dedicated `types/game.ts` file (or `types/index.ts`).
- Define explicit interfaces for:
  - `PlayerState` (`money: number`, `time: number`, `sanity: number`)
  - `Choice` (`id: string`, `label: string`, `effect: Partial<PlayerState>`)
  - `Scenario` (`id: number`, `title: string`, `description: string`, `choices: Choice[]`)
  - `GameOutcome` (`grade: string`, `title: string`, `message: string`, `isWin: boolean`)

---

## 4. Mobile-First Tailwind CSS Styling

- **Mobile-First Approach:** Always design for mobile screen sizes first using standard Tailwind classes, applying responsive variants (`sm:`, `md:`, `lg:`, `xl:`) for desktop layouts.
- **Visual Feedback & UI Quality:**
  - Use modern, clean aesthetics (glassmorphism accents, crisp dark/light themes, visible stat cards with progress indicators).
  - Use clear visual cues for stats (e.g. green for healthy Money/Sanity, yellow for low warnings, red for critical levels).
- **Utility-First Styling:**
  - Avoid inline CSS (`style={{ ... }}`) unless dynamic positioning or numeric calculations are strictly necessary.
  - Maintain consistent padding, margins, flex, and grid structures.

---

## 5. Code Quality & Maintenance

- Keep components modular and single-purpose (`StatBar.tsx`, `ScenarioCard.tsx`, `ReportCard.tsx`, `ChoiceButton.tsx`).
- Handle edge cases gracefully (e.g., stats falling below zero or exceeding maximum thresholds).
- Keep game state immutable during updates using clean React state setter functions.
