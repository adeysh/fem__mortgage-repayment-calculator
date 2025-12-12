const FormLabel = ({
    label,
    htmlFor, // optional - if missing, will fallback to inputId
    inputId,
    legend = false,
    required = false,
}) => {
    const resolvedHtmlFor = legend ? undefined : htmlFor || inputId;

    const className = `font-medium text-slate-700 ${legend ? "mb-2" : ""}`;
    return (
        <>
            {legend ? (
                <legend className={className}>{label}</legend>
            ) : (
                <label htmlFor={resolvedHtmlFor} className={className}>
                    {label} {required && <sup className="text-red">*</sup>}
                </label>
            )}
        </>
    );
};

export default FormLabel;
