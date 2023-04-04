import React from "react";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material";

const InstallmentTable = ({ installments }) => {
    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Miesiąc</TableCell>
                        <TableCell>Rata</TableCell>
                        <TableCell>Rata + nadpłata</TableCell>
                        <TableCell>Pozostały kapitał</TableCell>
                        <TableCell>Kapitał w racie</TableCell>
                        <TableCell>Odsetki w racie</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {installments.map((installment, index) => (
                        <TableRow key={index}>
                            <TableCell>{index + 1}</TableCell>
                            <TableCell>{installment.payment.toFixed(2)}</TableCell>
                            <TableCell>{(installment.payment + installment.extraPayment).toFixed(2)}</TableCell>
                            <TableCell>{installment.remaining.toFixed(2)}</TableCell>
                            <TableCell>{installment.principal.toFixed(2)}</TableCell>
                            <TableCell>{installment.interest.toFixed(2)}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default InstallmentTable;
