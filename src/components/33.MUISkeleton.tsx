import { Box, Skeleton, Stack } from "@mui/material";
import { useState } from "react";

export default function MUISkeleton() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  // Skeleton is used to show/display a placeholder preview of content before data fetched.
  return (
    <Stack m={5}>
      <Skeleton />
      {/* 
      variant:"text"(default) | "rectangular" | "rounded" | "circular" 
      width:number 
      height:number
      */}
      <Skeleton variant="text" sx={{ marginY: "1rem" }} />
      <Skeleton
        variant="rectangular"
        width={100}
        height={100}
        sx={{ marginY: "1rem" }}
      />
      <Skeleton variant="rounded" sx={{ marginY: "1rem" }} />
      <Skeleton
        variant="circular"
        width={40}
        height={40}
        sx={{ marginY: "1rem" }}
      />

      {/* animation:"pulse"(default) | "wave"|false */}
      <Skeleton animation={false} sx={{ m: 3 }} variant="rectangular" />
      <Skeleton animation={"pulse"} sx={{ m: 3 }} variant="rectangular" />
      <Skeleton animation={"wave"} sx={{ m: 3 }} variant="rectangular" />
    </Stack>
  );
}
