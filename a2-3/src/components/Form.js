import React from 'react';
import { Formik } from 'formik';
import * as yup from 'yup';
import { Box } from '@mui/material';
import {TextField} from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import Button from '@mui/material/Button';
const Contact = () => {
    const handleFormSubmit=()=>{
        console.log("Done");
    }
    const isNonMobile = useMediaQuery("(min-width:600px)");

  return (
    <>
        <Box sx={{padding:'10%',marginLeft:"25%"}}>
        <div>GET IN TOUCH WITH US</div>
        <br/><br/>
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
        }) => ( <form onSubmit={handleSubmit}>
                    <Box>
                        <TextField
                        type="text"
                        label="Full Name"
                        name="name"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        error={!!touched.name && !!errors.name}
                        helperText={touched.name && errors.name}
                        sx={{gridColumn:"span 2"}}
                        />
                        <br/><br/>
                        <TextField
                        type="text"
                        label="Email"
                        email="email"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        error={!!touched.email && !!errors.email}
                        helperText={touched.email && errors.email}
                            sx={{gridColumn:"span 2"}}
                        />
                        <br/><br/>
                        <TextField
                        type="text"
                        label="Phone no."
                        phone="phone"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        error={!!touched.phone && !!errors.phone}
                        helperText={touched.phone && errors.phone}
                        sx={{gridColumn:"span 2"}}
                        />
                        <br/><br/>
                        <TextField
                        type="text"
                        label="Your Message"
                        message="message"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        error={!!touched.message && !!errors.message}
                        helperText={touched.message && errors.message}
                        sx={{gridColumn:"span 2"}}
                        />
                    </Box>
                    <br/><br/>
                    <Button type="submit" color="primary" variant="contained">SEND</Button>
                </form>
        )}
        </Formik>
        </Box>
    </>
  );
};

const initialValues={
    name:"",
    email:"",
    phone:"",
    message:"",
    status:""
};
const checkoutSchema = yup.object().shape({
    name: yup.string().required("required*"),
    email: yup.string().required("required*"),
    phone: yup.string().required("required*"),
    message:yup.string().required("required*"),
    status: yup.string().required("required*"),
    });

export default Contact;
