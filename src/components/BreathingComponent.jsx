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
  const points = [
    {
      title: "Compromise your health:",
      subtitle: "Triggering anxiety, fatigue, and physical discomfort.",
    },
    {
      title: "Disrupt your performance:",
      subtitle:
        "Causing focus deficits, memory issues, and suboptimal endurance.",
    },
    {
      title: "Exacerbate existing conditions:",
      subtitle: "Like asthma, chronic pain, and even stress-related disorders.",
    },
  ];

  const icons = [image6, image7, image8];

  return (
    <Container sx={{ py: 5 }}>
      {/* Top Section - Display 4 Images in a Row */}
      <Box
        display="flex"
        justifyContent="center"
        gap={{ xs: 4, sm: 8, md: 14 }} // Adjust gap based on screen size
        sx={{ flexWrap: "wrap", mb: 5 }}
      >
        {[image1, image2, image3, image4].map((img, index) => (
          <Box
            key={index}
            sx={{
              width: { xs: "120px", sm: "150px", md: "200px" }, // Adjust image size for small screens
              height: { xs: "80px", sm: "100px", md: "100px" }, // Adjust height for small screens
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              overflow: "hidden",
              borderRadius: "8px", // Optional rounded corners
            }}
          >
            <img
              src={img}
              alt={`Image ${index + 1}`}
              style={{
                maxWidth: "100%",
                maxHeight: "100%",
                objectFit: "contain", // Ensures the image is fully visible
              }}
            />
          </Box>
        ))}
      </Box>

      <Typography
        sx={{
          fontWeight: "bold",
          fontSize: { xs: "24px", md: "30px" }, // Adjust font size for smaller screens
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
          flexDirection: { xs: "column", md: "row" }, // Stacked on small screens
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
            mb: { xs: 3, md: 0 }, // Margin for mobile view
          }}
        >
          <Box
            component="img"
            src={image5}
            alt="Breathing"
            sx={{
              width: "100%",
              height: "auto",
              maxHeight: "522px",
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
            height: "74vh", // Set height to adjust based on content
            maxHeight: "800px", // Limit maximum height
            background: "#E0F2F7",
            padding: "0px", // Add consistent padding for spacing
          }}
        >
          {/* Text Content */}
          <Box sx={{ padding: "16px" }}>
            {/* Reduced padding */}
            <Typography
              variant="h6"
              sx={{
                color: "#666666",
                marginBottom: "12px", // Reduced margin
                lineHeight: "1.4", // Slightly reduced line height
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
                  marginBottom: "12px", // Reduced margin
                  padding: "4px", // Reduced padding
                }}
              >
                <Grid item>
                  <Box
                    component="img"
                    src={icons[index]}
                    alt={`Point ${index + 1}`}
                    sx={{
                      width: "36px", // Reduced size
                      height: "36px", // Reduced size
                      padding: "4px", // Reduced padding
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
              padding: "12px", // Reduced padding
              background: "#6bb5b5",
              textAlign: "center",
            }}
          >
            <Typography
              variant="h6"
              sx={{
                fontWeight: "500", // Reduced font weight
                color: "white",
                lineHeight: "1.4", // Slightly reduced line height
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

export default BreathingComponent;
