import FormInput from "../Form/FormInput";
import ErrorMessage from "./ErrorMessage";
import FormLabel from "../Form/FormLabel";

const InputWrapper = ({
    label = "",
    htmlFor,
    unitWidth,
    unitPosition,
    inputId,
}) => {
    return (
        <div className="flex flex-col gap-2">
            <FormLabel label={label} htmlFor={htmlFor} required={true} />
            <FormInput
                unitPosition={unitPosition}
                unitWidth={unitWidth}
                inputId={inputId}
            />
            <ErrorMessage inputId={inputId} />
        </div>
    );
};

export default InputWrapper;
