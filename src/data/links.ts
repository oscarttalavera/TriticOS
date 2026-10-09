import {
    BookOpen, Building2, CreditCard, FileSpreadsheet, Calculator, HardDrive,
    Landmark, PackageSearch, Ruler, ShieldCheck, Wrench,
    type LucideIcon,
} from "lucide-react";

export type Tone =
    | "brand" | "green" | "purple" | "blue" | "orange"
    | "indigo" | "teal" | "amber" | "red";

export interface LinkItem {
    title: string;
    icon: LucideIcon;
    tone: Tone;
    subtitle?: string;
    /** Sin `url` el enlace se muestra deshabilitado como "Próximamente". */
    url?: string;
}

const DRILLING_TABLES_URL =
    "https://docs.google.com/spreadsheets/d/1EG4I-Iz51zZtcHpQ-k69xV6Y58S4O6tnI39EEcvDc3g/edit?usp=sharing";

export const DIRECTORY_URL =
    "https://docs.google.com/spreadsheets/d/1EFQNksYAqEWJYm4H5XQ1HbVWmMD0WRWvJWWB1NJ3SUk";

export const quickActions: LinkItem[] = [
    {
        title: "Nueva Cotización",
        icon: FileSpreadsheet,
        tone: "green",
        url: "https://docs.google.com/spreadsheets/d/1n8C5HXRL-HGFSptkOSpJIPK6BfdAsCfO4ndFjJAkwlE",
    },
    {
        title: "Calculadora de Impresión 3D",
        icon: Calculator,
        tone: "purple",
        url: "https://docs.google.com/spreadsheets/d/1fVFBXBFU8Xk4DtUKjNdxpM6qoOHAnYtZnkvGW8BMkMo",
    },
    { title: "Assets de Clientes", icon: HardDrive, tone: "blue" },
    { title: "Tablas de Barrenación", icon: Ruler, tone: "brand", url: DRILLING_TABLES_URL },
];

export const operationsResources: LinkItem[] = [
    { title: "Docs Interna", icon: BookOpen, tone: "orange" },
    { title: "Control de Inventario", icon: PackageSearch, tone: "indigo" },
    { title: "Mantenimiento", icon: Wrench, tone: "teal" },
];

export const engineeringResources: LinkItem[] = [
    {
        title: "Tablas de Barrenación",
        subtitle: "Referencia para diseño de piezas (insertos y machuelos).",
        icon: Ruler,
        tone: "brand",
        url: DRILLING_TABLES_URL,
    },
];

export const purchaseOrders: LinkItem[] = [
    {
        title: "Registro POs Compartido",
        icon: FileSpreadsheet,
        tone: "amber",
        url: "https://docs.google.com/spreadsheets/d/1yLWPsZnfxTHGRtHdqoCeEF22fJX88Rt4chJohETiUSQ",
    },
    {
        title: "Registro Principal POs",
        icon: FileSpreadsheet,
        tone: "amber",
        url: "https://docs.google.com/spreadsheets/d/1jqWTtQ3j_tqXBVSKOKO6a8TF4-ZgLgvwosSEDKCj5YY",
    },
];

export const billingLinks: LinkItem[] = [
    {
        title: "Portal Facturación SAT",
        icon: ShieldCheck,
        tone: "brand",
        url: "https://www.sat.gob.mx/portal/public/tramites/factura-electronica",
    },
    {
        title: "Declaraciones SAT",
        icon: Landmark,
        tone: "brand",
        url: "https://www.sat.gob.mx/portal/public/tramites/declaraciones-pf",
    },
    {
        title: "Portal Facturas Safran",
        icon: Building2,
        tone: "brand",
        url: "https://sem.cfdiseguro.com/cfdi/EnviaFactura",
    },
    {
        title: "Cargar Facturas Vallen",
        icon: CreditCard,
        tone: "brand",
        url: "https://recepcion.facturaxion.com/?san=PSI8906083F8#",
    },
];

export interface ProspectFile {
    filename: string;
    title: string;
    size: string;
    /** Versión anterior: sigue disponible pero se muestra al final y atenuada. */
    legacy?: boolean;
}

export const prospectFiles: ProspectFile[] = [
    { filename: "Tritic-Presentacion-de-servicios.pdf", title: "Presentación de Servicios", size: "PDF · 1.4 MB" },
    { filename: "Tritic-Ficha-de-servicios.pdf", title: "Ficha de Servicios", size: "PDF · 970 KB" },
    { filename: "Tritic-Impresion-3D-para-planta.pdf", title: "Impresión 3D para Planta", size: "PDF · 433 KB" },
    { filename: "Tritic-Folletoservicios.pdf", title: "Folleto de Servicios (anterior)", size: "PDF · 1.2 MB", legacy: true },
    { filename: "Tritic-servicios.pdf", title: "Catálogo de Servicios (anterior)", size: "PDF · 65 KB", legacy: true },
    { filename: "Tritic-Impresion3D.pdf", title: "Folleto de Impresión 3D (anterior)", size: "PDF · 182 KB", legacy: true },
];
