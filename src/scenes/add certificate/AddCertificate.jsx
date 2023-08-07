import { Box, Button, TextField, Typography, Snackbar, Alert } from '@mui/material'
import { Formik } from 'formik';
import axios from "axios";
import { useState } from 'react';
import * as yup from 'yup';
const AddCertificate = () => {
    const [snackBar, isSuccess] = useState(false);

    const certificate = {

        image: ''
    }
    const handleFormSubmit = (values) => {

        var bodyFormData = new FormData();

        bodyFormData.append("image", values.image)


        axios({
            method: 'POST',
            url: 'http://localhost:3001/certificates',
            data: bodyFormData,
            headers: {
                "Content-Type": "multipart/form-data",
            },
        }).then(function (res) {
            console.log(res)
            isSuccess(true)
            // resetForm({
            //     values: {

            //         image: ''

            //     },
            // });
        }).catch(function (res) {
            console.log(`response error ${res}`)
            isSuccess(false)
        })
        console.log(values.image)

    }

    return (
        <Box m="20px" sx={{ backgroundColor: "white", borderRadius: "15px" }} p='20px'>
            <Typography m="20" mb="20px" sx={{ color: "#00a1a1", fontWeight: "bold", fontSize: "20px" }}>Add Certificate</Typography>
            <Snackbar open={snackBar} autoHideDuration={3000} onClose={() => isSuccess(false)}>
                <Alert severity="success" sx={{ width: '100%' }}>
                    Created Certificate Successfully !
                </Alert>
            </Snackbar>
            <Formik
                onSubmit={handleFormSubmit}
                initialValues={{ certificate }}
            // validationSchema={projectSchema}
            >
                {({
                    values,
                    errors,
                    touched,
                    handleBlur,
                    handleChange,
                    handleSubmit, setFieldValue, resetForm
                }) => (
                    <form onSubmit={handleSubmit} encType="multipart/form-data">
                        <Box
                            display="grid"
                            gap="30px"
                            gridTemplateColumns="repeat(4,minmax(0,1fr))">


                            <input
                                type='file'
                                name='image'
                                accept='image/*'

                                onChange=
                                {(e) => {
                                    setFieldValue('image', e.currentTarget.files[0])
                                    console.log(e.currentTarget.files[0])
                                }}
                                style={{ color: "black" }}

                            />
                        </Box>
                        <Box display="flex" justifyContent="end" mt="20px">
                            <Button type="submit" style={{ backgroundColor: "#00a1a1", color: "white" }} variant="container" >
                                Add Certificate
                            </Button>
                        </Box>
                    </form>
                )}
            </Formik>
        </Box>
    )
}
// const projectSchema = yup.object().shape({

//     image:yup.string().required('required'),

// })

export default AddCertificate