import React from 'react'
import { DataGrid } from '@mui/x-data-grid';
import { Box } from '@mui/material';
import './Order.css'

function Order() {

    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        {
          field: 'firstName',
          headerName: 'Generic Name',
          width: 250,
          editable: true,
        },
        {
          field: 'lastName',
          headerName: 'Company Name',
          width: 150,
          editable: true,
        },
        {
          field: 'age',
          headerName: 'Price',
          type: 'number',
          width: 110,
          editable: true,
        },
      ];
      
      const rows = [
        { id: 1, lastName: 'Rosical', firstName: 'Calcitrol', age: 35 },
        { id: 2, lastName: 'Acephen', firstName: 'Acetaminophen', age: 42 },
        { id: 3, lastName: 'Zonatuss', firstName: 'Benzonatate', age: 45 },
        { id: 4, lastName: 'Advil', firstName: 'Ibuprofen', age: 16 },
        { id: 5, lastName: 'Alaway', firstName: 'Katotifen', age: 75},
        { id: 6, lastName: null, firstName: 'Resveratrol', age: 150 },
        { id: 7, lastName: 'Stelara', firstName: 'Ustekenumab', age: 44 },
        { id: 8, lastName: 'Prialt', firstName: 'Ziconotide', age: 36 },
        { id: 9, lastName: 'Jublia', firstName: 'Efinaconazole', age: 65 },
      ];
    return (

        
    <>
    <div className='head'>
        <b>Select your required item and proceed to InstaCart!</b>
    </div>
    <Box sx={{ width: '100%' }}>
      <DataGrid
        autoHeight
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5,10,15]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
    <div className='button'>
    <button className='button1'>
        View InstaCart
    </button>
    </div>    
    </>
  );
}





export default Order