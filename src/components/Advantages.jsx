import Section from "./Section";

import { Grid, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CleanHandsOutlinedIcon from "@mui/icons-material/CleanHandsOutlined";
import TimerOutlinedIcon from "@mui/icons-material/TimerOutlined";
import CakeOutlinedIcon from "@mui/icons-material/CakeOutlined";

const advantages = [
  {
    title: "Ми молоді",
    Icon: FavoriteIcon,
  },
  {
    title: "Любимо чистоту",
    Icon: CleanHandsOutlinedIcon,
  },
  {
    title: "Не поспішаємо",
    Icon: TimerOutlinedIcon,
  },
  {
    title: "Солодкий сюрприз",
    Icon: CakeOutlinedIcon,
  },
];

export default function Advantages() {
  return (
    <Section id="advantages" title="Наші переваги" highligtColor="#fff">
      <Grid
        container
        spacing={3}
        sx={{
          justifyContent: "center",
          alignItems: "top",
        }}
        padding={2}
      >
        {advantages.map((advantage) => {
          const { title, Icon } = advantage;

          return (
            <Grid
              container
              key={title}
              gap={2}
              direction="column"
              alignItems="center"
              justifyContent="center"
              size={{ xs: 12, sm: 4, md: 3 }}
            >
              <Box
                component="span"
                sx={{
                  width: "10rem",
                  height: "10rem",
                  borderRadius: "50%",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  bgcolor: "#fff",
                  boxShadow: `0 2px 4px rgba(0,0,0,0.12)`,
                  // make sure the icon scales nicely inside
                  "& > *": {
                    width: "60%",
                    height: "60%",
                    display: "block",
                    color: "#e3ba81",
                  },
                }}
              >
                <Icon />
              </Box>
              <Typography variant="h6">{title}</Typography>
            </Grid>
          );
        })}
      </Grid>
    </Section>
  );
}
