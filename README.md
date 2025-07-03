
# 🚀 ALJEBALI Portfolio Web App

A modern, responsive, and animated portfolio built with **React + Vite** — designed to showcase your **projects**, **skills**, and **contact** in an elegant and interactive way.

[🌐 Live Preview](https://aljebali.netlify.app) • [📂 GitHub Repo](https://github.com/AhmedALJebali/myPortfolio)

---

## ✨ Features

- 🎨 **Responsive Design** – Looks great on all screen sizes
- 🖼 **Project Gallery** – Filterable cards with images, titles, and links
- 📄 **Project Details Pages** – Including:
  - Swiper.js image carousel  
  - Animated title (typewriter effect)  
  - Live README rendering using React Markdown
- 🌙 **Dark/Light Mode** – with persistent theme via localStorage
- ✉️ **Contact Form** – Connected to Formspree with Lottie animations
- ⬆️ Scroll to top button & custom 404 fallback

---

## 🧩 Main Components

| Component              | Purpose                                      |
|------------------------|----------------------------------------------|
| `Header.jsx`           | Navigation bar + theme toggle                |
| `Hero.jsx`             | Landing intro with typewriter & social links|
| `Main.jsx`             | Filterable project gallery                   |
| `ProjectDetails.jsx`   | Dynamic project page with Swiper + Markdown |
| `Contact.jsx`          | Contact form with animation & validation     |
| `Footer.jsx`           | Social links & copyright                     |

---

## 🛠 Tech Stack

- **React 18**
- **Vite**
- **Swiper.js** – Image sliders
- **Framer Motion** – UI animation
- **Lottie React** – Animated illustrations
- **React Markdown** – Render markdown content
- **@formspree/react** – Contact form handling
- **Typewriter Effect**
- **CSS Modules** – Scoped styling

---

## 📁 Project Structure

```
src/
  App.jsx
  main.jsx
  index.css
  animation/
    dev.json
    done.json
    contact.json
  component/
    1-header/Header.jsx
    2-hero/Hero.jsx
    3-main/
      Main.jsx
      myprojects.json
      ProjectDetails/ProjectDetails.jsx
    4-contact/Contact.jsx
    5-footer/Footer.jsx
public/
  ProjectsAssets/
    ProjectName/
      images/
      README.md
  style.css
  me-modified.png
```

---

## ➕ How to Add a New Project

1. Add entry to `myprojects.json`
2. Place project images in `public/ProjectsAssets/YourProjectName/images/`
3. Add a `README.md` in the same folder, or provide a GitHub README URL

---

## 📦 Getting Started

```bash
git clone https://github.com/AhmedALJebali/myPortfolio.git
cd myPortfolio
npm install
npm run dev
```

Open in browser: [http://localhost:5173](http://localhost:5173)

---

## 📬 Contact

- ✉️ Email: [ahmedaljebali@email.com](mailto:ahmedaljebalii@email.com)
- 🧠 LinkedIn: [@AhmedALJebali](https://linkedin.com/in/ahmedaljebali)
- 💻 GitHub: [@AhmedALJebali](https://github.com/AhmedALJebali)

---

## 📄 License

This project is for personal and educational use only.  
© Ahmed AlJebali — All rights reserved.
