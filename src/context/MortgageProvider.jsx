import { useState } from "react";
import { MortgageContext } from "./MortgageContext";

export const MortgageProvider = ({ children }) => {
    // form state
    const [formValues, setFormValues] = useState({
        mortgageAmount: "",
        mortgageTerm: "",
        interestRate: "",
    });

    const [mortgageType, setMortgageType] = useState("repayment");
    const [results, setResults] = useState(null);

    // error state
    const [errors, setErrors] = useState({
        mortgageAmount: "",
        mortgageTerm: "",
        interestRate: "",
    });

    const [animateResults, setAnimateResults] = useState(false);

    const handleInputChange = (inputId, value) => {
        const cleaned = sanitizeNumber(value);

        setFormValues((prev) => ({
            ...prev,
            [inputId]: cleaned,
        }));

        setErrors((prev) => ({
            ...prev,
            [inputId]: "",
        }));
    };

    const validateForm = () => {
        const newErrors = {};

        const { mortgageAmount, mortgageTerm, interestRate } = formValues;

        // Mortgage Amount
        if (!mortgageAmount) {
            newErrors.mortgageAmount = "Enter the mortgage amount";
        } else if (mortgageAmount <= 0) {
            newErrors.mortgageAmount = "Amount must be greater than 0";
        } else if (mortgageAmount > 10000000) {
            newErrors.mortgageAmount = "Amount cannot exceed 10 million";
        }

        // Mortgage Term
        if (!mortgageTerm) {
            newErrors.mortgageTerm = "Enter mortgage term";
        } else if (mortgageTerm <= 0) {
            newErrors.mortgageTerm = "Term must be greater than 0";
        } else if (mortgageTerm > 40) {
            newErrors.mortgageTerm = "Term cannot exceed 40 years";
        } else if (!Number.isInteger(Number(mortgageTerm))) {
            newErrors.mortgageTerm =
                "Term must be a whole number (no decimals)";
        }

        // Interest Rate
        if (!interestRate) {
            newErrors.interestRate = "Enter the interest rate";
        } else if (interestRate <= 0) {
            newErrors.interestRate = "Interest rate must be greater than 0";
        } else if (interestRate > 20) {
            newErrors.interestRate = "Interest rate cannot exceed 20%";
        }

        setErrors(newErrors);

        return Object.keys(newErrors).length === 0;
    };

    const calculateMortgage = () => {
        if (!validateForm()) {
            setResults(null); // hide results if form invalid
            return;
        }

        setAnimateResults(false);

        setTimeout(() => {
            const P = Number(formValues.mortgageAmount);
            const years = Number(formValues.mortgageTerm);
            const annualRate = Number(formValues.interestRate);

            const r = annualRate / 100 / 12;
            const n = years * 12;

            if (mortgageType === "repayment") {
                const monthly = (P * r * (1 + r) ** n) / ((1 + r) ** n - 1);
                const total = monthly * n;

                setResults({
                    monthlyPayment: monthly,
                    totalPayment: total,
                    type: "repayment",
                });
            } else {
                const monthly = P * r;
                const total = monthly * n + P;

                setResults({
                    monthlyPayment: monthly,
                    totalPayment: total,
                    type: "interest-only",
                });
            }

            setAnimateResults(true);
        }, 150);
    };

    // format field (mortgage amount) to decimal places
    const formatValue = (field, value) => {
        if (field === "mortgageAmount") {
            const num = parseFloat(value);
            if (!isNaN(num)) {
                setFormValues((prev) => ({
                    ...prev,
                    [field]: num.toFixed(2),
                }));
            }
        }
    };

    const sanitizeNumber = (value) => {
        // Remove leading zeros properly but keep decimals valid
        if (value === "") return "";
        // Block scientific notation input entirely.
        if (value.toLowerCase().includes("e")) return "";

        // If the value starts with "0" and is not "0.xxx"
        if (/^0+[0-9]/.test(value)) {
            return value.replace(/^0+/, "");
        }

        return value;
    };

    const clearAll = () => {
        setFormValues({
            mortgageAmount: "",
            mortgageTerm: "",
            interestRate: "",
        });

        setMortgageType("repayment");

        setResults(null);
    };

    return (
        <MortgageContext.Provider
            value={{
                formValues,
                setFormValues,
                mortgageType,
                setMortgageType,
                results,
                errors,
                animateResults,
                setAnimateResults,
                handleInputChange,
                calculateMortgage,
                formatValue,
                sanitizeNumber,
                clearAll,
            }}
        >
            {children}
        </MortgageContext.Provider>
    );
};
