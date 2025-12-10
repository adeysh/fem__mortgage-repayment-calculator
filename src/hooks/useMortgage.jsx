import { useContext } from "react";
import { MortgageContext } from "../context/MortgageContext";

export const useMortgage = () => useContext(MortgageContext);
