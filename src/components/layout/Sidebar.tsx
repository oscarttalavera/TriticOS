import { Home, Paintbrush, BriefcaseBusiness } from "lucide-react";
import { NavLink } from "react-router-dom";

export function Sidebar() {
    const navItems = [
        { path: "/dashboard", icon: <Home className="w-5 h-5 mr-3" />, label: "Dashboard" },
        { path: "/admin", icon: <BriefcaseBusiness className="w-5 h-5 mr-3" />, label: "Administrativo" },
        { path: "/brand", icon: <Paintbrush className="w-5 h-5 mr-3" />, label: "Marca y Diseño" },
    ];

    return (
        <aside className="w-64 flex-shrink-0 hidden md:flex flex-col border-r border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 transition-colors h-full">
            <div className="h-16 flex items-center px-6 border-b border-slate-200 dark:border-slate-800">
                <img src="/tritic-logo.png" alt="Logo" className="w-8 h-8 object-contain mr-3" />
                <span className="font-semibold text-lg tracking-tight">Hub</span>
            </div>

            <div className="flex-1 py-6 px-4 space-y-2 overflow-y-auto">
                {navItems.map((item) => (
                    <NavLink
                        key={item.path}
                        to={item.path}
                        className={({ isActive }) =>
                            `flex items-center px-3 py-2.5 rounded-lg font-medium transition-colors ${isActive
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

        </aside>
    );
}
