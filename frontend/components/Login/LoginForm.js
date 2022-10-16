import React, {useContext} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import {useFormik} from "formik";
import * as Yup from "yup";
import FunctionalButton from '../common/FunctionalButton';
import {AuthenticationContext} from "../../contexts/AuthenticationContextProvider";
import authentication from "../../services/authentication";


const LoginForm = () => {
    const { setResponse } = useContext(AuthenticationContext);
    const [error, setError] = React.useState(false);

    const handleLogin = async (values) => {
        try {
            const response = await authentication.login(values)

            console.log(response);

            if (response.status === 200) {
                setResponse(response.data);
                setError(false);
            }
        } catch (e) {
            setError(true);
        }
    }

    const initialValues = {
        email: "",
        password: "",
    }

    const validationSchema = Yup.object({
        email: Yup.string()
            .email("Netačna email adresa")
            .required("Email je obavezno polje"),
    });

    const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit: handleLogin,
    });

    return (
        <>
            <Box
                sx={{
                    '& .MuiTextField-root': {my: 1, width: '100%'},
                }}
            >
                <div className='container'>
                    <h1>Prijava</h1>
                    <form className='form' onSubmit={formik.handleSubmit}>
                        <TextField id="email" name='email' label="Email" variant="outlined"
                                   value={formik.values.email}
                                   onChange={formik.handleChange}
                                   error={formik.touched.email && Boolean(formik.errors.email)}
                                   helperText={formik.touched.email && formik.errors.email}
                        />
                        <TextField id="password" type='password' name='password' label="Password" variant="outlined"
                                   value={formik.values.password}
                                   onChange={formik.handleChange}
                                   error={formik.touched.password && Boolean(formik.errors.password)}
                                   helperText={formik.touched.password && formik.errors.password}
                        />
                        { error ? <p className='error-message'>Pogrešan email ili password</p> : null }
                        <FunctionalButton name="Prijavi se" size="xs-primary" />
                    </form>
                </div>
            </Box>
        </>
    )
};

export default LoginForm;