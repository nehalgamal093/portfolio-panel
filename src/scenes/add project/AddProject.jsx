import { Box, Button, TextField, Typography } from '@mui/material'
import { Formik } from 'formik';


const AddProject = () => {

    const handleFormSubmit = (values) => {
        console.log(values)
    }

    return (
        <Box m="20px">
            <Typography m="20" mb="20px" sx={{ color: "white", fontWeight: "bold", fontSize: "20px" }}>Add Project</Typography>
            <Formik
                onSubmit={handleFormSubmit}
            >
                {({
                    values,
                    errors,
                    touched,
                    handleBlur,
                    handleChange,
                    handleSubmit
                }) => (
                    <form onSubmit={handleSubmit}>
                        <Box
                            display="grid"
                            gap="30px"
                            gridTemplateColumns="repeat(4,minmax(0,1fr))"

                        >
                            <TextField
                                fullWidth
                                variant="filled"

                                type="text"
                                label="Name"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                name="name"
                                sx={{
                                    gridColumn: "span 2", input: {
                                        color: "white",
                                        background: "#23243A"
                                    },
                                }}
                                InputLabelProps={{ style: { color: 'white' } }}
                            />
                            <TextField
                                fullWidth
                                variant="filled"
                                type="text"
                                label="Type"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                name="name"
                                sx={{
                                    gridColumn: "span 2", input: {
                                        color: "white",
                                        background: "#23243A"
                                    }
                                }}
                                InputLabelProps={{ style: { color: 'white' } }}
                            />
                            <TextField
                                fullWidth
                                variant="filled"
                                type="text"
                                label="Description"
                                onBlur={handleBlur}
                                onChange={handleChange}

                                name="name"
                                sx={{
                                    gridColumn: "span 4", input: {
                                        color: "white",
                                        background: "#23243A"
                                    }
                                }}
                                InputLabelProps={{ style: { color: 'white' } }}
                            />
                            <TextField
                                fullWidth
                                variant="filled"
                                type="text"
                                label="Github Link"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                name="name"
                                sx={{
                                    gridColumn: "span 4", input: {
                                        color: "white",
                                        background: "#23243A"
                                    }
                                }}
                                InputLabelProps={{ style: { color: 'white' } }}
                            />
                            <TextField
                                fullWidth
                                variant="filled"
                                type="text"
                                label="Google Play Link"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                name="name"
                                sx={{
                                    gridColumn: "span 4", input: {
                                        color: "white",
                                        background: "#23243A"
                                    }
                                }}
                                InputLabelProps={{ style: { color: 'white' } }}
                            />
                            <TextField
                                fullWidth
                                variant="filled"
                                type="text"
                                label="Images"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                name="name"
                                sx={{
                                    gridColumn: "span 4", input: {
                                        color: "white",
                                        background: "#23243A"
                                    }
                                }}
                                InputLabelProps={{ style: { color: 'white' } }}
                            />
                            <TextField
                                fullWidth
                                variant="filled"
                                type="text"
                                label="Tags"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                name="name"
                                sx={{
                                    gridColumn: "span 4", input: {
                                        color: "white",
                                        background: "#23243A"
                                    }
                                }}
                                InputLabelProps={{ style: { color: 'white' } }}
                            />
                        </Box>
                        <Box display="flex" justifyContent="end" mt="20px">
                            <Button type="submit" style={{ backgroundColor: "blue", color: "white" }} variant="container">
                                Add Project
                            </Button>
                        </Box>
                    </form>
                )}
            </Formik>
        </Box>
    )
}

export default AddProject