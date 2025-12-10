import { useMortgage } from "../../hooks/useMortgage";

const RadioButton = ({ label, htmlFor, id, value }) => {
    const { mortgageType, setMortgageType } = useMortgage();

    return (
        <label
            htmlFor={htmlFor}
            className="flex h-12 w-full cursor-pointer items-center gap-4 rounded-md border border-slate-700 px-4 font-bold text-slate-900 transition-all duration-300 ease-in-out hover:border-lime has-[input:checked]:border-lime has-[input:checked]:bg-lime/20"
        >
            <input
                type="radio"
                id={id}
                name="mortgageType"
                value={value}
                checked={mortgageType === value}
                onChange={() => setMortgageType(value)}
                className="peer relative h-3 w-3 appearance-none rounded-full border-0 outline-2 outline-offset-2 outline-slate-700 transition-all before:absolute before:inset-1 before:rounded-full before:bg-transparent before:content-[''] peer-checked:before:bg-lime checked:border-2 checked:border-lime checked:bg-lime checked:outline-offset-2 checked:outline-lime"
            />
            {label}
        </label>
    );
};

export default RadioButton;
