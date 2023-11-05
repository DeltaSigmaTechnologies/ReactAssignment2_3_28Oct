import React from 'react'
import {Formik} from 'formik'
import * as yup from 'yup';
import { Box } from '@mui/system';
import { TextField } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import {LocalizationProvider} from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker"
import {FormControl,MenuItem,Select,InputLabel} from '@mui/material';
import {useState} from "react";
import {Button} from '@mui/material';


function Table() {
    const handleFormSubmit =()=>{
      console.log("done")  
    } 
    const [status,setStatus] = useState("")
    const handleChanging =(e)=>{
        setStatus(e.targe.value)


    }
    const isNonMobile = useMediaQuery("(min-width:600px");
  return (
    <>
    <Box sx={{marginLeft:"25%",marginTop:"5%",width:"50%"}}>
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
                <Box display="grid"
                gap="30px"
                gridTemplateColumns="repeat(4,minmax(0,1fr))"
                sx={{
                    "& > div":{gridColumn: isNonMobile ? undefined : "span 4"}

                }}>
                <TextField
                type="text"
                name="name"
                label="Full name"
                onBlur={handleBlur}
                onChange={handleChange}
                error={!!touched.name&& errors.name}
                helperText={touched.name&& errors.name}
                sx={{gridColumn:"span 4"}}

                />
                 <TextField
                type="numbers"
                name="Contact"
                label="Contact number"
                onBlur={handleBlur}
                onChange={handleChange}
                error={!!touched.contact&& errors.contact}
                helperText={touched.name&& errors.name}
                sx={{gridColumn:"span 4"}} />
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                    label="Date"
                    value={values.dateofbirth}
                    sx={{gridColumn:"span 2"}}
                    onChange={handleChange}
                    renderInput={(params) => <TextField {...params}/>}
                    />
                </LocalizationProvider>
                <FormControl fullWidth>
                    <InputLabel id="status">i am a</InputLabel>
                    <Select
                    labelId='Status'
                    id="Status"
                    label="Status"
                    onChange={handleChanging}
                    value={status}
                    sx={{gridColumn:"span 4"}}
                    name="Status"
                    >
                        <MenuItem value={0}>person</MenuItem>
                        <MenuItem value={1}>programmer</MenuItem>
                        <MenuItem value={2}>friend</MenuItem>
                        <MenuItem value={3}>none of the above</MenuItem>
                        </Select> 
                </FormControl>
                <Box display="flex" justifyContent="end" mt="20px">
                    <Button type="submit" variant="contained"
                    onClick={handleFormSubmit}>
                        book now
                    </Button>
                </Box>

                </Box>
            </form>
        )}
    </Formik>
    </Box>    
            </>
  )}
    const initialValues={
        name:"",
        email:"",
        contact:"",
        status:""

    }
  
    const checkoutSchema = yup.object().shape({
        name: yup.string().required("required*"),
        email: yup.string().required("required*"),
            contact: yup.string().required("required*"),
            status:yup.string().required("required*"),
    });
    
        


export default Table