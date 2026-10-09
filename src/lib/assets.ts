/** Resuelve un archivo de /public respetando `base: './'` (necesario bajo file:// en Electron). */
export const asset = (name: string) => `${import.meta.env.BASE_URL}${name}`;
