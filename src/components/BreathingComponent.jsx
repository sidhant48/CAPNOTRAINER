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
      <Box
        display="flex"
        justifyContent="center"
        gap={{ xs: 4, sm: 8, md: 14 }}
        sx={{ flexWrap: "wrap", mb: 5 }}
      >
        {[image1, image2, image3, image4].map((img, index) => (
          <Box
            key={index}
            sx={{
              width: { xs: "120px", sm: "150px", md: "200px" },
              height: { xs: "80px", sm: "100px", md: "100px" },
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              overflow: "hidden",
              borderRadius: "8px",
            }}
          >
            <img
              src={img}
              alt={`Image ${index + 1}`}
              style={{
                maxWidth: "100%",
                maxHeight: "100%",
                objectFit: "contain",
              }}
            />
          </Box>
        ))}
      </Box>

      <Typography
        sx={{
          fontWeight: "bold",
          fontSize: { xs: "24px", md: "30px" },
          textAlign: "center",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
          p: 0,
          mb: { xs: 2, sm: 3, md: -10 },
        }}
      >
        DISCOVER THE HIDDEN POWER OF YOUR BREATH
      </Typography>

      <Grid
        container
        sx={{
          minHeight: "100vh",
          alignItems: "center",
          overflow: "hidden",
          flexDirection: { xs: "column", md: "row" },
          boxSizing: "border-box",
        }}
      >
        <Grid
          item
          xs={12}
          md={5}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: { xs: "auto", md: "100%" },
            mb: { xs: 3, md: 0 },
            boxSizing: "border-box",
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
              objectFit: "cover",
              boxSizing: "border-box",
            }}
          />
        </Grid>

        <Grid
          item
          xs={12}
          md={7}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            height: { xs: "auto", md: "74vh", lg: "70vh", xl: "74vh" },
            maxHeight: "auto",
            background: "#E0F2F7",
            padding: "0px",
            boxSizing: "border-box",
          }}
        >
          <Box sx={{ padding: "16px" }}>
            <Typography
              variant="h6"
              sx={{
                color: "#666666",
                marginBottom: "12px",
                lineHeight: "1.4",
              }}
            >
              Your breathing isn&apos;t just about oxygen in and carbon dioxide
              out— it&apos;s a complex behavior shaped by triggers, habits, and
              physiology. When misaligned, these habits can:
            </Typography>
            {points.map((point, index) => (
              <Grid
                container
                key={index}
                spacing={2}
                alignItems="center"
                sx={{
                  marginBottom: "12px",
                  padding: "4px",
                }}
              >
                <Grid item>
                  <Box
                    component="img"
                    src={icons[index]}
                    alt={`Point ${index + 1}`}
                    sx={{
                      width: "36px",
                      height: "36px",
                      padding: "4px",
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

          <Box
            sx={{
              padding: "12px",
              background: "#6bb5b5",
              textAlign: "center",
            }}
          >
            <Typography
              variant="h6"
              sx={{
                fontWeight: "500",
                color: "white",
                lineHeight: "1.4",
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
