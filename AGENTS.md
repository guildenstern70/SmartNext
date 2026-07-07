# SmartNext AI Agent Guidelines

This file contains instructions, rules, and guidelines for AI agents working on the SmartNext repository.

## Tech Stack & Architecture
- **Framework**: Next.js (App Router)
- **Styling**: Custom modern Vanilla CSS3 (`app/globals.css`). There are no heavy third-party UI framework dependencies.
- **UI Components**: Custom reusable components are located in `app/components/`
  - `Navpage` (`app/components/navpage.js`): Wrapper layout that encloses all main pages using the custom design system's container classes.
  - `Navigation` (`app/components/navigation.js`): Responsive navigation header utilizing React state hooks and standard flexbox styling.

## Project Routing & Page Conventions
- All app routing uses the Next.js App Router (`app/`).
- Standard pages should be organized in subdirectories of `app/` (e.g. `app/about/page.js`, `app/contact/page.js`, `app/documentation/page.js`).
- Every standard page must render within a `<Navpage>` wrapper:
  ```jsx
  import Navpage from "@/app/components/navpage";

  export default function Page() {
      return (
          <Navpage>
              <div className="card">
                  <h1>Page Title</h1>
                  <p>Content...</p>
              </div>
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
