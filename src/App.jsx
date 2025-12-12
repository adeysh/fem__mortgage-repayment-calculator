import MortgageCalculator from "./pages/MortgageCalculator";
import { MortgageProvider } from "./context/MortgageProvider";
import Footer from "./components/Footer";

function App() {
    return (
        <>
            {/* Global Cart context for the whole application */}
            <MortgageProvider>
                {/* Main page layout */}
                <MortgageCalculator />
            </MortgageProvider>

            <Footer />
        </>
    );
}

export default App;
