const Card = () => {
    return (
        <div className="flex flex-col gap-4 rounded-lg border-t-4 border-lime bg-slate-950 p-4">
            <div className="flex flex-col gap-2 border-b border-slate-700 pb-4">
                <p className="text-slate-300">Your monthly repayments</p>
                <p className="text-4xl font-bold text-lime">£1,797.74</p>
            </div>

            <div className="flex flex-col gap-2">
                <p className="text-slate-300">
                    Total you'll repay over the term
                </p>
                <p className="text-2xl font-bold text-slate-100">£539,322.94</p>
            </div>
        </div>
    );
};

export default Card;
