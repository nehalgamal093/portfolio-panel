import { Box, IconButton, Typography, Divider } from "@mui/material";
import React, { useState } from "react";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import WidgetsRoundedIcon from '@mui/icons-material/WidgetsRounded';
import { Link } from 'react-router-dom'
import LibraryAddOutlinedIcon from '@mui/icons-material/LibraryAddOutlined';
import FingerprintIcon from '@mui/icons-material/Fingerprint';
import ContactEmergencyIcon from '@mui/icons-material/ContactEmergency';
import BackupTableIcon from '@mui/icons-material/BackupTable';
import SportsScoreIcon from '@mui/icons-material/SportsScore';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import PersonIcon from '@mui/icons-material/Person';
const Item = ({ title, to, icon, selected, setSelected }) => {
    return (
        <Link to={to} style={{ textDecoration: "none", color: "white" }}>

            <MenuItem
                active={selected === title}
                style={{
                    color: "white",
                    fontFamily: "ABeeZee",
                    // background: selected === title ? "#335B8C" : "transparent",
                    borderRadius: selected === title ? "8px" : "0",
                    margin: "20px 4px",

                }}
                onClick={() => {
                    setSelected(title)
                }

                }
                icon={icon}
            >


                <Box display="flex" justifyContent="space-between">
                    <Typography sx={{ fontSize: '15px', fontFamily: "ABeeZee", fontWeight: "bold" }}>{title}</Typography>
                    <  ArrowForwardIosIcon />
                </Box>
            </MenuItem>
        </Link>

    )
}
const SidebarMenu = () => {

    const [isCollapsed, setIsCollapsed] = useState(false);
    const [selected, setSelected] = useState("Add Project")
    return (
        <Box>
            <Sidebar
                collapsed={isCollapsed}
                backgroundColor="#23243A"
                style={{
                    height: "100vh",
                    border: "none"
                }}
                transitionDuration={800}
            >
                <Menu
                    iconShape="square"
                    menuItemStyles={{
                        button: ({ level }) => {
                            if (level === 0) {
                                return {
                                    "&:hover": {
                                        backgroundColor: "#335B8C !important",
                                        color: "white !important",
                                        borderRadius: "8px !important",
                                        fontWeight: "bold !important",
                                    },
                                };
                            }
                        },
                    }}
                >
                    {/**Logo and menu icon */}
                    <MenuItem
                        onClick={() => setIsCollapsed(!isCollapsed)}
                        icon={isCollapsed ? <WidgetsRoundedIcon style={{ color: "white" }} /> : undefined}
                        style={{
                            margin: "10px 0 20px 0",
                            color: "white"
                        }}
                    >
                        {!isCollapsed && (
                            <Box
                                display="flex"
                                justifyContent="space-between"
                                alignItems="center"
                                ml="15px"
                            >
                                <Typography style={{ fontFamily: "ABeeZee" }}>Menu</Typography>
                                <IconButton
                                    onClick={() => setIsCollapsed(!isCollapsed)}
                                >
                                    <WidgetsRoundedIcon style={{ color: "white" }} />
                                </IconButton>
                            </Box>
                        )}
                    </MenuItem>
                    {isCollapsed && <Box display="flex" justifyContent="center">
                        <img
                            alt="profile-user"
                            width="50px"
                            height="50px"
                            src={`../../assets/cat.png`}

                        />
                    </Box>}
                    {/**User */}
                    {!isCollapsed && (
                        <Box mb="40px" mt="50px">
                            <Box display="flex" justifyContent="center" mb="20px">
                                <img
                                    alt="profile-user"
                                    width="70px"
                                    height="70px"
                                    src={`../../assets/cat.png`}

                                />
                                <Box ml="15px" mt="15px">
                                    <Typography sx={{ color: "#FFFFFF", fontSize: "20px", fontFamily: "ABeeZee" }}>
                                        Nehal Gamal
                                    </Typography>
                                    <Typography sx={{ color: "#9a9a9a", fontSize: "12px", fontFamily: "ABeeZee" }}>
                                        Front End Developer
                                    </Typography>
                                </Box>
                            </Box>
                            <Divider />
                        </Box>

                    )}
                    {/**Menu Items */}

                    <Box paddingLeft={isCollapsed ? undefined : "10px"} mb={isCollapsed ? "150px" : "10px"}>
                        <Item
                            title="Project"
                            to="/"
                            icon={<FingerprintIcon />}
                            selected={selected}
                            setSelected={setSelected} />
                        <Item
                            title="Tables"
                            to="/projecttable"
                            icon={<BackupTableIcon />}
                            selected={selected}
                            setSelected={setSelected} />
                        <Divider />
                        <Item
                            title="Profile"
                            to="/addprofile"
                            icon={<ContactEmergencyIcon />}
                            selected={selected}
                            setSelected={setSelected} />
                        <Item
                            title="Certificate"
                            to="/addcertificate"
                            icon={<SportsScoreIcon />}
                            selected={selected}
                            setSelected={setSelected} />
                        <Item
                            title="Card"
                            to="/card"
                            icon={<PersonIcon />}
                            selected={selected}
                            setSelected={setSelected} />


                    </Box>
                </Menu>
            </Sidebar>
        </Box>
    )
}

export default SidebarMenu;