# Zeno's Paradox Race Simulator

A visual simulation of Zeno's famous paradox featuring a race between Achilles and a tortoise. This interactive application demonstrates the mathematical concept where Achilles, despite being faster, theoretically never catches up to the tortoise due to the infinite subdivision of distance.

---

## Tech Stack

- [React](https://react.dev/) – UI library  
- [Vite](https://vitejs.dev/) – Next-generation frontend tooling  
- [TailwindCSS](https://tailwindcss.com/) – Utility-first CSS framework  

---

## Installation

1. **Clone the repository**
   \`\`\`bash
   git clone <repository-url>
   cd challenge-paradox
   \`\`\`

2. **Install dependencies**
   \`\`\`bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   \`\`\`



##  Running the project

\`\`\`bash
npm run dev
# or
yarn dev
# or
pnpm dev
\`\`\`

## Project Structure

\`\`\`
├── app/
│   ├── page.tsx            # Main page component
├── src/
│   ├── App.jsx             # Main application component
│   ├── App.css             # Application-specific styles
│   └── components/
│       ├── RaceTrack.jsx   # Race simulation component
│       └── ParadoxInfo.jsx # Educational information component
├── hooks/
│   └── useParadox.js       # Custom hook for race logic
└── README.md
\`\`\`

