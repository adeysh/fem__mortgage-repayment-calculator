import { useMortgage } from "../../hooks/useMortgage";

const Card = () => {
    const { results } = useMortgage();
    if (!results) return null;

    return (
        <div className="flex flex-col gap-4 rounded-lg border-t-4 border-lime bg-slate-950 p-4 lg:gap-8 lg:p-8">
            <div className="flex flex-col gap-2 border-b-2 border-slate-700/35 pb-4 lg:pb-8">
                <p className="text-slate-300">Your monthly repayments</p>
                <p className="text-4xl font-bold text-lime lg:text-6xl">
                    £
                    {results.monthlyPayment.toLocaleString(undefined, {
                        minimumFractionDigits: 2,
                    })}
                </p>
            </div>

            <div className="flex flex-col gap-2">
                <p className="text-slate-300">
                    Total you'll repay over the term
                </p>
                <p className="text-2xl font-bold text-slate-100">
                    £
                    {results.totalPayment.toLocaleString(undefined, {
                        minimumFractionDigits: 2,
                    })}
                </p>
            </div>
        </div>
    );
};

export default Card;
