import Form from "../components/Form/Form";
import FormHeader from "../components/Form/FormHeader";
import ResultsPanel from "../components/Results/ResultsPanel";

const MortgageCalculator = () => {
    return (
        <div className="flex min-h-[600px] w-full flex-col overflow-hidden bg-white lg:w-3/4 lg:max-w-app lg:flex-row lg:items-stretch lg:rounded-4xl lg:shadow-xl">
            {/* Left Section — Form Area */}
            <div className="flex flex-1 flex-col gap-6 bg-inherit p-6 lg:p-10">
                <FormHeader />
                <Form />
            </div>
            {/* Right Section — Results Area */}
            <div className="flex-1 bg-slate-900 p-6 lg:rounded-bl-[100px]">
                <ResultsPanel />
            </div>
        </div>
    );
};

export default MortgageCalculator;
