import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography,
} from "@mui/material";
import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";
import { useState } from "react";

export default function MUIAccordion2() {
  // to make sure just one accordion is expaned.
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange = (isExpanded: boolean, panel: string) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Box padding={5}>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={(e, isExpanded) => handleChange(isExpanded, "panel1")}
      >
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

      <Accordion
        expanded={expanded === "panel2"}
        onChange={(e, isExpanded) => handleChange(isExpanded, "panel2")}
      >
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

      <Accordion
        expanded={expanded === "panel3"}
        onChange={(e, isExpanded) => handleChange(isExpanded, "panel3")}
      >
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
