import { Box, Breadcrumbs, Link, Typography } from "@mui/material";

export default function MUIBreadCrumbs() {
  //second element of navigation elements
  //that help user to trace thier locations in website

  return (
    <Box margin={2}>
      <Breadcrumbs
        separator="-" //separator:string |icon -> if u want to change seperator if u dont love default '/'
        maxItems={2} //set max appeared items I dont love it
        itemsAfterCollapse={2} // specidie number of items after collapse ...
        itemsBeforeCollapse={1} // specidie number of items before collapse ...
        aria-label="breadcrumbs" //for accessability
      >
        <Link underline="hover" href="#">
          Home
        </Link>
        <Link underline="hover" href="#">
          Categories
        </Link>
        <Link underline="hover" href="#">
          Products
        </Link>
        <Typography>Product 101</Typography>
      </Breadcrumbs>
    </Box>
  );
}
