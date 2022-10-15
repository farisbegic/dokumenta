import React, {useState} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useFormik } from "formik";
import * as Yup from "yup";
import FunctionalButton from '../common/FunctionalButton';


const LoginForm = () => {
    const onSubmit=(values) =>{
        console.log(values);
    }
      const formik = useFormik({
        initialValues: {
          email: "",
          password: "",
        },

        validationSchema : Yup.object().shape({
            password: Yup.string()
              .min(8, "Password mora sadržavati najmanje 8 karaktera")
              .required("Password je obavezno polje"),
            email: Yup.string()
              .email("Netačna email adresa")
              .required("Email je obavezno polje"),
          }),

        onSubmit,
        
      });

      return (
        <>
         <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m:1, width: '80ch' },
      }}
      >
        
        <div className='container'>
        <h1>Prijava</h1>
        <form className='form' onSubmit={formik.handleSubmit}>
            <TextField id="email" name='email' label="Unesite Vaš email" variant="outlined" onBlur={formik.handleBlur}
             value={formik.values.email} onChange={formik.handleChange} />
             {formik.errors.email && formik.touched.email ? (
              <p className='error-message'>{formik.errors.email}</p>
            ) : null}
            <TextField id="password" type='password' name='password' label="Password" variant="outlined" onBlur={formik.handleBlur}
             value={formik.values.password} onChange={formik.handleChange} />
             {formik.errors.password && formik.touched.password ? (
              <p className='error-message'>{formik.errors.password}</p>
            ) : null}
           
        </form>
        <FunctionalButton name="Prijavi se" size="xs-primary"  />
        </div>
        </Box>
        
        </>

        
    )
};

export default LoginForm;