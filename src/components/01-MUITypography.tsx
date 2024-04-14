import { Typography, TypographyProps } from "@mui/material";
/**
 * * MUITypography
 * * Use this component for any text u want : headings and paragraphs
 * @param props containts
 * @content (required): string | React.ReactNode;
 * @variant optional and from variantType "body1" | "body2" | "button" | "caption" | "h1" . . .
 * @addationalProps From type TypographyProps which may contain any one of thiese propities
 *   @children?      :React.ReactNode
 *   @className?     :string
 *   @fontSize?      :"small" | "large" | "medium" | "xsmall" | "xlarge"
 *   @fontWeight?    :"bold" | "normal" | "light"
 *   @margin?        :number
 *   @style?         :React.CSSProperties
 *   @textAlign?     :"center" | "left" | "right" | "justify"
 *   @textTransform? :"capitalize" | "lowercase" | "uppercase"
 *   @themeColor?    :"inherit" | "primary" | "secondary" | "tertiary" | "info" | "success" | "warning" | "error" | "dark" | "light" | "inverse"
 *
 * @returns <Typography Component/>
 */
export default function MUITypography() {
  return (
    <>
      <Typography variant="h1">Header 1</Typography>
      <Typography variant="h2">Header 2</Typography>
      <Typography variant="h3">Header 3</Typography>
      <Typography variant="h4">Header 4</Typography>
      <Typography variant="h5">Header 5</Typography>
      <Typography variant="h6">Header 6</Typography>

      <Typography variant="subtitle1">Subtitle 1</Typography>
      <Typography variant="subtitle2">Subtitle 2</Typography>

      <Typography variant="body1">
        Body 1 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam
        quis sint expedita ipsam tempora veniam debitis odit distinctio,
        possimus labore eligendi. Eius vero similique adipisci modi odit, vitae
        amet aliquid!
      </Typography>
      <Typography variant="body2">
        Body 2 Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Reiciendis rem illum laboriosam animi, sequi fugit atque consequatur
        commodi ipsum ad rerum, accusamus, neque odit voluptates? Enim
        aspernatur laudantium incidunt neque?
      </Typography>
    </>
  );
}

// TODO::declare main types we need to our component
type variantType =
  | "body1" // "default value its paragtaph tag + some style"
  | "body2" // "its paragtaph tag + some style + less in font-size from body1"
  | "button"
  | "caption"
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "inherit"
  | "overline"
  | "subtitle1" //"h6 tag also but have diffrent style + less in font-size"
  | "subtitle2"; //"h6 tag also but have diffrent style + less in font-size from subtitle 1"

type colorType =
  | "inherit"
  | "primary"
  | "secondary"
  | "tertiary"
  | "info"
  | "success"
  | "warning"
  | "error"
  | "dark"
  | "light"
  | "inverse";

// * Declare type of typography Props
type typographyProps = {
  variant: variantType;
  color: colorType;
  typoProps: TypographyProps;
};
