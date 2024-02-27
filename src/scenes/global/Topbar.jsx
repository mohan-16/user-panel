import React, { useContext } from "react";
import { Box, IconButton, useTheme } from "@mui/material";
import { useState } from "react";
import InputBase from "@mui/material/InputBase";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlined from "@mui/icons-material/DarkModeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsBrightnessOutlinedIcon from "@mui/icons-material/SettingsBrightnessOutlined";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { Token } from "@mui/icons-material";
import { ColorModeContext, tokens } from "../../theme";
import { Link } from "react-router-dom";

const Topbar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);

  const handleClick = () => {
    // Display an alert when the button is clicked
    alert("Sry!!! There are currently no notifications.");
  };
  return (
    <Box display="flex " justifyContent="space-between" p={2}>
      <Box
        display=" flex"
        backgroundColor={colors.primary[400]}
        borderRadius="3px"
      >
        <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search" />
        <IconButton type="button" sx={{ p: 1 }}>
          <SearchOutlinedIcon />
        </IconButton>
      </Box>

      <Box display="flex">
        <IconButton onClick={colorMode.ToggleColorMode}>
          {theme.palette.mode === "dark" ? (
            <DarkModeOutlined />
          ) : (
            <LightModeOutlinedIcon />
          )}{" "}
        </IconButton>
        <IconButton onClick={handleClick}>
          <NotificationsOutlinedIcon />{" "}
        </IconButton>
        <IconButton>
          <SettingsBrightnessOutlinedIcon />
        </IconButton>
        <IconButton>
          <Link to="/form">
            <Person2OutlinedIcon />
          </Link>
        </IconButton>
      </Box>
    </Box>
  );
};

export default Topbar;
