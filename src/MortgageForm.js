// MortgageForm.js
import React, { useState } from "react";
import { TextField, Button, Box } from "@mui/material";

const MortgageForm = ({ onSubmit }) => {
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
        onSubmit(inputs);
    };

    return (
        <form onSubmit={handleSubmit}>
            <Box display="flex" flexDirection="column">
                <TextField
                    label="Liczba pozostałych rat"
                    name="remainingInstallments"
                    type="number"
                    value={inputs.remainingInstallments}
                    onChange={handleChange}
                    margin="normal"
                />
                <TextField
                    label="Pozostały kapitał do spłaty"
                    name="remainingCapital"
                    type="number"
                    value={inputs.remainingCapital}
                    onChange={handleChange}
                    margin="normal"
                />
                <TextField
                    label="Aktualne oprocentowanie (w %)"
                    name="interestRate"
                    type="number"
                    value={inputs.interestRate}
                    onChange={handleChange}
                    margin="normal"
                />
                <TextField
                    label="Wysokość comiesięcznej nadpłaty"
                    name="extraPayment"
                    type="number"
                    value={inputs.extraPayment}
                    onChange={handleChange}
                    margin="normal"
                />
                <Button variant="contained" color="primary" type="submit">
                    Generuj tabelę
                </Button>
            </Box>
        </form>
    );
};

export default MortgageForm;
