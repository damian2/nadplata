import React, { useState } from "react";
import InstallmentTable from "./InstallmentTable";
import MortgageForm from "./MortgageForm";
import ShortenedPeriod from "./ShortenedPeriod";
import { calculateMortgage } from "./mortgageCalculator";
import { Container, Typography, Box } from "@mui/material";

const App = () => {
    const [installments, setInstallments] = useState([]);
    const [initialInstallments, setInitialInstallments] = useState(0);
    const [savedInterest, setSavedInterest] = useState(0);

    const handleSubmit = (inputs) => {
        const { installments, interestSaved } = calculateMortgage(inputs);
        setInstallments(installments);
        setSavedInterest(interestSaved);
        setInitialInstallments(inputs.remainingInstallments);
    };

    const shortenedPeriod = initialInstallments - installments.length;

    return (
        <Container component="main" maxWidth="sm">
            <header>
                <Box mt={4}>
                    <Typography variant="h4" align="center" gutterBottom>
                        Sprawdź o ile skróci się okres spłaty kredytu przy regularnych nadpłatach
                    </Typography>
                </Box>
            </header>
            <section>
                <MortgageForm onSubmit={handleSubmit} />
                {installments.length > 0 && <ShortenedPeriod months={shortenedPeriod} />}
                {installments.length > 0 && (
                    <Typography variant="body1" style={{ marginTop: "1rem" }}>
                        Zaoszczędzone odsetki: {savedInterest.toFixed(2)} zł
                    </Typography>
                )}
                {installments.length > 0 && <InstallmentTable installments={installments} />}
            </section>
            <footer>
                <Box mt={4} textAlign="center">
                    <Typography variant="caption" display="block" gutterBottom>
                        Strona w całości wygenerowana przez GPT4
                    </Typography>
                    <Typography variant="caption" display="block">
                        <a href="https://github.com/damian2/nadplata" target="_blank" rel="noopener noreferrer">
                            https://github.com/damian2/nadplata
                        </a>
                    </Typography>
                </Box>
            </footer>
        </Container>
    );
};

export default App;
