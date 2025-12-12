import ResultsEmptyState from "./ResultsEmptyState";
import ResultsFilledState from "./ResultsFilledState";
import { useMortgage } from "../../hooks/useMortgage";
import { useRef, useEffect } from "react";

const ResultsPanel = () => {
    const { results } = useMortgage();
    const panelRef = useRef(null);
    const isEmpty = !results;

    // Scroll into view when results appear
    useEffect(() => {
        if (!isEmpty && panelRef.current) {
            panelRef.current.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }
    }, [isEmpty]);

    return (
        <div
            ref={panelRef}
            className="relative flex h-full flex-col justify-center overflow-hidden"
        >
            {/* EMPTY STATE (always mounted) */}
            <div
                className={`transition-opacity duration-500 ${isEmpty ? "opacity-100" : "pointer-events-none opacity-0"} `}
            >
                <ResultsEmptyState />
            </div>

            {/* FILLED STATE (always mounted, but hidden initially) */}
            <div
                className={`absolute inset-0 transition-all duration-500 ${
                    isEmpty
                        ? "pointer-events-none translate-y-4 opacity-0"
                        : "translate-y-0 opacity-100"
                } `}
            >
                <ResultsFilledState />
            </div>
        </div>
    );
};

export default ResultsPanel;
