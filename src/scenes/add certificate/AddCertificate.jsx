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
import useDeleteCertificate from '../../hooks/DeleteCertificate';
const AddCertificate = () => {
    const [snackBar, isSuccess] = useState(false);
    const [data, load, GetCertificates] = useGetCertificates();
    const [openDelete, setOpenDelete] = useState(false);
    const [updated, setUpdated] = useState(false);
    const [idchar, setId] = useState();
    const [deleteCertificate, deleted] = useDeleteCertificate();
    const [loading, setLoading] = useState(false);
    const handleDelete = (id) => {
        deleteCertificate(id);
        GetCertificates();
    };
    useEffect(() => {
        if (updated) {
            isSuccess(true);
            GetCertificates();
            console.log(`updated`, updated);
        }
    }, [updated])
    useEffect(() => {
        if (deleted) {
            isSuccess(true);
            GetCertificates();
            console.log(deleted);
        }
    }, [deleted])
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
            url: 'https://ginger-nono-qwar.vercel.app/certificates',
            data: bodyFormData,
            headers: {
                "Content-Type": "multipart/form-data",
            },
        }).then(function (res) {
            console.log(res)
            isSuccess(true)
            setLoading(false);
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
        { field: "_id", headerName: "ID", width: 200 },
        { field: "image", headerName: "Image", width: 200 },
        { field: "createdAt", headerName: "Created At", width: 200 },
        { field: "updatedAt", headerName: "Updated At", width: 200 },
        {
            field: "actions",
            headerName: "Actions",
            width: 100,
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
        <Box max-width="500px">
            <Box m="20px" sx={{ backgroundColor: "white", borderRadius: "15px" }} p='20px' max-width="500px">
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
                                <Button type="submit" style={{ backgroundColor: "#00a1a1", color: "white" }} variant="container" onClick={()=>setLoading(true)}>
                                    {loading ? (<CircularProgress sx={{ color: 'white' }} />) : (<Typography>Add Certificate</Typography>)}
                                </Button>
                            </Box>
                        </form>
                    )}
                </Formik>
            </Box>
            <Box width="1000px" sx={{ margin: "20px" }}>
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
                        ".css-levciy-MuiTablePagination-displayedRows ": {
                            color: "white"
                        },
                        ".css-194a1fa-MuiSelect-select-MuiInputBase-input.css-194a1fa-MuiSelect-select-MuiInputBase-input.css-194a1fa-MuiSelect-select-MuiInputBase-input": {
                            color: "white"
                        },
                        ".css-rtrcn9-MuiTablePagination-root .MuiTablePagination-selectLabel": {
                            color: "white"
                        },
                        ".css-pqjvzy-MuiSvgIcon-root-MuiSelect-icon": {
                            color: "white"
                        },
                        ".css-zylse7-MuiButtonBase-root-MuiIconButton-root.Mui-disabled": {
                            color: "white"
                        }
                    }}
                >
                    {
                        data.length ?
                            (
                                <DataGrid
                                    columns={columns}
                                    getRowId={(row) => row._id}
                                    rows={data}
                                    getRowClassName={(params) =>
                                        params.indexRelativeToCurrentPage % 2 === 0 ? "even" : "odd"
                                    }
                                />
                            ) : (<Box display='flex' justifyContent='center' backgroundColor='white' padding='20px'>No Data Found</Box>)
                    }
                    <DialogComponent
                        open={openDelete}
                        handleClose={handleCloseDelete}
                        handleDelete={handleDelete}
                        id={idchar}
                    />

                </Box>)}
            </Box>
        </Box>
    )
}
// const projectSchema = yup.object().shape({

//     image:yup.string().required('required'),

// })

export default AddCertificate