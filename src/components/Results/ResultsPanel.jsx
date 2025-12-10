import ResultsEmptyState from "./ResultsEmptyState";
import ResultsFilledState from "./ResultsFilledState";

const ResultsPanel = () => {
    const isEmpty = false;

    return (
        <div className="flex h-full flex-col">
            {isEmpty ? (
                <ResultsEmptyState />
            ) : (
                <ResultsFilledState
                // monthlyPayment={results.monthlyPayment}
                // totalPayment={results.totalPayment}
                />
            )}
        </div>
    );
};

export default ResultsPanel;
