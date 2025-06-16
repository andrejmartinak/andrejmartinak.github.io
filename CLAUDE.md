# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Structure

This repository contains two main components:

1. **Portfolio React App** (`/portfolio/`): A TypeScript React portfolio website deployed to GitHub Pages
2. **Blog** (`/blog/`): Jekyll-based blog with markdown content

## Common Development Commands

### Portfolio Development
```bash
cd portfolio
yarn install          # Install dependencies
yarn start            # Run development server (localhost:3000)
yarn build            # Build for production
yarn test             # Run tests
yarn deploy           # Deploy to GitHub Pages
```

### Blog Development
The blog is built with Jekyll and uses GitHub Pages automatic deployment. Blog posts are markdown files in the `/blog/` directory.

## Architecture Overview

### Portfolio App Structure
- **Data Layer**: `src/data/Data.ts` - Centralized project data with TypeScript types
- **Components**: `src/component/` - Reusable React components (ProjectView, Chip)
- **Assets**: `src/asset/` - Static images and SVG icons
- **Styling**: CSS files co-located with components, global styles in `src/App.css` and `src/index.css`

### Key Design Patterns
- **Component Structure**: Functional components with TypeScript interfaces for props
- **Data Management**: Static data exported from centralized Data.ts file
- **Styling**: CSS-in-JS for dynamic colors, traditional CSS classes for layout
- **Asset Handling**: `require()` for images, imported SVG components for icons

### Project Data Model
The `Project` type defines the structure for portfolio projects with fields for name, color theming, status, role, description, images, and tech stack.

## Development Notes

- Uses Create React App configuration
- TypeScript with strict mode enabled
- ESLint configuration extends react-app rules
- Homepage configured for GitHub Pages deployment at `https://andrejmartinak.github.io/`
- Uses yarn for package management