import CatchingPokemonOutlinedIcon from "@mui/icons-material/CatchingPokemonOutlined";
import {
  AppBar,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import { useState } from "react";

export default function MUINavbar() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleOpenMenu = (e: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  // to create navbar  in react mui we need
  // ->AppBar ->Toolbar

  return (
    <>
      {/* Appbar bydeafult position is fixed */}
      <AppBar position="static">
        {/* Logo Part */}
        <Toolbar>
          {/* IconButton For Logo */}
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="logo"
          >
            <CatchingPokemonOutlinedIcon />
          </IconButton>
          <Typography variant="h6" component={"div"} sx={{ flexGrow: 1 }}>
            Pokemon App
          </Typography>

          {/* Right Menu */}
          <Stack direction={"row"} spacing={2}>
            <Button color="inherit">Features</Button>
            <Button color="inherit">Pricing</Button>
            <Button
              color="inherit"
              onClick={handleOpenMenu}
              aria-controls={open ? "resouces-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              id="resouces-btn"
            >
              Resources
            </Button>
            <Button color="inherit">About</Button>
            <Button color="inherit">Login</Button>
          </Stack>

          {/* Menu */}
          <Menu
            id="resouces-menu"
            anchorEl={anchorEl}
            MenuListProps={{
              "aria-labelledby": "resouces-btn",
            }}
            onClose={handleClose}
            open={open}
            //* To Control menu position use anchorOrigin and transformOrigin
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
          >
            <MenuItem onClick={handleClose}>Blog</MenuItem>
            <MenuItem onClick={handleClose}>Prodcast</MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
    </>
  );
}
