import axios from "axios";
import { useState } from "react";

const useDeleteCertificate = () => {
  const [deleted,setDeleted] = useState()
  const deleteCertificate = async (id) => {
    try {
      const response = await axios.delete(
        `https://ginger-nono-qwar.vercel.app/certificates/${id}`
      );
  
      setDeleted(true)
      console.log(`Response`);
    } catch (error) {
      console.error(error);
    }
  };
  return [deleteCertificate,deleted];
};

export default useDeleteCertificate;
