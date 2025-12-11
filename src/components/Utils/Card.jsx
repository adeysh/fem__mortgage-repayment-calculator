import { useMortgage } from "../../hooks/useMortgage";

const Card = () => {
    const { results, animateResults } = useMortgage();
    if (!results) return null;

    return (
        <div className="flex flex-col gap-4 rounded-lg border-t-4 border-lime bg-slate-950 p-4 lg:gap-8 lg:p-8">
            <div className="flex flex-col gap-2 border-b-2 border-slate-700/35 pb-4 lg:pb-8">
                <p className="text-slate-300">Your monthly repayments</p>
                <p
                    className={`text-4xl font-bold text-lime transition-all duration-500 ease-out lg:text-6xl ${animateResults ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"}`}
                >
                    £
                    {results.monthlyPayment.toLocaleString("en-UK", {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                    })}
                </p>
            </div>

            <div className="flex flex-col gap-2">
                <p className="text-slate-300">
                    Total you'll repay over the term
                </p>
                <p
                    className={`text-2xl font-bold text-slate-100 ${animateResults ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"}`}
                >
                    £
                    {results.totalPayment.toLocaleString("en-UK", {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                    })}
                </p>
            </div>
        </div>
    );
};

export default Card;
