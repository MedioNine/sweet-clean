import { Container, Grid } from "@mui/material";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

export default function QuoteSection() {
  return (
    <Box component="main" id="main">
      <Container sx={{ height: "100vh", overflow: "hidden" }}>
        <Toolbar />
        <Grid
          container
          direction="column"
          justifyContent="space-between"
          sx={{ height: "100%", p: 6 }}
        >
          <div>
            <Typography
              variant="h3"
              sx={{
                textAlign: "left",
                pr: { xs: "0", sm: "30vw" },
                fontSize: { xs: "2rem", sm: "3rem" },
              }}
            >
              "Ми прибираємо не просто оселі, ми повертаємо спокій у дім."
            </Typography>
          </div>
        </Grid>
      </Container>
    </Box>
  );
}
