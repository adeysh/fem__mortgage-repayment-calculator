import React from "react";

const CalculateButton = () => {
    return (
        <button
            type="button"
            className="flex h-15 items-center justify-center gap-2 rounded-full bg-lime text-xl font-bold text-slate-900"
        >
            <img src="/assets/images/icon-calculator.svg" alt="Calculator" />
            Calculate Repayments
        </button>
    );
};

export default CalculateButton;
