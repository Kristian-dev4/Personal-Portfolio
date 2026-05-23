# Portfolio 🚀

A modern, interactive portfolio showcasing my web development projects, skills, and contact information. Built with React, TypeScript, Framer Motion, and EmailJS, this portfolio demonstrates both front-end and full-stack capabilities through real-world project examples.

## Overview 🌟

- **Frontend**: Built with [React](https://react.dev/) and [TypeScript](https://www.typescriptlang.org/) for a robust, type-safe, and dynamic user interface.
- **Styling**: Uses CSS Modules for modular, maintainable styles and Framer Motion for smooth, modern animations.
- **Contact**: Features a contact form powered by [EmailJS](https://www.emailjs.com/) for direct email communication.
- **Project Showcases**: Highlights real-world projects with detailed descriptions, tech stacks, and live links.

## Key Features 🚀

- **Animated Hero Section**: Eye-catching introduction with animated text and code snippet.
- **Projects Gallery**: Responsive, interactive cards for each project, with hover effects and tech stack badges.
- **Contact Form**: Secure, animated contact form with email sending and status feedback.
- **Responsive Design**: Fully responsive layout for desktop and mobile devices.
- **Accessible & Modern UI**: Clean, accessible, and visually appealing interface.

## Project Highlights 🏆

### Meme Maker
A fun and interactive web application that allows users to create, edit, save, and share memes. Features include:
- Meme creation with custom text
- Real-time meme preview
- User authentication (login/register/logout)
- Paginated meme catalog
- AI-powered meme idea generator
- Built with React, Back4App, Ant Design, and CSS Modules

[Live Demo](https://mememake.netlify.app/) | [Source Code](https://github.com/Kristian-dev4/Meme-Maker)

### Lutenitsa Appraiser
A web application for appraising and cataloging Lutenitsa brands. Features include:
- Brand catalog and detailed appraisals
- User authentication and profile management
- Responsive design with Angular Material
- Built with Angular, Supabase, Angular Material, and TypeScript

[Source Code](https://github.com/Kristian-dev4/Lutenitsa-Appraiser)

## Architecture 🏗️

```
src/
├── api/                # API integrations (e.g., EmailJS)
├── components/         # Modular React components
│   ├── Contacts/       # Contact form and styles
│   ├── Hero/           # Hero section and styles
│   ├── Navbar/         # Navigation bar and styles
│   └── Projects/       # Projects gallery and styles
├── utils/              # Animation configs and helpers
├── App.tsx             # Main app component
├── main.tsx            # Entry point
└── index.css           # Global styles
```

## Tech Stack 🧰

- **React**: UI library for building interactive interfaces
- **TypeScript**: Type-safe JavaScript for scalable code
- **Framer Motion**: Animation library for React
- **CSS Modules**: Scoped, maintainable CSS
- **EmailJS**: Email sending from the contact form
- **Vite**: Fast build tool and dev server

## How to Use 🛠️

1. **Install dependencies**
   ```bash
   npm install
   ```
2. **Start the development server**
   ```bash
   npm run dev
   ```
3. **Build for production**
   ```bash
   npm run build
   ```
4. **Preview production build**
   ```bash
   npm run preview
   ```

## Contact ✉️

The contact form on the site uses EmailJS. To enable it, set the following environment variables in a `.env` file:

```
VITE_EMAILJS_KEY=your_service_id
VITE_EMAILJS_TEMPLATE_KEY=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```