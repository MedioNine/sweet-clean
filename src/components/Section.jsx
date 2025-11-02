import Typography from "@mui/material/Typography";
import { Container } from "@mui/material";
import Box from "@mui/material/Box";

export default function Section({
  id,
  title,
  highligtColor = "#faaf46",
  children,
}) {
  return (
    <Box id={id} component="section">
      <Container sx={{ pb: 3 }}>
        <Typography
          variant="h5"
          component="h5"
          sx={{
            textAlign: "left",
            fontWeight: 700,
            mt: 3,
            mb: 4,
            position: "relative",
            display: "inline-block",
            "&::after": {
              content: '""',
              display: "block",
              width: "60px",
              height: "4px",
              backgroundColor: highligtColor,
              borderRadius: "2px",
              margin: "12px auto 0",
            },
          }}
        >
          {title}
        </Typography>
        {children}
      </Container>
    </Box>
  );
}
