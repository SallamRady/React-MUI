import {
  Avatar,
  Box,
  List,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";

export default function MUIList() {
  return (
    <Box sx={{ width: "400px", bgcolor: "#efefef" }}>
      <List>
        <ListItem>
          {/* add list item normal icon */}
          <ListItemIcon>
            <EmailIcon />
          </ListItemIcon>

          <ListItemText
            primary="List Item 1" //text content of list item
            secondary="List Item 1" //secondary content of list item
          />
        </ListItem>
        <ListItem>
          {/* add list item avater icon icon */}
          <ListItemIcon>
            <ListItemAvatar>
              <Avatar>
                <EmailIcon />
              </Avatar>
            </ListItemAvatar>
          </ListItemIcon>
          <ListItemText primary="List Item 2" secondary="List Item 2" />
        </ListItem>
        <ListItem
        //disablePadding //to disable padding u may need it
        >
          {/* make list item is clickable button */}
          <ListItemButton>
            <ListItemText primary="List Item 3" secondary="List Item 3" />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );
}
