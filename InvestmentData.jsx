import { useState } from 'react';
import { calculateInvestmentResults } from '../util/investment.js';

const useInvestmentData = () => {
  const [investmentData, setInvestmentData] = useState({
    initialInvestment: 0,
    annualInvestment: 0,
    expectedReturn: 0,
    duration: 0
  });

  const [results, setResults] = useState([]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    const updatedInvestmentData = {
      ...investmentData,
      [name]: parseFloat(value)
    };
    setInvestmentData(updatedInvestmentData);
    const calculatedResults = calculateInvestmentResults(updatedInvestmentData);
    setResults(calculatedResults);
  };

  return {
    investmentData,
    results,
    handleInputChange
  };
};

export default useInvestmentData;