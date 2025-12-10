import FormInput from "../Form/FormInput";
import ErrorMessage from "./ErrorMessage";
import FormLabel from "../Form/FormLabel";

const InputWrapper = ({
    label = "",
    htmlFor,
    unitWidth,
    unitPosition,
    inputId,
    onChange,
}) => {
    return (
        <div className="flex flex-col gap-2">
            <FormLabel label={label} htmlFor={htmlFor} />
            <FormInput
                unitPosition={unitPosition}
                unitWidth={unitWidth}
                inputId={inputId}
                onChange={onChange}
            />
            <ErrorMessage />
        </div>
    );
};

export default InputWrapper;
