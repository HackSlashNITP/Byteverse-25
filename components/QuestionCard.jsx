"use client";
import { ExpandMore } from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";

const QuestionCard = ({ item, expanded, onChange }) => {
  return (
    <Accordion
      expanded={expanded}
      onChange={onChange}
      slotProps={{ heading: { component: "h4" } }}
      className="border-[3px]  border-cyan-600 p-2 w-full font-semibold"
      sx={{ background: "none", color: "white", borderRadius: "0.75rem" }}
    >
      <AccordionSummary
        expandIcon={<ExpandMore fontSize="large" sx={{ color: "white" }} />}
        aria-controls="panel1-content"
        id="panel1-header"
        className="text-white "
      >
        {item.question}
      </AccordionSummary>
      <AccordionDetails className="bg-cyan-600 rounded-md">
        <Typography>{item.answer}</Typography>
      </AccordionDetails>
    </Accordion>
  );
};

export default QuestionCard;
