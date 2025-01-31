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
        sx={{
          minHeight: "500px",
          alignItems: "center",
          overflow: "hidden",
        }}
      >
        {/* Left Side - Image */}
        <Grid
          item
          xs={12}
          md={5}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "100%",
          }}
        >
          <Box
            component="img"
            src={image5}
            alt="Breathing"
            sx={{
              width: "100%",
              height: "auto",
              maxHeight: "622px",
              objectFit: "cover", // Ensures image fills the container proportionally
            }}
          />
        </Grid>

        {/* Right Side - Content */}
        <Grid
          item
          xs={12}
          md={7}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            height: "100%",
            background: "#f7f9fc",
          }}
        >
          {/* Text Content */}
          <Box sx={{ padding: "24px" }}>
            <Typography
              variant="h6"
              sx={{
                fontWeight: "bold",
                marginBottom: "16px",
                lineHeight: "1.5",
              }}
            >
              Your breathing isn&apos;t just about oxygen in and carbon dioxide
              out— it&apos;s a complex behavior shaped by triggers, habits, and
              physiology. When misaligned, these habits can:
            </Typography>

            {/* Points Section */}
            {points.map((point, index) => (
              <Grid
                container
                key={index}
                spacing={2}
                alignItems="center"
                sx={{
                  marginBottom: "16px",
                  padding: "8px",
                }}
              >
                <Grid item>
                  <Box
                    component="img"
                    src={icons[index]}
                    alt={`Point ${index + 1}`}
                    sx={{
                      width: "40px",
                      height: "40px",
                      padding: "8px",
                    }}
                  />
                </Grid>
                <Grid item xs>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: "bold",
                      marginBottom: "4px",
                      color: "#333333",
                    }}
                  >
                    {point.title}
                  </Typography>
                  <Typography variant="body1" sx={{ color: "#666666" }}>
                    {point.subtitle}
                  </Typography>
                </Grid>
              </Grid>
            ))}
          </Box>

          {/* CTA Section */}
          <Box
            sx={{
              padding: "16px",
              background: "	#8fc0c7",
              textAlign: "center",
            }}
          >
            <Typography
              variant="h6"
              sx={{
                fontWeight: "bold",
                color: "white",
                lineHeight: "1.5",
                ml: 2,
              }}
              align="left"
            >
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
    height: "auto",
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
