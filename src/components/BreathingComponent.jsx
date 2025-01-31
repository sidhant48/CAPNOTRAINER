import { Box, Container, Grid, Typography } from "@mui/material";
import image1 from "../assets/18.png";
import image2 from "../assets/19.jpeg";
import image3 from "../assets/20.png";
import image4 from "../assets/1.png";
import image5 from "../assets/17.png";
import image6 from "../assets/25.png";
import image7 from "../assets/26.png";
import image8 from "../assets/21.png";

const BreathingComponent = () => {
  return (
    <Container sx={{ py: 5 }}>
      {/* Top Section - Display 4 Images in a Row */}
      <Box
        display="flex"
        justifyContent="center"
        gap={24}
        sx={{ flexWrap: "wrap", mb: 5 }}
      >
        {[image1, image2, image3, image4].map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Image ${index + 1}`}
            style={styles.image}
          />
        ))}
      </Box>
      <Typography
        sx={{
          fontWeight: "bold",
          fontSize: "30px",
          textAlign: "center",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
          p: 2,
        }}
      >
        DISCOVER THE HIDDEN POWER OF YOUR BREATH
      </Typography>

      {/* Main Section - Left (Image) & Right (Text + CTA) */}
      <Grid
        container
        spacing={5}
        alignItems="stretch"
        sx={{ minHeight: "500px" }}
      >
        {/* Left Side - Image (40% width) */}
        <Grid
          item
          xs={12}
          md={4} // 40% width on medium screens
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "100%", // Ensures left side fills 100% of the height
          }}
        >
          <img
            src={image5}
            alt="Breathing"
            style={{ ...styles.largeImage, width: "120%" }} // Increased width for image
          />
        </Grid>

        {/* Right Side - Text + CTA (60% width) */}
        <Grid
          item
          xs={12}
          md={8} // 60% width on medium screens
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            height: "100%", // Ensures right side fills 100% of the height
          }}
        >
          <Box sx={{ flex: 1, mb: 10, mt: 6 }}>
            {/* Intro Text */}
            <Typography variant="h6">
              Your breathing isn&apos;t just about oxygen in and carbon dioxide
              out— it&apos;s a complex behavior shaped by triggers, habits, and
              physiology. When misaligned, these habits can:
            </Typography>

            {/* Points Section */}
            <Box sx={styles.pointsContainer}>
              {points.map((point, index) => (
                <Grid
                  container
                  key={index}
                  spacing={2}
                  alignItems="center"
                  sx={styles.pointItem}
                >
                  <Grid item>
                    <img
                      src={icons[index]}
                      alt={`Point ${index + 1}`}
                      style={styles.icon}
                    />
                  </Grid>
                  <Grid item xs>
                    <Typography variant="h6" sx={styles.highlightedText}>
                      {point.title}
                    </Typography>
                    <Typography variant="body1" sx={styles.subtitleText}>
                      {point.subtitle}
                    </Typography>
                  </Grid>
                </Grid>
              ))}
            </Box>
          </Box>

          {/* CTA Section - Full Width */}
          <Box sx={styles.ctaBox}>
            <Typography variant="h6">
              Millions of people suffer the consequences of poor breathing
              habits. But you don&apos;t have to be one of them. With the
              CapnoTrainer® GO, you&apos;ll unlock a scientifically-backed
              pathway to breathing mastery.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

// Data for Points
const points = [
  {
    title: "Compromise your health",
    subtitle: "Triggering anxiety, fatigue, and physical discomfort.",
  },
  {
    title: "Disrupt your performance",
    subtitle:
      "Causing focus deficits, memory issues, and suboptimal endurance.",
  },
  {
    title: "Exacerbate existing conditions",
    subtitle: "Like asthma, chronic pain, and even stress-related disorders.",
  },
];

// Icons for Each Point
const icons = [image6, image7, image8];

// Styles
const styles = {
  image: {
    width: "100px",
    height: "50px",
    objectFit: "cover",
  },
  largeImage: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  icon: {
    width: "40px",
    height: "40px",
  },
  highlightedText: {
    fontWeight: "bold",
    color: "black",
  },
  subtitleText: {
    color: "black", // Black subtitle text
  },
  pointsContainer: {
    display: "flex",
    flexDirection: "column",
    flex: 1,
    justifyContent: "space-around",
  },
  pointItem: {
    display: "flex",
    alignItems: "center",
    flexWrap: "nowrap",
  },
  ctaBox: {
    backgroundColor: "#A4DDED",
    color: "white",
    padding: "16px",
    textAlign: "center",
    width: "100%", // Full width CTA background
  },
};

export default BreathingComponent;
