import InputWrapper from "../Utils/InputWrapper";
import MortgageTypeSelector from "./MortgageTypeSelector";
import CalculateButton from "./CalculateButton";
import { useState } from "react";

const Form = () => {
    const [formValues, setFormValues] = useState({
        mortgageAmount: "",
        mortgageTerm: "",
        interestRate: "",
    });

    const handleInputChange = (inputId, value) => {
        setFormValues((prev) => ({
            ...prev,
            [inputId]: value,
        }));
    };

    return (
        <form className="flex flex-col gap-6">
            <InputWrapper
                label={"Mortgage Amount"}
                htmlFor={"mortgageAmount"}
                unitWidth={"mortgageAmountWidth"}
                unitPosition={"left"}
                inputId={"mortgageAmount"}
                onChange={handleInputChange}
            />
            <InputWrapper
                label={"Mortgage Term"}
                htmlFor={"mortgageTerm"}
                unitWidth={"mortgageTermWidth"}
                unitPosition={"right"}
                inputId={"mortgageTerm"}
                onChange={handleInputChange}
            />
            <InputWrapper
                label={"Interest Rate"}
                htmlFor={"interestRate"}
                unitWidth={"interestRateWidth"}
                unitPosition={"right"}
                inputId={"interestRate"}
                onChange={handleInputChange}
            />

            <MortgageTypeSelector />

            <CalculateButton />
        </form>
    );
};

export default Form;
