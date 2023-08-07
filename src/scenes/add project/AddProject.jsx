import { Box, Button, TextField, Typography, Snackbar, Alert } from '@mui/material'
import { Formik } from 'formik';
import axios from "axios";
import { useState } from 'react';
import * as yup from 'yup';
const AddProject = () => {
    const [snackBar, isSuccess] = useState(false);

    const project = {
        title: '',
        type: '',
        description: '',
        gitlink: '',
        googleplaylink: '',
        images: '',
        tags: ''
    }
    const handleFormSubmit = (values, { resetForm }) => {

        var bodyFormData = new FormData();
        bodyFormData.append("title", values.title)
        bodyFormData.append("type", values.type)
        bodyFormData.append("description", values.description)

        for (let i = 0; i < values.images.length; i++) {
            bodyFormData.append(`images`, values.images[i]);
        }

        for (let i = 0; i < values.images.length; i++) {
            bodyFormData.append(`tags`, values.tags[i]);
        }
        bodyFormData.append("googleplaylink", values.googleplaylink)
        bodyFormData.append("gitlink", values.gitlink)

        axios({
            method: 'POST',
            url: 'http://localhost:3001/projects',
            data: bodyFormData,
            headers: {
                "Content-Type": "multipart/form-data",
            },
        }).then(function (res) {
            console.log(res)
            isSuccess(true)
            resetForm({
                values: {
                    title: '',
                    type: '',
                    description: '',
                    gitlink: '',
                    googleplaylink: '',
                    images: '',
                    tags: ''
                },
            });
        }).catch(function (res) {
            console.log(`response error ${res}`)
            isSuccess(false)
        })
        console.log(values)

    }

    return (
        <Box m="20px" sx={{ backgroundColor: "white", borderRadius: "15px" }} p='20px'>
            <Typography m="20" mb="20px" sx={{ color: "#00a1a1", fontWeight: "bold", fontSize: "20px" }}>Add Project</Typography>
            <Snackbar open={snackBar} autoHideDuration={3000} onClose={() => isSuccess(false)}>
                <Alert severity="success" sx={{ width: '100%' }}>
                    Created Project Successfully !
                </Alert>
            </Snackbar>
            <Formik
                onSubmit={handleFormSubmit}
                initialValues={{ project }}
                validationSchema={projectSchema}
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

                            <TextField
                                fullWidth
                                variant="filled"
                                value={values.title}
                                type="text"
                                label="Title"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                name="title"
                                sx={{
                                    gridColumn: "span 2", input: {
                                        color: "black",
                                        background: "#eeeeee"
                                    },
                                }}
                                InputLabelProps={{ style: { color: 'black' } }}
                                error={!!touched.title && !!errors.title}
                                helper={touched.title && errors.title}
                            />
                            <TextField
                                fullWidth
                                variant="filled"
                                type="text"
                                label="Type"
                                value={values.type}
                                onBlur={handleBlur}
                                onChange={handleChange}
                                name="type"
                                sx={{
                                    gridColumn: "span 2", input: {
                                        color: "black",
                                        background: "#eeeeee"
                                    }
                                }}
                                InputLabelProps={{ style: { color: 'black' } }}
                                error={!!touched.type && !!errors.type}
                                helper={touched.type && errors.type}
                            />
                            <TextField
                                fullWidth
                                variant="filled"
                                value={values.description}
                                type="text"
                                label="Description"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                name="description"
                                sx={{
                                    gridColumn: "span 4", input: {
                                        color: "black",
                                        background: "#eeeeee"
                                    }
                                }}
                                InputLabelProps={{ style: { color: 'black' } }}
                                error={!!touched.description && !!errors.description}
                                helper={touched.description && errors.description}
                            />
                            <TextField
                                fullWidth
                                variant="filled"
                                type="text"
                                value={values.gitlink}
                                label="Github Link"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                name="gitlink"
                                sx={{
                                    gridColumn: "span 4", input: {
                                        color: "black",
                                        background: "#eeeeee"
                                    }
                                }}
                                InputLabelProps={{ style: { color: 'black' } }}
                                error={!!touched.gitlink && !!errors.gitlink}
                                helper={touched.gitlink && errors.gitlink}
                            />
                            <TextField
                                fullWidth
                                variant="filled"
                                type="text"
                                value={values.googleplaylink}
                                label="Google Play Link"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                name="googleplaylink"
                                sx={{
                                    gridColumn: "span 4", input: {
                                        color: "black",
                                        background: "#eeeeee"
                                    }
                                }}
                                InputLabelProps={{ style: { color: 'black' } }}
                                error={!!touched.googleplaylink && !!errors.googleplaylink}
                                helper={touched.googleplaylink && errors.googleplaylink}
                            />
                            <TextField
                                fullWidth
                                variant="filled"
                                type="text"
                                label="Tags"
                                value={values.tags}
                                onBlur={handleBlur}
                                onChange={(e) => {
                                    setFieldValue('tags', e.target.value.split(","))
                                    console.log(e.target.value)
                                }
                                }
                                name="tags"
                                sx={{
                                    gridColumn: "span 4", input: {
                                        color: "black",
                                        background: "#eeeeee"
                                    }
                                }}
                                InputLabelProps={{ style: { color: 'black' } }}
                                error={!!touched.tags && !!errors.tags}
                                helper={touched.tags && errors.tags}
                            />
                            <input
                                type='file'
                                name='images'
                                accept='image/*'
                                multiple
                                onChange=
                                {(e) => {
                                    setFieldValue('images', e.currentTarget.files)
                                    console.log(e.currentTarget.files)
                                }}
                                style={{ color: "black" }}

                            />
                        </Box>
                        <Box display="flex" justifyContent="end" mt="20px">
                            <Button type="submit" style={{ backgroundColor: "#00a1a1", color: "white" }} variant="container" >
                                Add Project
                            </Button>
                        </Box>
                    </form>
                )}
            </Formik>
        </Box>
    )
}
const projectSchema = yup.object().shape({
    title: yup.string().required('required'),
    type: yup.string().required('required'),
    description: yup.string().required('required'),
    gitlink: yup.string().required('required'),
    googleplaylink: yup.string().required('required'),
    images: yup.string().required('required'),
    tags: yup.array().required('required'),
})

export default AddProject