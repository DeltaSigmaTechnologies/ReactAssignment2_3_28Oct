import React from 'react'
import {Formik} from 'formik'
import  * as yup from 'yup'; 
import {Button, InputLabel, Select, TextField} from '@mui/material';
import { Box } from '@mui/material';
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import {FormControl,MenuItem,SelectInpuLabel} from '@mui/material'
import {useState} from 'react';


const Table = () => {
    const handleFormSubmit =()=>{
        console.log("Done")
    }
    const [status,setStatus] = useState("")
    const handleChanging =(e) =>{
        setStatus(e.target.value)

    }

  return (

    <>
    <Formik
     onSubmit={handleFormSubmit}
     initialValues={initialValues}
     validationSchema={checkoutSchema}
    >
        {({
            values,
            errors,
            touched,
            handleBlur,
            handleChange,
            handleSubmit,
        }) => (
            <form onSubmit={handleSubmit}>
            <Box>
                <TextField
                type="text"
                label="Full-Name"
                name="full-name"
                onBlur={handleBlur}
                onChange={handleChange}
                error={!!touched.name&&!!errors.name}
                helperText={touched.name&&errors.name}
                sx={{padding:"2%"}}
                />
                <br />
                <TextField
                type="text"
                label="Email-id"
                name="full-name"
                onBlur={handleBlur}
                onChange={handleChange}
                error={!!touched.name&&!!errors.name}
                helperText={touched.name&&errors.name}
                sx={{padding:"2%"}}
                />
                <br />
                 <TextField
                type="text"
                label="Phone Number"
                name="contact"
                onBlur={handleBlur}
              //  onChange={handleChange}
                error={!!touched.contact &&!! errors.contact}
                helperText={touched.contact && errors.contact}
                sx={{padding:"2%"}}
                />
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                    label="Date"
                    onChange={handleChange}
                    />
                </LocalizationProvider>
              <FormControl fullWidth>
                <InputLabel id="status">Table for:</InputLabel>
                <Select
                labelId="status"
                    id="status"
                    label="Status"
                    onChange={handleChanging}
                    sx={{gridColumn:"span4"}}
                    name="status"
                    >
                        <MenuItem value={0}>two</MenuItem>
                        <MenuItem value={1}>Four</MenuItem>
                        <MenuItem value={2}>six</MenuItem>
                        <MenuItem value={3}>Eight</MenuItem>



                </Select>
                </FormControl>  

                <Box display="flex" justifyContent="end" mt="20px">
                    <Button type ="submit" color="secondary" variant="contained">
                        Book Now
                    </Button>
                </Box>

            </Box>
            </form>
        )}
            </Formik>
        
    </>
  )}
   const initialValues={
    name:"",
    email:"",
    contact:"",
    status:""
   }
   const checkoutSchema = yup.object().shape({
    name:yup.string().required("required*"),
    email:yup.string().required("required*"),
    contact:yup.string().required("required*"),
    status:yup.string().required(),

   })
   
  
 

export default Table