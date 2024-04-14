import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Paper,
  Typography,
} from "@mui/material";

export default function MUICard() {
  return (
    <>
      <Paper sx={{ padding: "32px" }} elevation={4}>
        <Box width={"300px"}>
          {/*
           *  Card
           *  Main Elements in Card
           * -> CardContent
           * -> CardActions
           */}
          <Card>
            <CardMedia
              component={"img"}
              height={140}
              image="https://source.unsplash.com/random"
              alt="unslash image"
            />
            <CardContent>
              <Typography component={"div"} gutterBottom variant="h5">
                React MUI
              </Typography>
              <Typography variant="body2" color={"text.secondary"}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
                praesentium repudiandae accusamus mollitia molestias voluptatum
                laborum neque dolorum similique saepe non dolore, sapiente,
                libero officia alias veniam dolorem beatae commodi.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" variant="text">
                SHARE
              </Button>
              <Button size="small" variant="text">
                LEARN MORE
              </Button>
            </CardActions>
          </Card>
        </Box>
      </Paper>
    </>
  );
}
