import { Box, Button, TextField, Typography, Snackbar, Alert, CircularProgress } from '@mui/material'
import { Formik } from 'formik';
import { useEffect } from 'react';
import axios from "axios";
import { useState } from 'react';
import * as yup from 'yup';
import { DataGrid } from "@mui/x-data-grid";
import useGetCertificates from '../../hooks/GetCertificates';
import { ActionButton } from '../../components/ActionButton';
import DialogComponent from '../../components/Dialog';
const AddCertificate = () => {
    const [snackBar, isSuccess] = useState(false);
    const [data, load, GetCertificates] = useGetCertificates();
    const [openDelete, setOpenDelete] = useState(false);
    const [idchar, setId] = useState();
    const handleDelete = (id) => {
        // deleteProject(id);
        // GetProject();
      };
    const certificate = {

        image: ''
    }
    const handleClickOpenDelete = (id) => {
        setId(id);
        setOpenDelete(true);
      };
      const handleCloseDelete = () => {
        setOpenDelete(false);
      };
     
    useEffect(() => {
        GetCertificates();
    }, []);

    useEffect(() => {
        if (snackBar) {
            GetCertificates();
        }
    }, [snackBar]);
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
    const columns = [
        { field: "_id", headerName: "ID", flex: 1 },
        { field: "image", headerName: "Image", flex: 1 },
        { field: "createdAt", headerName: "Created At", flex: 1 },
        { field: "updatedAt", headerName: "Updated At", flex: 2 },
        {
            field: "actions",
            headerName: "Actions",
            flex: 2,
            renderCell: (params) => {
              return (
                <Box display="flex" alignItems="center">
                  <ActionButton onClick={() => handleClickOpenDelete(params.id)} title='Delete' color="#eb5c5e" />
              
                </Box>
              );
            },
          },

    ];

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
            {load ? (
                <Box
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    height="75vh"
                >
                    <CircularProgress />
                </Box>
            ) : (<Box
                m="40px 0 0 0"
                height="75h"
                sx={{
                    "& .{gridClasses.row}.even": {
                        backgroundColor: "#e5f1ff",
                    },
                    "& .MuiDataGrid-root": {
                        border: "none",
                        backgroundColor: "#23243A",
                    },
                    "& .MuiDataGrid-cell": {
                        borderBottom: "none",
                    },
                    "& .name-column--cell": {
                        color: "#00a1a1",
                    },
                    "& .MuiDataGrid-columnHeaders": {
                        fontStyle: "bold",
                        borderBottom: "none",
                        color: "white",
                        fontSize: "12px",
                    },
                    "& .MuiDataGrid-virtualScroller": {
                        backgroundColor: "#f1f8ff",
                        color: "#000000",
                        fontSize: "12px",
                    },
                    "& .MuiDataGrid-footerContainer": {
                        boderTop: "none",
                        backgroundColor: "#23243A",
                    },
                }}
            >
                <DataGrid
                    columns={columns}
                    getRowId={(row) => row._id}
                    rows={data}
                    getRowClassName={(params) =>
                        params.indexRelativeToCurrentPage % 2 === 0 ? "even" : "odd"
                    }
                />
   <DialogComponent
            open={openDelete}
            handleClose={handleCloseDelete}
            handleDelete={handleDelete}
            id={idchar}
          />

            </Box>)}
        </Box>
    )
}
// const projectSchema = yup.object().shape({

//     image:yup.string().required('required'),

// })

export default AddCertificate