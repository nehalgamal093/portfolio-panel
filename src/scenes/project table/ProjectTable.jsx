import { Box, Button, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, CircularProgress } from '@mui/material';
import { DataGrid} from '@mui/x-data-grid'
import axios from 'axios';
import { useEffect, useState } from 'react';


const ProjectTables = () => {
    const [project, setProjects] = useState([])
    const [open, setOpen] = useState(false);
    const [load, setLoading] = useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    useEffect(() => {
        setLoading(true)
        axios.get("http://localhost:3001/projects")
            .then((response) => {
                setProjects(response.data['result'])
                setLoading(false)
                console.log(response.data['result'])
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])

    const handleDelete = async (id) => {

        // console.log(param)
        try {
            const response = await axios.delete(`http://localhost:3001/projects/${id}`).then(() => {

                axios.get("http://localhost:3001/projects")
                    .then((response) => {

                        setProjects(response.data['result'])

                        console.log(response.data['result'])
                    })
                    .catch((err) => {
                        console.log(err)

                    })

            });
            console.log(response.data);
        } catch (error) {
            console.error(error);
        }

    };
    const columns = [
        { field: "_id", headerName: 'ID', flex: 1 },
        { field: "title", headerName: 'TITLE', flex: 2 },
        { field: "type", headerName: 'TYPE', flex: 1 },
        { field: "description", headerName: 'DESCRIPTIN', flex: 2 },
        { field: "gitlink", headerName: 'Git', flex: 1 },
        { field: "googleplaylink", headerName: 'GooglePlay', flex: 1 },
        { field: "tags", headerName: 'tags', flex: 1 },
        { field: "images", headerName: 'images', flex: 1 },

        {
            field: 'actions', headerName: 'Actions', flex: 2, renderCell: (params) => {
                return (
                    <Box >
                        <Button

                            onClick={
                     
                                () => handleClickOpen()
                            }
                            variant="contained"
                            sx={{ backgroundColor: 'red', padding: '5px', margin: '5px', fontSize: "12px" }}
                        >
                            Delete
                        </Button>
                        <Dialog
                            open={open}
                            onClose={handleClose}
                            aria-labelledby="alert-dialog-title"
                            aria-describedby="alert-dialog-description"
                        >
                            <DialogTitle id="alert-dialog-title">
                                {"Use Google's location service?"}
                            </DialogTitle>
                            <DialogContent>
                                <DialogContentText id="alert-dialog-description">
                                    Let Google help apps determine location. This means sending anonymous
                                    location data to Google, even when no apps are running.
                                </DialogContentText>
                            </DialogContent>
                            <DialogActions>
                                <Button onClick={() => handleDelete(params.id).then(handleClose)}>Delete</Button>
                                <Button onClick={handleClose} autoFocus>
                                    Close
                                </Button>
                            </DialogActions>
                        </Dialog>
                        <Button

                            variant="contained"
                            sx={{ backgroundColor: 'green', fontSize: "12px" }}
                        >
                            Edit
                        </Button>
                    </Box>
                );
            }
        }
    ]

    return (

        <Box m="20px">
            {load ? <Box display="flex" justifyContent="center" alignItems='center' height="75vh">
                <CircularProgress />
            </Box> : <Box
                m="40px 0 0 0"
                height="75h" sx={{
                    "& .MuiDataGrid-root": {
                        border: "none",
                        backgroundColor: "#00a1a1",

                    },
                    "& .MuiDataGrid-cell": {
                        borderBottom: "none",

                    },
                    "& .name-column--cell": {
                        color: "#00a1a1",
                    },
                    "& .MuiDataGrid-columnHeaders": {
                        fontStyle: 'bold',
                        borderBottom: "none",
                        color: "black",
                        fontSize: "12px"
                    },
                    "& .MuiDataGrid-virtualScroller": {
                        backgroundColor: "#23243A",
                        color: "white",
                        fontSize: "12px"
                    },
                    "& .MuiDataGrid-footerContainer": {
                        boderTop: "none",
                        backgroundColor: "#23243A",

                    },
                    //     "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
                    //       color: `${colors.grey[100]} !important`,
                    //     },
                    //     "& .MuiDataGrid-toolbarContainer": {
                    //       backgroundColor: colors.primary[400]
                    //     }
                }}

            >
                <DataGrid
                    columns={columns}
                    getRowId={(row) => row._id}
                    rows={project}
                />
            </Box>}
        </Box>
    )

}

export default ProjectTables;