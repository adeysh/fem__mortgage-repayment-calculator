import MortgageCalculator from "./pages/MortgageCalculator";
import { MortgageProvider } from "./context/MortgageProvider";

function App() {
    return (
        <>
            {/* Global Cart context for the whole application */}
            <MortgageProvider>
                {/* Main page layout */}
                <MortgageCalculator />
            </MortgageProvider>
        </>
    );
}

export default App;
