import axios from "axios";
import { useState } from "react";

const useDeleteProject = () => {
  const [deleted,setDeleted] = useState()
  const deleteProject = async (id) => {
    try {
      const response = await axios.delete(
        `https://ginger-nono-qwar.vercel.app/projects/${id}`
      );
  
      setDeleted(true)
      console.log(`Response`);
    } catch (error) {
      console.error(error);
    }
  };
  return [deleteProject,deleted];
};

export default useDeleteProject;
