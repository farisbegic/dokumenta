import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Button from "../common/Button";
import routes from "../../constants/routes";
import {primaryColor, backgroundColor} from "../../styles/colors.module.scss";

const RequestTable = ({ requests }) => {
    return (
        <div className="table">
            <div className="table-button">
                <Button name="Novi zahtjev +" link={routes.request.link} size="sm-primary" />
            </div>
        <Paper sx={{ width: '100%', overflow: 'hidden', fontFamily: 'Poppins' }}>
            <TableContainer sx={{ maxHeight: 440 }}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell><strong>Request Name</strong></TableCell>
                            <TableCell align="right"><strong>Request Holder</strong></TableCell>
                            <TableCell align="right"><strong>Request Status</strong></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {requests.map((row) => (
                            <TableRow
                                key={row.name}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.document}
                                </TableCell>
                                <TableCell align="right">{`${row.name} ${row.surname}`}</TableCell>
                                <TableCell align="right">{row.is_completed ? 'Completed' : 'Submitted'}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Paper>
        </div>
    );
}

export default RequestTable;
