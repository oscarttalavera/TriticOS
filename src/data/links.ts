import {
    BookUser, FileSpreadsheet, FileText, Calculator, Map as MapIcon,
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
    title: string;
    /** Sección en la que se agrupa dentro de Documentos. */
    category: string;
    /** Archivo en /public: se abre y se puede descargar desde el hub. */
    filename?: string;
    /** Documento en Google Drive, restringido a las cuentas de Tritic. */
    url?: string;
    size?: string;
    subtitle?: string;
    /** Código de control del documento, p. ej. TRT-PRC-FAC-21 (procedimientos y SOPs). */
    code?: string;
    version?: string;
    /** Versión anterior: sigue disponible pero se muestra plegada al final. */
    legacy?: boolean;
}

export const documentHref = (doc: DocumentFile) => (doc.filename ? asset(doc.filename) : doc.url);

const driveFile = (id: string) => `https://drive.google.com/file/d/${id}/view`;

export const PROSPECT_CATEGORY = "Material para prospectos";

/*
 * Sistema de facturación (TRT-PRC-FAC). Los PDF viven en Drive y no en /public
 * porque traen datos fiscales y bancarios, y el sitio y el repo son públicos.
 */
const BILLING_CATEGORY = "Facturación";
const BILLING_CLIENTS_CATEGORY = "Facturación por cliente";

const billingMap: DocumentFile = {
    title: "Mapa de facturación",
    subtitle: "Por dónde empezar: qué guía o procedimiento usar en cada caso.",
    code: "TRT-PRC-FAC-00",
    version: "v1.1",
    category: BILLING_CATEGORY,
    url: driveFile("18MMUOMraBeDOY3sZuaF2MW3ahFVStEZn"),
};

/** Procedimientos comunes: clientes sin guía o tareas sueltas. */
const billingProcedures: DocumentFile[] = [
    {
        title: "Generar una factura",
        subtitle: "Clientes sin guía y claves SAT.",
        code: "TRT-PRC-FAC-21",
        version: "v1.1",
        category: BILLING_CATEGORY,
        url: driveFile("1Sztl46dlAyVXfTKwGCxBb7laTsU7U6qW"),
    },
    {
        title: "Escanear y archivar",
        subtitle: "Cuando regresa la factura firmada o sellada.",
        code: "TRT-PRC-FAC-22",
        version: "v1.1",
        category: BILLING_CATEGORY,
        url: driveFile("1CTjHjGTRZ7umwpu_oWZrzwYhW6tHj9bO"),
    },
    {
        title: "Complemento de pago",
        subtitle: "Cada pago de una factura PPD, a más tardar el día 5 del mes siguiente.",
        code: "TRT-PRC-FAC-23",
        version: "v1.1",
        category: BILLING_CATEGORY,
        url: driveFile("1s91lffg5CNvmL9vdaq7G8D47o5T1FF_b"),
    },
    {
        title: "Cancelar o sustituir",
        subtitle: "Cuando hay un error o la venta no se realizó.",
        code: "TRT-PRC-FAC-24",
        version: "v1.1",
        category: BILLING_CATEGORY,
        url: driveFile("17AloTKDCWFhgN5mytLIGLUz2CSnACfud"),
    },
];

export interface BillingClient {
    name: string;
    /** Planta o forma de envío, y el código del cliente en la hoja de POs. */
    detail: string;
    guide: DocumentFile;
    portalUrl?: string;
}

/** Facturar: cada cliente con guía, con su guía y su portal juntos. */
export const billingClients: BillingClient[] = [
    {
        name: "Safran México",
        detail: "Plantas 1 y 6 · SAFRAN 1, SAFRAN 6",
        portalUrl: "https://sem.cfdiseguro.com/cfdi/EnviaFactura",
        guide: {
            title: "Guía de facturación: Safran Aerosystems México, plantas 1 y 6",
            subtitle: "Carga al portal antes de entregar y complemento en el portal.",
            code: "TRT-PRC-FAC-11",
            version: "v1.1",
            category: BILLING_CLIENTS_CATEGORY,
            url: driveFile("12Z2_-z4raK83uJmlEGK5pba_UWmEqYNE"),
        },
    },
    {
        name: "Safran Seats",
        detail: "Planta 4 · envío a Paragon · SAFRAN 4",
        guide: {
            title: "Guía de facturación: Safran Seats, Planta 4",
            subtitle: "CFDI a cliente extranjero y envío en PDF a Paragon.",
            code: "TRT-PRC-FAC-14",
            version: "v1.5",
            category: BILLING_CLIENTS_CATEGORY,
            url: driveFile("197lHkvTHvTnjtP6KLqy_migeu_OE2Az8"),
        },
    },
    {
        name: "Safran Evacuation",
        detail: "Envío por correo a cuentas por pagar · SAEV",
        guide: {
            title: "Guía de facturación: Safran Aerosystems Evacuation",
            subtitle: "Cliente extranjero en USD; se envía por correo.",
            code: "TRT-PRC-FAC-13",
            version: "v1.1",
            category: BILLING_CLIENTS_CATEGORY,
            url: driveFile("1v7UrDN3WGu1Cbnyz7kB2WatTE5DlYMFJ"),
        },
    },
    {
        name: "Vallen",
        detail: "Retención de ISR 1.25 % · VALL",
        portalUrl: "https://recepcion.facturaxion.com/?san=PSI8906083F8#",
        guide: {
            title: "Guía de facturación: Vallen",
            subtitle: "Proveedora de Seguridad Industrial del Golfo, con retención de ISR.",
            code: "TRT-PRC-FAC-12",
            version: "v1.1",
            category: BILLING_CLIENTS_CATEGORY,
            url: driveFile("1Ai-MvudkpLrJwtVr49XFqjqOwriCtYnS"),
        },
    },
];

/**
 * Todos los documentos del hub. Documentos los muestra completos, agrupados por `category`
 * en el orden en que aparece cada una; las demás pantallas toman de aquí lo suyo.
 */
export const documents: DocumentFile[] = [
    billingMap,
    ...billingProcedures,
    // Por código, no en el orden de Facturar.
    ...billingClients.map((client) => client.guide).sort((a, b) => (a.code ?? "").localeCompare(b.code ?? "")),
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

/** Facturar: el mapa primero y luego los procedimientos comunes. */
export const billingProcedureLinks: LinkItem[] = [billingMap, ...billingProcedures].map((doc) => ({
    title: doc.title,
    subtitle: `${doc.code} · ${doc.subtitle}`,
    icon: doc === billingMap ? MapIcon : FileText,
    tone: "brand",
    url: documentHref(doc),
}));
