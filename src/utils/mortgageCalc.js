// Utility functions for calculating mortgage repayments.
// Contains two calculation strategies:
// 1. Repayment mortgage
// 2. Interest-only mortgage

/* 
    REPAYMENT MORTGAGE
    Formula:
    M = P * r * (1+r)^n / ((1+r)^n - 1)
*/
export function calcRepayment({ mortgageAmount, mortgageTerm, interestRate }) {
    const P = Number(mortgageAmount);
    const years = Number(mortgageTerm);
    const annualRate = Number(interestRate);

    const r = annualRate / 100 / 12; // monthly interest rate
    const n = years * 12; // number of monthly payments

    const monthlyPayment =
        (P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);

    const totalPayment = monthlyPayment * n;

    return {
        monthlyPayment,
        totalPayment,
    };
}

/* 
    INTEREST-ONLY MORTGAGE
    Formula:
    Monthly = P * r
    Total = Monthly * n + P
*/
export function calcInterestOnly({
    mortgageAmount,
    mortgageTerm,
    interestRate,
}) {
    const P = Number(mortgageAmount);
    const years = Number(mortgageTerm);
    const annualRate = Number(interestRate);

    const r = annualRate / 100 / 12;
    const n = years * 12;

    const monthlyPayment = P * r;
    const totalPayment = monthlyPayment * n + P;

    return {
        monthlyPayment,
        totalPayment,
    };
}

// STRATEGY LOOKUP
export const mortgageCalculators = {
    repayment: calcRepayment,
    "interest-only": calcInterestOnly,
};
