import { Avatar, AvatarGroup, Stack } from "@mui/material";
import imgSrc from "../assets/img1.jpg";

export default function MUIAvtar() {
  return (
    <Stack spacing={4}>
      {/* Normal use without  image src*/}
      <Stack direction={"row"} spacing={2}>
        <Avatar
          sx={{ bgcolor: "primary.light" }} //for css style props
        >
          SR
        </Avatar>
        <Avatar sx={{ bgcolor: "success.light" }}>IM</Avatar>
      </Stack>
      {/* Normal use image src*/}
      <Stack direction={"row"} spacing={2}>
        <Avatar src={imgSrc} alt="imgage">
          SR
        </Avatar>
        <Avatar
          src="https://source.unsplash.com/random"
          alt="image from https src"
        >
          IM
        </Avatar>
      </Stack>
      {/* Group Avaters */}
      <Stack direction={"row"} spacing={2}>
        <AvatarGroup
        //max={3} //determine max number of avater which will appear
        >
          <Avatar src={imgSrc} alt="imgage">
            SR
          </Avatar>
          <Avatar
            src="https://source.unsplash.com/random"
            alt="image from https src"
          >
            IM
          </Avatar>
          <Avatar src={imgSrc} alt="imgage">
            SR
          </Avatar>
          <Avatar
            src="https://source.unsplash.com/random"
            alt="image from https src"
          >
            IM
          </Avatar>
          <Avatar src={imgSrc} alt="imgage">
            SR
          </Avatar>
          <Avatar
            src="https://source.unsplash.com/random"
            alt="image from https src"
          >
            IM
          </Avatar>
        </AvatarGroup>
      </Stack>
      {/* determine variant of avatar */}
      <Stack direction={"row"} spacing={2}>
        <Avatar
          variant="circular" //"circular"(default) | "rounded" | "square"
          src="https://source.unsplash.com/random"
        />
        <Avatar variant="square" src="https://source.unsplash.com/random" />
        <Avatar variant="rounded" src="https://source.unsplash.com/random" />
      </Stack>
    </Stack>
  );
}
