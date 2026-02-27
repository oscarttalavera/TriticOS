import { Sun, Moon, Menu, X, Home, BriefcaseBusiness, Paintbrush, Settings } from "lucide-react";
import { useTheme } from "../../hooks/useTheme";
import { NavLink } from "react-router-dom";
import { useState } from "react";

export function Navbar() {
    const { theme, toggleTheme } = useTheme();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const navItems = [
        { path: "/dashboard", icon: <Home className="w-5 h-5 md:w-4 md:h-4 mr-3 md:mr-2" />, label: "Dashboard" },
        { path: "/operations", icon: <Settings className="w-5 h-5 md:w-4 md:h-4 mr-3 md:mr-2" />, label: "Operaciones" },
        { path: "/admin", icon: <BriefcaseBusiness className="w-5 h-5 md:w-4 md:h-4 mr-3 md:mr-2" />, label: "Administrativo" },
        { path: "/brand", icon: <Paintbrush className="w-5 h-5 md:w-4 md:h-4 mr-3 md:mr-2" />, label: "Marca y Diseño" },
    ];

    const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

    return (
        <header className="flex-shrink-0 border-b border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50 backdrop-blur-md sticky top-0 z-10 transition-colors">
            <div className="h-16 flex items-center justify-between px-6">
                <div className="flex items-center">
                    <button
                        onClick={toggleMenu}
                        className="md:hidden mr-4 p-2 -ml-2 text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
                        aria-label="Toggle menu"
                    >
                        {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                    </button>
                    <div className="flex items-center mr-8">
                        <img src="/tritic-logo.png" alt="Logo" className="h-5 w-auto object-contain mr-3" />
                        <span className="font-semibold text-lg tracking-tight leading-none self-center pt-0.5 hidden sm:inline-block">Hub</span>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center space-x-1">
                        {navItems.map((item) => (
                            <NavLink
                                key={item.path}
                                to={item.path}
                                className={({ isActive }) =>
                                    `flex items-center px-3 py-2 rounded-lg font-medium text-sm transition-colors ${isActive
                                        ? "bg-brand-50 text-brand-600 dark:bg-brand-900/30 dark:text-brand-400"
                                        : "text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800/50 hover:text-slate-900 dark:hover:text-slate-100"
                                    }`
                                }
                            >
                                {item.icon}
                                {item.label}
                            </NavLink>
                        ))}
                    </nav>
                </div>

                <div className="flex items-center space-x-3">
                    <button
                        onClick={toggleTheme}
                        className="p-2 text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors"
                        aria-label="Toggle theme"
                    >
                        {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                    </button>
                </div>
            </div>

            {/* Mobile Navigation Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-4 py-4 space-y-2 absolute w-full shadow-lg left-0">
                    {navItems.map((item) => (
                        <NavLink
                            key={item.path}
                            to={item.path}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className={({ isActive }) =>
                                `flex items-center px-4 py-3 rounded-lg font-medium transition-colors ${isActive
                                    ? "bg-brand-50 text-brand-600 dark:bg-brand-900/30 dark:text-brand-400"
                                    : "text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800/50 hover:text-slate-900 dark:hover:text-slate-100"
                                }`
                            }
                        >
                            {item.icon}
                            {item.label}
                        </NavLink>
                    ))}
                </div>
            )}
        </header>
    );
}
