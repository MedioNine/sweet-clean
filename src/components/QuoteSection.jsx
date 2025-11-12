import { Box, Container, Grid } from "@mui/material";
import VideoBackground from "../assets/video-background.mp4";
import VideoBackgroundWide from "../assets/video-background-wide.mp4";
import VideoBackgroundSmoke from "../assets/video-background-smoke.mp4";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Section from "./Section";
import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const mobileVideos = [
  VideoBackground,
  VideoBackgroundSmoke,
  VideoBackgroundWide,
];

const videos = [VideoBackgroundWide, VideoBackgroundSmoke, VideoBackground];

export default function QuoteSection() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Section id="main" videoSrc={isMobile ? mobileVideos : videos}>
      <Container sx={{ height: "100vh", overflow: "hidden" }}>
        <Grid
          container
          direction="row"
          alignItems="center"
          sx={{ height: "100%", p: 6 }}
        >
          <Box>
            <Toolbar />
            <Typography
              variant="h3"
              sx={{
                textAlign: "center",
                fontSize: { xs: "2rem", sm: "3rem" },
                color: "#f5c33d",
              }}
            >
              «Час — твій союзник і ворог одночасно. Використовуй його мудро.»
            </Typography>
            <Typography
              variant="h3"
              sx={{
                textAlign: "right",
                mt: 2,
                fontSize: { xs: "1rem", sm: "2rem" },
                color: "#f5c33d",
              }}
            >
              Стівен Р. Кові
            </Typography>
          </Box>
          <Box>
            <Typography
              variant="h5"
              sx={{
                color: "#F3BE3A",
                fontSize: { xs: "1.25rem", sm: "1.5rem" },
              }}
            >
              У будь-якому випадку час - це ключ до успіху, і якщо ти правильно
              його інвестуєш, то отримаєш, все чого хочеш в житті. Якщо ти не
              зможеш правильно його інвестувати, ти ніколи не отримаєш того,
              чого хочеш.
            </Typography>
          </Box>
        </Grid>
      </Container>
    </Section>
  );
}
