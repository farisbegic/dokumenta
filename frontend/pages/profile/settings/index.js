import React, {useEffect, useState} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import {useFormik} from "formik";
import * as Yup from "yup";
import FunctionalButton from '../../../components/common/FunctionalButton';
import userService from '../../../services/user';

export default function Settings() {
    const [user, setUser] = useState('');
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        async function fetchData() {
            const response = await userService.getUserInformation();
            setUser(response.data);
        }
        fetchData();
        setLoading(true);
    }, [])

    const onSubmit = async (values) => {
        const response = await userService.updateUser({
            name: values.firstName,
            surname: values.lastName,
            phone: values.phone,
            id_number: values.idNumber
        });

        if (response.status === 200) {
            alert('User updated successfully');
        }
    }

    const initialValues = {
        firstName: user.name,
        lastName: user.surname,
        phone: user.phone,
        municipality: user.municipality,
        idNumber: user.id_number
    }

    const validationSchema = Yup.object().shape({
        firstName: Yup.string().required("Ime je obavezno polje"),
        lastName: Yup.string().required("Prezime je obavezno polje"),
        phone: Yup.string().required("Broj telefona je obavezno polje"),
        idNumber: Yup.string().min(9, "Broj lične karte mora sadržavati 9 karaktera").required("Broj lične karte je obavezno polje")
    })

    const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit,
    });


    return (
        <>
            { loading && (
                <Box
                    sx={{
                        '& .MuiTextField-root': {m: 1},
                    }}
                >
                    <div className='container'>
                        <h1>Uredi profil</h1>
                        <form className='form' onSubmit={formik.handleSubmit}>
                            <TextField
                                fullWidth
                                id="firstName"
                                name="firstName"
                                label="Ime"
                                value={formik.values.firstName}
                                onChange={formik.handleChange}
                                error={formik.touched.firstName && Boolean(formik.errors.firstName)}
                                helperText={formik.touched.firstName && formik.errors.firstName}
                            />
                            <TextField
                                fullWidth
                                id="lastName"
                                name="lastName"
                                label="Prezime"
                                value={formik.values.lastName}
                                onChange={formik.handleChange}
                                error={formik.touched.lastName && Boolean(formik.errors.lastName)}
                                helperText={formik.touched.lastName && formik.errors.lastName}
                            />
                            <TextField
                                fullWidth
                                id="phone"
                                name="phone"
                                label="Telefon"
                                value={formik.values.phone}
                                onChange={formik.handleChange}
                                error={formik.touched.phone && Boolean(formik.errors.phone)}
                                helperText={formik.touched.phone && formik.errors.phone}
                            />
                            <TextField
                                fullWidth
                                id="idNumber"
                                name="idNumber"
                                label="Broj lične"
                                value={formik.values.idNumber}
                                onChange={formik.handleChange}
                                error={formik.touched.idNumber && Boolean(formik.errors.idNumber)}
                                helperText={formik.touched.idNumber && formik.errors.idNumber}
                            />
                            <FunctionalButton name="Spasi izmjene" size="xs-primary"/>
                        </form>
                    </div>
                </Box>
            )}
        </>
    )
}