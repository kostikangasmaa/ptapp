import { useState, useEffect } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the Data Grid
import "ag-grid-community/styles/ag-theme-material.css"; // Optional Theme applied to the Data Grid
import Button from "@mui/material/Button";
import Snackbar from '@mui/material/Snackbar';
import { getCustomers, deleteCustomer } from "../customerApi";
import EditCustomer from "./EditCustomer";
import AddCustomer from "./AddCustomer";
import AddTrainingSession from "./AddTrainingSession"

function CustomerList() {
    const [customers, setCustomers] = useState([]);
    const [open, setOpen] = useState(false);
    const [colDefs, setColDefs] = useState([
        { field: "firstname", filter: true,width: 120 },
        { field: "lastname", filter: true,width: 120 },
        { field: "streetaddress", filter: true,width: 140 },
        { field: "postcode", filter: true,width: 100 },
        { field: "city", filter: true,width: 120 },
        { field: "email", filter: true },
        { field: "phone", filter: true ,width: 140},
        {
            cellRenderer: params => <Button size="small" color="error" onClick={() => handleDelete(params.data)}>Delete</Button>, width: 120
        },
        {
            cellRenderer: params => <EditCustomer data={params.data} handleFetch={handleFetch}></EditCustomer>, width: 120
        },
        {
            cellRenderer: params => <AddTrainingSession data={params.data} handleFetch={handleFetch}></AddTrainingSession>
        }
    ]);

    useEffect(() => {
        handleFetch();
    }, []);

    const handleFetch = () => {
            getCustomers()
            .then(data => setCustomers(data._embedded.customers))
            .catch(error => console.error(error))
    };

    const handleClose = () => {
        setOpen(false)
    };

    const handleDelete = (params) => {
        if (window.confirm("Are you sure?")) {
            setOpen(true);
            deleteCustomer(params._links.self.href)
                .then(() => handleFetch())
                .catch(error => console.error(error))
        }
    };

    return (
        <>
             <AddCustomer handleFetch={handleFetch}></AddCustomer>
            <div
                className="ag-theme-material" // applying the Data Grid theme
                style={{ height: 500 }} // the Data Grid will fill the size of the parent container
            >
                <AgGridReact
                    rowData={customers}
                    columnDefs={colDefs}
                    pagination={true} // makes the list fit to page with pagination
                    paginationAutoPageSize={true} // automaticly selects the size how many rows on a pagination page
                    suppressCellFocus={true} // deletes cell highlight when clicking any cell in agGrid
                />
                <Snackbar
                    open={open}
                    message="Customer deleted"
                    autoHideDuration={3000}
                    onClose={handleClose}
                />
            </div>
        </>
    );


}

export default CustomerList;