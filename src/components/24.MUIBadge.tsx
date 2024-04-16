import { Badge, Stack } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";

export default function MUIBadge() {
  return (
    <Stack direction={"row"} spacing={4} mt={10}>
      <Badge
        badgeContent={3} //badge content may be string or number
        color="primary" //"default" | "primary" | "secondary" | "error" | "info" | "success" | "warning"
      >
        <EmailIcon />
      </Badge>
      {/* By default Badge dont show zero value if u want to show use showZero properity */}
      <Badge badgeContent={0} color="secondary">
        <EmailIcon />
      </Badge>
      <Badge badgeContent={0} color="secondary" showZero>
        <EmailIcon />
      </Badge>
      {/* if value > 100 Bage will show 99+ we can determine max custom */}
      <Badge badgeContent={100} color="warning">
        <EmailIcon />
      </Badge>
      <Badge badgeContent={100} color="warning" max={150}>
        <EmailIcon />
      </Badge>

      {/* Varaint Props */}
      <Badge
        variant="dot" //"standard"(default) | "dot"
        badgeContent={100}
        color="error"
      >
        <EmailIcon />
      </Badge>
    </Stack>
  );
}
