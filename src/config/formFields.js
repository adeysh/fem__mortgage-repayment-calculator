// formFields.js
// Central source of truth for all form input settings.

export const formFields = [
    {
        id: "mortgageAmount",
        label: "Mortgage Amount",
        unit: {
            text: "£",
            width: "w-12",
            position: "left",
        },
    },
    {
        id: "mortgageTerm",
        label: "Mortgage Term",
        unit: {
            text: "Years",
            width: "w-20",
            position: "right",
        },
    },
    {
        id: "interestRate",
        label: "Interest Rate",
        unit: {
            text: "%",
            width: "w-16",
            position: "right",
        },
    },
];
