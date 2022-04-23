import dayjs from "dayjs";
import { es } from "dayjs/locale/es";
import { calculatedEnvioByUser } from "@/utils/functions";

var utc = require('dayjs/plugin/utc');
var timezone = require('dayjs/plugin/timezone');

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.locale("es");

/** Get Fecha Llegada Paquete */
export const getDayEnvio = (userLogin) => {
    /** diasEnvio dias que se demorara */
    const diasEnvio = calculatedEnvioByUser(userLogin);
    const diasEnvioMasUno = diasEnvio + 2;
    const diasEnvioDate = dayjs().add(diasEnvio, "day");
    const diasEnvioMasUnoDate = dayjs().add(diasEnvioMasUno, "day");

    const stringFechaEnvio = diasEnvioDate.format('dddd, DD MMMM');
    const stringdiasEnvioMasUno = diasEnvioMasUnoDate.format('dddd, DD MMMM');

    const fechaLlegadaAprox = {
        dias: diasEnvio,
        desde: stringFechaEnvio,
        hasta: stringdiasEnvioMasUno,
    }
    return fechaLlegadaAprox;
}

export const getDateCompra = (format = 'dddd-DD-MMMM') => {
    return dayjs().format(format);
}