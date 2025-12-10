const ResultsEmptyState = () => {
    return (
        <div className="flex h-full flex-col items-center justify-between gap-4 bg-slate-900 p-6 text-center">
            <img
                src="/assets/images/illustration-empty.svg"
                alt="Calculation"
            />
            <h2 className="text-2xl font-bold text-white">
                Results shown here
            </h2>
            <p className="font-medium text-slate-300">
                Complete the form and click “calculate repayments” to see what
                your monthly repayments would be.
            </p>
        </div>
    );
};

export default ResultsEmptyState;
