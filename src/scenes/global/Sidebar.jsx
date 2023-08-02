import { Box, IconButton, Typography } from "@mui/material";
import React, { useState } from "react";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import WidgetsRoundedIcon from '@mui/icons-material/WidgetsRounded';
import { Link } from 'react-router-dom'
import LibraryAddOutlinedIcon from '@mui/icons-material/LibraryAddOutlined';
import BadgeOutlinedIcon from '@mui/icons-material/BadgeOutlined';

const Item = ({ title, to, icon, selected, setSelected }) => {
    return (
        <Link to={to} style={{ textDecoration: "none", color: "white" }}>
            <MenuItem
                active={selected === title}
                style={{
                    color: "white",
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
                <Typography>{title}</Typography>
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
                                <Typography>Menu</Typography>
                                <IconButton
                                    onClick={() => setIsCollapsed(!isCollapsed)}
                                >
                                    <WidgetsRoundedIcon style={{ color: "white" }} />
                                </IconButton>
                            </Box>
                        )}
                    </MenuItem>
                    {/**User */}
                    {!isCollapsed && (
                        <Box mb="25px">
                            <Box display="flex" justifyContent="center">
                                <img
                                    alt="profile-user"
                                    width="100px"
                                    height="100px"
                                    src={`../../assets/user.png`}

                                />
                            </Box>
                            <Box textAlign="center">

                                <Typography sx={{ color: "white" }}>
                                    Nehal Gamal
                                </Typography>
                            </Box>
                        </Box>
                    )}
                    {/**Menu Items */}
                    <Box paddingLeft={isCollapsed ? undefined : "10px"} mb={isCollapsed ? "150px" : "10px"}>
                        <Item
                            title="Add Project"
                            to="/"
                            icon={<LibraryAddOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected} />
                        <Item
                            title="Add Certificate"
                            to="/"
                            icon={<BadgeOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected} />
                        <Item
                            title="Add Project"
                            to="/"
                            icon={<LibraryAddOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected} />
                        <Item
                            title="Add Project"
                            to="/"
                            icon={<LibraryAddOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected} />
                        <Item
                            title="Add Project"
                            to="/"
                            icon={<LibraryAddOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected} />
                        <Item
                            title="Add Project"
                            to="/"
                            icon={<LibraryAddOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected} />
                        <Item
                            title="Add Project"
                            to="/"
                            icon={<LibraryAddOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected} />
                    </Box>
                </Menu>
            </Sidebar>
        </Box>
    )
}

export default SidebarMenu;