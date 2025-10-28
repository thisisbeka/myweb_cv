# My Personal Portfolio Website

A modern, interactive portfolio website built with cutting-edge web technologies. This project showcases my professional experience, skills, projects, and educational background through an elegant and responsive design.

## 🚀 Technologies Used

### Core Framework & Language
- **React 18.3.1** - Modern React with hooks for building the user interface
- **TypeScript 5.5.3** - Type-safe JavaScript for better code quality and developer experience
- **Vite 5.4.2** - Next-generation frontend build tool for lightning-fast development

### Styling & Design
- **Tailwind CSS 3.4.1** - Utility-first CSS framework for rapid UI development
- **PostCSS 8.4.35** - Tool for transforming CSS with JavaScript plugins
- **Autoprefixer 10.4.18** - Automatically adds vendor prefixes to CSS

### UI Components & Icons
- **Lucide React 0.344.0** - Beautiful, consistent icon library with 1000+ icons
- Custom glass-morphism effects and CRT monitor aesthetics
- Animated cursor trail and terminal-style text animations

### Backend & Database
- **Supabase 2.57.4** - Open-source Firebase alternative for backend services
- PostgreSQL database (via Supabase)
- Ready for authentication and data persistence

### Code Quality & Development Tools
- **ESLint 9.9.1** - Linting tool for identifying and fixing code issues
- **TypeScript ESLint 8.3.0** - TypeScript-specific linting rules
- **React Hooks ESLint Plugin** - Ensures proper React hooks usage
- **React Refresh Plugin** - Fast refresh during development

## ✨ Features

### 🌐 Multilingual Support
- Full Russian and English language support
- Context-based language switching with React Context API
- Smooth transitions between languages

### 🎨 Modern Design Elements
- Glass-morphism UI effects for a premium feel
- CRT monitor-inspired aesthetics with scanline effects
- Custom cursor trail animation following mouse movement
- Responsive design that works on all devices (mobile, tablet, desktop)
- Smooth scroll animations and parallax effects

### 📱 Sections
1. **Hero Section** - Dynamic typewriter effect with role rotation
2. **About** - Personal introduction with profile image
3. **Experience** - Professional work history timeline
4. **Skills** - Technical competencies with visual representation
5. **Projects** - Portfolio of completed works with links
6. **Education** - Academic background and achievements
7. **Contact** - Social media links and contact information

### 🎯 Performance Optimized
- Fast build times with Vite
- Optimized bundle size
- Lazy loading and code splitting
- Efficient rendering with React 18

## 🛠️ Installation & Setup

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn package manager

### Installation Steps

1. Clone the repository:
```bash
git clone <your-repo-url>
cd project
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
Create a `.env` file in the root directory with your Supabase credentials:
```env
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

4. Start the development server:
```bash
npm run dev
```

5. Open your browser and navigate to `http://localhost:5173`

## 📝 Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint to check code quality
- `npm run typecheck` - Run TypeScript type checking

## 🏗️ Project Structure

```
project/
├── public/              # Static assets
│   ├── image.png        # Profile image
│   └── logo_bek.png     # Logo
├── src/
│   ├── components/      # React components
│   │   ├── About.tsx
│   │   ├── Contact.tsx
│   │   ├── CursorTrail.tsx
│   │   ├── Education.tsx
│   │   ├── Experience.tsx
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── Projects.tsx
│   │   ├── Skills.tsx
│   │   └── SmoothScroll.tsx
│   ├── contexts/        # React contexts
│   │   └── LanguageContext.tsx
│   ├── App.tsx          # Main application component
│   ├── main.tsx         # Application entry point
│   └── index.css        # Global styles
├── package.json         # Project dependencies
├── tsconfig.json        # TypeScript configuration
├── tailwind.config.js   # Tailwind CSS configuration
├── vite.config.ts       # Vite configuration
└── README.md           # This file
```

## 🎨 Customization

### Changing Colors
The project uses a custom color scheme defined in Tailwind CSS. Main colors:
- Primary: `#6C63FF` (Purple accent)
- Text: `#C0C0C0` (Silver)
- Background: `#0A0A0A` (Near black)
- Glass: `rgba(255, 255, 255, 0.03)` (Translucent white)

### Adding New Sections
1. Create a new component in `src/components/`
2. Import and add it to `App.tsx`
3. Update the header navigation if needed

### Language Support
Edit the language content in each component's language object (typically defined with `lang === 'ru'` conditions).

## 🌟 Key Technical Decisions

### Why React + TypeScript?
- Type safety prevents runtime errors
- Better IDE support and autocomplete
- Easier refactoring and maintenance
- Industry standard for modern web development

### Why Vite?
- Extremely fast development server startup
- Lightning-fast hot module replacement (HMR)
- Optimized production builds
- Native ES modules support

### Why Tailwind CSS?
- Rapid UI development with utility classes
- Consistent design system
- Smaller CSS bundle size with purging
- Easy responsive design implementation

### Why Supabase?
- Full-featured backend without server management
- PostgreSQL database with real-time capabilities
- Built-in authentication
- Generous free tier for personal projects

## 📄 License

This is a personal portfolio project. Feel free to use it as inspiration for your own portfolio!

## 👤 Author

**THISISBEKA**

- GitHub: [@thisisbeka](https://github.com/thisisbeka)
- LinkedIn: [Bekpasha Dursunov](https://www.linkedin.com/in/thisisbeka/)
- Telegram: [@thisisbeka](https://t.me/thisisbeka)

---

Built with ❤️ using React, TypeScript, and modern web technologies.
