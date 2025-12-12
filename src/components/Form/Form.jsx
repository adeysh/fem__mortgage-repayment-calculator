import InputWrapper from "../Utils/InputWrapper";
import MortgageTypeSelector from "./MortgageTypeSelector";
import CalculateButton from "./CalculateButton";
import { formFields } from "../../config/formFields";

const Form = () => {
    return (
        <form className="flex flex-col gap-6">
            {/* Mortgage Amount Input */}
            <InputWrapper inputId={formFields[0].id} />

            {/* Mortgage Term + Interest Rate inputs (side-by-side on desktop) */}
            <div className="flex flex-col gap-6 lg:flex-row">
                {formFields.slice(1).map((field) => (
                    <InputWrapper key={field.id} inputId={field.id} />
                ))}
            </div>

            {/* Mortgage type radio selector */}
            <MortgageTypeSelector />

            <CalculateButton />
        </form>
    );
};

export default Form;
