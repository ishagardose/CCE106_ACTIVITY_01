# CCE106 - Activity 01: Profile Card Application

A modern, responsive, and cross-platform Developer Profile application built with **React Native (Expo)** and **React (Vite)** following clean coding principles and modular component architecture.

---

## 👤 Developer Profile

- **Name:** Princess Crisha G. Cabradilla
- **Title:** Aspiring Cybersecurity Developer
- **Certifications:** Certiport IT Specialist • 2026
- **Status:** Open to Work

> *"Computer Science student specializing in Cybersecurity, with experience building web and mobile applications. Passionate about developing secure, functional, and user-friendly applications, and always eager to learn and adapt."*

---

## 🛠️ Technical Stack & Skills

- **Cybersecurity & Core:** Cybersecurity, Python, Java, MySQL, Git
- **Web & Frameworks:** Laravel, Quasar, HTML & CSS
- **Mobile Development:** React Native, Expo, Flutter

---

## 📁 Project Architecture & Clean Code Structure

The project strictly adheres to **Single Responsibility Principle (SRP)**, **Separation of Concerns**, and **DRY (Don't Repeat Yourself)** principles:

```text
CCE106_ACTIVITY_01/
├── app/                        # Expo Router Navigation & Screen Layouts
│   ├── (tabs)/
│   │   ├── _layout.jsx         # Bottom Tab Navigator
│   │   ├── index.jsx           # Profile View with Safe Area & Scroll handling
│   │   └── explore.jsx         # Secondary exploratory screen
│   └── _layout.jsx             # Root stack navigator
├── components/profile/         # Modular Atomic UI Components
│   ├── Badge.jsx               # Reusable status pill badges (Open to Work, Certified)
│   ├── SkillTag.jsx            # Atomic skill chips
│   ├── ConnectButton.jsx       # Interactive touchable link buttons with vector icons
│   └── ProfileCard.jsx         # Composed profile card container
├── constants/
│   ├── profileData.js          # Centralized data layer (Decoupled from UI)
│   └── theme.js                # Theme color palettes & typography tokens
├── assets/images/              # Bundled image assets
└── my-portfolio/               # Standalone React + Vite Web Portfolio
    └── src/
        ├── components/         # Modular React components
        ├── constants/          # Web profile data source
        └── App.jsx             # Web application root
```

---

## 🚀 Getting Started & Local Setup

### 1. Mobile / React Native (Expo)

Clone the repository and install dependencies:

```bash
git clone https://github.com/ishagardose/CCE106_ACTIVITY_01.git
cd CCE106_ACTIVITY_01
npm install
```

Start the development server:

```bash
npx expo start
```

- **Android / iOS:** Scan the terminal QR code using **Expo Go**.
- **Web:** Press `w` or open `http://localhost:8081` in your browser.

---

### 2. React Web App (Vite)

Navigate to the `my-portfolio` folder:

```bash
cd my-portfolio
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 📄 Activity Information

- **Course:** CCE106
- **Activity Number:** Activity 01
- **Author:** Princess Crisha G. Cabradilla
- **Repository:** [https://github.com/ishagardose/CCE106_ACTIVITY_01](https://github.com/ishagardose/CCE106_ACTIVITY_01)
