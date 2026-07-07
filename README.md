# SmartNext

SmartNext is a modern web application boilerplate built on **Next.js (App Router)** and styled using a custom, high-performance **Vanilla CSS3** system. 

It is designed to be a clean, lightweight, and production-ready starting point for building responsive web applications with premium dark mode aesthetics, glassmorphic UI components, and consistent layout structures.

---

## Key Features

- **Next.js App Router**: Utilizes the latest Next.js features, including Server Components, custom layouts, and static optimization.
- **Custom Vanilla CSS3 Styling**: Pure modern CSS styles with CSS Custom Properties (variables) for theme palettes, typography, spacing, and animations.
- **Responsive Layout Component**: `<Navpage>` structure automatically wraps page content with a responsive navigation bar and standard page containers.
- **Premium Aesthetics**: Features a modern dark-themed SaaS aesthetic with custom typography (`Outfit` and `Plus Jakarta Sans`) and smooth hover animations.
- **Developer Guidelines Built-in**: Pre-configured guidelines for AI assistants and developers located in `.agents/AGENTS.md` and `AGENTS.md`.

---

## Getting Started

### Prerequisites

Make sure you have Node.js installed on your machine.
- Node.js: `>= 18.0.0`
- npm: `>= 9.0.0`

### 1. Setup / Installation

Clone the repository and install the dependencies:

```bash
# Clone the repository (or navigate to your directory)
cd SmartNext

# Install npm packages
npm install
```

### 2. Run the Development Server

Start the local development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the application running.

### 3. Build for Production

To create an optimized production build:

```bash
npm run build
```

To run the built production server locally:

```bash
npm run start
```

### 4. Run Linter

To perform ESLint code quality checks:

```bash
npm run lint
```

---

## Project Structure

```text
├── .agents/               # Custom guidelines for AI assistant workflows
├── app/                   # Next.js App Router core directory
│   ├── components/        # Reusable layout and navigation components
│   │   ├── navigation.js  # Responsive top navigation navbar (state-driven dropdowns)
│   │   └── navpage.js     # Wrapper layout for main content pages
│   ├── about/             # About Page
│   ├── contact/           # Contact Page
│   ├── documentation/     # Documentation Page
│   ├── home/              # Main App Home Page
│   ├── globals.css        # Custom global CSS3 styling system & landing styles
│   └── layout.js          # Root App layout definition
├── public/                # Static assets (logos, images, icons)
├── package.json           # Project metadata, dependencies, and scripts
└── README.md              # Project documentation
```

---

## License

This project is licensed under the MIT License - see the [LICENSE](file:///Users/alessio/Documents/Codice/TypeScript/SmartNext/LICENSE) file for details.
