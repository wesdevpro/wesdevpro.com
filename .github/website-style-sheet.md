# Website Style Sheet

## Purpose

This document defines the visual and content direction for wesdevpro.com modernization.
Use it as the shared style baseline for implementation tasks, design decisions, and AI-assisted edits.

## Brand Direction

- Keep the current brand identity and core palette intent.
- Prioritize eye comfort: reduce harsh contrast spikes while preserving clarity.
- Prefer confident, professional, and technical tone over playful or generic styles.

## Visual Principles

- Keep layouts clean, content-first, and easy to scan.
- Use strong spacing rhythm and clear section hierarchy.
- Favor consistent component patterns instead of one-off styling.
- Preserve responsive behavior for desktop and mobile.

## Color Guidance

- Keep existing brand colors as canonical base tokens.
- Improve readability by tuning shades, opacity, and surface contrast instead of changing hue identity.
- Avoid pure black on pure white extremes for large reading surfaces.
- Ensure text/background contrast remains accessible.
- Update tokens in one place first (`src/app/assets/styles/colors.css`) before component-level overrides.

## Typography Guidance

- Use a clear type scale with obvious heading-to-body contrast.
- Keep paragraph measure readable for blog and case study pages.
- Ensure code snippets and metadata remain legible in both light and dark themes.

## Component Styling Rules

- Reuse Bulma/Buefy conventions already present in the project.
- Avoid ad hoc inline styles unless no reusable alternative exists.
- Keep button, card, and navigation styles consistent across pages.
- Add subtle motion only when it supports hierarchy and does not distract.

## Content and SEO Presentation

- Every page should have a clear H1 and meaningful metadata.
- Blog posts should support readable article layouts with TOC, publish/update dates, and author context.
- Project pages should emphasize outcomes, role, and technical decisions.
- Maintain consistent internal linking between related posts and projects.

## Modernization Priorities

1. Establish foundational pages: Home, About, Projects, Blog, Contact.
2. Improve readability and visual hierarchy before advanced animations.
3. Implement full blog SEO capabilities (taxonomy, structured metadata, sitemap/RSS support).
4. Refine color comfort and contrast after base layout and typography improvements are in place.

## Change Control

- Prefer small, targeted updates over broad visual rewrites.
- Validate that color or typography changes do not regress accessibility.
- Keep content model, page metadata, and UI changes aligned.
