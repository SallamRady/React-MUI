import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography,
} from "@mui/material";
import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";

export default function MUIAccordion() {
  return (
    <Box padding={5}>
      <Accordion>
        <AccordionSummary
          id="panel1-header"
          aria-controls="panel1-content"
          expandIcon={<ExpandMoreOutlinedIcon />}
        >
          Accordion Num # 1
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
            recusandae sunt rem. Doloribus, facere dignissimos expedita aliquam
            debitis eum rem eius maiores natus repudiandae incidunt? Placeat
            nulla autem facere quaerat.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion> 
        <AccordionSummary
          id="panel2-header"
          aria-controls="panel2-content"
          expandIcon={<ExpandMoreOutlinedIcon />}
        >
          Accordion Num # 2
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
            recusandae sunt rem. Doloribus, facere dignissimos expedita aliquam
            debitis eum rem eius maiores natus repudiandae incidunt? Placeat
            nulla autem facere quaerat.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          id="panel3-header"
          aria-controls="panel3-content"
          expandIcon={<ExpandMoreOutlinedIcon />}
        >
          Accordion Num # 3
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
            recusandae sunt rem. Doloribus, facere dignissimos expedita aliquam
            debitis eum rem eius maiores natus repudiandae incidunt? Placeat
            nulla autem facere quaerat.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
}
