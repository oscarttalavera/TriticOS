import { BookUser, ArrowRight } from "lucide-react";

export function AdminDirectories() {
    const directoryUrl = "https://docs.google.com/spreadsheets/d/1EFQNksYAqEWJYm4H5XQ1HbVWmMD0WRWvJWWB1NJ3SUk";

    return (
        <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-5 shadow-sm">
            <div className="flex items-center gap-4">
                {/* Icon */}
                <div className="flex-shrink-0 w-14 h-14 bg-brand-50 dark:bg-brand-500/10 rounded-2xl flex items-center justify-center border border-brand-100 dark:border-brand-500/20">
                    <BookUser className="w-7 h-7 text-brand-500" />
                </div>

                {/* Text */}
                <div className="flex-1 min-w-0">
                    <h3 className="text-base font-semibold text-slate-900 dark:text-white">
                        Directorio Tritic
                    </h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400 mt-0.5">
                        Accede al contacto de todos los colaboradores y departamentos.
                    </p>
                </div>

                {/* CTA button */}
                <a
                    href={directoryUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-shrink-0 flex items-center gap-2 px-5 py-2.5 bg-brand-500 hover:bg-brand-600 text-slate-900 font-semibold text-sm rounded-xl transition-colors duration-150"
                >
                    <BookUser className="w-4 h-4" />
                    Directorio General
                    <ArrowRight className="w-4 h-4" />
                </a>
            </div>
        </div>
    );
}
