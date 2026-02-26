import { Sun, Moon, Bell, Menu } from "lucide-react";
import { useTheme } from "../../hooks/useTheme";

export function Navbar() {
    const { theme, toggleTheme } = useTheme();

    return (
        <header className="h-16 flex-shrink-0 flex items-center justify-between px-6 border-b border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50 backdrop-blur-md sticky top-0 z-10 transition-colors">
            <div className="flex items-center">
                <button className="md:hidden mr-4 p-2 -ml-2 text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg">
                    <Menu className="w-5 h-5" />
                </button>
                <h1 className="text-xl font-semibold opacity-90 hidden sm:block">Panel General</h1>
            </div>

            <div className="flex items-center space-x-3">
                <button
                    className="p-2 text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors relative"
                    aria-label="Notifications"
                >
                    <Bell className="w-5 h-5" />
                    <span className="absolute top-2 right-2.5 w-2 h-2 rounded-full bg-brand-500 ring-2 ring-white dark:ring-slate-900"></span>
                </button>

                <button
                    onClick={toggleTheme}
                    className="p-2 text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors"
                    aria-label="Toggle theme"
                >
                    {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                </button>

                <div className="ml-2 w-8 h-8 rounded-full bg-gradient-to-tr from-brand-600 to-brand-400 border-2 border-white dark:border-slate-800 shadow-sm cursor-pointer"></div>
            </div>
        </header>
    );
}
