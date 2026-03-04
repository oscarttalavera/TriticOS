import { FileSpreadsheet, ExternalLink } from "lucide-react";

export function AdminDirectories() {
    const directories = [
        {
            title: "Directorio General",
            description: "Prospectos, competencia y proveedores.",
            icon: <FileSpreadsheet className="w-5 h-5 text-blue-500" />,
            url: "https://docs.google.com/spreadsheets/d/1EFQNksYAqEWJYm4H5XQ1HbVWmMD0WRWvJWWB1NJ3SUk",
            color: "bg-blue-50 dark:bg-blue-500/10",
            borderColor: "border-blue-100 dark:border-blue-500/20"
        }
    ];

    return (
        <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm flex flex-col">
            <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-semibold text-slate-900 dark:text-white flex items-center">
                    <FileSpreadsheet className="w-5 h-5 mr-2 text-brand-500" />
                    Directorio Tritic
                </h2>
            </div>
            <div className="space-y-4">
                {directories.map((dir, idx) => (
                    <a
                        key={idx}
                        href={dir.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`group flex items-center p-3.5 rounded-xl border ${dir.borderColor} ${dir.color} hover:shadow-md transition-all duration-200 cursor-pointer`}
                    >
                        <div className="p-2 bg-white dark:bg-slate-800 rounded-lg shadow-sm mr-4">
                            {dir.icon}
                        </div>
                        <div className="flex-1">
                            <h3 className="text-sm font-semibold text-slate-800 dark:text-slate-100 group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">
                                {dir.title}
                            </h3>
                            <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-1 mt-0.5">
                                {dir.description}
                            </p>
                        </div>
                        <ExternalLink className="w-4 h-4 text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                ))}
            </div>
        </div>
    );
}
