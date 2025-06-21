import { useState, useEffect } from "react";
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from "@/components/ui/navigation-menu";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
    type Theme = "light" | "dark" | "system";
    const getSystemTheme = () => (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    const getInitialTheme = (): Theme => {
        const stored = localStorage.getItem("theme");
        if (stored === "light" || stored === "dark" || stored === "system") return stored;
        return "system";
    };
    const [theme, setTheme] = useState<Theme>(getInitialTheme);
    const [systemTheme, setSystemTheme] = useState<"light" | "dark">(getSystemTheme());
    const location = useLocation();

    useEffect(() => {
        if (theme === "system") {
            document.documentElement.classList.toggle("dark", systemTheme === "dark");
        } else {
            document.documentElement.classList.toggle("dark", theme === "dark");
        }
        localStorage.setItem("theme", theme);
    }, [theme, systemTheme]);

    useEffect(() => {
        if (theme !== "system") return;
        const mq = window.matchMedia("(prefers-color-scheme: dark)");
        const handler = () => setSystemTheme(getSystemTheme());
        mq.addEventListener("change", handler);
        return () => mq.removeEventListener("change", handler);
    }, [theme]);

    // Only show navigation links on the portfolio page
    const isPortfolioPage = location.pathname === "/";

    return (
        <div className="py-2 bg-white dark:bg-gray-950 shadow-md sticky top-0 z-10">
            <div className="relative flex">
                {/* Left: Logo */}
                <div className="">
                    <Link to="/">
                        <img src="/images/logo.svg" className="w-10 h-10" alt="Logo" />
                    </Link>
                </div>

                {/* Center: Nav links - only show on portfolio page */}
                {isPortfolioPage && (
                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                        <NavigationMenu>
                            <NavigationMenuList className="gap-4">
                                <NavigationMenuItem>
                                    <NavigationMenuLink className="text-xl" href="#about">
                                        About
                                    </NavigationMenuLink>
                                </NavigationMenuItem>
                                <NavigationMenuItem>
                                    <NavigationMenuLink className="text-xl" href="#skills">
                                        Skills
                                    </NavigationMenuLink>
                                </NavigationMenuItem>
                                <NavigationMenuItem>
                                    <NavigationMenuLink className="text-xl" href="#projects">
                                        Projects
                                    </NavigationMenuLink>
                                </NavigationMenuItem>
                                <NavigationMenuItem>
                                    <NavigationMenuLink className="text-xl" href="#contact">
                                        Contact
                                    </NavigationMenuLink>
                                </NavigationMenuItem>
                            </NavigationMenuList>
                        </NavigationMenu>
                    </div>
                )}

                {/* Right: Theme switcher */}
                <div className="flex gap-1 ml-auto px-2">
                    <button
                        className={`px-2 py-1 rounded transition-colors text-sm font-semibold flex items-center gap-1 ${theme === "light" ? "bg-blue-500 text-white" : "hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-100"}`}
                        onClick={() => setTheme("light")}
                        aria-label="Light mode">
                        Light
                    </button>
                    <button
                        className={`px-2 py-1 rounded transition-colors text-sm font-semibold flex items-center gap-1 ${theme === "dark" ? "bg-blue-500 text-white" : "hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-100"}`}
                        onClick={() => setTheme("dark")}
                        aria-label="Dark mode">
                        Dark
                    </button>
                    <button
                        className={`px-2 py-1 rounded transition-colors text-sm font-semibold flex items-center gap-1 ${theme === "system" ? "bg-blue-500 text-white" : "hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-100"}`}
                        onClick={() => setTheme("system")}
                        aria-label="System mode">
                        Auto
                    </button>
                </div>
            </div>
        </div>
    );
}
