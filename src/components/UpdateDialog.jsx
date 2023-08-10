import { useState, useEffect } from "react";
import {
  Box,
  Button,
  Dialog,
  DialogContent,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import { Formik } from "formik";
import useUpdateProject from "../hooks/UpdateProject";
import useGetProjects from "../hooks/GetProject";
import { getFields } from "../scenes/get fields/GetFields";

const UpdateDialog = ({ open, setOpen, handleClose, projectData,setUpdated }) => {
  const [title, setTitle] = useState("");
  const [updateProject, snackBar, updated] = useUpdateProject();

 
  const handleAgeChange = (event) => {
    setTitle(event.target.value);
  };

  const handleFormSubmit = (dataValue) => {
    updateProject(projectData._id, dataValue);
    setOpen(false);
  };

  useEffect(() => {
setUpdated(updated)
  }, [updated]);

  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <DialogContent>
          <Box sx={{ backgroundColor: "white", borderRadius: "15px" }}>
            <Typography
              m="20"
              mb="20px"
              sx={{ color: "#00a1a1", fontWeight: "bold", fontSize: "20px" }}
            >
              Update profile
            </Typography>

            <Formik
              onSubmit={handleFormSubmit}
              initialValues={{
                title: projectData.title,
                type: projectData.type,
                description: projectData.description,
                gitlink: projectData.gitlink,
                googleplaylink: projectData.googleplaylink,
                images: projectData.images,
                tags: projectData.tags,
              }}
              // validationSchema={projectSchema}
            >
              {({
                values,
                errors,
                touched,
                handleBlur,
                handleChange,
                handleSubmit,
                setFieldValue,
                resetForm,
              }) => (
                <form onSubmit={handleSubmit}>
                  <Box
                    display="grid"
                    gap="30px"
                    gridTemplateColumns="repeat(2,minmax(0,1fr))"
                  >
                    <FormControl
                      sx={{
                        gridColumn: "span 2",
                        input: {
                          color: "black",
                          background: "#eeeeee",
                        },
                      }}
                    >
                      <InputLabel id="demo-simple-select-label">
                        Field
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={title}
                        label="Age"
                        onChange={handleAgeChange}
                      >
                        <MenuItem value="title">Title</MenuItem>
                        <MenuItem value="description">Description</MenuItem>
                        <MenuItem value="type">Type</MenuItem>
                        <MenuItem value="googleplaylink">Google Play</MenuItem>
                        <MenuItem value="gitlink">GitHub</MenuItem>
                      </Select>
                    </FormControl>

                    {getFields(handleBlur, handleChange, values,title)}
                  </Box>
                  <Box display="flex" justifyContent="end" mt="20px">
                    <Button
                      type="submit"
                      style={{ backgroundColor: "#00a1a1", color: "white" }}
                      variant="container"
                    >
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
};

export default UpdateDialog;

//227
