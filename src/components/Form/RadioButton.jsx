const RadioButton = ({ label, htmlFor, id, value }) => {
    return (
        <label
            htmlFor={htmlFor}
            className="flex h-12 w-full items-center gap-4 rounded-md border border-slate-700 px-4 text-xl font-bold text-slate-900"
        >
            <input
                type="radio"
                id={id}
                name="mortgageType"
                value={value}
                className="h-5 w-5 appearance-none rounded-full border-2 border-slate-700"
            />
            {label}
        </label>
    );
};

export default RadioButton;
