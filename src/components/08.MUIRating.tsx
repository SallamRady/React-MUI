import { Rating, Stack } from "@mui/material";
import { useState } from "react";

export default function MUIRating() {
  const [rate, setRate] = useState<number | null>(null);

  console.log(rate);

  const handleChange = (e: React.ChangeEvent<{}>, newVal: number | null) => {
    console.log(newVal);
    setRate(newVal);
  };

  return (
    <Stack spacing={2}>
      <Rating 
      value={rate} //be number or null
      onChange={handleChange} // as you know
      precision={0.5} //all precision 0.5,1,1.5,...and so on
      size="small"//"small" | "medium" | "large"
      highlightSelectedOnly // ex: if rate = 3 just highlight icon 3 not normal: 1 , and 3 
      //readOnly //as you know
      //icon={}    //set customize or specific icon not defult
      //emptyIcon={} //set customize or specific icon not defult
    />
    </Stack>
  );
}
