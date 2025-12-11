const FormLabel = ({
    label,
    htmlFor = "",
    legend = false,
    required = false,
}) => {
    const className = `font-medium text-slate-700 ${legend ? "mb-2" : ""}`;
    return (
        <>
            {legend ? (
                <legend className={className}>{label}</legend>
            ) : (
                <label htmlFor={htmlFor} className={className}>
                    {label} {required && <sup className="text-red">*</sup>}
                </label>
            )}
        </>
    );
};

export default FormLabel;
