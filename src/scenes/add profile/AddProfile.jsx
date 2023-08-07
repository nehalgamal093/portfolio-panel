import { Box, Button, TextField, Typography, Snackbar, Alert, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material'
import { Formik } from 'formik';
import axios from "axios";
import { useState } from 'react';
import * as yup from 'yup';
import { useEffect } from 'react';
import * as React from 'react';



const AddProfile = () => {
    const [snackBar, isSuccess] = useState(false);
    const [profile, setProfile] = useState([])
    const [load, setLoading] = useState(false);


    useEffect(() => {
        setLoading(true)
        axios.get("http://localhost:3001/profiles")
            .then((response) => {
                setProfile(response.data['result'][0])
                setLoading(false)
                console.log(response.data['result'])
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])
    // const profile = {
    //     title: 'hi',
    //     position: '',
    //     summary: '',
    //     gitlink: '',
    //     googleplaylink: '',
    //     email: '',
    //     linkedinlink: '',
    //     downloadcv: '',
    //     image: ''
    // }
    const handleFormSubmit = (data) => {

        axios({
            method: 'PUT',
            url: 'http://localhost:3001/profiles/64ce533244e6a86604fe94b2',
            data: { title: data.title, position: data.position, summary: data.summary, gitlink: data.gitlink, googleplaylink: data.googleplaylink, email: data.email, downloadcv: data.downloadcv, linkedinlink: data.linkedinlink },

        }).then(function (res) {
            console.log(res)
            isSuccess(true)
            // resetForm({
            //     values: {
            //         title: '',
            //         position: '',
            //         summary: '',
            //         gitlink: '',
            //         googleplaylink: '',
            //         email: '',
            //         linkedinlink: '',
            //         downloadcv: '',
            //         image: ''

            //     },
            // });
        }).catch(function (res) {
            console.log(`response error ${res}`)
            isSuccess(false)
        })
        ////////////
        // var bodyFormData = new FormData();
        // bodyFormData.append("title", values.title)
        // bodyFormData.append("position", values.position)
        // bodyFormData.append("summary", values.summary)
        // bodyFormData.append("image", values.image)

        // bodyFormData.append("googleplaylink", values.googleplaylink)
        // bodyFormData.append("gitlink", values.gitlink)
        // bodyFormData.append("email", values.email)
        // bodyFormData.append("downloadcv", values.downloadcv)
        // bodyFormData.append("linkedinlink", values.linkedinlink)
        // axios({
        //     method: 'POST',
        //     url: 'http://localhost:3001/profiles',
        //     data: bodyFormData,
        //     headers: {
        //         "Content-Type": "multipart/form-data",
        //     },
        // }).then(function (res) {
        //     console.log(res)
        //     isSuccess(true)
        //     resetForm({
        //         values: {
        //             title: '',
        //             position: '',
        //             summary: '',
        //             gitlink: '',
        //             googleplaylink: '',
        //             email: '',
        //             linkedinlink: '',
        //             downloadcv: '',
        //             image: ''

        //         },
        //     });
        // }).catch(function (res) {
        //     console.log(`response error ${res}`)
        //     isSuccess(false)
        // })
        // console.log(profile.downloadcv)
        // console.log(values.email)
    }

    return (
        <Box m="20px" sx={{ backgroundColor: "white", borderRadius: "15px" }} p='20px'>
            <Typography m="20" mb="20px" sx={{ color: "#00a1a1", fontWeight: "bold", fontSize: "20px" }}>Add profile</Typography>
            <Snackbar open={snackBar} autoHideDuration={3000} onClose={() => isSuccess(false)}>
                <Alert severity="success" sx={{ width: '100%' }}>
                    Created profile Successfully !
                </Alert>
            </Snackbar>
            <Formik
                onSubmit={handleFormSubmit}
                enableReinitialize
                initialValues={{

                    title: profile.title,
                    position: profile.position,
                    summary: profile.summary,
                    gitlink: profile.gitlink,
                    googleplaylink: profile.googleplaylink,
                    email: profile.email,
                    linkedinlink: profile.linkedinlink,
                    downloadcv: profile.downloadcv,
                    image: profile.image

                }}
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
                    <form onSubmit={handleSubmit}>
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
                                InputLabelProps={{ style: { color: 'black' }, shrink: values.title }}

                            // error={!!touched.title && !! errors.title}
                            // helper={touched.title && errors.title}
                            />

                            <TextField
                                fullWidth
                                variant="filled"
                                type="text"
                                label="Position"
                                value={values.position}
                                onBlur={handleBlur}
                                onChange={handleChange}
                                name="position"
                                sx={{
                                    gridColumn: "span 2", input: {
                                        color: "black",
                                        background: "#eeeeee"
                                    }
                                }}
                                InputLabelProps={{ style: { color: 'black' }, shrink: values.position }}
                            // error={!!touched.type && !! errors.type}
                            // helper={touched.type && errors.type}
                            />
                            <TextField
                                fullWidth
                                variant="filled"
                                value={values.summary}
                                type="text"
                                label="Summary"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                name="summary"
                                sx={{
                                    gridColumn: "span 4", input: {
                                        color: "black",
                                        background: "#eeeeee"
                                    }
                                }}
                                InputLabelProps={{ style: { color: 'black' }, shrink: values.summary }}
                            // error={!!touched.description && !! errors.description}
                            // helper={touched.description && errors.description}
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
                                InputLabelProps={{ style: { color: 'black' }, shrink: values.gitlink }}
                            // error={!!touched.gitlink && !! errors.gitlink}
                            // helper={touched.gitlink && errors.gitlink}
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
                                InputLabelProps={{ style: { color: 'black' }, shrink: values.googleplaylink }}
                            // error={!!touched.googleplaylink && !! errors.googleplaylink}
                            // helper={touched.googleplaylink && errors.googleplaylink}
                            />
                            <TextField
                                fullWidth
                                variant="filled"
                                value={values.email}
                                type="text"
                                label="Email"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                name="email"
                                sx={{
                                    gridColumn: "span 2", input: {
                                        color: "black",
                                        background: "#eeeeee"
                                    },
                                }}
                                InputLabelProps={{ style: { color: 'black' }, shrink: values.email }}
                            // error={!!touched.title && !! errors.title}
                            // helper={touched.title && errors.title}
                            />
                            <TextField
                                fullWidth
                                variant="filled"
                                value={values.linkedinlink}
                                type="text"
                                label="Linked In"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                name="linkedinlink"
                                sx={{
                                    gridColumn: "span 2", input: {
                                        color: "black",
                                        background: "#eeeeee"
                                    },
                                }}
                                InputLabelProps={{ style: { color: 'black' }, shrink: values.linkedinlink }}
                            // error={!!touched.title && !! errors.title}
                            // helper={touched.title && errors.title}
                            />
                            <TextField
                                fullWidth
                                variant="filled"
                                value={values.downloadcv}
                                type="text"
                                label="Download cv"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                name="downloadcv"
                                sx={{
                                    gridColumn: "span 2", input: {
                                        color: "black",
                                        background: "#eeeeee"
                                    },
                                }}
                                InputLabelProps={{ style: { color: 'black' }, shrink: values.downloadcv }}
                            // error={!!touched.title && !! errors.title}
                            // helper={touched.title && errors.title}
                            />
                            {/* <input
                                type='file'
                                name='image'
                                accept='image/*'
                      
                                onChange=
                                {(e) => {
                                    setFieldValue('image', e.currentTarget.files[0])
                                    console.log(e.currentTarget.files[0])
                                }}
                                style={{ color: "black" }}

                            /> */}
                        </Box>
                        <Box display="flex" justifyContent="end" mt="20px">
                            <Button type="submit" style={{ backgroundColor: "#00a1a1", color: "white" }} variant="container" >
                                Update Profile
                            </Button>

                        </Box>
                    </form>
                )}
            </Formik>
        </Box>
    )
}
// const projectSchema = yup.object().shape({
//     title:yup.string().required('required'),
//     type:yup.string().required('required'),
//     description:yup.string().required('required'),
//     gitlink:yup.string().required('required'),
//     googleplaylink:yup.string().required('required'),
//     images:yup.string().required('required'),
//      tags:yup.array().required('required'),
// })

export default AddProfile