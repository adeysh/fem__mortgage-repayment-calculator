import Form from "../components/Form/Form";
import FormHeader from "../components/Form/FormHeader";
import ResultsPanel from "../components/Results/ResultsPanel";

const MortgageCalculator = () => {
    return (
        <div className="flex w-full flex-col">
            <div className="flex flex-col gap-6 p-6">
                <FormHeader />
                <Form />
            </div>
            <ResultsPanel />
        </div>
    );
};

export default MortgageCalculator;
