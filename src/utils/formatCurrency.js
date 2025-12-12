// formatting numbers as currency (defaults to UK currency "GBP" and locale "en-UK")

export const formatCurrency = (value, currency = "GBP", locale = "en-UK") => {
    if (value == null || isNaN(value)) return "0.00";

    return new Intl.NumberFormat(locale, {
        style: "currency",
        currency,
        minimumFractionDigits: 2,
    }).format(value);
};
