import { useEffect, useState } from 'react';
import axios from 'axios';


const useGetProjects = () => {
    const [project, setProjects] = useState([])
    const [load, setLoading] = useState(false);
    const getProject = () => {
        // useEffect(() => {
            setLoading(true)
            axios.get("https://ginger-nono-qwar.vercel.app/projects")
                .then((response) => {
                    setProjects(response.data['result'])
                    setLoading(false)
                    console.log(response.data['result'])
                })
                .catch((err) => {
                    console.log(err)
                })
        // }, [])
    }
  
    return [project,load,getProject]
}

export default useGetProjects;