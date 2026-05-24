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


## Section Descriptions 📝

### Hero Section
The Hero section is the visually striking introduction at the top of the portfolio. It features animated text, a code snippet, and a brief summary of your professional identity and skills. This section is designed to immediately capture the visitor’s attention, communicate your core strengths, and set the tone for the rest of the site. It often includes a call-to-action, such as links to your projects or contact information, making it easy for visitors to engage with your work right away.

### Projects Section
The Projects section highlights your technical abilities and creativity by presenting your portfolio work in a clean, interactive gallery. Each project is displayed as a card with a brief description and a list of key technologies, making it easy for visitors to scan and appreciate the breadth of your experience. The section is visually organized for quick browsing, emphasizing your strengths as a developer and your ability to deliver real-world solutions.

### Experience Section
The Experience section is designed to showcase your professional growth, technical skills, and career highlights in a visually engaging way. It uses a timeline or card layout to present your journey, including roles, responsibilities, and technologies you’ve worked with. This section helps visitors quickly understand your background, work ethic, and the progression of your expertise—even if you’re early in your career or have no formal work experience yet.

### Education Section
The Education section presents your academic background and relevant training in a clear, card-based format. Each entry highlights your degree or certification, institution, period of study, and key details about your coursework or focus areas. This section helps visitors understand your formal qualifications and the foundation of your technical knowledge, complementing your professional and project experience.

## Architecture 🏗️


```
src/
├── api/                # API integrations (e.g., EmailJS)
├── components/         # Modular React components
│   ├── Contacts/       # Contact form and styles
│   ├── Experience/     # Experience timeline/cards and styles
│   ├── Hero/           # Hero section and styles
│   ├── Navbar/         # Navigation bar and styles
│   ├── Projects/       # Projects gallery and styles
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
inspired by PedroTech