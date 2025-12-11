import { useMortgage } from "../../hooks/useMortgage";

const ErrorMessage = ({ inputId }) => {
    const { errors } = useMortgage();

    return (
        <div
            className={`overflow-hidden text-sm text-red-500 transition-all duration-300 ${
                errors[inputId]
                    ? "max-h-10 translate-y-0 opacity-100"
                    : "max-h-0 -translate-y-1 opacity-0"
            } `}
        >
            {errors[inputId]}
        </div>
    );
};

export default ErrorMessage;
