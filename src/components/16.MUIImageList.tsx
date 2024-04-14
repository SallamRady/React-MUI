import {
  ImageList,
  ImageListItem,
  ImageListItemBar,
  Stack,
} from "@mui/material";
import { height, width } from "@mui/system";

const Images = [
  { image: "https://source.unsplash.com/random", title: "Image #1" },
  { image: "https://source.unsplash.com/random", title: "Image #2" },
  { image: "https://source.unsplash.com/random", title: "Image #3" },
  { image: "https://source.unsplash.com/random", title: "Image #4" },
  { image: "https://source.unsplash.com/random", title: "Image #4" },
  { image: "https://source.unsplash.com/random", title: "Image #4" },
  { image: "https://source.unsplash.com/random", title: "Image #4" },
  { image: "https://source.unsplash.com/random", title: "Image #4" },
  { image: "https://source.unsplash.com/random", title: "Image #4" },
  { image: "https://source.unsplash.com/random", title: "Image #4" },
  { image: "https://source.unsplash.com/random", title: "Image #4" },
  { image: "https://source.unsplash.com/random", title: "Image #4" },
  { image: "https://source.unsplash.com/random", title: "Image #4" },
  { image: "https://source.unsplash.com/random", title: "Image #4" },
  { image: "https://source.unsplash.com/random", title: "Image #4" },
];
export default function MUIImagesList() {
  // its a collection of orginized images
  return (
    <Stack spacing={4}>
      <ImageList
        sx={{
          width: 500,
          height: 450,
        }}
        variant="quilted" //"masonry" | "quilted" | "standard" | "woven"
        cols={3} //cols number of columns in Image list (Great Gallery)
        //rowHeight={164} //height for just one row
      >
        {Images.map((img, idx) => {
          return (
            <ImageListItem key={idx}>
              {/* الجزئية الزيادة ع مسار الصورة مهمة علشان تظبيط الصورة */}
              <img
                src={`${img.image}?w=164&h=164&fit=crop&auto=format&dpr=2`}
                alt={img.title}
                loading="lazy"
              />
              <ImageListItemBar title={img.title} />
            </ImageListItem>
          );
        })}
      </ImageList>
    </Stack>
  );
}
