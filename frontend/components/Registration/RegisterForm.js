import React, {useContext} from 'react';
import Box from '@mui/material/Box';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import {useFormik} from "formik";
import * as Yup from "yup";
import municipalities from '../../constants/municipalities';
import FunctionalButton from '../common/FunctionalButton';
import authentication from "../../services/authentication";
import {AuthenticationContext} from "../../contexts/AuthenticationContextProvider";

const RegisterForm = () => {
    const { setResponse } = useContext(AuthenticationContext);

    const handleRegister = async (values) => {
        const response = await authentication.register({
            name: values.firstName,
            surname: values.lastName,
            email: values.email,
            password: values.password,
            confirm_password: values.passwordConfirmation,
            id_number: values.idNumber,
            phone: values.phone,
            municipality: 1,
        })

        if (response.status === 200) {
            setResponse(response.data);
        }
    }

    const initialValues = {
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        password: "",
        passwordConfirmation: "",
        idNumber: ""
    }

    const validationSchema = Yup.object().shape({
        firstName: Yup.string().required("Ime je obavezno polje"),
        lastName: Yup.string().required("Prezime je obavezno polje"),
        password: Yup.string()
            .min(8, "Password mora sadržavati najmanje 8 karaktera")
            .required("Password je obavezno polje"),
        email: Yup.string()
            .email("Netačna email adresa")
            .required("Email je obavezno polje"),
        phone: Yup.string()
            .min(9, "Broj telefona mora sadržavati najmanje 9 brojeva")
            .required("Broj telefona je obavezno polje"),
        idNumber: Yup.string()
            .min(9, "Broj lične karte mora sadržavati 9 karaktera").required("Broj lične karte je obavezno polje"),
        passwordConfirmation: Yup.string()
            .oneOf([Yup.ref('password'), null], 'Password se ne poklapa')
    });

    const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit: handleRegister
    });


    return (
        <Box
            sx={{
                '& .MuiTextField-root': {m: 1},
            }}
        >
            <div className='container'>
                <h1>Registracija</h1>
                <form className='form' onSubmit={formik.handleSubmit}>
                    <TextField id="firstName" name='firstName' label="Unesite Vaše ime" variant="outlined"
                               onBlur={formik.handleBlur}
                               value={formik.values.firstName}
                               onChange={formik.handleChange}/>
                    {formik.errors.firstName && formik.touched.firstName ? (
                        <p className='error-message'>{formik.errors.firstName}</p>
                    ) : null}
                    <TextField id="lastName" name='lastName' label="Unesite Vaše prezime" variant="outlined"
                               onBlur={formik.handleBlur}
                               value={formik.values.lastName} onChange={formik.handleChange}/>
                    {formik.errors.lastName && formik.touched.lastName ? (
                        <p className='error-message'>{formik.errors.lastName}</p>
                    ) : null}
                    <TextField id="email" name='email' label="Unesite Vaš email" variant="outlined"
                               onBlur={formik.handleBlur}
                               value={formik.values.email} onChange={formik.handleChange}/>
                    {formik.errors.email && formik.touched.email ? (
                        <p className='error-message'>{formik.errors.email}</p>
                    ) : null}
                    <TextField id="phone" name='phone' label="Unesite Vaš telefon" variant="outlined"
                               onBlur={formik.handleBlur}
                               value={formik.values.phone} onChange={formik.handleChange}/>
                    {formik.errors.phone && formik.touched.phone ? (
                        <p className='error-message'>{formik.errors.phone}</p>
                    ) : null}
                    <TextField id="password" type='password' name='password' label="Password" variant="outlined"
                               onBlur={formik.handleBlur}
                               value={formik.values.password} onChange={formik.handleChange}/>
                    {formik.errors.password && formik.touched.password ? (
                        <p className='error-message'>{formik.errors.password}</p>
                    ) : null}
                    <TextField id="passwordCondirmation" type='password' name='passwordConfirmation'
                               label="Potvrdite password" variant="outlined" onBlur={formik.handleBlur}
                               value={formik.values.passwordConfirmation} onChange={formik.handleChange}/>
                    {formik.errors.passwordConfirmation && formik.touched.passwordConfirmation ? (
                        <p className='error-message'>{formik.errors.passwordConfirmation}</p>
                    ) : null}

                    <div className='input-select'>
                        <InputLabel id="demo-simple-select-standard-label">Izaberite opštinu</InputLabel>
                        <Select
                            labelId="demo-simple-select-standard-label"
                            id="municipality"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            label="Opština"
                            name='municipality'
                            value={formik.values.municipality}
                        >
                            {municipalities.map((mun, index) => {
                                return <MenuItem key={index} value={mun.value}>{mun.name}</MenuItem>
                            })}

                        </Select>
                    </div>

                    <TextField id="idNumber" name='idNumber' label="Unesite broj Vaše lične karte"
                               variant="outlined" onBlur={formik.handleBlur}
                               value={formik.values.idNumber} onChange={formik.handleChange}/>
                    {formik.errors.idNumber && formik.touched.idNumber ? (
                        <p className='error-message'>{formik.errors.idNumber}</p>
                    ) : null}
                    <FunctionalButton name="Registruj se" size="xs-primary"/>
                </form>
            </div>
        </Box>
    )
};

export default RegisterForm;