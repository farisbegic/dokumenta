import React from 'react';
import authentication from "../../services/authentication";
import * as Yup from "yup";
import {useFormik} from "formik";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import municipalities from "../../constants/municipalities";
import MenuItem from "@mui/material/MenuItem";
import FunctionalButton from "../common/FunctionalButton";
import Box from "@mui/material/Box";
import {FormControlLabel, Switch} from "@mui/material";

const RequestForm = () => {
    const handleRequest = async (values) => {
        console.log(values);
    }

    const initialValues = {
        name: "",
        surname: "",
        idNumber: "",
        phone: "",
        isUrgent: false,
        isPaid: false,
        document: ""
    }

    const validationSchema = Yup.object().shape({
        name: Yup.string().required("Ime je obavezno polje"),
        prezime: Yup.string().required("Prezime je obavezno polje"),
        phone: Yup.string()
            .min(9, "Broj telefona mora sadržavati najmanje 9 brojeva")
            .required("Broj telefona je obavezno polje"),
        idNumber: Yup.string()
            .min(9, "Broj lične karte mora sadržavati 9 karaktera").required("Broj lične karte je obavezno polje"),
        isUrgent: Yup.boolean().required("Obavezno polje"),
        isPaid: Yup.boolean().required("Obavezno polje"),
        document: Yup.mixed().required("Obavezno polje")
    });

    const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit: handleRequest
    });

    return (
        <Box
            sx={{
                '& .MuiTextField-root': {m: 1},
            }}
        >
            <div className='container'>
                <form className='form' onSubmit={formik.handleSubmit}>
                    <TextField
                        fullWidth
                        id="name"
                        name="name"
                        label="Ime"
                        value={formik.values.name}
                        onChange={formik.handleChange}
                        error={formik.touched.name && Boolean(formik.errors.name)}
                        helperText={formik.touched.name && formik.errors.name}
                    />
                    <TextField
                        fullWidth
                        id="surname"
                        name="surname"
                        label="Prezime"
                        value={formik.values.surname}
                        onChange={formik.handleChange}
                        error={formik.touched.surname && Boolean(formik.errors.surname)}
                        helperText={formik.touched.surname && formik.errors.surname}
                    />
                    <TextField
                        fullWidth
                        id="Broj lične"
                        name="idNumber"
                        label="Ime"
                        value={formik.values.idNumber}
                        onChange={formik.handleChange}
                        error={formik.touched.idNumber && Boolean(formik.errors.idNumber)}
                        helperText={formik.touched.idNumber && formik.errors.idNumber}
                    />
                    <TextField
                        fullWidth
                        id="phone"
                        name="phone"
                        label="Phone"
                        value={formik.values.phone}
                        onChange={formik.handleChange}
                        error={formik.touched.phone && Boolean(formik.errors.phone)}
                        helperText={formik.touched.phone && formik.errors.phone}
                    />
                    <FormControlLabel
                        control={
                            <Switch
                                id="isUrgent"
                                name="isUrgent"
                                checked={formik.values.isUrgent}
                                onChange={formik.handleChange}
                                inputProps={{ 'aria-label': 'controlled' }}
                            />
                        }
                        label="Is Urgent" />
                    <FormControlLabel
                        control={
                            <Switch
                                id="isPaid"
                                name="isPaid"
                                checked={formik.values.isPaid}
                                onChange={formik.handleChange}
                                inputProps={{ 'aria-label': 'controlled' }}
                            />
                        }
                        label="Is Paid" />

                    <FunctionalButton name="Registruj se" size="xs-primary"/>
                </form>
            </div>
        </Box>
    );
};

export default RequestForm;