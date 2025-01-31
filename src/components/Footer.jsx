import { Box, Container, Grid, Typography } from "@mui/material";
import img1 from "../assets/22.png";
import img2 from "../assets/7.png";
import img3 from "../assets/11.png";
import img4 from "../assets/29.png";
import img5 from "../assets/12.png";

const Footer = () => {
  return (
    <Box component="footer" sx={{ backgroundColor: "#f8f8f8", py: 4 }}>
      <Container>
        <Grid container spacing={30} justifyContent="center">
          <Grid item xs={12} sm={4}>
            <Box display="flex" flexDirection="column" alignItems="flex-start">
              <Box
                component="img"
                src={img1}
                alt="Footer Logo"
                sx={{ width: "100%", height: 80 }}
              />
              <Typography
                variant="body2"
                textAlign="left"
                sx={{ color: "gray" }}
              >
                Join us on a journey towards a healthier, balanced life - where
                each inhale and exhale contributes to your overall sense of
                wellness.
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12} sm={4} sx={{ mt: 2 }}>
            <Typography variant="h6" fontWeight="bold" mb={1}>
              Contact
            </Typography>
            <Typography variant="body2" sx={{ color: "gray" }}>
              Phone
            </Typography>
            <Typography variant="body2" sx={{ color: "gray" }}>
              Email
            </Typography>
            <Typography variant="body2" sx={{ color: "gray" }}>
              Location
            </Typography>
          </Grid>

          <Grid item xs={12} sm={4} sx={{ mt: 2 }}>
            <Typography variant="h6" fontWeight="bold" mb={1}>
              Stay in Touch
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
          </Grid>
        </Grid>

        <Box mt={10} textAlign="center">
          <Typography variant="body2" color="textSecondary">
            @2024 BreatheMatters. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
