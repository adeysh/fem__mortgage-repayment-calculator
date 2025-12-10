const CalculateButton = () => {
    return (
        <button
            type="button"
            className="flex h-15 cursor-pointer items-center justify-center gap-4 rounded-full bg-lime font-bold text-slate-900 transition-colors duration-300 ease-in-out hover:bg-lime/50 lg:self-start lg:px-10 lg:py-4"
        >
            <img src="/assets/images/icon-calculator.svg" alt="Calculator" />
            Calculate Repayments
        </button>
    );
};

export default CalculateButton;
