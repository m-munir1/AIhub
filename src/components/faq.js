import React, { useState } from "react";
import {
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const faqs = [
  {
    question: "What is JAVAT 365",
    answer:
      "JAVAT 365 is a SaaS (Software as a Service) collaboration and communication tool that offers a cost-effective, user-friendly target content sharing solution, making it easy for organizations to communicate with information consumers.",
  },
  { question: "Why JAVAT 365?", answer: "JAVAT 365 provides secure and scalable solutions for businesses to collaborate and manage content efficiently." },
  { question: "What subscriptions are available?", answer: "We offer Free, Standard, and Premium plans to meet various business needs." },
  { question: "How long is the free trial?", answer: "The free trial lasts for 30 days with access to premium features." },
  { question: "How can I get support?", answer: "You can contact our support team via email or live chat on our website." },
];

const FAQSection = () => {
  const [expanded, setExpanded] = useState(null);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : null);
  };

  return (
    <Box sx={{ py: 3 , textAlign: "center",backgroundColor:'#F9F7F2' }}>
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        Frequently Asked Questions
      </Typography>

      <Box sx={{ maxWidth: "800px", margin: "auto", mt: 3 }}>
        {faqs.map((faq, index) => (
          <Accordion
            key={index}
            expanded={expanded === index}
            onChange={handleChange(index)}
            sx={{
              backgroundColor: "#fff",
              boxShadow: "none",
              borderBottom: "1px solid #ddd",
              "&:before": { display: "none" },
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              sx={{ fontWeight: "bold", px: 2,backgroundColor: "#fff !important", }}
            >
              {faq.question}
            </AccordionSummary>
            <AccordionDetails sx={{ textAlign: "left", px: 2,backgroundColor: "#fff", }}>
              {faq.answer}
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>
    </Box>
  );
};

export default FAQSection;
