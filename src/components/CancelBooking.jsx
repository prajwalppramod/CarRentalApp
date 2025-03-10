import { Container, Typography, Button, Box, Card, CardContent } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.jpg"; // Ensure correct path

function CancelBooking() {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        width: "100vw",  // Full width
        height: "100vh", // Full height
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        position: "absolute",
        top: 0,
        left: 0,
        padding: 3,
      }}
    >
      {/* Top-left logo (Bigger & Better Shadow) */}
      <Box sx={{ position: "absolute", top: 20, left: 20 }}>
        <img
          src={logo}
          alt="Cancel Icon"
          width={80}  // Increased size
          height={80} // Increased size
          style={{ 
            borderRadius: "50%", 
            boxShadow: "0 6px 15px rgba(255, 255, 255, 0.3)" 
          }}
        />
      </Box>

      <Card
        sx={{
          p: 3,
          boxShadow: 5,
          borderRadius: 3,
          background: "linear-gradient(to right, #1E3C72, #2A5298)",
          color: "white",
          maxWidth: "500px", // Prevents the card from stretching too much
        }}
      >
        <CardContent>
          <Typography variant="h5" gutterBottom fontWeight="bold">
            Cancel Your Booking
          </Typography>
          <Typography variant="body1" color="white" paragraph>
            Are you sure you want to cancel your booking? This action cannot be undone.
          </Typography>

          <Box sx={{ mt: 3, display: "flex", justifyContent: "center", gap: 2 }}>
            {/* Go Back Button (Now on the left) */}
            <Button
              variant="outlined"
              startIcon={<ArrowBackIcon />}
              sx={{
                borderColor: "white",
                color: "white",
                "&:hover": { backgroundColor: "rgba(255, 255, 255, 0.2)" },
              }}
              onClick={() => navigate(-1)}
            >
              Go Back
            </Button>

            {/* Confirm Cancellation Button (Now on the right) */}
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#FF1744",
                "&:hover": { backgroundColor: "#D50000" },
                color: "white",
              }}
              onClick={() => alert("Booking Cancelled Successfully!")}
            >
              Confirm Cancellation
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}

export default CancelBooking;