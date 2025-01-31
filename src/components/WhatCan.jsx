import { Box, Container, Grid, Typography } from "@mui/material";
import img1 from "../assets/28.jpeg";
import img2 from "../assets/13.jpeg";
import img3 from "../assets/15.jpeg";
import img4 from "../assets/14.jpeg";

const WhatCan = () => {
  return (
    <Container sx={{ mt: 4 }}>
      <Typography
        sx={{
          fontWeight: "bold",
          fontSize: { xs: "20px", sm: "24px", md: "30px" }, // Adjusted font size for different screen sizes
          textAlign: "center",
          mb: { xs: 3, sm: 4 }, // Responsive margin below the title
        }}
      >
        WHAT CAN THE CAPNOTRAINER
        <Box
          component="span"
          sx={{
            fontSize: { xs: "14px", sm: "18px" }, // Responsive font size for the ® symbol
            position: "relative",
            top: { xs: "-4px", sm: "-7px" }, // Adjust the position of the ® symbol for smaller screens
            ml: "2px", // Small left margin for spacing
          }}
        >
          ®
        </Box>
        GO DO FOR YOU?
      </Typography>

      <Grid container spacing={2}>
        {/* First Container */}
        <Grid item xs={12} sm={6} md={3}>
          <Box
            display="flex"
            flexDirection="column"
            height="100%"
            borderRadius="12px"
            overflow="hidden"
            boxShadow={2}
          >
            {/* Image */}
            <Box
              component="img"
              src={img1}
              alt="Image 1"
              sx={{
                width: "100%",
                height: "200px", // Fixed height for the image container
                objectFit: "cover", // Ensures the image covers the area without stretching
                objectPosition: "top", // Positions the image starting from the top
              }}
            />
            {/* Text Container */}
            <Box
              sx={{
                backgroundColor: "teal",
                color: "white",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                padding: 2,
              }}
            >
              <Typography variant="h6" gutterBottom>
                Eliminate Stress and Anxiety
              </Typography>
              <Typography variant="body2">
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
            height="100%"
            borderRadius="12px"
            overflow="hidden"
            boxShadow={2}
          >
            <Box
              component="img"
              src={img2}
              alt="Image 2"
              sx={{
                width: "100%",
                height: "auto",
                objectFit: "cover",
                maxHeight: "200px",
                objectPosition: "top",
              }}
            />
            <Box
              sx={{
                backgroundColor: "teal",
                color: "white",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                padding: 2,
              }}
            >
              <Typography variant="h6" gutterBottom>
                Eliminate Mental Clarity and Focus
              </Typography>
              <Typography variant="body2">
                Boost oxygen and glucose supply to your brain by aligning your
                breathing mechanics.
              </Typography>
            </Box>
          </Box>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Box
            display="flex"
            flexDirection="column"
            height="100%"
            borderRadius="12px"
            overflow="hidden"
            boxShadow={2}
          >
            <Box
              component="img"
              src={img3}
              alt="Image 3"
              sx={{
                width: "100%",
                height: "auto",
                objectFit: "cover",
                maxHeight: "200px",
              }}
            />
            <Box
              sx={{
                backgroundColor: "teal",
                color: "white",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                padding: 2,
              }}
            >
              <Typography variant="h6" gutterBottom>
                Achieve Peak Performance
              </Typography>
              <Typography variant="body2">
                Whether you&apos;re giving a presentation, running a marathon,
                or meditating, experience the benefits of a well-aligned breath.
              </Typography>
            </Box>
          </Box>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Box
            display="flex"
            flexDirection="column"
            height="100%"
            borderRadius="12px"
            overflow="hidden"
            boxShadow={2}
          >
            <Box
              component="img"
              src={img4}
              alt="Image 4"
              sx={{
                width: "100%",
                height: "auto",
                objectFit: "cover",
                maxHeight: "200px",
              }}
            />
            <Box
              sx={{
                backgroundColor: "teal",
                color: "white",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                padding: 2,
              }}
            >
              <Typography variant="h6" gutterBottom>
                Improve Physical Health
              </Typography>
              <Typography variant="body2">
                Address symptoms like shortness of breath, dizziness, and
                fatigue by optimizing your acid-base physiology.
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default WhatCan;
