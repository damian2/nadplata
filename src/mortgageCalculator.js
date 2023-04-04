export const calculateMortgage = (inputs) => {
    const { remainingInstallments, remainingCapital, interestRate, extraPayment } = inputs;
    const rate = parseFloat(interestRate) / 1200;

    const annuityFactor = (rate * Math.pow(1 + rate, remainingInstallments)) / (Math.pow(1 + rate, remainingInstallments) - 1);
    const annuity = parseFloat(remainingCapital) * annuityFactor;

    const installmentsList = [];
    let remaining = parseFloat(remainingCapital);
    for (let i = 0; i < remainingInstallments; i++) {
        const interestPayment = remaining * rate;
        const principalPayment = annuity - interestPayment;
        const payment = principalPayment + interestPayment;

        installmentsList.push({
            payment,
            extraPayment: parseFloat(extraPayment),
            remaining,
            principal: principalPayment,
            interest: interestPayment,
        });

        remaining -= (principalPayment + parseFloat(extraPayment));
        if (remaining <= 0) {
            break;
        }
    }

    return installmentsList;
};
