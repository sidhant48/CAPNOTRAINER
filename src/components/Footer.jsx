import { Box, Container, Grid, Typography } from "@mui/material";
import img1 from "../assets/22.png";
import img2 from "../assets/7.png";
import img3 from "../assets/11.png";
import img4 from "../assets/29.png";
import img5 from "../assets/12.png";

const Footer = () => {
  return (
    <Box component="footer" sx={{ py: { xs: 3, sm: 4 } }}>
      <Container>
        <Grid
          container
          spacing={{ xs: 3, sm: 4, md: 25 }} // Equal spacing between grids
          justifyContent="space-between" // Equal space between grid items
        >
          {/* Logo and description */}
          <Grid item xs={12} sm={4}>
            <Box display="flex" flexDirection="column" alignItems="flex-start">
              <Box
                component="img"
                src={img1}
                alt="Footer Logo"
                sx={{ width: "100%", height: { xs: 60, sm: 80 } }}
              />
              <Typography
                variant="body2"
                textAlign="left"
                sx={{ color: "gray", mt: 2 }}
              >
                Join us on a journey towards a healthier, balanced life - where
                each inhale and exhale contributes to your overall sense of
                wellness.
              </Typography>
            </Box>
          </Grid>

          {/* Contact section */}
          <Grid item xs={12} sm={4}>
            <Box display="flex" flexDirection="column" alignItems="flex-start">
              <Typography variant="h6" fontWeight="bold" mb={1}>
                Contact
              </Typography>
              <Typography variant="body2" sx={{ color: "gray", mb: 1 }}>
                Phone
              </Typography>
              <Typography variant="body2" sx={{ color: "gray", mb: 1 }}>
                Email
              </Typography>
              <Typography variant="body2" sx={{ color: "gray", mb: 1 }}>
                Location
              </Typography>
            </Box>
          </Grid>

          {/* Social media links */}
          <Grid item xs={12} sm={4}>
            <Box display="flex" flexDirection="column" alignItems="flex-start">
              <Typography variant="h6" fontWeight="bold" mb={1}>
                Stay on Touch
              </Typography>
              <Box display="flex" gap={2}>
                <Box
                  component="img"
                  src={img2}
                  alt="Facebook"
                  sx={{ width: 30, height: 30 }}
                />
                <Box
                  component="img"
                  src={img3}
                  alt="Twitter"
                  sx={{ width: 30, height: 30 }}
                />
                <Box
                  component="img"
                  src={img4}
                  alt="LinkedIn"
                  sx={{ width: 30, height: 30 }}
                />
                <Box
                  component="img"
                  src={img5}
                  alt="Instagram"
                  sx={{ width: 30, height: 30 }}
                />
              </Box>
            </Box>
          </Grid>
        </Grid>

        {/* Footer copyright */}
        <Box mt={6} textAlign="center">
          <Typography variant="body2" color="textSecondary">
            @2024 BreatheMatters. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
