/**
 * Funkos
 */
export const GET_ALL_FUNKOS = 'https://web-scrapping-sample-proyecto-final-funko-mania.vercel.app/api/all-funkos.json';

/**
 * Regiones, Comunas
 */
export const GET_ALL_REGIONES = 'https://apis.digital.gob.cl/dpa/regiones';
export const GET_COMUNAS_BY_CODIGO_REGION = codigo_region => `https://apis.digital.gob.cl/dpa/regiones/${codigo_region}/comunas`;
