import React from 'react'

import { TextField, Button, Container } from '@mui/material'

import {ErrorMessage, useFormik} from 'formik';

const TaxForm = ({onSubmit}) => {

    const formik = useFormik({
        initialValues: {
            name: '',
            age: '',
            income: ''
        },
        validate: (values) => {
            const errors = {}

            if(!values.name) {
                errors.name = 'Campo nome é obrigatório'
            }
            if(!values.age) {
                errors.age = 'Campo idade é obrigatório'
            }
            if(!values.income) {
                errors.income = 'Campo renda é obrigatório'
            }
            return errors;
        },
        onSubmit: (values) => {
            onSubmit(values);
        },
    });

    return <Container> 
        <form onSubmit={formik.handleSubmit}>
            <TextField 
            fullWidth 
            label="Nome" 
            name="name" 
            style={{ marginBottom: "16px"}} 
            onChange={formik.handleChange} 
            value={formik.values.name} 
            helperText={formik.errors.name} 
            error={Boolean(formik.errors.name)}/>

            <TextField 
            fullWidth 
            label="Idade" 
            name="age" 
            type="number" 
            style={{ marginBottom: "16px"}} 
            onChange={formik.handleChange} 
            value={formik.values.age} 
            helperText={formik.errors.age} 
            error={Boolean(formik.errors.age)}/>

            <TextField 
            fullWidth 
            label="Renda" 
            name="income" 
            type="number" 
            style={{ marginBottom: "16px"}} 
            onChange={formik.handleChange} 
            value={formik.values.income} 
            helperText={formik.errors.income} 
            error={Boolean(formik.errors.income)}/>
            
            <Button type="submit" variant="contained" color="primary">Calcular</Button>
        </form>
    </Container>

}

export default TaxForm
