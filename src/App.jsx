import MortgageCalculator from "./pages/MortgageCalculator";
import { MortgageProvider } from "./context/MortgageProvider";

function App() {
    return (
        <MortgageProvider>
            <MortgageCalculator />
        </MortgageProvider>
    );
}

export default App;
