import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

export default function ServiceCard({ service }) {
  const { Icon, title, subtitle, details, AdditionalContent } = service;

  return (
    <Card sx={{ width: 310 }}>
      <CardContent>
        <Icon sx={{ color: "#888f89" }} fontSize="large" />
        <Typography
          variant="h5"
          component="div"
          sx={{ minHeight: "3em", color: "#1c1811" }}
        >
          {title}
        </Typography>
        <Typography
          variant="body2"
          sx={{ mt: 1.5, minHeight: "1.5em", color: "#1c1811" }}
        >
          {subtitle}
        </Typography>
      </CardContent>
      <CardActions>
        {details.length > 0 ? (
          <Accordion sx={{ boxShadow: "unset" }}>
            <AccordionSummary
              expandIcon={<ArrowDownwardIcon />}
              aria-controls="panel1-content"
              id={`${title}-details`}
            >
              <Typography
                component="span"
                sx={{ color: "#1c1811", fontWeight: "700" }}
              >
                Дізнатись більше
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <ul style={{ margin: 0, textAlign: "left" }}>
                {details.map((detail) => (
                  <li>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </AccordionDetails>
          </Accordion>
        ) : (
          <div style={{ height: "48px", width: "100%", margin: "0 8px" }}>
            {AdditionalContent != null && AdditionalContent}
          </div>
        )}
      </CardActions>
    </Card>
  );
}
