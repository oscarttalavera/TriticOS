import { ExternalLink, Settings } from "lucide-react";
import { PageHeader } from "../components/ui/PageHeader";
import { EngineeringAssets } from "../components/widgets/EngineeringAssets";
import { toolsPortalLink } from "../data/links";

export function OperationsView() {
    return (
        <>
            <PageHeader
                icon={Settings}
                title="Ingeniería y Taller"
                description="Herramientas de diseño y manufactura, y recursos operativos del taller."
                action={
                    <a
                        href={toolsPortalLink.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 px-3 py-1.5 bg-azul-50 dark:bg-azul-700/30 rounded-lg border border-azul-100 dark:border-azul-700 text-sm font-medium text-azul-700 dark:text-verde-500 hover:border-azul-600 dark:hover:border-verde-500 transition-colors"
                        title={toolsPortalLink.subtitle}
                    >
                        <toolsPortalLink.icon className="w-4 h-4" />
                        {toolsPortalLink.title}
                        <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                }
            />

            <EngineeringAssets />
        </>
    );
}
