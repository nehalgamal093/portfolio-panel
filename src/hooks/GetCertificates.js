import { useEffect, useState } from 'react';
import axios from 'axios';


const useGetCertificates = () => {
    const [certificate, setCertificate] = useState([])
    const [load, setLoading] = useState(false);
    const getProject = () => {
        // useEffect(() => {
            setLoading(true)
            axios.get("https://ginger-nono-qwar.vercel.app/certificates")
                .then((response) => {
                    setCertificate(response.data['result'])
                    setLoading(false)
                    console.log(response.data['result'])
                })
                .catch((err) => {
                    console.log(err)
                })
        // }, [])
    }
  
    return [certificate,load,getProject]
}

export default useGetCertificates;