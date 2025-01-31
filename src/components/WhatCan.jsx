import { Box, Container, Grid, Typography } from "@mui/material";
import img1 from "../assets/28.jpeg";
import img2 from "../assets/13.jpeg";
import img3 from "../assets/15.jpeg";
import img4 from "../assets/14.jpeg";

const WhatCan = () => {
  return (
    <Container>
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
        WHAT CAN THE CAPNOTRAINER
        <Box
          component="span"
          sx={{
            fontSize: "18px", // Smaller size for ®
            position: "relative",
            top: "-4px", // Moves it slightly up like a superscript
            ml: "2px", // Small left margin for spacing
          }}
        >
          ®
        </Box>
        GO DO FOR YOU?
      </Typography>

      <Grid container spacing={4}>
        {/* First Container */}
        <Grid item xs={12} sm={6} md={3}>
          <Box
            display="flex"
            flexDirection="column"
            height="70%"
            borderRadius="12px"
            overflow="hidden"
            boxShadow={2} // Optional: Adds slight shadow for better appearance
          >
            {/* Image */}
            <Box
              component="img"
              src={img1} // Replace with your image URL
              alt="Image 1"
              sx={{ width: "100%", height: "55%", objectFit: "cover" }}
            />

            {/* Text Container */}
            <Box
              sx={{
                backgroundColor: "teal",
                color: "white",
                height: "45%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                padding: "12px",
              }}
            >
              <Typography variant="h6" align="left" gutterBottom>
                Eliminate Stress and Anxiety
              </Typography>
              <Typography variant="body2" align="left">
                Learn to control overbreathing, reduce hypocapnia, and maintain
                balance even in challenging situations.
              </Typography>
            </Box>
          </Box>
        </Grid>

        {/* Repeat the above structure for other containers */}
        <Grid item xs={12} sm={6} md={3}>
          <Box
            display="flex"
            flexDirection="column"
            height="70%"
            borderRadius="12px"
            overflow="hidden"
            boxShadow={2} // Optional: Adds slight shadow for better appearance
          >
            <Box
              component="img"
              src={img2} // Replace with your image URL
              alt="Image 2"
              sx={{ width: "100%", height: "55%", objectFit: "cover" }}
            />
            <Box
              sx={{
                backgroundColor: "teal",
                color: "white",
                height: "45%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                padding: "12px",
              }}
            >
              <Typography variant="h6" align="left" gutterBottom>
                Eliminate Mental Clarity and Focus
              </Typography>
              <Typography variant="body2" align="left">
                Boost oxygen and glucose supply to your brain by aligning your
                breathing mechanics .
              </Typography>
            </Box>
          </Box>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Box
            display="flex"
            flexDirection="column"
            height="70%"
            borderRadius="12px"
            overflow="hidden"
            boxShadow={2} // Optional: Adds slight shadow for better appearance
          >
            <Box
              component="img"
              src={img3} // Replace with your image URL
              alt="Image 3"
              sx={{ width: "100%", height: "55%", objectFit: "cover" }}
            />
            <Box
              sx={{
                backgroundColor: "teal",
                color: "white",
                height: "45%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                padding: "12px",
              }}
            >
              <Typography variant="h6" align="left" gutterBottom>
                Achieve Peak Performance
              </Typography>
              <Typography variant="body2" align="left">
                Whether you&apos;re giving a presentation, running a marathon,
                or meditating,experience the benefits of a well-aligned breth.
              </Typography>
            </Box>
          </Box>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Box
            display="flex"
            flexDirection="column"
            height="70%"
            borderRadius="12px"
            overflow="hidden"
            boxShadow={2} // Optional: Adds slight shadow for better appearance
          >
            <Box
              component="img"
              src={img4} // Replace with your image URL
              alt="Image 4"
              sx={{ width: "100%", height: "55%", objectFit: "cover" }}
            />
            <Box
              sx={{
                backgroundColor: "teal",
                color: "white",
                height: "45%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                padding: "12px",
              }}
            >
              <Typography variant="h6" align="left" gutterBottom>
                Improve Physical Health
              </Typography>
              <Typography variant="body2" align="left">
                Address symptoms like shortness of breath, dizziness and fatigue
                by optimizing your acid-base physiology
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default WhatCan;
