import { Box, CircularProgress, Snackbar, Alert } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import DialogComponent from "../../components/Dialog";
import useDeleteProject from "../../hooks/DeleteProject";
import useGetProjects from "../../hooks/GetProject";
import UpdateDialog from "../../components/UpdateDialog";
import { ActionButton } from "../../components/ActionButton";
import { ImportantDevices } from "@mui/icons-material";

const ProjectTables = () => {
  const [openUpdate, setOpenUpdate] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);

  const [updated, setUpdated] = useState(false);
  const [idchar, setId] = useState();
  const [projectData, setProjectData] = useState('');
  const [data, load, GetProject] = useGetProjects();
  const [deleteProject, deleted] = useDeleteProject();
  const [snackBar, isSuccess] = useState(false)
  const handleDelete = (id) => {
    deleteProject(id);
    GetProject();
  };

  useEffect(() => {
    GetProject();
  }, []);

  useEffect(() => {
    if (updated) {
      isSuccess(true)
      GetProject();
    }
  }, [updated]);

  useEffect(() => {
    if (deleted) {
      isSuccess(true)
      GetProject();
    }

  }, [deleted]);
  const handleClickOpenDelete = (id) => {
    setId(id);
    setOpenDelete(true);
  };
  const handleClickOpenUpdate = (data) => {
    setProjectData(data);
    setOpenUpdate(true);
  };
  const handleCloseUpdate = () => {
    setOpenUpdate(false);
  };
  const handleCloseDelete = () => {
    setOpenDelete(false);
  };
  const columns = [
    { field: "_id", headerName: "ID", width: 100 },
    { field: "title", headerName: "Title", width: 150 },
    { field: "type", headerName: "Type", width: 100 },
    { field: "description", headerName: "Description", width: 200 },
    { field: "gitlink", headerName: "Git", width: 100 },
    { field: "googleplaylink", headerName: "GooglePlay", width: 100 },
    { field: "tags", headerName: "Tags", width: 100 },
    { field: "images", headerName: "Images", width: 100 },

    {
      field: "actions",
      headerName: "Actions",
      width: 200,
      renderCell: (params) => {
        return (
          <Box display="flex" alignItems="center">
            <ActionButton onClick={() => handleClickOpenDelete(params.id)} title='Delete' color="#eb5c5e" />
            <ActionButton onClick={() => handleClickOpenUpdate(params.row)} title='Edit' color="#fdba60" />
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
              fontSize: "15px",
              fontFamily: "ABeeZee"
            },
            "& .MuiDataGrid-virtualScroller": {
              backgroundColor: "#f1f8ff",
              color: "#000000",
              fontSize: "12px",
              fontFamily: "ABeeZee",
              fontWeight: "bold"
            },
            "& .MuiDataGrid-footerContainer": {
              boderTop: "none",
              backgroundColor: "#23243A",
              color: "white"

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
            data.length ? (
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

          <UpdateDialog
            projectData={projectData}
            open={openUpdate}
            setOpen={setOpenUpdate}
            setUpdated={setUpdated}
            handleClose={handleCloseUpdate}
          />
          <Snackbar open={snackBar} autoHideDuration={3000} onClose={() => isSuccess(false)}>
            <Alert severity="success" sx={{ width: '100%' }}>
              Created Project Successfully !
            </Alert>
          </Snackbar>
        </Box>
      )}
    </Box>
  );
};

export default ProjectTables;


