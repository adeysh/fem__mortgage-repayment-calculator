import RadioButton from "./RadioButton";
import FormLabel from "./FormLabel";
import { mortgageTypes } from "../../config/mortgageTypes";

const MortgageTypeSelector = () => {
    return (
        <fieldset className="flex flex-col">
            {/* Group label */}
            <FormLabel label={"Mortgage Type"} legend={true} />

            {/* Radio options */}
            <div className="flex flex-col gap-3">
                {mortgageTypes.map((option) => (
                    <RadioButton
                        key={option.id}
                        id={option.id}
                        value={option.value}
                        label={option.label}
                    />
                ))}
            </div>
        </fieldset>
    );
};

export default MortgageTypeSelector;
