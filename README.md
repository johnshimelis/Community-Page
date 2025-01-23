# Community Page 🌟

A **frontend-only** community page built with **React** and **TypeScript**, featuring post creation, nested comments, and mock data integration. This project showcases clean, maintainable code and a user-friendly interface.

---

## 🚀 Live Demo

[Click here to view the live demo!](https://communitypage.netlify.app/)

---

## 🧰 Features

- ✍️ **Post Creation**: Users can create new posts effortlessly.
- 🗨️ **Nested Comments**: Fully functional nested comments with a visually clear hierarchy.
- 🗣️ **Commenting System**: Supports comments on posts and replies to comments.
- 📊 **Mock Data**: Pre-loaded data ensures the page looks populated without needing a backend.
- 🎨 **Styling**: Built with SCSS, ensuring modular, responsive, and scalable design.
- ✅ **Code Quality**: Clean, maintainable, and modular code written in TypeScript.

---

## 🛠️ Tech Stack

- **React**: Library for building user interfaces.
- **TypeScript**: Ensures type safety and maintainability.
- **SCSS**: Modular and reusable styles.
- **UI Libraries**: Optionally includes Material-UI for fast prototyping.

---

## 🖥️ Getting Started

Follow these steps to run the project locally:

### Prerequisites

- Node.js v16+
- npm or yarn

### Installation

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/johnshimelis/community-page.git
   cd community-page

2. Install Dependencies:
   npm install

3. Start the Development Server:
   npm start

4. 📂 Folder Structure
   community-page/
├── public/               # Static assets (e.g., index.html, favicon)
├── src/                  # Main source code
│   ├── components/       # Reusable React components
│   ├── data/             # Mock data files
│             # Custom hooks
│   ├── styles/           # SCSS stylesheets
│  
│   ├── App.tsx           # Main app component
│   ├── index.tsx         # Entry point
│   └── ...               # Other files
├── .gitignore            # Files ignored by Git
├── package.json          # Dependencies and project metadata
├── tsconfig.json         # TypeScript configuration
└── README.md             # Project documentation

🧠 Architectural Decisions

Why TypeScript?
TypeScript enforces type safety, improves code maintainability, and reduces runtime errors, making the codebase more robust and scalable.

Why SCSS?
SCSS provides modular and reusable styles, making it easier to maintain and scale the project's design.

Nested Comments
A recursive approach is used to render comments and their replies. This ensures flexibility for deeply nested structures and allows seamless rendering of hierarchical data.


