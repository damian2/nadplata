import React, { useState } from "react";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from "@mui/material";

const InstallmentTable = ({ installments }) => {
    const [displayAll, setDisplayAll] = useState(false);
    const showAll = installments.length > 20 && !displayAll;

    const handleClick = () => {
        setDisplayAll(true);
    };

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
                    {installments.map((installment, index) => {
                        if (showAll && (index >= 5 && index < installments.length - 5)) {
                            if (index === 5) {
                                return (
                                    <TableRow key="show-all">
                                        <TableCell colSpan={6} align="center">
                                            <Button variant="contained" onClick={handleClick}>
                                                Pokaż wszystko
                                            </Button>
                                        </TableCell>
                                    </TableRow>
                                );
                            }
                            return null;
                        }
                        return (
                            <TableRow key={index}>
                                <TableCell>{index + 1}</TableCell>
                                <TableCell>{installment.payment.toFixed(2)}</TableCell>
                                <TableCell>{(installment.payment + installment.extraPayment).toFixed(2)}</TableCell>
                                <TableCell>{installment.remaining.toFixed(2)}</TableCell>
                                <TableCell>{installment.principal.toFixed(2)}</TableCell>
                                <TableCell>{installment.interest.toFixed(2)}</TableCell>
                            </TableRow>
                        );
                    })}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default InstallmentTable;
