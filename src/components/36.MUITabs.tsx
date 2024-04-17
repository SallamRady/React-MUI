import { TabContext, TabList, TabPanel } from "@mui/lab";
import { Box, Tab } from "@mui/material";
import { useState } from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";

export default function MUITabs() {
  const [value, setValue] = useState("1");

  const handleChange = (e: React.SyntheticEvent, newVal: string) => {
    setValue(newVal);
  };

  return (
    <Box m={5}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList
            aria-label="Tabs example" //for accessability
            onChange={handleChange}
            textColor="secondary" //"inherit" | "secondary" | "primary"
            indicatorColor="secondary" //"inherit" | "secondary" | "primary"
            //centered //make tabs in center
            scrollButtons="auto" //if width is not engtph use sroll
          >
            <Tab
              label="Tab 1"
              value={"1"}
              icon={<FavoriteIcon />}
              iconPosition="top" //"top" | "bottom" | "end" | "start"
              disabled={false}
            />
            <Tab
              label="Tab 2"
              value={"2"}
              icon={<FavoriteIcon />}
              iconPosition="bottom"
              disabled={false}
            />
            <Tab
              label="Tab 3"
              value={"3"}
              icon={<FavoriteIcon />}
              iconPosition="start"
              disabled={false}
            />
            <Tab
              label="Tab 4"
              value={"4"}
              icon={<FavoriteIcon />}
              iconPosition="end"
              disabled={false}
            />
          </TabList>
        </Box>

        <TabPanel value={"1"}>Panel 1</TabPanel>
        <TabPanel value={"2"}>Panel 2</TabPanel>
        <TabPanel value={"3"}>Panel 3</TabPanel>
        <TabPanel value={"4"}>Panel 4</TabPanel>
      </TabContext>
    </Box>
  );
}
