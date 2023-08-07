import axios from "axios";

const useDeleteProject = () => {
  const deleteProject = async (id) => {
    try {
      const response = await axios.delete(
        `http://localhost:3001/projects/${id}`
      );
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  return [deleteProject];
};

export default useDeleteProject;
