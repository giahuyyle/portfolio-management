# Portfolio Management Dashboard

A modern content management system for managing your portfolio built with React, Vite, and Tailwind CSS.

## Features

- 📊 **Dashboard**: Overview of your portfolio with statistics
- 💼 **Projects**: Manage your project portfolio
- 🛠️ **Skills**: Track and display your technical skills
- 🎓 **Experience**: Manage your work experience

## Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **React Router** - Client-side routing

## Getting Started

### Prerequisites

- Node.js 16+ and npm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/giahuyyle/portfolio-management.git
cd portfolio-management
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Project Structure

```
src/
├── components/
│   ├── layout/        # Layout components (Sidebar, Header, Layout)
│   └── common/        # Reusable components
├── pages/             # Page components (Dashboard, Projects, Skills, Experience)
├── App.tsx            # Main application component
├── main.tsx           # Application entry point
└── index.css          # Global styles with Tailwind directives
```

## Customization

- Update the navigation items in `src/components/layout/Sidebar.tsx`
- Modify the color scheme in `tailwind.config.js`
- Add new pages in `src/pages/` and update routing in `App.tsx`

## License

MIT
