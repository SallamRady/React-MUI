import { colors, createTheme } from "@mui/material";

//to create props there are alot of props to set :palette,typography,...ect but the most important and the most used palette,typography
const customTheme = createTheme({
  /**
   * * palette for specified colors [The palette enables you to modify the color of the components to suit your brand.]
   * * each color in palette have four props(main,light,dark,contrastText) each properity have color as a value
   * * palette accept main 6 keys
   * -> primary - for primary interface elements.
   * -> secondary - for secondary interface elements.
   * -> error - for elements that the user should be made aware of.
   * -> warning - for potentially dangerous actions or important messages.
   * -> info - for highlighting neutral information.
   * -> success - for indicating the successful completion of an action that the user triggered.
   * -> background - for specifiec colors use in backgrounds
   * -> text  - for specifiec colors use in text colors
   * * If you what to add another key and set colors value for it u must declare it in file theme.d.ts
   **/
  palette: {
    mode: "dark",
    primary: {
      main: colors.orange[500],
      light: colors.orange[300],
      dark: colors.orange[700],
      contrastText: colors.orange[100],
    },
    secondary: {
      main: "#E3D026",
      light: "#E9DB5D",
      dark: "#A29415",
      contrastText: "#242105",
    },
  },

  /**
   * * Typography :- set default css properites of typography element for this theme see below example
   */
  typography: {
    h1: {
      color: "red",
    },
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
  },
});

export default customTheme;
