import Typography from "@mui/material/Typography";
import { Container } from "@mui/material";
import Box from "@mui/material/Box";
import { useState } from "react";

export default function Section({
  id,
  title,
  highligtColor = "#7a3f00",
  children,
  videoSrc,
}) {
  const [currentVideo, setCurrentVideo] = useState(0);

  const videos = Array.isArray(videoSrc) ? videoSrc : [videoSrc];

  const handleEnded = () => {
    setCurrentVideo((prev) => (prev + 1) % videos.length);
  };

  return (
    <Box id={id} component="section">
      {videos.length > 0 && (
        <video
          autoPlay
          muted
          playsInline
          onEnded={handleEnded}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            zIndex: -2,
            filter: "brightness(0.55)",
            transform: "translateZ(0)",
            willChange: "transform, opacity",
          }}
          key={currentVideo} // forces reload when switching videos
        >
          <source src={videos[currentVideo]} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}
      <Container sx={{ position: "relative", zIndex: 0 }}>
        {title && (
          <Typography
            variant="h5"
            component="h5"
            sx={{
              textAlign: "center",
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
        )}
        {children}
      </Container>
    </Box>
  );
}
