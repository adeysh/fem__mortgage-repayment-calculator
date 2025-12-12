import { useMortgage } from "../../hooks/useMortgage";

const ErrorMessage = ({ inputId }) => {
    const { errors } = useMortgage();

    const errorText = errors[inputId];

    return (
        <div
            className={`overflow-hidden text-sm text-red-500 transition-all duration-300 ${
                errorText ? "error-enter" : "error-exit"
            } `}
            aria-live="polite" // Screen readers announce validation changes
            role={errorText ? "alert" : undefined} // Only announce when error exists
        >
            {errorText}
        </div>
    );
};

export default ErrorMessage;
