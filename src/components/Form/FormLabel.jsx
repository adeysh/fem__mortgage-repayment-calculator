import React from "react";

const FormLabel = ({ label, htmlFor = "", legend = false }) => {
    const className = `font-medium text-slate-700 ${legend ? "mb-2" : ""}`;
    return (
        <>
            {legend ? (
                <legend className={className}>{label}</legend>
            ) : (
                <label htmlFor={htmlFor} className={className}>
                    {label}
                </label>
            )}
        </>
    );
};

export default FormLabel;
