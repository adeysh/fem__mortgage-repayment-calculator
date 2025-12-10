import { useMortgage } from "../../hooks/useMortgage";

const FormHeader = () => {
    const { clearAll } = useMortgage();

    return (
        <div className="flex flex-col items-start gap-2 lg:flex-row lg:items-center lg:justify-between">
            <h1 className="text-2xl font-bold text-slate-900">
                Mortgage Calculator
            </h1>
            <button
                type="button"
                onClick={clearAll}
                className="cursor-pointer text-slate-700 underline underline-offset-3 transition-colors duration-300 ease-in-out hover:text-slate-900"
            >
                Clear All
            </button>
        </div>
    );
};

export default FormHeader;
