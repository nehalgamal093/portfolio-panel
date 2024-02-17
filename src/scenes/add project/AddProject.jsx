import { Box, Button, TextField, Typography, Snackbar, Alert, CircularProgress } from '@mui/material'
import { Formik } from 'formik';
import axios from "axios";
import { useState } from 'react';
import * as yup from 'yup';
const AddProject = () => {
    const [snackBar, isSuccess] = useState(false);
    const [loading, setLoading] = useState(false);
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
            url: 'https://ginger-nono-qwar.vercel.app/projects',
            data: bodyFormData,


        }).then(function (res) {
            console.log(res)
            isSuccess(true)
            setLoading(false);
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
            <Typography m="20" mb="20px" sx={{ color: "#00a1a1", fontWeight: "bold", fontSize: "20px", fontFamily: "ABeeZee" }}>Add Project</Typography>
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

                                InputProps={{ disableUnderline: true, sx: { borderRadius: 10 } }}
                                sx={{

                                    gridColumn: "span 2", input: {
                                        fontFamily: "ABeeZee",
                                        color: "black",
                                        background: "#FFFFFF",
                                        border: "2px solid #EEEEEE",
                                        borderRadius: "10px",

                                    },

                                }}
                                InputLabelProps={{ style: { color: '#EEEEEE', fontFamily: "ABeeZee", } }}
                                error={!!touched.title && !!errors.title}
                                helperText={touched.title && errors.title}
                            />
                            <TextField
                                fullWidth
                                variant="filled"
                                type="text"
                                label="Type"
                                value={values.type}
                                onBlur={handleBlur}
                                onChange={handleChange}
                                InputProps={{ disableUnderline: true, sx: { borderRadius: 10 } }}
                                name="type"
                                sx={{

                                    gridColumn: "span 2", input: {
                                        color: "black",
                                        background: "#FFFFFF",
                                        border: "2px solid #EEEEEE",
                                        borderRadius: "10px",
                                    }
                                }}
                                InputLabelProps={{ style: { color: '#EEEEEE', fontFamily: "ABeeZee", } }}
                                error={!!touched.type && !!errors.type}
                                helperText={touched.type && errors.type}
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
                                InputProps={{ disableUnderline: true, sx: { borderRadius: 10 } }}
                                sx={{
                                    gridColumn: "span 4", input: {
                                        color: "black",
                                        background: "#FFFFFF",
                                        border: "2px solid #EEEEEE",
                                        borderRadius: "10px",
                                    }
                                }}
                                InputLabelProps={{ style: { color: '#EEEEEE', fontFamily: "ABeeZee", } }}
                                error={!!touched.description && !!errors.description}
                                helperText={touched.description && errors.description}
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
                                InputProps={{ disableUnderline: true, sx: { borderRadius: 10 } }}
                                sx={{
                                    gridColumn: "span 4", input: {
                                        color: "black",
                                        background: "#FFFFFF",
                                        border: "2px solid #EEEEEE",
                                        borderRadius: "10px",
                                    }
                                }}
                                InputLabelProps={{ style: { color: '#EEEEEE', fontFamily: "ABeeZee", } }}
                                error={!!touched.gitlink && !!errors.gitlink}
                                helperText={touched.gitlink && errors.gitlink}
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
                                InputProps={{ disableUnderline: true, sx: { borderRadius: 10 } }}
                                sx={{
                                    gridColumn: "span 4", input: {
                                        color: "black",
                                        background: "#FFFFFF",
                                        border: "2px solid #EEEEEE",
                                        borderRadius: "10px",
                                    }
                                }}
                                InputLabelProps={{ style: { color: '#EEEEEE', fontFamily: "ABeeZee", } }}
                                error={!!touched.googleplaylink && !!errors.googleplaylink}
                                helperText={touched.googleplaylink && errors.googleplaylink}
                            />
                            <TextField
                                fullWidth
                                variant="filled"
                                type="text"
                                label="Tags"
                                InputProps={{ disableUnderline: true, sx: { borderRadius: 10 } }}
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
                                        background: "#FFFFFF",
                                        border: "2px solid #EEEEEE",
                                        borderRadius: "10px",
                                    }
                                }}
                                InputLabelProps={{ style: { color: '#EEEEEE', fontFamily: "ABeeZee", } }}
                                error={!!touched.tags && !!errors.tags}
                                helperText={touched.tags && errors.tags}
                            />
                            <label
                                style={{
                                    fontFamily: "ABeeZee",
                                    width: "20vw",
                                    border: "2px solid #EEEEEE",
                                    padding: "10px",
                                    textAlign: "center",
                                    borderRadius: "10px",
                                    color: "#FFFFFF",
                                    background: "#90ca6b"
                                }}>
                                Choose a picture
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
                                    style={{
                                        display: "none"
                                    }}

                                />
                            </label>
                        </Box>
                        <Box display="flex" justifyContent="end" mt="20px">
                            <Button type="submit" style={{ backgroundColor: "#00a1a1", color: "white", width: "30vw", height: "5vw" }} variant="container" onClick={() => setLoading(true)}>
                                {loading ? (<CircularProgress sx={{ color: 'white', }} />) : (<Typography style={{ fontFamily: "ABeeZee" }}>Add Project</Typography>)}
                            </Button>
                        </Box>
                    </form>
                )}
            </Formik>
        </Box>
    )
}
const projectSchema = yup.object().shape({
    title: yup.string(10).required('This Field is required'),
    type: yup.string().required('This Field is required'),
    description: yup.string(10).required('This Field is required'),
    gitlink: yup.string(10).required('This Field is required'),
    googleplaylink: yup.string(),
    images: yup.string().required('This Field is required'),
    tags: yup.array().required('This Field is required'),
})

export default AddProject