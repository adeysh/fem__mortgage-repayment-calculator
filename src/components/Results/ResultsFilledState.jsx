import Card from "../Utils/Card";

const ResultsFilledState = () => {
    return (
        <div className="flex h-full flex-col gap-6 bg-slate-900 lg:gap-10 lg:rounded-bl-[100px] lg:p-4">
            {/* HEADER TEXT (Title + Description) */}
            <div className="flex flex-col gap-6">
                <h2 className="text-2xl font-bold text-slate-100">
                    Your Results
                </h2>

                <p className="text-slate-300">
                    Your results are shown below based on the information you
                    provided. To adjust the results, edit the form and click
                    “calculate repayments” again.
                </p>
            </div>
            {/* RESULTS CARD (Monthly payment + total repayment) */}
            <Card />
        </div>
    );
};

export default ResultsFilledState;
