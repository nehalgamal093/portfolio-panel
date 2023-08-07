import { useState } from "react";
import { Box, Button, Dialog, Snackbar, Alert, DialogContent, TextField, Typography, FormControl, InputLabel, Select, MenuItem } from '@mui/material'
import axios from "axios";
import { Formik } from 'formik';
import useGetProjects from "../hooks/GetProject";
const UpdateDialog = ({ id }) => {
    const [open, setOpen] = useState(false);
    const [snackBar, isSuccess] = useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };

    const pro = {
        title: 'dfsfsdsd',
        type: 'sfddsfsdfsdsda',
        description: 'sdfsdfdsfffdsfsadsfad',
        gitlink: 'sdfsdfdsfffdsfsadsfad',
        googleplaylink: 'sdfsdfdsfffdsfsadsfad',
        images: 'sdfsdfdsfffdsfsadsfad',
        tags: 'sdfsdfdsfffdsfsadsfad'
    }
    const Fields = ({ handleBlur, handleChange, values, name }) => {
        return (
            <TextField
                fullWidth
                variant="filled"
                type="text"
                value={values.name}
                label={name}
                onBlur={handleBlur}
                onChange={handleChange}
                name={name}
                sx={{
                    gridColumn: "span 2", input: {
                        color: "black",
                        background: "#eeeeee"
                    }
                }}
                InputLabelProps={{ style: { color: 'black' } }}

            />
        )
    }
    const getFields = (handleBlur, handleChange, values) => {
        switch (age) {
            case 'title':
                return (<Fields name='title' values={values.title} handleBlur={handleBlur} handleChange={handleChange} />)


            case 'description':
                return (<Fields name='description' values={values.description} handleBlur={handleBlur} handleChange={handleChange} />)

            case 'type':
                return (<Fields name='type' values={values.type} handleBlur={handleBlur} handleChange={handleChange} />)
            case 'gitlink':
                return (<Fields name='gitlink' values={values.type} handleBlur={handleBlur} handleChange={handleChange} />)

            case 'googleplaylink':
                return (<Fields name='googleplaylink' values={values.type} handleBlur={handleBlur} handleChange={handleChange} />)

            default:
                return (<Fields name='title' values={values.type} handleBlur={handleBlur} handleChange={handleChange} />)
        }
    }
    const handleClose = () => {
        setOpen(false);
    };
    const [age, setAge] = useState('');

    const handleAgeChange = (event) => {
        setAge(event.target.value);
        console.log(event.target.value)
    };
    const handleFormSubmit = (data) => {

        axios({
            method: 'PUT',
            url: `http://localhost:3001/projects/${id}`,
            data: { title: data.title, type: data.type, description: data.description, gitlink: data.gitlink, googleplaylink: data.googleplaylink, images: data.images, tags: data.tags },

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
        console.log(age)
    }
    return (
        <div>
            <Button
                variant="contained"
                disableElevation
                sx={{ backgroundColor: "#fdba60", fontSize: "12px" }}
                onClick={handleClickOpen}
            >
                <Typography sx={{ fontSize: "13px", fontWeight: "Bold", textTransform: 'capitalize' }}>Edit</Typography>
            </Button>
            <Dialog open={open} onClose={handleClose}>
                {/* <DialogTitle>Update Project</DialogTitle> */}
                <DialogContent>
                    <Box sx={{ backgroundColor: "white", borderRadius: "15px" }} >
                        <Typography m="20" mb="20px" sx={{ color: "#00a1a1", fontWeight: "bold", fontSize: "20px" }}>Add profile</Typography>
                        <Snackbar open={snackBar} autoHideDuration={3000} onClose={() => isSuccess(false)}>
                            <Alert severity="success" sx={{ width: '100%' }}>
                                Created profile Successfully !
                            </Alert>
                        </Snackbar>
                        <Formik
                            onSubmit={handleFormSubmit}

                            initialValues={{

                                title: pro.title,
                                type:  pro.type,
                                description:   pro.description,
                                gitlink: pro.gitlink,
                                googleplaylink:  pro.googleplaylink,
                                images:  pro.images,
                                tags: pro.tags
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
                                        gridTemplateColumns="repeat(2,minmax(0,1fr))">

                                        <FormControl sx={{
                                            gridColumn: "span 2", input: {
                                                color: "black",
                                                background: "#eeeeee"
                                            }
                                        }}>
                                            <InputLabel id="demo-simple-select-label">Field</InputLabel>
                                            <Select
                                                labelId="demo-simple-select-label"
                                                id="demo-simple-select"
                                                value={age}
                                                label="Age"
                                                onChange={handleAgeChange}
                                            >
                                                <MenuItem value='title'>Title</MenuItem>
                                                <MenuItem value='description'>Description</MenuItem>
                                                <MenuItem value='type'>Type</MenuItem>
                                                <MenuItem value='googleplaylink'>Google Play</MenuItem>
                                                <MenuItem value='gitlink'>GitHub</MenuItem>

                                            </Select>
                                        </FormControl>
                                        {/* <TextField
                                            fullWidth
                                            variant="filled"
                                            type="text"
                                            value={values.googleplaylink}
                                            label="Google Play Link"
                                            onBlur={handleBlur}
                                            onChange={handleChange}
                                            name="googleplaylink"
                                            sx={{
                                                gridColumn: "span 2", input: {
                                                    color: "black",
                                                    background: "#eeeeee"
                                                }
                                            }}
                                            InputLabelProps={{ style: { color: 'black' } }}
                                            error={!!touched.googleplaylink && !!errors.googleplaylink}
                                            helper={touched.googleplaylink && errors.googleplaylink}
                                        /> */}
                                        {/* <Fields name="title" handleBlur={handleBlur} handleChange={handleChange} values={values}/> */}
                                        {getFields(handleBlur, handleChange, values)}
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
                </DialogContent>

            </Dialog>
        </div>
    );
}

export default UpdateDialog



