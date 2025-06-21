import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Portfolio from "./views/Portfolio";
import PrivacyPolicy from "./views/PrivacyPolicy";

function App() {
    useEffect(() => {
        const handleLinkClick = (e: Event) => {
            const target = e.target as HTMLAnchorElement;
            if (target.tagName === "A" && target.getAttribute("href")?.startsWith("#")) {
                const id = target.getAttribute("href")!.slice(1);
                const el = document.getElementById(id);
                if (el) {
                    e.preventDefault();
                    const navbar = document.querySelector("nav");
                    const navHeight = navbar ? navbar.getBoundingClientRect().height : 0;
                    const y = el.getBoundingClientRect().top + window.scrollY - navHeight;
                    window.scrollTo({ top: y, behavior: "smooth" });
                }
            }
        };
        document.addEventListener("click", handleLinkClick);
        return () => document.removeEventListener("click", handleLinkClick);
    }, []);

    return (
        <Router>
            <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
                <Routes>
                    <Route path="/" element={<Portfolio />} />
                    <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
