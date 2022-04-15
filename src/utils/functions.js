import { LIST_REGIONS_WITH_DESPACHO_DAYS } from "@/utils/constants";

export const errorCodeToStringLabelFirebase = (errorCode) => {
    switch (errorCode) {
        case "auth/invalid-email":
            return "Correo Invalido";
        case "auth/user-not-found":
            return "Cuenta con este correo no encontrada";
        case "auth/wrong-password":
            return "Contraseña Incorrecta";
        default:
            return "Correo y Contraseña Incorrecto";
    }
}

export const getNameLocalFromEmail = (email) => {
    return email.split("@")[0];
}

export const getPriceInCLP = (priceNumber) => {
    return new Intl.NumberFormat('es-CL', { currency: 'CLP', style: 'currency' }).format(priceNumber);
}

export const calculatedEnvioByUser = (user) => {
    const { infoUser } = user;
    const { region } = infoUser;
    const regionUser = LIST_REGIONS_WITH_DESPACHO_DAYS.find((regionIteration) => regionIteration.codigo == region.key) || 10;
    return regionUser.envio;
}