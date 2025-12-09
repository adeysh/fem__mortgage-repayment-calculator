const FormHeader = () => {
    return (
        <div className="flex flex-col items-start gap-2">
            <h1 className="text-2xl font-bold text-slate-900">
                Mortgage Calculator
            </h1>
            <button
                type="button"
                className="text-slate-700 underline underline-offset-3"
            >
                Clear All
            </button>
        </div>
    );
};

export default FormHeader;
