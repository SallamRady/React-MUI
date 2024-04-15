import { SpeedDial, SpeedDialAction, SpeedDialIcon } from "@mui/material";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import PrintIcon from "@mui/icons-material/Print";
import ShareIcon from "@mui/icons-material/Share";

export default function MUISpeedDial() {
  // Great component for fixed btn in corner
  return (
    <SpeedDial
      icon={
        <SpeedDialIcon //normal icon in normal case
          openIcon={<ContentCopyIcon />} //optional change icon in open case
        />
      } //we can change it
      ariaLabel="navigation speed dial" //for accessability
      sx={{ position: "absolute", bottom: 16, right: 16 }}
    >
      <SpeedDialAction icon={<ContentCopyIcon />} tooltipTitle="Copy" />
      <SpeedDialAction icon={<PrintIcon />} tooltipTitle="Print" />
      <SpeedDialAction icon={<ShareIcon />} tooltipTitle="Share" />
    </SpeedDial>
  );
}
