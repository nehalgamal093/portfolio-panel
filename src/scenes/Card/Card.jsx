import { Avatar, Box, Typography, Button } from "@mui/material";
import AodIcon from "@mui/icons-material/Aod";
import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import SchoolIcon from '@mui/icons-material/School';
import { useEffect, useState } from "react";
import axios from 'axios';
import UpdateDialog from "../../components/UpdateDialog";


const Card = () => {
    const [project, setProjects] = useState([])
    const [load, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true)
        axios.get("https://ginger-nono-qwar.vercel.app/profiles")
            .then((response) => {
                setProjects(response.data['result'][0])
                setLoading(false)
                console.log(response.data['result'])
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])
    return (
        <Box>
            {
                project?
                (
                    <Box
                p="50px"
                m="50px"
                sx={{
                    backgroundColor: "white",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",

                }}

            >
                <Box width="40%">
                    <img
                        alt="profile-user"
                        width="300px"
                        height="300px"
                        src={`../../assets/cat.png`}
                    />
                </Box>
                <Box width="50%">
                    <Typography sx={{ fontSize: "35px", color: "grey" }}>
                        {project.title}
                    </Typography>
                    <Typography sx={{ fontSize: "20px", color: "grey" }}>
                        {project.position}
                    </Typography>
                    <Typography mb="20px" sx={{ color: '#b6babe' }}>
                        {project.summary}
                    </Typography>

                    <Box display="flex" width="300px" mb="10px">

                        <Box mr="10px"><AodIcon /></Box>
                        <Typography sx={{ color: 'grey' }}>{project.gitlink}</Typography>
                    </Box>
                    <Box display="flex" width="300px" textAlign='right' mb="10px">

                        <Box mr="10px">   <CatchingPokemonIcon /> </Box>

                        <Typography sx={{ color: 'grey' }}>{project.googleplaylink}</Typography>
                    </Box>
                    <Box display="flex" width="300px" textAlign='right' mb="10px">

                        <Box mr="10px"><DarkModeIcon /> </Box>

                        <Typography sx={{ color: 'grey' }}>{project.email}</Typography>
                    </Box>
                    <Box display="flex" width="300px" textAlign='right' mb="10px" >

                        <Box mr="10px">  <SchoolIcon /> </Box> <Typography sx={{ color: 'grey' }}>{project.downloadcv}</Typography>
                    </Box>

           

                
                </Box>


            </Box>
                ):(<Box display='flex' justifyContent='center' backgroundColor='white' padding='20px'>No Data Found</Box>)
            }

        </Box>
    );
};

export default Card;
