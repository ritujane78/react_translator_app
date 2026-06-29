#  React Translator App

A modern, responsive language translator built with **React**, **Vite**, and **Tailwind CSS**. The application allows users to translate text between multiple languages using an external translation API while providing a clean, intuitive interface with live character counting and searchable language selection.

---

#  Features

-  Translate text between numerous languages
-  Searchable language dropdown
-  Switch between source and destination languages
- Live character counter
-  Keyboard-friendly interactions
-  Fully responsive design
-  Fast React + Vite application
-  Modern Tailwind CSS interface
-  Improved dropdown behaviour with outside-click detection

---

#  Tech Stack

- React 19
- Vite
- JavaScript (ES6+)
- Tailwind CSS 4
- HTML5
- CSS3

---

#  Project Structure

```
translator_app/
│
├── screenshots/
│   ├── char_count.png
│   ├── dropdown.png
│   ├── mobile_viewI.png
│   ├── mobile_viewII.png
│   ├── start_template.png
│   ├── translate.png
│   └── translator_template.png
│
├── src/
│   ├── components/
│   │   ├── TranslatorApp.jsx
│   │   └── TranslatorStart.jsx
│   │
│   ├── App.jsx
│   ├── languagesData.js
│   ├── index.css
│   └── main.jsx
│
├── package.json
├── vite.config.js
└── index.html
```

---

#  Getting Started

Clone the repository

```bash
git clone https://github.com/ritujane78/react_translator_app.git
```

Navigate into the project

```bash
cd react_translator_app
```

Install dependencies

```bash
npm install
```

Start the development server

```bash
npm run dev
```

Build for production

```bash
npm run build
```

Preview production build

```bash
npm run preview
```

---

# Translation

The application integrates with an external translation service to translate user input into the selected destination language.

Workflow:

1. Select source language.
2. Select destination language.
3. Enter text.
4. Send translation request.
5. Display translated output.

---

# Languages

Languages are maintained in

```
src/languagesData.js
```

making it easy to add, remove or modify supported languages.

---

# 📱 Responsive Design

The application is optimized for:

- Desktop
- Laptop
- Tablet
- Mobile

Responsive improvements include:

- Flexible layouts
- Mobile-friendly controls
- Optimized spacing
- Better touch interactions

---

# Performance

Built with:

- Vite
- React 19

which provides:

- Lightning-fast development
- Hot Module Replacement (HMR)
- Optimized production builds

---

#  Dependencies

Main dependencies

- React
- React DOM
- Tailwind CSS
- Vite

Development tools

- ESLint
- PostCSS
- Autoprefixer

