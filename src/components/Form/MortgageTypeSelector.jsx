import React from "react";
import RadioButton from "./RadioButton";
import FormLabel from "./FormLabel";

const MortgageTypeSelector = () => {
    return (
        <fieldset className="flex flex-col">
            <FormLabel label={"Mortgage Type"} legend={true} />

            <div className="flex flex-col gap-3">
                {/* Repayment */}
                <RadioButton
                    label={"Repayment"}
                    htmlFor={"repayment"}
                    id={"repayment"}
                    value={"repayment"}
                />

                {/* Interest Only */}
                <RadioButton
                    label={"Interest Only"}
                    htmlFor={"interestOnly"}
                    id={"interestOnly"}
                    value={"interestOnly"}
                />
            </div>
        </fieldset>
    );
};

export default MortgageTypeSelector;
