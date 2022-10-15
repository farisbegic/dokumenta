import React, {useState} from 'react';
import Box from '@mui/material/Box';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import { useFormik } from "formik";
import * as Yup from "yup";
import municipalities from '../../../constants/municipalities';
import FunctionalButton from '../../../components/common/FunctionalButton';

export default function Settings() {

   
    const[firstName, setName]= useState("Amar");
    const[lastName, setLastName]= useState("Sose");
    const[email, setEmail]= useState("amar.sose@hotmail.com");
    const[password, setPassword]= useState("amar123");
    const[passwordConfirmation, setPasswordConfirmation]= useState("amar123");
    const[municipality, setMunicipality]= useState("Centar");
    const[idNumber, setIdNumber]= useState("15fahbas");
    
        const onSubmit=(values) =>{
            console.log(values);
        }

        const firstNameHandler=(event) =>{
            setName(event.target.value);
        }
        const lastNameHandler=(event) =>{
            setLastName(event.target.value);
        }
        const emailHandler=(event) =>{
            setEmail(event.target.value);
        }
        const PasswordHandler=(event) =>{
            setPassword(event.target.value);
        }
        const ConfirmHandler=(event) =>{
            setPasswordConfirmation(event.target.value);
        }
        const municipalityHandler=(event) =>{
            setMunicipality(event.target.value);
        }
        const IdNumberHandler=(event) =>{
            setIdNumber(event.target.value);
        }
          const formik = useFormik({
            initialValues: {
              firstName: "",
              lastName: "",
              email: "",
              password: "",
              passwordConfirmation: "",
              idNumber: ""
            },
            validationSchema : Yup.object().shape({
                firstName: Yup.string().required("Ime je obavezno polje"),
                lastName: Yup.string().required("Prezime je obavezno polje"),
                password: Yup.string()
                  .min(8, "Password mora sadržavati najmanje 8 karaktera")
                  .required("Password je obavezno polje"),
                email: Yup.string()
                  .email("Netačna email adresa")
                  .required("Email je obavezno polje"),
                idNumber: Yup.string()
                .min(9,"Broj lične karte mora sadržavati 9 karaktera").required("Broj lične karte je obavezno polje"),
                passwordConfirmation: Yup.string()
                .oneOf([Yup.ref('password'), null], 'Password se ne poklapa')
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
              <h1>Uredi profil</h1>
            <form className='form' onSubmit={formik.handleSubmit}>
                <TextField id="firstName" name='firstName' label="Unesite Vaše ime"  variant="outlined" 
                 value={firstName} onChange={firstNameHandler}  />
                 {formik.errors.firstName && formik.touched.firstName ? (
                  <p className='error-message'>{formik.errors.firstName}</p>
                ) : null}
                <TextField id="lastName" name='lastName' label="Unesite Vaše prezime" variant="outlined" 
                 value={lastName} onChange={lastNameHandler} />
                 {formik.errors.lastName && formik.touched.lastName ? (
                  <p className='error-message'>{formik.errors.lastName}</p>
                ) : null}
                <TextField id="email" name='email' label="Unesite Vaš email" variant="outlined" 
                 value={email} onChange={emailHandler} />
                 {formik.errors.email && formik.touched.email ? (
                  <p className='error-message'>{formik.errors.email}</p>
                ) : null}
                <TextField id="password" type='password' name='password' label="Password" variant="outlined" 
                 value={password} onChange={PasswordHandler} />
                 {formik.errors.password && formik.touched.password ? (
                  <p className='error-message'>{formik.errors.password}</p>
                ) : null}
                <TextField id="passwordCondirmation" type='password' name='passwordConfirmation' label="Potvrdite password" variant="outlined"
                 value={passwordConfirmation} onChange={ConfirmHandler} />
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
              value={municipality}
            >
              { municipalities.map((mun, index) => {
                return <MenuItem key={index} value={mun.value}>{mun.name}</MenuItem>
              })}
              
            </Select>
                </div>
    
                <TextField id="idNumber" name='idNumber' label="Unesite broj Vaše lične karte" variant="outlined" 
                 value={idNumber} onChange={IdNumberHandler}/>  
                 {formik.errors.idNumber && formik.touched.idNumber ? (
                  <p className='error-message'>{formik.errors.idNumber}</p>
                ) : null}
    
            </form>
            <FunctionalButton name="Spasi izmjene" size="xs-primary"  />
            </div>
            </Box>
            
            </>
    )
}