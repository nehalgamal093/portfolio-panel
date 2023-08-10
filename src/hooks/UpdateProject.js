import axios from "axios";
import { useState } from "react";
import useGetProjects from "./GetProject";

const useUpdateProject = () => {
  const [snackBar, isSuccess] = useState(false);
  const [updated,setUpdated] = useState()
  const updateProject = (id, data) => {
    console.log(id,'kjsjsajkdflj')
    axios({
      method: "PUT",
      url: `http://localhost:3001/projects/${id}`,
      data: {
        title: data.title,
        type: data.type,
        description: data.description,
        gitlink: data.gitlink,
        googleplaylink: data.googleplaylink,
        images: data.images,
        tags: data.tags,
      },
    })
      .then(function (res) {
      setUpdated(true)
        console.log(res);
        isSuccess(true);
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
      })
      .catch(function (res) {
        console.log(`response error ${res}`);
        isSuccess(false);
      });
  };
  return [updateProject, snackBar,updated];
};

export default useUpdateProject;
