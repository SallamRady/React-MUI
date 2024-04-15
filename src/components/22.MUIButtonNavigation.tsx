import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PersonIcon from "@mui/icons-material/Person";
import React, { useState } from "react";

export default function MUIButtonNavigation() {
  const [value, setValue] = useState(0);

  const handleChange = (e: React.ChangeEvent<{}>, newVal: number) => {
    setValue(newVal);
  };
  //Last Navigation Component in ui - have a great ui
  // it be on top or bottom only
  return (
    <>
      {/* Top */}
      <BottomNavigation
        value={value}
        onChange={handleChange}
        showLabels // showLabels in botton of action icon
        sx={{ width: "100%", position: "absolute", top: 0 }}
      >
        <BottomNavigationAction label="Home" icon={<HomeIcon />} />
        <BottomNavigationAction label="Home" icon={<FavoriteIcon />} />
        <BottomNavigationAction label="Home" icon={<PersonIcon />} />
      </BottomNavigation>

      {/* Bottom */}
      <BottomNavigation
        value={value}
        onChange={handleChange}
        showLabels // showLabels in botton of action icon
        sx={{ width: "100%", position: "absolute", bottom: 0 }}
      >
        <BottomNavigationAction label="Home" icon={<HomeIcon />} />
        <BottomNavigationAction label="Home" icon={<FavoriteIcon />} />
        <BottomNavigationAction label="Home" icon={<PersonIcon />} />
      </BottomNavigation>
    </>
  );
}
