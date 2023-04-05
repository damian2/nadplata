// App.js
import React, { useState } from "react";
import InstallmentTable from "./InstallmentTable";
import MortgageForm from "./MortgageForm";
import ShortenedPeriod from "./ShortenedPeriod";
import { calculateMortgage } from "./mortgageCalculator";
import { Container, Typography, Box } from "@mui/material";

const App = () => {
    const [installments, setInstallments] = useState([]);
    const [initialInstallments, setInitialInstallments] = useState(0);

    const handleSubmit = (inputs) => {
        const calculatedInstallments = calculateMortgage(inputs);
        setInstallments(calculatedInstallments);
        setInitialInstallments(inputs.remainingInstallments);
    };

    const shortenedPeriod = initialInstallments - installments.length;

    return (
        <Container maxWidth="sm">
            <Box mt={4}>
                <Typography variant="h4" align="center" gutterBottom>
                    Sprawdź o ile skróci się okres spłaty kredytu przy regularnych nadpłatach
                </Typography>
            </Box>
            <MortgageForm onSubmit={handleSubmit} />
            {installments.length > 0 && <ShortenedPeriod months={shortenedPeriod} />}
            {installments.length > 0 && <InstallmentTable installments={installments} />}
        </Container>
    );
};

export default App;
