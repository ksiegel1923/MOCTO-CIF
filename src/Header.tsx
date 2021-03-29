import React from "react";
import { Box, Typography, AppBar } from "@material-ui/core";

import "./Header.css";

function Header() {
  return (
    <AppBar className="Header">
      <Box display="flex" flexDirection="row" alignItems="center">
        <img alt="NYC-CTO logo" src="/logo.png" width="48" height="48" />
        <Typography className="Header__text">
          NYC Mayor's Office Of The CTO
        </Typography>
      </Box>
    </AppBar>
  );
}

export default Header;
