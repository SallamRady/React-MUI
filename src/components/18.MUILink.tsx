import { Link, Stack } from "@mui/material";

export default function () {
  return (
    <Stack spacing={2}>
      <Link
        href="#"
        color={"secondary"}
        underline="hover" //"none" | "hover" | "always"
      >
        Link 1
      </Link>
      <Link href="#">Link 1</Link>
      <Link href="#">Link 1</Link>
    </Stack>
  );
}
