import { createRoot } from "react-dom/client";
import App from "@components/App.tsx"

const root: Element | null = document.getElementById("root");

if (!root) {
    throw console.error("Root not found.");
}

createRoot(root).render(<App />);