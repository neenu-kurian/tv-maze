# TV Maze Application

A Vue 3 + TypeScript web app that integrates with the TV Maze API to view and search TV shows.

## Overview

TV Maze Application lets users see shows by genre, view detailed information about each show, and search by titles.  
It’s built with Vue 3, *TypeScript*, and *Pinia* for state management, with a responsive UI powered by *Tailwind CSS*.

---

## Features

- Search TV shows by name
- List shows by genre
- Sort shows by rating
- View Details of each show

---

## Development Process & Key Decisions

### 1. Design with Figma AI
Before diving into development, the layout and component structure were designed in *Figma*.  
I used *Figma Make* to generate base designs and iterate quickly on color palettes, spacing, and responsive layouts.

### 2. Vue 3 + Composition API + TypeScript
Vue 3 was chosen for its flexible reactivity system and Composition API, which made logic organisation cleaner.  
Using *TypeScript* helped catch common type issues early and made API data handling more reliable.

### 3. State Management with Pinia
The app’s global state is managed using *Pinia*.  
Pinia was configured to:
- Store fetched shows and the details of the show
- Global state management
- Persist state between views for smoother navigation

### 4. Debouncing Search
To prevent unnecessary API calls, search input updates are debounced (around 750 ms delay).  
This ensures requests only trigger after the user stops typing — improving both performance and UX.

### 5. Reused data for Better Performance
Fetched data is stored within Pinia stores.  
When a user revisits a genre or a show detail page, the stored data is reused instead of hitting the API again.

### 6. Responsive UI with Tailwind CSS
TailwindCSS was used for all UI styling.  
It made building responsive layouts much faster and kept the CSS footprint minimal.

### 7. Snapshot Testing
Snapshot tests were added to ensure UI consistency across updates.  
They help detect unintended visual or structural changes in key components.

---

## Getting Started

### Prerequisites

Make sure you have the following installed:

- Node.js version v20.19.4 
- npm version 10.8.2

Follow these steps to run the project locally:

```bash
# 1. Clone the repository
git clone https://github.com/neenu-kurian/tv-maze.git
cd tv-maze

# 2. Install dependencies
npm install

# 3. Run in development mode
npm run dev

# 4. Run tests
npm run test:unit

# 5. Lint the code
npm run lint
