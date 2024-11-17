import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TableSortLabel, TablePagination, IconButton, Paper } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const ContactsTable = ({ contacts, onEdit, onDelete }) => {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);
    const [order, setOrder] = React.useState('asc');
    const [orderBy, setOrderBy] = React.useState('firstName');

    const handleSort = (property) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    };

    const handlePageChange = (event, newPage) => setPage(newPage);
    const handleRowsPerPageChange = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const sortedContacts = [...contacts].sort((a, b) => {
        if (a[orderBy] < b[orderBy]) return order === 'asc' ? -1 : 1;
        if (a[orderBy] > b[orderBy]) return order === 'asc' ? 1 : -1;
        return 0;
    });

    return (
        <Paper>
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            {['First Name', 'Last Name', 'Email', 'Phone Number', 'Company', 'Job Title', 'Actions'].map((col) => (
                                <TableCell key={col}>
                                    {col !== 'Actions' ? (
                                        <TableSortLabel
                                            active={orderBy === col.toLowerCase().replace(" ", "")}
                                            direction={order}
                                            onClick={() => handleSort(col.toLowerCase().replace(" ", ""))}
                                        >
                                            {col}
                                        </TableSortLabel>
                                    ) : col}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {sortedContacts.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((contact, index) => (
                            <TableRow key={index}>
                                <TableCell>{contact.firstName}</TableCell>
                                <TableCell>{contact.lastName}</TableCell>
                                <TableCell>{contact.email}</TableCell>
                                <TableCell>{contact.phoneNumber}</TableCell>
                                <TableCell>{contact.company}</TableCell>
                                <TableCell>{contact.jobTitle}</TableCell>
                                <TableCell>
                                    <IconButton onClick={() => onEdit(contact)}><EditIcon /></IconButton>
                                    <IconButton onClick={() => onDelete(contact)}><DeleteIcon /></IconButton>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                component="div"
                count={contacts.length}
                page={page}
                onPageChange={handlePageChange}
                rowsPerPage={rowsPerPage}
                onRowsPerPageChange={handleRowsPerPageChange}
            />
        </Paper>
    );
};

export default ContactsTable;
