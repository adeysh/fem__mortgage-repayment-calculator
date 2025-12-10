const FormInput = ({ unitPosition, unitWidth, inputId, onChange }) => {
    return (
        <div className="relative">
            <input
                type="number"
                id={inputId}
                name="mortgageAmount"
                className={`h-12 w-full rounded-md border border-slate-700 font-bold text-slate-900 ${unitPosition === "left" ? "pr-4 pl-16" : "pr-20 pl-4"}`}
                onChange={(e) => onChange(inputId, e.target.value)}
            />
            {/* unit */}
            <div
                className={`absolute top-0 ${unitPosition === "left" ? "left-0 rounded-l-md border-l" : "right-0 rounded-r-md border-r"} ${unitWidth === "mortgageAmountWidth" ? "w-12" : unitWidth === "mortgageTermWidth" ? "w-20" : "w-16"} flex h-12 items-center justify-center border-y border-slate-700 bg-slate-100 px-4 font-bold text-slate-700`}
            >
                {inputId === "mortgageAmount"
                    ? "£"
                    : inputId === "mortgageTerm"
                      ? "Years"
                      : "%"}
            </div>
        </div>
    );
};

export default FormInput;
