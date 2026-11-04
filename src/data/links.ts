import {
    BookOpen, BookUser, Building2, CreditCard, FileSpreadsheet, Calculator,
    Landmark, PackageSearch, Ruler, ShieldCheck, Wrench,
    Box, Hammer, Layers, PencilRuler, SlidersHorizontal, Stethoscope, Zap,
    type LucideIcon,
} from "lucide-react";
import { asset } from "../lib/assets";

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

const TOOLS_URL = "https://tools.tritic3d.com/";

export const DIRECTORY_URL =
    "https://docs.google.com/spreadsheets/d/1EFQNksYAqEWJYm4H5XQ1HbVWmMD0WRWvJWWB1NJ3SUk";

const quoteLink: LinkItem = {
    title: "Nueva Cotización",
    icon: FileSpreadsheet,
    tone: "green",
    url: "https://docs.google.com/spreadsheets/d/1n8C5HXRL-HGFSptkOSpJIPK6BfdAsCfO4ndFjJAkwlE",
};

const calculatorLink: LinkItem = {
    title: "Cotizador",
    subtitle: "Calculadora en Google Sheets · Impresión 3D y estructuras.",
    icon: Calculator,
    tone: "purple",
    url: "https://docs.google.com/spreadsheets/d/1GcrvYIQl4BNtuDotTuda6uSxanXtXUhzTWNZguooD9s/edit?usp=sharing",
};

const instantQuoteLink: LinkItem = {
    title: "Cotizador Inmediato 3D",
    subtitle: "Sitio web de Tritic · Cotizaciones instantáneas de impresión 3D.",
    icon: Zap,
    tone: "amber",
    url: "https://cotizador.tritic3d.com/",
};

export const toolsPortalLink: LinkItem = {
    title: "Tritic Tools",
    subtitle: "Portal con todas las herramientas de ingeniería.",
    icon: Hammer,
    tone: "brand",
    url: TOOLS_URL,
};

const directoryLink: LinkItem = {
    title: "Directorio Tritic",
    subtitle: "Contacto de colaboradores y departamentos.",
    icon: BookUser,
    tone: "blue",
    url: DIRECTORY_URL,
};

const drillingTablesLink: LinkItem = {
    title: "Tablas de Barrenación",
    subtitle: "Google Sheets · Referencia para diseño de piezas (insertos y machuelos).",
    icon: Ruler,
    tone: "brand",
    url: DRILLING_TABLES_URL,
};

/** Atajos de Inicio: los recursos de uso diario, que viven en su sección. */
export const homeShortcuts: LinkItem[] = [quoteLink, calculatorLink, toolsPortalLink, directoryLink];

/** Administrativo, paso 1: cotizar. */
export const quotingLinks: LinkItem[] = [
    quoteLink,
    calculatorLink,
    instantQuoteLink,
    {
        title: "Registro de Cotizaciones",
        subtitle: "Historial de cotizaciones emitidas.",
        icon: FileSpreadsheet,
        tone: "teal",
        url: "https://docs.google.com/spreadsheets/d/1KJsYzTgAj7mkHIUHAGBEMeX_UEJSHgjNew-FpKbWH2s/edit?usp=sharing",
    },
];

/** Ingeniería y Taller, diseño: lo que se consulta al modelar una pieza. */
export const designResources: LinkItem[] = [
    {
        title: "Guía de Diseño para Impresión 3D",
        subtitle: "Espesores, voladizos, orientación, holguras y ensambles.",
        icon: PencilRuler,
        tone: "blue",
        url: `${TOOLS_URL}diseno/`,
    },
    {
        title: "Catálogo de Materiales",
        subtitle: "Propiedades, temperaturas y aplicaciones de materiales FDM.",
        icon: Layers,
        tone: "purple",
        url: `${TOOLS_URL}materiales/`,
    },
    {
        title: "Guía de Barrenos",
        subtitle: "Tritic Tools · Diámetros para machuelos, insertos y pernos.",
        icon: Ruler,
        tone: "orange",
        url: `${TOOLS_URL}barrenos/`,
    },
    drillingTablesLink,
    {
        title: "Directorio de Modelos 3D",
        subtitle: "Más de 25 sitios para descargar modelos.",
        icon: Box,
        tone: "indigo",
        url: `${TOOLS_URL}modelos/`,
    },
];

/** Ingeniería y Taller, producción. Los enlaces sin `url` se agrupan en "Próximamente". */
export const workshopResources: LinkItem[] = [
    {
        title: "Guía de Calibración",
        subtitle: "Calibración de impresora paso a paso con modelos de prueba.",
        icon: SlidersHorizontal,
        tone: "teal",
        url: `${TOOLS_URL}calibracion/`,
    },
    {
        title: "Diagnóstico de Fallas",
        subtitle: "Del síntoma a la causa y su solución.",
        icon: Stethoscope,
        tone: "red",
        url: `${TOOLS_URL}diagnostico/`,
    },
    { title: "Control de Inventario", icon: PackageSearch, tone: "indigo" },
    { title: "Mantenimiento", icon: Wrench, tone: "teal" },
];

/** Documentos: documentos de referencia que no son PDF. */
export const internalResources: LinkItem[] = [directoryLink, drillingTablesLink];

export const purchaseOrders: LinkItem[] = [
    {
        title: "Registro Principal POs",
        icon: FileSpreadsheet,
        tone: "amber",
        url: "https://docs.google.com/spreadsheets/d/1jqWTtQ3j_tqXBVSKOKO6a8TF4-ZgLgvwosSEDKCj5YY",
    },
    {
        title: "Registro POs Compartido",
        subtitle: "RR Fab",
        icon: FileSpreadsheet,
        tone: "amber",
        url: "https://docs.google.com/spreadsheets/d/1yLWPsZnfxTHGRtHdqoCeEF22fJX88Rt4chJohETiUSQ",
    },
    {
        title: "Registro POs Compartido",
        subtitle: "MCU",
        icon: FileSpreadsheet,
        tone: "amber",
        url: "https://docs.google.com/spreadsheets/d/1lSdpbJAHbj5tpJl2NHEP_d22tJylCznzS5jwcOsidR0/edit?usp=sharing",
    },
];

export interface DocumentFile {
    filename: string;
    title: string;
    /** Sección en la que se agrupa dentro de Documentos. */
    category: string;
    size: string;
    subtitle?: string;
    /** Código de control del documento, p. ej. TRT-PRC-FAC-01 (procedimientos y SOPs). */
    code?: string;
    version?: string;
    /** Versión anterior: sigue disponible pero se muestra plegada al final. */
    legacy?: boolean;
}

export const PROSPECT_CATEGORY = "Material para prospectos";

/** También se enlaza desde Facturar. */
const safranBillingGuide: DocumentFile = {
    filename: "Tritic-Guia-de-facturacion-Safran-Seats.pdf",
    title: "Guía de facturación: Safran Seats, Planta 4",
    code: "TRT-PRC-FAC-01",
    version: "v1.2",
    category: "Facturación",
    subtitle: "CFDI a cliente extranjero y envío a Paragon, en cinco pasos.",
    size: "PDF · 73 KB",
};

/**
 * Todos los PDF del hub. Documentos los muestra completos, agrupados por `category`
 * en el orden en que aparece cada una; las demás pantallas toman de aquí lo suyo.
 */
export const documents: DocumentFile[] = [
    safranBillingGuide,
    { filename: "Tritic-Presentacion-de-servicios.pdf", title: "Presentación de Servicios", category: PROSPECT_CATEGORY, size: "PDF · 1.4 MB" },
    { filename: "Tritic-Ficha-de-servicios.pdf", title: "Ficha de Servicios", category: PROSPECT_CATEGORY, size: "PDF · 970 KB" },
    { filename: "Tritic-Impresion-3D-para-planta.pdf", title: "Impresión 3D para Planta", category: PROSPECT_CATEGORY, size: "PDF · 433 KB" },
    { filename: "Tritic-Folletoservicios.pdf", title: "Folleto de Servicios", category: PROSPECT_CATEGORY, size: "PDF · 1.2 MB", legacy: true },
    { filename: "Tritic-servicios.pdf", title: "Catálogo de Servicios", category: PROSPECT_CATEGORY, size: "PDF · 65 KB", legacy: true },
    { filename: "Tritic-Impresion3D.pdf", title: "Folleto de Impresión 3D", category: PROSPECT_CATEGORY, size: "PDF · 182 KB", legacy: true },
];

export const prospectDocuments = documents.filter((doc) => doc.category === PROSPECT_CATEGORY);

/** Facturar: trámites ante el SAT. */
export const satLinks: LinkItem[] = [
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
];

/** Facturar: portal y guía de cada cliente, juntos. */
export const clientBillingLinks: LinkItem[] = [
    {
        title: "Portal Facturas Safran",
        icon: Building2,
        tone: "brand",
        url: "https://sem.cfdiseguro.com/cfdi/EnviaFactura",
    },
    {
        title: "Guía de Facturación Safran",
        subtitle: `${safranBillingGuide.code} · Planta 4, envío a Paragon.`,
        icon: BookOpen,
        tone: "brand",
        url: asset(safranBillingGuide.filename),
    },
    {
        title: "Cargar Facturas Vallen",
        icon: CreditCard,
        tone: "brand",
        url: "https://recepcion.facturaxion.com/?san=PSI8906083F8#",
    },
];
