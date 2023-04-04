// ShortenedPeriod.js
import React from "react";
import { Box, Typography } from "@mui/material";

const ShortenedPeriod = ({ shortenedPeriod }) => {
    const pluralizeMonths = (number) => {
        if (number === 1) {
            return "miesiąc";
        } else if (number >= 2 && number <= 4) {
            return "miesiące";
        } else {
            return "miesięcy";
        }
    };

    const text = `Okres spłaty kredytu został skrócony o ${shortenedPeriod} ${pluralizeMonths(shortenedPeriod)}`;

    return (
        <Box mt={2}>
            <Typography variant="h6">{text}</Typography>
        </Box>
    );
};

export default ShortenedPeriod;
