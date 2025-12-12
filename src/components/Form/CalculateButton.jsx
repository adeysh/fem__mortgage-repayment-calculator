import { useMortgage } from "../../hooks/useMortgage";

const CalculateButton = () => {
    const { calculateMortgage } = useMortgage();

    return (
        <button
            type="submit"
            onClick={calculateMortgage} // Runs validation + calculation + animation
            className="flex h-15 cursor-pointer items-center justify-center gap-4 rounded-full bg-lime font-bold text-slate-900 outline-offset-2 transition-colors duration-300 ease-in-out hover:bg-lime/50 focus-visible:bg-lime/50 focus-visible:outline-slate-500 active:outline-slate-500 lg:self-start lg:px-10"
        >
            <img
                src="/assets/images/icon-calculator.svg"
                alt="Calculator"
                className="h-5 w-5"
            />
            Calculate Repayments
        </button>
    );
};

export default CalculateButton;
