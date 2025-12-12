import Card from "../Utils/Card";
import { useEffect, useRef } from "react";
import { useMortgage } from "../../hooks/useMortgage";

const ResultsFilledState = () => {
    const { animateResults } = useMortgage();
    const resultsRef = useRef(null);

    useEffect(() => {
        if (animateResults && resultsRef.current) {
            const timer = setTimeout(() => {
                resultsRef.current.focus();
            }, 500); // match your fade-in duration

            return () => clearTimeout(timer);
        }
    }, [animateResults]);

    return (
        <div
            ref={resultsRef}
            className="flex h-full flex-col gap-6 bg-slate-900 lg:gap-10 lg:rounded-bl-[100px] lg:p-4"
            aria-live="polite"
        >
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
