export const fieldRules = {
    mortgageAmount: [
        { check: (value) => !value, message: "Enter the mortgage amount" },
        {
            check: (value) => value <= 0,
            message: "Amount must be greater than 0",
        },
        {
            check: (value) => value > 10_000_000,
            message: "Amount cannot exceed 10 million",
        },
    ],

    mortgageTerm: [
        { check: (value) => !value, message: "Enter mortgage term" },
        {
            check: (value) => value <= 0,
            message: "Term must be greater than 0",
        },
        {
            check: (value) => value > 40,
            message: "Term cannot exceed 40 years",
        },
        {
            check: (value) => !Number.isInteger(Number(value)),
            message: "Term must be a whole number (no decimals)",
        },
    ],

    interestRate: [
        { check: (value) => !value, message: "Enter the interest rate" },
        {
            check: (value) => value <= 0,
            message: "Interest rate must be greater than 0",
        },
        {
            check: (value) => value > 20,
            message: "Interest rate cannot exceed 20%",
        },
    ],
};
