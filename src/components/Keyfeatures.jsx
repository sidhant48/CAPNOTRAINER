import { Box, Container, Grid, Typography } from "@mui/material";
import img1 from "../assets/30.png";
import img2 from "../assets/31.png";
import img3 from "../assets/32.jpg";
import img4 from "../assets/33.png";

const KeyFeature = () => {
  // Sample data for the 4 key features (Replace with actual content)
  const features = [
    {
      img: img1, // Replace with actual image URL
      title: "Real-Time Monitoring",
      subtitle:
        "Track your breathing metrics like CO2 concentration, breathing rate, and rhythm.",
    },
    {
      img: img2,
      title: "Cannogram Visualization",
      subtitle:
        "Get instant feedback on your breathing mechanics and see the impact of adjustments in real-time.",
    },
    {
      img: img3,
      title: "Custom Learning Plans",
      subtitle:
        "Tailored strategies to help you unlearn bad habits and master new ones. ",
    },
    {
      img: img4,
      title: "Interactive Practicums",
      subtitle:
        "Experiment with guided breathing challenges to align behavior with physiology.",
    },
  ];

  return (
    <Container sx={{ mb: 10 }}>
      <Typography
        sx={{
          fontWeight: "bold",
          fontSize: "30px",
          textAlign: "center",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
          p: 5,
          mb: 4,
        }}
      >
        KEY FEATURES YOU&apos;LL LOVE
      </Typography>
      <Grid container spacing={4}>
        {features.map((feature, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Box display="flex" flexDirection="column" alignItems="flex-start">
              {/* Image */}
              <Box
                component="img"
                src={feature.img}
                alt={feature.title}
                sx={{ width: "80px", height: "auto", mb: 1 }} // Adjust image size
              />
              {/* Title */}
              <Typography variant="h6" fontWeight={500}>
                {feature.title}
              </Typography>
              {/* Subtitle */}
              <Typography variant="body2" sx={{ color: "gray" }}>
                {feature.subtitle}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default KeyFeature;
