import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

export default function ServiceCard({ service }) {
  console.log(service);
  const { Icon, title, subtitle } = service;

  return (
    <Card sx={{ width: 275 }}>
      <CardContent>
        <Icon sx={{ color: "#e3ba81" }} fontSize="large" />
        <Typography
          variant="h5"
          component="div"
          sx={{ minHeight: "3em" }}
        >
          {title}
        </Typography>
        <Typography variant="body2" sx={{ mt: 1.5, minHeight: "3em" }}>
          {subtitle}
        </Typography>
      </CardContent>
      <CardActions>
        <Accordion sx={{ boxShadow: "unset" }}>
          <AccordionSummary
            expandIcon={<ArrowDownwardIcon />}
            aria-controls="panel1-content"
            id={`${title}-details`}
          >
            <Typography component="span">Дізнатись більше</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </CardActions>
    </Card>
  );
}
