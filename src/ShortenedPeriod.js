// ShortenedPeriod.js
import React from "react";
import YearsAndMonths from "./YearsAndMonths";

const ShortenedPeriod = ({ months }) => {
    if (months < 0) {
        return null;
    }

    let message;
    if (months === 1) {
        message = "Okres spłaty kredytu został skrócony o 1 miesiąc";
    } else if (months > 1 && months < 5) {
        message = `Okres spłaty kredytu został skrócony o ${months} miesiące`;
    } else {
        message = `Okres spłaty kredytu został skrócony o ${months} miesięcy`;
    }

    return (
        <div>
            {message} ({<YearsAndMonths months={months} />})
        </div>
    );
};

export default ShortenedPeriod;
