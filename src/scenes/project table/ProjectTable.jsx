import { Box, Button, CircularProgress,Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import DialogComponent from "../../components/Dialog";

import useDeleteProject from "../../hooks/DeleteProject";
import useGetProjects from "../../hooks/GetProject";
import UpdateDialog from "../../components/UpdateDialog";

const ProjectTables = () => {
  const [open, setOpen] = useState(false);
  const [data, load,GetProject] = useGetProjects();
  const [deleteProject] = useDeleteProject();
  const handleDelete =(id)=>{
deleteProject(id)
GetProject()
}
useEffect(()=>{
GetProject();
},[])
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const columns = [
    { field: "_id", headerName: "ID", flex: 1 },
    { field: "title", headerName: "Title", flex: 1 },
    { field: "type", headerName: "Type", flex: 1 },
    { field: "description", headerName: "Description", flex: 2 },
    { field: "gitlink", headerName: "Git", flex: 1 },
    { field: "googleplaylink", headerName: "GooglePlay", flex: 1 },
    { field: "tags", headerName: "Tags", flex: 1 },
    { field: "images", headerName: "Images", flex: 1 },

    {
      field: "actions",
      headerName: "Actions",
      flex: 2,
      renderCell: (params) => {
        return (
          <Box display="flex" alignItems="center">
            <Button
              onClick={() => handleClickOpen()}
              variant="contained"
              disableElevation
              sx={{
                backgroundColor: "#eb5c5e",
                padding: "5px",
                margin: "5px",
                fontSize: "12px",
              }}
            >
              <Typography sx={{fontSize:"13px",fontWeight:"Bold",textTransform:'capitalize'}}>Delete</Typography>
            </Button>
            <DialogComponent
              open={open}
              handleClose={handleClose}
              handleDelete={handleDelete}
              id={params.id}
            />
           <UpdateDialog id={params.id}/>
          </Box>
        );
      },
    },
  ];

  return (
    <Box m="20px">
      {load ? (
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          height="75vh"
        >
          <CircularProgress />
        </Box>
      ) : (
        <Box
          m="40px 0 0 0"
          height="75h"
          sx={{
           '& .${gridClasses.row}.even': {
              backgroundColor: '#e5f1ff',
            
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
          <DataGrid columns={columns} getRowId={(row) => row._id} rows={data}
          
          getRowClassName={(params) =>
            params.indexRelativeToCurrentPage % 2 === 0 ? 'even' : 'odd'
          }
          />
        </Box>
      )}
    </Box>
  );
};

export default ProjectTables;

//172
