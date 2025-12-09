import Form from "../components/Form/Form";
import FormHeader from "../components/Form/FormHeader";

const MortgageCalculator = () => {
    return (
        <div className="flex w-full flex-col gap-6 p-6">
            <FormHeader />
            <Form />
        </div>
    );
};

export default MortgageCalculator;
