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