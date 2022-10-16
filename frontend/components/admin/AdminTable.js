import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';

const columns = [
    { id: 'document-name', label: 'Naziv dokumenta', align: 'left'},
    { id: 'user-name', label: 'Ime korisnika', align: 'center' },
    { id: 'status', label: 'Status', minWidth: 170, align: 'right'},
];

const results = [
    {id:"name", label: "Izvod iz matične knjige rođenih", align:"left"},
    {id: "user", label: "Amar Sose", align: "center"},
    {id: "status", label: "Odobren", align: "right"}
]

const res = [
    {id:"name", label: "Uvjerenje o državljanstvu", align:"left"},
    {id: "user", label: "Faris Begic", align: "center"},
    {id: "status", label: "Odobren", align: "right"}
]

const final = [
    {id:"name", label: "Uvjerenje o prebivalištu roditelja", align:"left"},
    {id: "user", label: "Irfan Paric", align: "center"},
    {id: "status", label: "Odobren", align: "right"}
]


const rows = [
    { id: 1, },
    { id: 2, },

];

const AdminTable = () => {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    return (
        <div className="table">
            <h1>Kompletirani zahtjevi</h1>
        <Paper sx={{ width: '100%', overflow: 'hidden' }}>
            <TableContainer sx={{ maxHeight: 440 }}>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            {columns.map((column) => (
                                <TableCell
                                    key={column.id}
                                    align={column.align}
                                    style={{ minWidth: column.minWidth }}
                                >
                                    {column.label}
                                </TableCell>
                            ))}
                        </TableRow>
                        <TableRow>
                            {results.map((result) => (
                                <TableCell
                                    key={result.id}
                                    align={result.align}
                                    style={{ minWidth: result.minWidth }}
                                >
                                    {result.label}
                                </TableCell>
                            ))}
                        </TableRow>
                        <TableRow>
                            {res.map((res) => (
                                <TableCell
                                    key={res.id}
                                    align={res.align}
                                    style={{ minWidth: res.minWidth }}
                                >
                                    {res.label}
                                </TableCell>
                            ))}
                        </TableRow>
                        <TableRow>
                            {final.map((final) => (
                                <TableCell
                                    key={final.id}
                                    align={final.align}
                                    style={{ minWidth: final.minWidth }}
                                >
                                    {final.label}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows
                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map((row) => {
                                return (
                                    <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                                        {columns.map((column) => {
                                            const value = row[column.id];
                                            return (
                                                <TableCell key={column.id} align={column.align}>
                                                    {column.format && typeof value === 'number'
                                                        ? column.format(value)
                                                        : value}
                                                </TableCell>
                                            );
                                        })}
                                    </TableRow>
                                );
                            })}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[5, 10, 20]}
                component="div"
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </Paper>
        </div>
    );
}

export default AdminTable;