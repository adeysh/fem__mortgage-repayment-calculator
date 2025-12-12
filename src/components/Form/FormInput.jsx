import { useMortgage } from "../../hooks/useMortgage";
import { getFieldConfig } from "../../config/getFieldConfig";

const FormInput = ({ inputId }) => {
    const { formValues, handleInputChange, formatValue, errors } =
        useMortgage();

    const field = getFieldConfig(inputId);

    return (
        <div className="relative">
            {/* Main numeric input */}
            <input
                type="number"
                inputMode="decimal"
                id={inputId}
                name="mortgageAmount"
                value={formValues[inputId] || ""}
                className={`peer no-spinners h-12 w-full cursor-pointer rounded-md border border-slate-700 font-bold text-slate-900 transition-colors duration-300 ease-in-out focus-visible:border-lime focus-visible:outline-none active:border-lime active:outline-none ${field.unit.position === "left" ? "pr-4 pl-16" : "pr-20 pl-4"} caret-slate-900`}
                onChange={(e) => handleInputChange(inputId, e.target.value)}
                onBlur={(e) => formatValue(inputId, e.target.value)}
                onKeyDown={(e) =>
                    e.key === "Enter" && formatValue(inputId, e.target.value)
                }
                aria-invalid={!!errors[inputId]}
                aria-describedby={`${inputId}-error`}
            />

            {/* Unit */}
            <div
                className={`absolute top-0 ${field.unit.position === "left" ? "left-0 rounded-l-md border-l" : "right-0 rounded-r-md border-r"} ${field.unit.width} flex h-12 items-center justify-center border-y border-slate-700 bg-slate-100 px-4 font-bold text-slate-700 transition-colors duration-300 ease-in-out peer-focus:bg-lime peer-focus-visible:border-lime peer-focus-visible:bg-lime peer-focus-visible:text-slate-900 peer-active:border-lime peer-active:bg-lime peer-active:text-slate-900`}
            >
                {field.unit.text}
            </div>
        </div>
    );
};

export default FormInput;
