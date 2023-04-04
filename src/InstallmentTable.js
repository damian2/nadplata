const InstallmentTable = ({ installments }) => {
    return (
        <table>
            <thead>
            <tr>
                <th>Miesiąc</th>
                <th>Rata</th>
                <th>Rata + nadpłata</th>
                <th>Pozostały kapitał</th>
                <th>Kapitał w racie</th>
                <th>Odsetki w racie</th>
            </tr>
            </thead>
            <tbody>
            {installments.map((installment, index) => (
                <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{installment.payment.toFixed(2)}</td>
                    <td>{(installment.payment + installment.extraPayment).toFixed(2)}</td>
                    <td>{installment.remaining.toFixed(2)}</td>
                    <td>{installment.principal.toFixed(2)}</td>
                    <td>{installment.interest.toFixed(2)}</td>
                </tr>
            ))}
            </tbody>
        </table>
    );
};

export default InstallmentTable;
