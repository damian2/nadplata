// YearsAndMonths.js
import React from "react";

const YearsAndMonths = ({ months }) => {
    const years = Math.floor(months / 12);
    const remainingMonths = months % 12;

    return (
        <span>
      {years} lat{years === 1 ? "" : "a"} i {remainingMonths} miesiąc{remainingMonths === 1 ? "" : "y"}
    </span>
    );
};

export default YearsAndMonths;
