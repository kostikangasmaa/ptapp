import React from 'react';
import { CSVLink } from 'react-csv';
import Button from '@mui/material/Button';

function ExportCSV({ data, filename }) {
    let headers;

    if (filename === "customers.csv") {
        headers = [
            { label: 'First Name', key: 'firstname' },
            { label: 'Last Name', key: 'lastname' },
            { label: 'Street Address', key: 'streetaddress' },
            { label: 'Postcode', key: 'postcode' },
            { label: 'City', key: 'city' },
            { label: 'Email', key: 'email' },
            { label: 'Phone', key: 'phone' }
        ];
    } else {
        headers = [
            { label: 'Date', key: 'date' },
            { label: 'Activity', key: 'activity' },
            { label: 'Duration', key: 'duration' },
            { label: 'First Name', key: 'customer.firstname' },
            { label: 'Last Name', key: 'customer.lastname' }
        ];
    }

    return (
        <CSVLink data={data} headers={headers} filename={filename}>
            <Button variant="contained" color="primary">Export</Button>
        </CSVLink>
    );
}

export default ExportCSV;