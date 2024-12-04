import React from 'react';
import { CSVLink } from 'react-csv';
import Button from '@mui/material/Button';

function ExportCSV({ data }) {
  const headers = [
    { label: 'First Name', key: 'firstname' },
    { label: 'Last Name', key: 'lastname' },
    { label: 'Street Address', key: 'streetaddress' },
    { label: 'Postcode', key: 'postcode' },
    { label: 'City', key: 'city' },
    { label: 'Email', key: 'email' },
    { label: 'Phone', key: 'phone' }
  ];

  return (
    <CSVLink data={data} headers={headers} filename="customers.csv">
      <Button variant="contained" color="primary">Export</Button>
    </CSVLink>
  );
}

export default ExportCSV;