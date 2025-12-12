import FormInput from "../Form/FormInput";
import ErrorMessage from "./ErrorMessage";
import FormLabel from "../Form/FormLabel";
import { getFieldConfig } from "../../config/getFieldConfig";

const InputWrapper = ({ inputId }) => {
    const field = getFieldConfig(inputId);

    return (
        <div className="flex flex-col gap-2">
            {/* Field label (connected to input via htmlFor) */}
            <FormLabel
                label={field.label}
                inputId={inputId}
                required={true} // Mark all fields as required
            />

            <FormInput inputId={inputId} />

            {/* Validation error message */}
            <ErrorMessage inputId={inputId} />
        </div>
    );
};

export default InputWrapper;
