import React from 'react'
import { Formik } from 'formik'
import * as yup from 'yup'
import { TextField } from '@mui/material'
import {Box} from '@mui/material'
import useMediaQuery from '@mui/material/useMediaQuery'
import './Form.css'
import { FormControl, MenuItem, Select, InputLabel } from '@mui/material'
import {useState} from 'react';
import { Button } from '@mui/material'


const Table = () => {

const handleFormSubmit=() =>{
          console.log("Done")


}
const handleChanging=() =>{
    console.log("Done")


}

const isNonMobile = useMediaQuery("(min-width:600px)")

  return (

    <>
     <p className='h1'>We value your feedback!</p>

   
    <Box sx={{ width: '20%', marginTop:"2%", marginLeft:'23%', marginBottom:'5%'}}>

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
      <div className='box'>
      <Box>

        <TextField 
        type="text"
        label="Full Name"
        name='name'
        onBlur={handleBlur}
        onChange={handleChange}
        error={!!touched.name && !!errors.name}
        helperText={touched.name && errors.name}
        sx={{paddingBottom:'4%', width:'100%'}}
        />
        <br />
        <TextField 
        type="text"
        label="Email"
        name='email'
        onBlur={handleBlur}
        onChange={handleChange}
        error={!!touched.name && !!errors.name}
        helperText={touched.name && errors.name}
        sx={{paddingBottom:'4%', width:'100%'}}
         />
         <br />
         <TextField 
        type="text"
        label="Feedback"
        name='contact'
        onBlur={handleBlur}
        onChange={handleChange}
        error={!!touched.name && !!errors.name}
        helperText={touched.name && errors.name}
        sx={{ width:'100%', paddingBottom: '4%'}}
        />

<FormControl fullWidth >

<InputLabel id="status">Rate your experience: </InputLabel>

<Select

labelld="Status"

id="status"

label="Status"

onChange={handleChanging}

name="status"
>
<MenuItem value={0}> Amazing </MenuItem>
<MenuItem value={1}> Good </MenuItem>
<MenuItem value={2}> Satisfactory </MenuItem>
<MenuItem value={3}> Could be improved </MenuItem>

</Select>

</FormControl >

<Box display="flex" justifyContent="center" mt="8%">

<Button type="submit" variant="contained" sx={{backgroundColor:'purple'}}

onClick={handleFormSubmit}> Submit </Button>

</Box>

      </Box>
      </div>
</form>
)}
</Formik>
    </Box>
    </>
  )}

  const initialValues= {
    name: "",
    email:"",
    contact:"",
    status:""
  }

  const checkoutSchema = yup.object().shape({
    name: yup.string().required("required*"),
    email: yup.string().required("required*"),
    contact: yup.string().required("required*"),
    status: yup.string().required("required*"),
    });
  

export default Table
