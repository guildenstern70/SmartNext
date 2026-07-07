# SmartNext AI Agent Guidelines

This file contains instructions, rules, and guidelines for AI agents working on the SmartNext repository.

## Tech Stack & Architecture
- **Framework**: Next.js (App Router)
- **Styling**: Bulma (SCSS/Sass) + custom global styles (`app/globals.css`, `app/bulma.scss`)
- **UI Components**: Custom reusable components are located in `app/components/`
  - `Navpage` (`app/components/navpage.js`): Wrapper layout that should enclose all main pages to keep navigation and container margins consistent.
  - `Navigation` (`app/components/navigation.js`): The top navigation bar.

## Project Routing & Page Conventions
- All app routing uses the Next.js App Router (`app/`).
- Standard pages should be organized in subdirectories of `app/` (e.g. `app/about/page.js`, `app/contact/page.js`, `app/documentation/page.js`).
- Every standard page must render within a `<Navpage>` wrapper:
  ```jsx
  import Navpage from "@/app/components/navpage";

  export default function Page() {
      return (
          <Navpage>
              <h1>Page Title</h1>
              {/* Content */}
          </Navpage>
      );
  }
  ```

## Link Guidelines
- **Internal Navigation**: Use Next.js `<Link>` from `next/link` (e.g. `<Link href="/about">About</Link>`).
- **External Links / Issue Trackers**: Use standard `<a>` tags with `target="_blank"` and `rel="noopener noreferrer"`.

## Verification Commands
Before submitting or finalizing any task, ensure the following commands run successfully:
- **Linting**: `npm run lint` (uses ESLint)
- **Building**: `npm run build` (Next.js production build check)
