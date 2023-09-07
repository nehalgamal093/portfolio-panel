import { useState, useEffect } from "react";
import axios from "axios";


const useGetSingleProject = (id) => {
  const [singleProject, setSingleProject] = useState([]);
  const [load, setLoading] = useState(false);
 
  useEffect(() => {
    setLoading(true);
    axios
      .get(`https://ginger-nono-qwar.vercel.app/projects/${id}`)
      .then((response) => {
        setSingleProject(response.data["result"]);
        setLoading(false);
        console.log(`Single project ${response.data["result"]}`);
      })
      .catch((err) => {
        console.log(err);
      });
  },[id]);

  return [singleProject, load];
};

export default useGetSingleProject;
