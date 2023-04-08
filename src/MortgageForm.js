// MortgageForm.js
import React, { useEffect, useState } from "react";
import { TextField, Box, Typography } from "@mui/material";
import YearsAndMonths from "./YearsAndMonths";



const MortgageForm = ({ onSubmit }) => {
    const [inputs, setInputs] = useState({
        remainingInstallments: "",
        remainingCapital: "",
        interestRate: "",
        extraPayment: "0",
    });

    const validateInput = (name, value) => {
        if (value === "") {
            return "";
        }

        switch (name) {
            case "remainingInstallments":
                return Math.min(Math.max(value, 0), 420);
            case "remainingCapital":
                return Math.min(Math.max(value, 0), 50000000);
            case "interestRate":
                return Math.min(Math.max(value, 0), 50);
            case "extraPayment":
                return Math.max(value, 0);
            default:
                return value;
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        const validatedValue = validateInput(name, value);
        setInputs({ ...inputs, [name]: validatedValue });
    };

    useEffect(() => {
        const isFormValid = Object.values(inputs).every((value) => value !== "");
        if (isFormValid) {
            onSubmit(inputs);
        }
    }, [inputs, onSubmit]);

    return (
        <form>
            <Box display="flex" flexDirection="column">
                <TextField
                    label="Liczba pozostałych rat"
                    name="remainingInstallments"
                    type="number"
                    value={inputs.remainingInstallments}
                    onChange={handleChange}
                    margin="normal"
                />
                <Typography>
                    {inputs.remainingInstallments ? (
                        <YearsAndMonths months={parseInt(inputs.remainingInstallments)} />
                    ) : (
                        ""
                    )}
                </Typography>
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
            </Box>
        </form>
    );
};

export default MortgageForm;
