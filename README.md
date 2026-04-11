# Frontend Task Project

This project is a comprehensive Next.js application that showcases high-quality UI components, interactive layouts, and data-driven dashboards across three distinct tasks.

## Technologies Used

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion, GSAP
- **State Management**: Zustand
- **Form Validation**: Zod + React Hook Form
- **HTTP Client**: Axios
- **Icons**: Lucide React

---

## Project Structure & Tasks

### Task 1: SkillShikshya Journey (UI & Interactivity)
**Objective**: Build a visually appealing landing section with custom card components and interactive states.

- **What was used**:
  - **CSS Flexbox/Grid**: For positioning various card types in a responsive layout.
  - **Lucide Icons**: For enhancing the visual cues of the cards.
  - **Custom Components**: Abstracted card logic into `Card1`, `Card2`, etc., to keep the page clean.
- **Why**:
  - Modularized components allow for easy reuse and maintenance.
  - Using a consistent design language (brand colors) ensures a "premium" feel.

### Task 2: Mastering Trending Skills (Dynamic Layouts)
**Objective**: Create an interactive course selection grid where cards expand/contract smoothly.

- **What was used**:
  - **Framer Motion (`LayoutGroup`)**: To handle the complex layout transitions when a card is clicked.
  - **State Management (`useState`)**: To track the currently active/expanded card.
- **Why**:
  - `LayoutGroup` from Framer Motion automatically calculates the intermediate positions for shared layout animations, making the transition feel extremely fluid and professional.
  - This design pattern improves UX by focusing the user's attention on the selected content without page reloads.

### Task 3: User & Posts Dashboard (Data & Logic)
**Objective**: Build a full-featured dashboard that fetches users and their posts from an external API, with search, pagination, and forms.

- **What was used**:
  - **Axios & JSONPlaceholder**: For reliable data fetching from an external REST API.
  - **Zustand**: Used as a centralized store to manage user data across multiple components.
  - **Zod & React Hook Form**: For robust schema-based validation in the "Add Post" modal.
  - **Custom Hooks & Memoization**: Used `useMemo` for efficient search filtering and pagination logic.
- **Why**:
  - **Zustand** is chosen for its lightweight nature compared to Redux, perfect for this scale of project.
  - **Zod** ensures that data entered by the user meets strict requirements before "publishing," preventing bugs.
  - Client-side **search and pagination** provide a snappy user experience as results update instantly without network lag.

---

## 🔧 Installation & Setup

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the development server**:
   ```bash
   npm run dev
   ```

4. **Build for production**:
   ```bash
   npm run build
   ```

## Code Review & Suggestions

### 1. Centralized Typings 
Currently, interfaces for `User` and `Post` are defined locally in multiple files.  
**Suggestion**: Create a `types/` folder and export these interfaces globally to ensure consistency and single-source-of-truth.

### 2. Utility for Class Merging
You are using template literals for conditional Tailwind classes.  
**Suggestion**: Use `clsx` and `tailwind-merge` (often as a `cn` utility) to handle complex class conditions and prevent class conflicts.

### 3. Error Boundaries
While basic error handling is in place, using Next.js `error.tsx` files would allow for even more granular control over error states in production.
