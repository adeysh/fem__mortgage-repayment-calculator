import InputWrapper from "../Utils/InputWrapper";
import MortgageTypeSelector from "./MortgageTypeSelector";
import CalculateButton from "./CalculateButton";

const Form = () => {
    return (
        <form className="flex flex-col gap-4">
            <InputWrapper
                label={"Mortgage Amount"}
                htmlFor={"mortgageAmount"}
                unitWidth={"mortgageAmountWidth"}
                unitPosition={"left"}
                inputId={"mortgageAmount"}
            />
            <InputWrapper
                label={"Mortgage Term"}
                htmlFor={"mortgageTerm"}
                unitWidth={"mortgageTermWidth"}
                unitPosition={"right"}
                inputId={"mortgageTerm"}
            />
            <InputWrapper
                label={"Interest Rate"}
                htmlFor={"interestRate"}
                unitWidth={"interestRateWidth"}
                unitPosition={"right"}
                inputId={"interestRate"}
            />

            <MortgageTypeSelector />

            <CalculateButton />
        </form>
    );
};

export default Form;
