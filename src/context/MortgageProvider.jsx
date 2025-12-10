import { useState } from "react";
import { MortgageContext } from "./MortgageContext";

export const MortgageProvider = ({ children }) => {
    const [formValues, setFormValues] = useState({
        mortgageAmount: "",
        mortgageTerm: "",
        interestRate: "",
    });

    const [mortgageType, setMortgageType] = useState("repayment");
    const [results, setResults] = useState(null);

    const handleInputChange = (inputId, value) => {
        setFormValues((prev) => ({
            ...prev,
            [inputId]: value,
        }));
    };

    const calculateMortgage = () => {
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
                handleInputChange,
                calculateMortgage,
                clearAll,
            }}
        >
            {children}
        </MortgageContext.Provider>
    );
};
