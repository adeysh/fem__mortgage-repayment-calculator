import { useState } from "react";
import { MortgageContext } from "./MortgageContext";
import { fieldRules } from "../config/fieldRules";
import { mortgageCalculators } from "../utils/mortgageCalc";

export const MortgageProvider = ({ children }) => {
    // FORM STATE
    const [formValues, setFormValues] = useState({
        mortgageAmount: "",
        mortgageTerm: "",
        interestRate: "",
    });

    const [mortgageType, setMortgageType] = useState("repayment");
    const [results, setResults] = useState(null);

    // VALIDATION ERRORS
    const [errors, setErrors] = useState({
        mortgageAmount: "",
        mortgageTerm: "",
        interestRate: "",
    });

    // fade/slide-in animation
    const [animateResults, setAnimateResults] = useState(false);

    // INPUT HANDLING

    // cleans the number
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

    // Updates form values and clears error for that field
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

    // FORM SUBMISSION VALIDATION
    const validateForm = () => {
        const newErrors = {};

        for (const field in fieldRules) {
            const value = formValues[field];

            for (const rule of fieldRules[field]) {
                if (rule.check(value)) {
                    newErrors[field] = rule.message;
                    break; // stop on first failed rule
                }
            }
        }

        setErrors(newErrors);

        return Object.keys(newErrors).length === 0;
    };

    // CALCULATION
    const calculateMortgage = () => {
        if (!validateForm()) {
            setResults(null); // hide results if form invalid
            return;
        }

        setAnimateResults(false);

        setTimeout(() => {
            const calculator = mortgageCalculators[mortgageType];

            const { monthlyPayment, totalPayment } = calculator(formValues);

            setResults({
                monthlyPayment,
                totalPayment,
                type: mortgageType,
            });

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

    const clearAll = () => {
        setFormValues({
            mortgageAmount: "",
            mortgageTerm: "",
            interestRate: "",
        });

        setMortgageType("repayment");
        setResults(null);
        setErrors({});
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
