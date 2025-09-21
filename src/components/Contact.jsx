import React, { useState } from "react";
import {
  Container,
  TextField,
  Button,
  Typography,
  Box,
  Paper,
} from "@mui/material";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);

    // You can later connect API or Email service here
    alert("Message Sent! ✅");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 6, mb: 6 }}>
      <Paper elevation={6} sx={{ p: 4, borderRadius: 3 }}>
        <Typography
          variant="h4"
          gutterBottom
          align="center"
          sx={{ fontWeight: "bold", color: "primary.main" }}
        >
          Contact Us
        </Typography>
        <Typography variant="body1" align="center" sx={{ mb: 3, color: "gray" }}>
          Have questions or feedback? Fill out the form below.
        </Typography>

        <Box component="form" onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Your Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            margin="normal"
            variant="outlined"
            required
          />
          <TextField
            fullWidth
            label="Your Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            margin="normal"
            variant="outlined"
            required
          />
          <TextField
            fullWidth
            label="Your Message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            margin="normal"
            variant="outlined"
            multiline
            rows={4}
            required
          />

          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{
              mt: 3,
              py: 1.2,
              fontSize: "1rem",
              borderRadius: 2,
              textTransform: "none",
            }}
          >
            Send Message
          </Button>
        </Box>
      </Paper>
    </Container>
  );
}

export default Contact;
