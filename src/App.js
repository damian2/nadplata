import React, { useState } from "react";
import InstallmentTable from "./InstallmentTable";
import { calculateMortgage } from "./mortgageCalculator";

const App = () => {
  const [installments, setInstallments] = useState([]);
  const [inputs, setInputs] = useState({
    remainingInstallments: "",
    remainingCapital: "",
    interestRate: "",
    extraPayment: "",
  });

  const handleChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const calculatedInstallments = calculateMortgage(inputs);
    setInstallments(calculatedInstallments);
  };

  return (
      <div>
        <form onSubmit={handleSubmit}>
          <label>
            Liczba pozostałych rat:
            <input name="remainingInstallments" type="number" value={inputs.remainingInstallments} onChange={handleChange} />
          </label>
          <label>
            Pozostały kapitał do spłaty:
            <input name="remainingCapital" type="number" value={inputs.remainingCapital} onChange={handleChange} />
          </label>
          <label>
            Aktualne oprocentowanie (w %):
            <input name="interestRate" type="number" value={inputs.interestRate} onChange={handleChange} />
          </label>
          <label>
            Wysokość comiesięcznej nadpłaty:
            <input name="extraPayment" type="number" value={inputs.extraPayment} onChange={handleChange} />
          </label>
          <button type="submit">Generuj tabelę</button>
        </form>
        {installments.length > 0 && <InstallmentTable installments={installments} />}
      </div>
  );
};

export default App;
