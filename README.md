Community Page 🌟
A frontend-only community page built with React and TypeScript, featuring post creation, nested comments, and mock data integration. This project showcases clean, maintainable code and a user-friendly interface.

🚀 Live Demo
Click here to view the live demo! <!-- Replace with the actual live demo link -->

🧰 Features
Post Creation: Users can create new posts effortlessly.
Nested Comments: Fully functional nested comments with a visually clear hierarchy.
Commenting System: Supports comments on posts and replies to comments.
Mock Data: Pre-loaded data ensures the page looks populated without needing a backend.
Styling: Built with SCSS, ensuring modular, responsive, and scalable design.
Code Quality: Clean, maintainable, and modular code written in TypeScript.
🛠️ Tech Stack
React: Library for building user interfaces.
TypeScript: Ensures type safety and maintainability.
SCSS: Modular and reusable styles.
UI Libraries: Optionally includes Material-UI for fast prototyping.
🖥️ Getting Started
Follow these steps to run the project locally:

Prerequisites
Node.js v16+
npm or yarn
Installation
Clone the Repository:

bash
Copy
Edit
git clone https://github.com/yourusername/community-page.git
cd community-page
Install Dependencies:

bash
Copy
Edit
npm install
# or
yarn install
Start the Development Server:

bash
Copy
Edit
npm start
# or
yarn start
Access the App:
Open http://localhost:3000 in your browser.

📂 Folder Structure
plaintext
Copy
Edit
community-page/
├── public/               # Static assets (e.g., index.html, favicon)
├── src/                  # Main source code
│   ├── components/       # Reusable React components
│   ├── data/             # Mock data files
│   ├── hooks/            # Custom hooks
│   ├── styles/           # SCSS stylesheets
│   ├── utils/            # Utility functions
│   ├── App.tsx           # Main app component
│   ├── index.tsx         # Entry point
│   └── ...               # Other files
├── .gitignore            # Files ignored by Git
├── package.json          # Dependencies and project metadata
├── tsconfig.json         # TypeScript configuration
└── README.md             # Project documentation
🧠 Architectural Decisions
Why TypeScript?
To enforce type safety, improve code maintainability, and reduce runtime errors.

Why SCSS?
SCSS provides modular and reusable styles, making it easier to maintain and scale the project.

Nested Comments
A recursive approach is used to render comments and their replies, ensuring flexibility for deeply nested structures.
